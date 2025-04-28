import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";

const links = [
  { path: "/", icon: <AiFillHome size={24} />, name: "Home" },
  { path: "/aboutme", icon: <FaUserAlt size={24} />, name: "About" },
  { path: "/projects", icon: <LuConstruction size={24} />, name: "Projects" },
  // { path: "/gallery", icon: <BsFillCameraFill size={24} />, name: "Gallery" },
  { path: "/links", icon: <BiLink size={24} />, name: "Links" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      style={{
        zIndex: 20,
        position: "fixed",
        left: 0,
        right: 0,
        top: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          maxWidth: "600px",
          marginTop: "0.2rem",
          padding: "0.25rem 1.0rem",
          borderRadius: "9999px",
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "0.875rem",
          fontWeight: 500,
          backgroundColor: "rgba(39, 39, 42, 0.9)",
          boxShadow: "0 4px 6px rgba(63, 63, 70, 0.05)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div 
                key={link.path} 
                style={{ 
                  position: "relative",
                  margin: "0 0.85rem"
                }}
              >
                <NavLink 
                  to={link.path} 
                  title={link.name}
                  style={{
                    textDecoration: "none",
                    display: "block"
                  }}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      transition: "all 150ms",
                      padding: "2 rem 1 rem",
                      color: isActive ? "white" : "darkgray",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    {React.cloneElement(link.icon, { 
                      style: { color: isActive ? "white" : "darkgray" } 
                    })}
                    
                    <span 
                      style={{ 
                        fontSize: "0.7rem", 
                        marginTop: "0.35rem",
                        opacity: isActive ? 1 : 0.8
                      }}
                    >
                      {link.name}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        style={{
                          position: "absolute",
                          bottom: "-0.25rem",
                          left: "50%",
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#a855f7",
                          borderRadius: "50%",
                          marginLeft: "-2.5px"
                        }}
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;