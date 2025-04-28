import { useCallback, useEffect, useRef, useMemo } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";

// Vertex Shader - Moved outside component to prevent recreation on each render
const VERT = `#version 300 es
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Fragment Shader - Moved outside component to prevent recreation on each render
const FRAG = `#version 300 es
  precision highp float;

  uniform float uTime;
  uniform float uAmplitude;
  uniform vec3 uColorStops[3];
  uniform vec2 uResolution;
  uniform float uBlend;

  out vec4 fragColor;

  // Perlin Noise functions (unchanged)
  vec3 permute(vec3 x) { ... }
  float snoise(vec2 v) { ... }

  struct ColorStop { vec3 color; float position; };

  #define COLOR_RAMP(colors, factor, finalColor) { ... }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    ColorStop colors[3] = { ColorStop(uColorStops[0], 0.0), ColorStop(uColorStops[1], 0.5), ColorStop(uColorStops[2], 1.0) };
    vec3 rampColor;
    COLOR_RAMP(colors, uv.x, rampColor);

    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);
    float intensity = 0.6 * height;

    float midPoint = 0.20;
    float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

    vec3 auroraColor = intensity * rampColor;

    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
  }
`;

// Helper functions moved outside component
const isValidHexColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

const safeColorToArray = (hex) => {
  try {
    if (!hex || !isValidHexColor(hex)) return [0, 0.85, 1];
    const c = new Color(hex);
    return [c.r, c.g, c.b];
  } catch (e) {
    console.warn("Invalid color value:", hex);
    return [0, 0.85, 1];
  }
};

const ensureValidColorStops = (colorStops, defaultColors) => {
  return colorStops.map((color, idx) => {
    return typeof color === "string" && isValidHexColor(color)
      ? color
      : defaultColors[idx];
  });
};

// Default values as constants
const DEFAULT_COLORS = ["#00d8ff", "#7cff67", "#00d8ff"];
const DEFAULT_MOBILE_SETTINGS = {
  amplitude: 0.6,
  blend: 0.7,
  speed: 0.3,
};

const Aurora = ({
  colorStops = DEFAULT_COLORS,
  amplitude = 1.0,
  blend = 0.5,
  speed = 1.0,
  mobileSettings = DEFAULT_MOBILE_SETTINGS,
  className = "",
  style = {}
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const animateIdRef = useRef(0);
  const isMobileRef = useRef(false);

  // Memoize processed color stops to prevent unnecessary recalculations
  const validColorStops = useMemo(() => 
    ensureValidColorStops(colorStops, DEFAULT_COLORS),
    [colorStops]
  );
  
  const colorStopsArray = useMemo(() => 
    validColorStops.map(safeColorToArray),
    [validColorStops]
  );

  // Check device type (memoized function)
  const checkIsMobile = useCallback(() => {
    isMobileRef.current = window.innerWidth < 768;
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    if (!containerRef.current || !rendererRef.current || !programRef.current) return;
    
    checkIsMobile();
    
    const container = containerRef.current;
    const renderer = rendererRef.current;
    const program = programRef.current;
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const pixelRatio = isMobileRef.current ? 0.75 : window.devicePixelRatio || 1;
    
    renderer.dpr = pixelRatio;
    renderer.setSize(width, height);
    
    if (program) {
      program.uniforms.uResolution.value = [width, height];
    }
  }, [checkIsMobile]);

  // Animation frame update function
  const update = useCallback((t) => {
    if (!programRef.current || !rendererRef.current || !meshRef.current) return;
    
    animateIdRef.current = requestAnimationFrame(update);
    
    const currentAmplitude = isMobileRef.current
      ? mobileSettings?.amplitude || 0.6
      : amplitude;

    const currentBlend = isMobileRef.current
      ? mobileSettings?.blend || 0.7
      : blend;

    const currentSpeed = isMobileRef.current
      ? mobileSettings?.speed || speed * 0.5
      : speed;
    
    const program = programRef.current;
    program.uniforms.uTime.value = t * 0.001 * currentSpeed;
    program.uniforms.uAmplitude.value = currentAmplitude;
    program.uniforms.uBlend.value = currentBlend;
    
    // Only update color stops if needed
    if (validColorStops.length > 0) {
      program.uniforms.uColorStops.value = colorStopsArray;
    }
    
    rendererRef.current.render({ scene: meshRef.current });
  }, [amplitude, blend, speed, mobileSettings, colorStopsArray, validColorStops]);

  // Setup and cleanup effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkIsMobile();

    // Initialize renderer
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: !isMobileRef.current,
      powerPreference: 'high-performance',
    });
    rendererRef.current = renderer;
    
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    // Create geometry and program
    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uBlend: { value: blend },
      },
    });
    programRef.current = program;

    // Create and attach mesh
    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;
    
    container.appendChild(gl.canvas);

    // Set up resize handler
    window.addEventListener("resize", handleResize);
    handleResize();

    // Start animation loop
    animateIdRef.current = requestAnimationFrame(update);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animateIdRef.current);
      window.removeEventListener("resize", handleResize);
      
      if (container && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      
      // Properly dispose WebGL resources
      geometry.remove();
      program.remove();
      mesh.geometry = null;
      mesh.program = null;
      
      const loseContext = gl.getExtension("WEBGL_lose_context");
      if (loseContext) loseContext.loseContext();
      
      rendererRef.current = null;
      programRef.current = null;
      meshRef.current = null;
    };
  }, [colorStopsArray, amplitude, blend, handleResize, update, checkIsMobile]);

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ ...style, width: '100%', height: '100%' }}
    />
  );
};

export default Aurora;