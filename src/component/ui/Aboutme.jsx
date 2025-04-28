import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AboutMe = () => {
  const contactEmail = "anushka.rawat.hld@gmail.com";

  return (
    <motion.div
      style={{ width: "100%", marginTop: "1rem", padding: "1.25rem" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #3f3f46",
          background: "rgba(24, 24, 27, 0.25)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(30px)",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            mixBlendMode: "overlay",
            backgroundImage: "url(/noise.png)", // add a noise texture if available
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "25%",
            height: "33%",
            background: "rgba(76, 29, 149, 0.1)",
            filter: "blur(100px)",
            borderRadius: "9999px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "25%",
            width: "33%",
            height: "25%",
            background: "rgba(49, 46, 129, 0.1)",
            filter: "blur(100px)",
            borderRadius: "9999px",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "row",
            padding: "5%",
            gap: "1rem",
          }}
        >
          <motion.div
            style={{ display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "160px",
                  height: "160px",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "2px solid rgba(63, 63, 70, 0.5)",
                }}
              >
                <img
                  src="/anu.png"
                  alt="Anuhska Rawat"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  marginBottom: "1rem",
                  inset: 0,
                  background:
                    "linear-gradient(to top right, rgba(168, 85, 247, 0.2), transparent)",
                  borderRadius: "9999px",
                  filter: "blur(10px)",
                  zIndex: 10,
                }}
              ></div>
            </div>
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  marginBottom: "0.5rem",
                  background: "linear-gradient(to right, white, #a1a1aa)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                About me
              </h2>

              <div
                style={{
                  height: "2px",
                  width: "48px",
                  background: "linear-gradient(to right, #a855f7, #d8b4fe)",
                  marginBottom: "1.5rem",
                }}
              ></div>

              <p style={{ color: "#d4d4d8", lineHeight: "1.6" }}>
                Hey, I&apos;m Anushka Rawat, A dedicated and innovative Frontend
                Developer with a strong foundation in modern web technologies,
                including React.js, Redux, HTML/CSS, JavaScript, and Tailwind
                CSS. Proficient in building responsive and user-friendly
                interfaces with a keen eye for design and seamless user
                experience. Experienced in integrating RESTful APIs and
                collaborating within Agile development teams to deliver
                high-impact solutions. In addition to frontend expertise, I
                bring hands-on experience with backend technologies like Spring
                Boot, AWS services (EC2, S3), and Docker, allowing me to
                effectively contribute to full-stack development when needed. I
                am passionate about transforming business requirements into
                scalable technical solutions and thrive in fast-paced
                environments where problem-solving and innovation are key. Eager
                to contribute to dynamic teams and launch impactful projects
                that drive value and user engagement.
              </p>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "1.25rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {[
                {
                  href: "https://github.com/Anushkrawat16",
                  icon: <FaGithub size={20} color="white" />,
                  label: "GitHub",
                },
                {
                  href: "https://x.com/Anushkaarawat_",
                  icon: <FaXTwitter size={20} color="white" />,
                  label: "Twitter",
                },
                {
                  href: "https://www.linkedin.com/in/anushka-rawat23160900/",
                  icon: <FaLinkedin size={20} color="white" />,
                  label: "LinkedIn",
                },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    background: "rgba(39, 39, 42, 0.8)",
                    color: "white",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(63, 63, 70, 0.8)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(39, 39, 42, 0.8)")
                  }
                >
                  {btn.icon}
                  <span style={{ fontSize: "0.875rem" }}>{btn.label}</span>
                </a>
              ))}

              <a
                href={`mailto:${contactEmail}?subject=Work%20Inquiry%20from%20Portfolio&body=Hi%20Aditya,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  background: "rgba(76, 29, 149, 0.3)",
                  color: "white",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(76, 29, 149, 0.5)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(76, 29, 149, 0.3)")
                }
              >
                <span style={{ fontSize: "0.875rem" }}>Contact Me</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
