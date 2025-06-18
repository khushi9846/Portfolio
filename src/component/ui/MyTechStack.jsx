import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { frontend, languages, other } from "../../data";

const categories = [
  { id: "languages", label: "Languages", data: languages },
  { id: "frontend", label: "Frontend", data: frontend },
  { id: "other", label: "Other Tools", data: other },
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [hoveredTech, setHoveredTech] = useState(null);

  const activeCategoryData =
    categories.find((cat) => cat.id === activeCategory)?.data || [];

  return (
    <div style={{ width: "100%" }}>
      {/* Tabs */}
      <div style={{ position: "relative", marginBottom: "3rem" }}>
        <div
          style={{
            position: "absolute",
            height: "1px",
            width: "100%",
            backgroundColor: "rgba(39, 39, 42, 0.5)",
            bottom: 0,
            left: 0,
          }}
        />
        <motion.div
          style={{
            display: "flex",
            gap: "2rem",
            overflowX: "auto",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                border: "none",
                background: "black",
                padding: "0.75rem 1rem",
                whiteSpace: "nowrap",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                position: "relative",
                color:
                  activeCategory === category.id ? "white" : "#a1a1aa",
                fontWeight: activeCategory === category.id ? "500" : "normal",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#d4d4d8")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  activeCategory === category.id ? "white" : "#a1a1aa")
              }
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(to right, #a855f7, #d8b4fe)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Tech Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(5rem, 1fr))",
            gap: "2rem",
            justifyItems: "center",
          }}
        >
          {activeCategoryData.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.03, duration: 0.4 },
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "5rem",
                  height: "5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredTech === tech.name ? "scale(1.05)" : "scale(1)",
                  border: hoveredTech === tech.name
                    ? "1px solid rgba(168, 85, 247, 0.7)"
                    : "1px solid rgba(39, 39, 42, 0.3)",
                  backgroundColor:
                    hoveredTech === tech.name
                      ? "rgba(24, 24, 27, 0.9)"
                      : "rgba(24, 24, 27, 0.2)",
                }}
              >
                {/* Noise Texture */}
                <div
                  className="noise"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.05,
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Bottom right gradient */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "66%",
                    height: "66%",
                    background:
                      "radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.15), transparent 70%)",
                    transition: "opacity 0.3s ease",
                    opacity: hoveredTech === tech.name ? 1 : 0,
                  }}
                />

                {/* Tech Icon and Name */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "2rem",
                      height: "2rem",
                      marginBottom: "0.75rem",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: "0.875rem",
                      color: hoveredTech === tech.name ? "white" : "#d4d4d8",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      width: "100%",
                    }}
                  >
                    {tech.name}
                  </h4>
                </div>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "100%",
                      marginTop: "0.375rem",
                      zIndex: 50,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(24, 24, 27, 0.9)",
                        backdropFilter: "blur(4px)",
                        padding: "0.25rem 0.625rem",
                        fontSize: "0.75rem",
                        color: "white",
                        whiteSpace: "nowrap",
                        borderRadius: "9999px",
                        borderTop: "1px solid rgba(39, 39, 42, 0.6)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {tech.name}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechStack;