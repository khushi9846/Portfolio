import React from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./ui/Breadcrumbs";
import AboutMe from "./ui/Aboutme";
import Experience from "./ui/Expereience";
import TechStack from "./ui/MyTechStack";

const AboutPage = () => {
  return (
    <motion.div
      style={{
        width: "60%",
        padding: "3rem",
        margin: "0 auto",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumbs (commented out) */}
      {/* 
      <div style={{ marginTop: "3.75rem" }}>
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about", active: true },
          ]}
        />
      </div> 
      */}

      {/* About Section Header */}
      <h2
        style={{
          borderBottom: "1px solid gray",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          marginTop: "13%",
          marginBottom: "1.5rem",
          fontWeight: "600",
          paddingBottom: "1%",
          display: "inline-flex",
          gap: "0.25rem",
          alignItems: "center",
          letterSpacing: "-0.01em",
          lineHeight: "1",
          width: "100%",
        }}
      >
        About
      </h2>

      <AboutMe />

      {/* Tech Stack Header */}
      <h2
        style={{
          borderBottom: "1px solid gray",
          fontSize: "clamp(1rem, 5vw, 1.5rem)",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          fontWeight: "600",
          paddingBottom: "1%",
          display: "inline-flex",
          gap: "0.25rem",
          alignItems: "center",
          letterSpacing: "-0.03em",
          lineHeight: "1",
          width: "100%",
        }}
      >
        My Tech Stack
      </h2>

      <TechStack />

      {/* Experience Header */}
      <h2
        style={{
          borderBottom: "1px solid gray",
          fontSize: "clamp(1rem, 5vw, 1.5rem)",
          marginTop: "3rem",
          marginBottom: "1.5rem",
          fontWeight: "600",
          paddingBottom: "1%",
          display: "inline-flex",
          gap: "0.25rem",
          alignItems: "center",
          letterSpacing: "-0.03em",
          lineHeight: "1",
          width: "100%",
        }}
      >
        Experience
      </h2>

      <Experience />
    </motion.div>
  );
};

export default AboutPage;
