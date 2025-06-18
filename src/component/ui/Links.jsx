import React from "react";
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbSquareRoundedLetterP, TbBrandLeetcode } from "react-icons/tb";
import { motion } from "framer-motion";

// Breadcrumbs mock (since it's a custom component in your Next.js app)
// const Breadcrumbs = ({ breadcrumbs }) => (
//   <div style={{ fontSize: "14px", color: "#ccc" }}>
//     {breadcrumbs.map((crumb, index) => (
//       <span key={index}>
//         {index > 0 && " / "}
//         {crumb.active ? (
//           <strong>{crumb.label}</strong>
//         ) : (
//           <a href={crumb.href} style={{ textDecoration: "none", color: "#ccc" }}>
//             {crumb.label}
//           </a>
//         )}
//       </span>
//     ))}
//   </div>
// );

const links = [
  {
    name: "Github",
    username: "khushi9846",
    link: "https://github.com/khushi9846",
    icon: <FaGithub style={{ width: 20, height: 20 }} />,
  },
  // {
  //   name: "Twitter",
  //   username: "Anushkaarawat_",
  //   link: "https://x.com/Anushkaarawat_",
  //   icon: <FaXTwitter style={{ width: 20, height: 20 }} />,
  // },
//   {
//     name: "Discord",
//     username: "adityaj07",
//     link: "https://discord.com/users/adityaj07",
//     icon: <FaDiscord style={{ width: 20, height: 20 }} />,
//   },
  {
    name: "LinkedIn",
    username: "khushi-saxena-589a981b8",
    link: "https://www.linkedin.com/in/khushi-saxena-589a981b8/",
    icon: <FaLinkedin style={{ width: 20, height: 20 }} />,
  },
//   {
//     name: "Leetcode",
//     username: "adityaj-07",
//     link: "https://www.leetcode.com/adityaj-07",
//     icon: <TbBrandLeetcode style={{ width: 20, height: 20 }} />,
//   },
//   {
//     name: "PeerList",
//     username: "adityaj07",
//     link: "https://peerlist.dev/adityaj07",
//     icon: <TbSquareRoundedLetterP style={{ width: 20, height: 20 }} />,
//   },
//   {
//     name: "Instagram",
//     username: "adiijoshii",
//     link: "https://www.instagram.com/adiijoshii",
//     icon: <FaInstagram style={{ width: 20, height: 20 }} />,
//   },
];

const Page = () => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ width: "90%", maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ marginTop: "1rem" }}>
          {/* <Breadcrumbs
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Links", href: "/links", active: true },
            ]}
          /> */}
        </div>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "1rem",
            borderBottom: "1px solid rgba(107, 114, 128, 0.4)",
            paddingBottom: "1rem",
          }}
        >
          Links
        </h1>
        <div
          style={{
            borderRadius: "8px",
            padding: "1px",
            margin: "1rem 0",
            width: "100%",
            background: "radial-gradient(ellipse at top right, #0f172a, #6b21a8, #0f172a)",
          }}
        >
          <ul style={{ backgroundColor: "#161716", borderRadius: "8px", padding: "1rem", listStyle: "none" }}>
            {links.map((linkObj) => (
              <li
                key={linkObj.name}
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  backgroundColor: "#26262A",
                  marginBottom: "0.5rem",
                  transition: "background-color 0.15s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#101012")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#26262A")}
              >
                <a
                  href={linkObj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {linkObj.icon}
                  <span>{`${linkObj.name} - ${linkObj.username}`}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
