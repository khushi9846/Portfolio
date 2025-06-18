import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import BackgroundImage from "../backgroundimg.jsx";
import { HiOutlineMail } from "react-icons/hi";
const Hero = () => {
  const [time, setTime] = useState(new Date());
  const contactEmail = "khushisaxena9846@gmail.com";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100vh",
      overflow: "hidden"
    }}>
      <BackgroundImage />
      <motion.div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          style={{
            margin: 0,
            fontSize: "5rem",
            fontWeight: "600",
            position: "relative",
            zIndex: 20,
            color: "white",
            width: "90%",
            textAlign: "center",
            textShadow: "0 4px 8px rgba(0,0,0,0.8)",
            letterSpacing: "-0.02em",
            lineHeight: "1"
          }}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I&apos;m Khushi Saxena
        </motion.p>
        <motion.p
          style={{
            margin: 0,
            fontSize: "2rem",
            color: "#d4d4d4",
            position: "relative",
            zIndex: 20,
            textAlign: "center",
            fontWeight: 500
          }}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A Software Engineer
        </motion.p>
        <motion.p
          style={{
            fontSize: "1.3rem",
            color: "#d4d4d4",
            padding: "0.25rem 0",
            width: "90%",
            textAlign: "center",
            zIndex: 20
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          It&apos;s currently
          <span style={{ fontWeight: "bold", margin: "0 0.25rem", color: "white" }}>
            {time.toLocaleTimeString()}
          </span>
          here in Noida, India📍
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            gap: "2.25rem",
            marginTop: "1.5rem",
            position: "relative",
            zIndex: 20
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="https://github.com/khushi9846"
            target="_blank"
            aria-label="GitHub Profile"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "white",
              position: "relative",
              zIndex: 30
            }}
          >
            <FiGithub size={20} style={{ color: "white", marginRight: "2px" }} />
          </a>
          {/* <a
            href="https://x.com/Anushkaarawat_"
            target="_blank"
            aria-label="Twitter Profile"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "white",
              position: "relative",
              zIndex: 30
            }}
          >
            <FaXTwitter size={20} style={{ color: "white" }} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/khushi-saxena-589a981b8/"
            target="_blank"
            aria-label="LinkedIn Profile"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "white",
              position: "relative",
              zIndex: 30
            }}
          >
            <FaLinkedinIn size={20} style={{ color: "white" }} />
          </a>
        </motion.div>

        {/* Hire button commented section here */}
        <motion.div
      style={{
        marginTop: "3.5rem",
        position: "relative",
        zIndex: 30,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
    >
      <a
        href={`mailto:${contactEmail}?subject=Work%20Inquiry%20from%20Portfolio&body=Hi%20Khushi,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.`}
        style={{ position: "relative", display: "inline-block" ,textDecoration: "none", }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "9999px",
            background: "linear-gradient(to right, rgba(147, 51, 234, 0.5), rgba(251, 191, 36, 0.5))",
            opacity: 0.75,
            filter: "blur(8px)",
            transition: "opacity 1s",
            animation: "pulseSlow 2s infinite",
          }}
          className="hover-effect"
        ></div>
        <button
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            borderRadius: "9999px",
            border: "1px solid rgba(82, 82, 91, 0.5)",
            color: "white",
            fontSize: "0.875rem",
            fontWeight: 500,
            transition: "all 0.3s",
          }}
        >
          <div
            style={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: "#4ade80",
              animation: "pulse 1.5s infinite",
            }}
          ></div>
          <span>Available for Hire</span>
          <HiOutlineMail style={{ fontSize: "1.25rem", opacity: 0.7 }} />
        </button>
      </a>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1);
            }
          }

          @keyframes pulseSlow {
            0%, 100% {
              opacity: 0.75;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
          }

          .hover-effect:hover {
            opacity: 1 !important;
            transition-duration: 0.5s !important;
          }

          button:hover {
            border-color: rgba(147, 51, 234, 0.5);
          }

          button:hover svg {
            opacity: 1;
          }
        `}
      </style>
    </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
