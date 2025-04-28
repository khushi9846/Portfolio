import React from "react";
import { projects } from '../../data';
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom"; // Import Link and Outlet from react-router-dom

const trimDescriptionToWords = (description, limit) => {
  const words = description.split(" ");
  const trimmedWords = words.slice(0, limit);
  return trimmedWords.join(" ");
};

const Projects = () => {
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", 
      gap: "1rem",
      marginBottom: "2rem",
      marginTop:'12%',
      marginLeft:"20%",
      marginRight:"20%",
    }}
    
    >
      {projects.map((project) => (
        console.log(project.slug),
        <Link
          to={`/projects/${project.slug}`}
          key={project.name}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "14px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "1px solid rgba(108, 108, 108, 0.6)",
            padding: "0.5rem 0.75rem",
            textDecoration: "none",
            color: "inherit",
            transition: "background-color 0.15s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#393939c5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "";
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "0.5rem",
              objectFit: "contain",
              height: "auto",
            }}
          >
            <img
              src={project.coverImg}
              alt={project.name}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0.5rem 1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontWeight: "bold", fontSize: "1.125rem", lineHeight: "1", display: "flex", alignItems: "center", gap: "0.25rem", margin: 0 }}>
                {project.name}
              </h2>
              <div style={{ display: "flex", gap: "1rem", fontSize: "0.875rem" }}>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ width: "20px", height: "20px" }} />
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaGlobe style={{ width: "20px", height: "20px" }} />
                  </a>
                )}
              </div>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                maxWidth: "300px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.desc}
              {/* {trimDescriptionToWords(project.desc, 20)}... */}
            </p>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              {project.tech.map((techImg) => (
                <img
                  src={techImg}
                  alt={techImg}
                  width={20}
                  height={20}
                  key={techImg}
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
      <Outlet /> {/* Add Outlet here to render child routes */}
    </div>
  );
};

export default Projects;
