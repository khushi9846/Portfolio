import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { projects } from "../../data"; 

// Breadcrumbs component
const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#a1a1aa" }}>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.href}>
          {index > 0 && (
            <span style={{ color: "#52525b" }}>
              /
            </span>
          )}
          {crumb.active ? (
            <span style={{ color: "#ffffff" }}>{crumb.label}</span>
          ) : (
            <Link to={crumb.href} style={{ color: "#a1a1aa", textDecoration: "none", transition: "color 0.2s" }}>
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const ProjectDetail = () => {
  const { projectSlug } = useParams();
  console.log(projectSlug, "projectSlug");
  const [activeImage, setActiveImage] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const project = projects.find((p) => p.slug === projectSlug);
  console.log(project, "project");

  if (!project) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "16px" }}>Project Not Found</h2>
        <p style={{ marginBottom: "32px", color: "#a1a1aa" }}>
          Sorry, we couldn't find the project you're looking for.
        </p>
        {/* <Link
          to="/projects"
          style={{
            padding: "10px 20px",
            backgroundColor: "#18181b",
            border: "1px solid #27272a",
            borderRadius: "8px",
            transition: "background-color 0.3s",
            color: "white",
            textDecoration: "none"
          }}
        >
          Back to Projects
        </Link> */}
      </div>
    );
  }

  return (
    <>
      <motion.div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "96px"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Breadcrumbs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "40px" }}
        >
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              {
                label: project.name,
                href: `/projects/${projectSlug}`,
                active: true,
              },
            ]}
          />
        </motion.div> */}

        {/* Hero Section */}
        <div style={{ 
          marginTop: "120px", 
          display: "grid", 
          gridTemplateColumns: "repeat(12, 1fr)", 
          gap: "32px" 
        }}>
          {/* Project Heading & Description */}
          <motion.div
            style={{
              gridColumn: "1 / span 5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 10
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ 
                  fontSize: "14px", 
                  color: "#c084fc", 
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {project.timeline || "2023"}
                </span>
                <span style={{ height: "1px", width: "48px", background: "rgba(168, 85, 247, 0.3)" }}></span>
              </div>

              <h1 style={{ 
                fontSize: "48px", 
                fontWeight: 500, 
                letterSpacing: "-0.025em",
                background: "linear-gradient(to bottom right, #ffffff, #ffffff, #a1a1aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "24px",
                lineHeight: 1.2,
                paddingBottom: "4px"
              }}>
                {project.name}
              </h1>

              <p style={{ color: "#d4d4d8", lineHeight: 1.7, marginBottom: "24px" }}>
                {project.desc}
              </p>

              {/* Project Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "8px" }}>
                {project.githubLink && (
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      backgroundColor: "rgba(39, 39, 42, 0.5)",
                      border: "1px solid rgba(63, 63, 70, 0.5)",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    <FaGithub style={{ fontSize: "18px" }} />
                    <span>GitHub</span>
                    <BsArrowUpRight style={{ 
                      fontSize: "12px", 
                      opacity: 0.5,
                      transition: "all 0.3s"
                    }} />
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      backgroundColor: "rgba(126, 34, 206, 0.2)",
                      border: "1px solid rgba(126, 34, 206, 0.3)",
                      borderRadius: "8px",
                      transition: "all 0.3s",
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    <HiOutlineExternalLink style={{ fontSize: "18px" }} />
                    <span>Live Demo</span>
                    <BsArrowUpRight style={{ 
                      fontSize: "12px", 
                      opacity: 0.5,
                      transition: "all 0.3s"
                    }} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            style={{
              gridColumn: "6 / span 7",
              position: "relative"
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(39, 39, 42, 0.6)",
                cursor: "pointer"
              }}
              onClick={() => setShowFullImage(true)}
            >
              {/* Gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top right, rgba(0, 0, 0, 0.8), transparent, transparent)",
                opacity: 0.3,
                zIndex: 10
              }}></div>

              {/* Image */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(24, 24, 27, 0.5)",
                backdropFilter: "blur(1px)"
              }}>
                <img
                  src={project.coverImg}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 1s",
                    opacity: 0.9
                  }}
                />
              </div>

              {/* Zoom indicator */}
              <div style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "50%",
                padding: "8px",
                opacity: 0,
                transition: "opacity 0.3s"
              }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3H21V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21H3V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 21L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          style={{
            borderTop: "1px solid rgba(39, 39, 42, 0.3)"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 style={{ 
            fontSize: "20px", 
            fontWeight: 500, 
            marginBottom: "32px", 
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <span style={{ 
              width: "6px", 
              height: "20px", 
              backgroundColor: "#a855f7", 
              borderRadius: "9999px" 
            }}></span>
            Technology Stack
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(6, 1fr)", 
            gap: "24px" 
          }}>
            {project.tech.map((techPath, index) => {
              // Extract clean tech name from path or use original tech name if available
              const cleanTechName = () => {
                // Extract filename without extension
                const rawFilename =
                  techPath.split("/").pop()?.split(".")[0] || "";

                // Common tech name mappings for irregular filenames
                const techNameMap = {
                  astro: "Astro",
                  reactjs: "React",
                  nextjs: "Next.js",
                  nodejs: "Node.js",
                  "c++": "C++",
                  "cloudflare-workers": "Cloudflare Workers",
                  docker: "Docker",
                  hono: "Hono",
                  "mongodb-icon-2": "MongoDB",
                  "logo-javascript": "Javascript",
                  "nextjs-white": "Next.js",
                  "next-js": "Nextjs",
                  "nextjs-13": "Nextjs",
                  pnpm: "Pnpm",
                  postgresql: "Postgresql",
                  "prisma-white": "Prisma",
                  prisma: "Prisma",
                  "react-query": "React Query",
                  "python-5": "Python",
                  zustand: "Zustand",
                  redux: "Redux",
                  shadcn: "Shadcn",
                  "tailwind-css-2": "Tailwind CSS",
                  "ts-logo-128": "Typescript",
                  zod: "Zod",
                  "ubuntu-4": "Ubuntu",
                  turborepo: "Turborepo",
                  "java-4": "Java",
                  mongoose: "Mongoose",
                  "next-js-white": "Nextjs",
                };

                // If we have a direct mapping, use it
                if (techNameMap[rawFilename]) {
                  return techNameMap[rawFilename];
                }

                // Otherwise clean up the name
                return rawFilename
                  .replace(/\d+/g, "") // Remove numbers
                  .replace(/-/g, " ") // Replace hyphens with spaces
                  .split(" ")
                  .map((word) => {
                    // Special case for common abbreviations
                    if (
                      ["js", "ts", "ui", "ux", "api", "css"].includes(
                        word.toLowerCase()
                      )
                    ) {
                      return word.toUpperCase();
                    }
                    // Otherwise capitalize first letter
                    return (
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    );
                  })
                  .join(" ")
                  .trim();
              };

              const techName = cleanTechName();

              return (
                <motion.div
                  key={techPath}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div style={{
                    height: "50px",
                    width: "50px",
                    position: "relative",
                    backgroundColor: "rgba(24, 24, 27, 0.7)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid #27272a",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                    marginBottom: "8px",
                    transition: "border-color 0.3s"
                  }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <img
                        src={techPath}
                        alt={techName}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "4px"
                        }}
                        onError={(e) => {
                          // Fallback if logo not found
                          e.target.src = "/logos/default.svg";
                        }}
                      />
                    </div>
                  </div>
                  <span style={{ 
                    fontSize: "12px", 
                    textAlign: "center", 
                    color: "#a1a1aa",
                    transition: "color 0.3s"
                  }}>
                    {techName}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Features Section */}
        {project.features && project.features.length > 0 && (
          <motion.div
            style={{ marginTop: "64px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 style={{ 
              fontSize: "20px", 
              fontWeight: 500, 
              marginBottom: "32px", 
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{ 
                width: "6px", 
                height: "20px", 
                backgroundColor: "#a855f7", 
                borderRadius: "9999px" 
              }}></span>
              Key Features
            </h2>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "20px" 
            }}>
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  style={{ position: "relative" }}
                >
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom right, rgba(126, 34, 206, 0.2), transparent)",
                    borderRadius: "12px",
                    opacity: 0,
                    transition: "opacity 0.5s"
                  }} />
                  <div style={{
                    backgroundColor: "rgba(24, 24, 27, 0.2)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(39, 39, 42, 0.6)",
                    borderRadius: "12px",
                    padding: "24px",
                    position: "relative",
                    zIndex: 10
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "12px" }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(126, 34, 206, 0.3)",
                        border: "1px solid rgba(126, 34, 206, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#d8b4fe",
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      {/* Feature content would go here if needed */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshot Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            style={{ marginTop: "64px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 style={{ 
              fontSize: "20px", 
              fontWeight: 500, 
              marginBottom: "32px", 
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{ 
                width: "6px", 
                height: "20px", 
                backgroundColor: "#a855f7", 
                borderRadius: "9999px" 
              }}></span>
              Screenshots
            </h2>

            {/* Main Image */}
            <div
              style={{
                marginBottom: "16px",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "16/9",
                border: "1px solid rgba(39, 39, 42, 0.6)",
                cursor: "pointer"
              }}
              onClick={() => setShowFullImage(true)}
            >
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(24, 24, 27, 0.2)",
                backdropFilter: "blur(1px)"
              }}>
                <img
                  src={project.screenshots[activeImage]}
                  alt={`${project.name} featured screenshot`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s"
                  }}
                />
              </div>

              {/* Zoom indicator */}
              <div style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                zIndex: 10,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                borderRadius: "50%",
                padding: "8px",
                opacity: 0.6
              }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3H21V9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 21H3V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 21L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.screenshots.length >= 1 && (
              <div style={{
                display: "flex",
                gap: "12px",
                overflowX: "auto",
                paddingBottom: "12px"
              }}>
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    style={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      height: "80px",
                      width: "144px",
                      flexShrink: 0,
                      cursor: "pointer",
                      transition: "all 0.3s",
                      opacity: activeImage === index ? 1 : 0.6,
                      transform: activeImage === index ? "scale(1.05)" : "scale(1)",
                      border: activeImage === index ? "2px solid #a855f7" : "1px solid rgba(39, 39, 42, 0.5)"
                    }}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s"
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Implementation Details */}
        {project.implementation && (
          <motion.div
            style={{ marginTop: "64px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 style={{ 
              fontSize: "20px", 
              fontWeight: 500, 
              marginBottom: "32px", 
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{ 
                width: "6px", 
                height: "20px", 
                backgroundColor: "#a855f7", 
                borderRadius: "9999px" 
              }}></span>
              Technical Implementation
            </h2>
            <div style={{
              backgroundColor: "rgba(24, 24, 27, 0.2)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(39, 39, 42, 0.6)",
              borderRadius: "12px",
              padding: "24px"
            }}>
              <p style={{ color: "#d4d4d8", lineHeight: 1.7 }}>
                {project.implementation}
              </p>
            </div>
          </motion.div>
        )}

        {/* Bottom Navigation */}
        <motion.div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(39, 39, 42, 0.3)",
            display: "flex",
            justifyContent: "space-between"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/projects"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              backgroundColor: "rgba(24, 24, 27, 0.6)",
              border: "1px solid rgba(39, 39, 42, 0.8)",
              transition: "all 0.3s",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none"
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                transform: "none",
                transition: "transform 0.3s"
              }}
            >
              <path
                d="M12.5 8L3.5 8M3.5 8L7 11.5M3.5 8L7 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.95)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px"
            }}
            onClick={() => setShowFullImage(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(39, 39, 42, 0.5)",
                padding: "8px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "none",
                outline: "none"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setShowFullImage(false);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "80vh",
                maxWidth: "1200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img
                  src={
                    project.screenshots && project.screenshots.length > 0
                      ? project.screenshots[activeImage]
                      : project.coverImg
                  }
                  alt={project.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* Image counter */}
              {project.screenshots && project.screenshots.length > 1 && (
                <div style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "9999px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  color: "white"
                }}>
                  {activeImage + 1} / {project.screenshots.length}
                </div>
              )}
            </motion.div>

            {/* Navigation arrows for multiple images */}
            {project.screenshots && project.screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) =>
                      prev === 0 ? project.screenshots.length - 1 : prev - 1
                    );
                  }}
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                    padding: "12px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    outline: "none"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) =>
                      prev === project.screenshots.length - 1 ? 0 : prev + 1
                    );
                  }}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                    padding: "12px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    outline: "none"
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;