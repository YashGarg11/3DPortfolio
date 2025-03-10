import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomButton from "../Components/CustomButton";

export default function Hire_Me() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add effect to fix body styling
  useEffect(() => {
    // Reset any body styles that might cause whitespace
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto";
    
    // Apply a style to html and body to prevent whitespace
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.minHeight = "100vh";
    
    return () => {
      // Cleanup when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      margin: 0,
      padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : "4rem 3rem",
      color: "#fff",
      boxSizing: "border-box",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h1 style={{ 
          fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
          color: "#10cedf",
          marginBottom: "2rem",
          textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
        }}>
          Hire Me
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            background: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            padding: "2rem",
            marginBottom: "3rem",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Let's Work Together</h2>
          <p style={{ 
            fontSize: "1.1rem", 
            lineHeight: "1.8", 
            marginBottom: "2rem",
            color: "#ccc"
          }}>
            I'm currently available for freelance work and full-time positions. 
            If you're interested in collaborating or hiring me, please feel free to reach out.
            I specialize in creating immersive web experiences with modern technologies.
          </p>
          <div className="services-container" style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap"
          }}>
            {/* Web Development Card */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
              }}
              style={{
                background: "rgba(20, 20, 20, 0.8)",
                borderRadius: "12px",
                overflow: "hidden",
                width: isMobile ? "100%" : "300px",
                border: "1px solid rgba(16, 206, 223, 0.3)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div style={{ padding: "1.5rem", textAlign: "center" }}>
                <div style={{ 
                  fontSize: "3rem", 
                  color: "#10cedf", 
                  marginBottom: "1rem",
                  textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                }}>
                  <i className="fas fa-code"></i>
                </div>
                <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Web Development</h3>
                <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                  Modern, responsive websites and web applications built with React and other cutting-edge technologies.
                </p>
                <div style={{ 
                  background: "rgba(16, 206, 223, 0.1)", 
                  padding: "0.8rem", 
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}>
                  <p style={{ color: "#10cedf", margin: 0 }}>Starting at $500</p>
                  <p style={{ color: "#ccc", margin: "0.5rem 0 0 0", fontSize: "0.9rem" }}>2-4 weeks delivery</p>
                </div>
                <CustomButton text="Get Started" onClick={() => window.open("mailto:gargyash9822222@example.com?subject=Web Development Inquiry")} />
              </div>
            </motion.div>

            {/* 3D Modeling Card */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
              }}
              style={{
                background: "rgba(20, 20, 20, 0.8)",
                borderRadius: "12px",
                overflow: "hidden",
                width: isMobile ? "100%" : "300px",
                border: "1px solid rgba(16, 206, 223, 0.3)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div style={{ padding: "1.5rem", textAlign: "center" }}>
                <div style={{ 
                  fontSize: "3rem", 
                  color: "#10cedf", 
                  marginBottom: "1rem",
                  textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                }}>
                  <i className="fas fa-cube"></i>
                </div>
                <h3 style={{ color: "#fff", marginBottom: "1rem" }}>3D Modeling</h3>
                <p style={{ color: "#ccc", marginBottom: "3rem" }}>
                  Custom 3D models and animations for games, websites, and interactive experiences.
                </p>
                <div style={{ 
                  background: "rgba(16, 206, 223, 0.1)", 
                  padding: "0.8rem", 
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}>
                  <p style={{ color: "#10cedf", margin: 0 }}>Starting at $300</p>
                  <p style={{ color: "#ccc", margin: "0.5rem 0 0 0",  fontSize: "0.9rem" }}>1-3 weeks delivery</p>
                </div>
                <CustomButton text="Get Started" onClick={() => window.open("mailto:gargyash9822222@example.com?subject=3D Modeling Inquiry")} />
              </div>
            </motion.div>

            {/* UI/UX Design Card */}
            <motion.div 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(16, 206, 223, 0.3)"
              }}
              style={{
                background: "rgba(20, 20, 20, 0.8)",
                borderRadius: "12px",
                overflow: "hidden",
                width: isMobile ? "100%" : "300px",
                border: "1px solid rgba(16, 206, 223, 0.3)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div style={{ padding: "1.5rem", textAlign: "center" }}>
                <div style={{ 
                  fontSize: "3rem", 
                  color: "#10cedf", 
                  marginBottom: "1rem",
                  textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                }}>
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 style={{ color: "#fff", marginBottom: "1rem" }}>UI/UX Design</h3>
                <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                  Intuitive and beautiful user interfaces with focus on user experience and modern design principles.
                </p>
                <div style={{ 
                  background: "rgba(16, 206, 223, 0.1)", 
                  padding: "0.8rem", 
                  borderRadius: "8px",
                  marginBottom: "1rem"
                }}>
                  <p style={{ color: "#10cedf", margin: 0 }}>Starting at $400</p>
                  <p style={{ color: "#ccc", margin: "0.5rem 0 0 0", fontSize: "0.9rem" }}>1-2 weeks delivery</p>
                </div>
                <CustomButton text="Get Started" onClick={() => window.open("mailto:gargyash9822222@example.com?subject=UI/UX Design Inquiry")} />
              </div>
            </motion.div>
          </div>
          
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "2rem"
          }}>
            <CustomButton 
              text="Contact Me" 
              onClick={() => window.open("mailto:gargyash9822222@example.com")}
            />
            <CustomButton 
              text="View Resume" 
              onClick={() => window.open("/resume.pdf")}
            />
          </div>
        </motion.div>
        
        <div style={{ marginTop: "2rem" }}>
          <CustomButton 
            text="Back to Home" 
            onClick={handleBackToHome}
          />
        </div>
      </motion.div>
    </div>
  );
}
