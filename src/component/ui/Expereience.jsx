import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../../data";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div >
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            style={{ position: "relative" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Vertical line */}
            {index !== experiences.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "40px",
                  width: "1px",
                  height: "calc(100% + 40px)",
                  backgroundColor: "#27272a",
                }}
              />
            )}

            <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
              {/* Logo circle */}
              <div
                style={{
                  position: "relative",
                  height: "30px",
                  width: "30px",
                  borderRadius: "9999px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  backgroundColor:
                    hoveredIndex === index ? "#3f3f46" : "#27272a",
                  transition: "all 0.3s ease",
                }}
              >
                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    width={20}
                    height={20}
                    style={{ borderRadius: "9999px" }}
                  />
                ) : (
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "9999px",
                      backgroundColor:
                        hoveredIndex === index ? "#a855f7b3" : "#3f3f46",
                      transition: "all 0.3s ease",
                    }}
                  />
                )}
              </div>

              {/* Experience content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        color: hoveredIndex === index ? "#fff" : "#e4e4e7",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {experience.title}
                    </h3>
                    <p style={{ color: "#a1a1aa" }}>
                      {experience.company} • {experience.location}
                    </p>
                  </div>
                  <span
                    style={{
                      marginTop: "0.25rem",
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                      color: hoveredIndex === index ? "#d4d4d8" : "#71717a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {experience.duration}
                  </span>
                </div>
                <p style={{ marginTop: "0.5rem", color: "#d4d4d8", lineHeight: 1.6 }}>
                  {experience.description}
                </p>

                <div
                  style={{
                    marginTop: "0.75rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.75rem",
                        borderRadius: "9999px",
                        backgroundColor:
                          hoveredIndex === index ? "rgba(39, 39, 42, 0.8)" : "rgba(39, 39, 42, 0.5)",
                        color: hoveredIndex === index ? "#e4e4e7" : "#d4d4d8",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Line on hover */}
                <div style={{ position: "relative", marginTop: "1rem" }}>
                  <motion.div
                    style={{
                      position: "absolute",
                      left: 0,
                      height: "1px",
                      backgroundColor: "rgba(168, 85, 247, 0.2)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? 40 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
