import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About() {

  const { ref, inView } = useInView({ triggerOnce: true });
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

  // Log window width to debug responsive behavior
  useEffect(() => {
    console.log("Current window width:", windowWidth);
    console.log("isMobile:", isMobile);
    console.log("isTablet:", isTablet);
  }, [windowWidth, isMobile, isTablet]);
  
  return (
    <section ref={ref} id="about" className="page">
      <div className="about-container" style={{ 
        backgroundColor: "rgb(19, 12, 12)",
        border: "2px solid aqua",
        opacity: 0.9,
        width: "80%",
        minHeight: "80vh",
        borderRadius: "20px",
        marginLeft:"10%",
        padding: "30px",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.5)",
        backdropFilter: "blur(5px)",
        transform: inView ? "translateY(80px)" : "translateY(50px)",
        transition: "transform 0.8s ease-out"
      }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            gap: "30px"
          }}
        >
          {/* Left side - Photo Frame */}
          <motion.div
            className="photo-frame"
            initial={{ scale: 0.95, x: -50 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              x: 0,
             
            }}
            transition={{
              x: { duration: 2 },
              scale: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              width: isMobile ? "220px" : isTablet ? "280px" : "340px",
              height: isMobile ? "300px" : isTablet ? "370px" : "500px",
              border: "2px solid aqua",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.5)",
              position: "relative",
              padding: "0", // Removed padding to allow image to fill completely
              flex: isMobile ? "none" : "0 0 35%"
            }}
          >
            <div style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "10px", // Adjusted to match parent's border-radius
              position: "relative"
            }}>
              <img 
                src="/yash1.jpg" 
                alt="Yash Garg" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Added to ensure image properly fills the container
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                  display: "block" // Ensures no extra space below image
                }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                padding: "20px",
                textAlign: "center"
              }}>
                <h3 style={{ 
                  color: "#fff", 
                  marginBottom: "0.5rem",
                  fontSize: isMobile ? "1.5rem" : "1.8rem",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                }}>
                  Yash Garg
                </h3>
                <p style={{ 
                  color: "#10cedf", 
                  margin: 0,
                  fontSize: isMobile ? "1rem" : "1.2rem",
                  fontWeight: "500"
                }}>
                  3D-Developer & Designer
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              flex: isMobile ? "none" : "0 0 60%",
              background: "rgba(10, 10, 10, 0.7)",
              borderRadius: "12px",
              padding: "25px",
              color: "white",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(16, 206, 223, 0.6)",
              border: "2px solid aqua"
            }}
          >
            <h2 style={{
              fontSize: isMobile ? "1.8rem" : "2.2rem",
              marginBottom: "20px",
              color: "#10cedf",
              borderBottom: "2px solid rgba(16, 206, 223, 0.5)",
              paddingBottom: "10px",
              textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
            }}>
              About Me
            </h2>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>
              I'm a passionate 3D Developer and Designer with expertise in creating immersive digital experiences. 
              My work combines technical skills with creative vision to build engaging interactive applications and stunning visual designs.
            </p>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: "1.6",
              marginBottom: "20px"
            }}>
              As a MERN stack developer, I build robust web applications using MongoDB, Express.js, React, and Node.js.
              I enjoy creating seamless user experiences with responsive front-end designs and efficient back-end solutions.
            </p>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: "1.6",
              marginBottom: "30px"
            }}>
              With a background in both development and design, I bring a unique perspective to every project, 
              ensuring both functionality and aesthetics are given equal importance.
            </p>
            
            {/* Social Media Icons */}
            <div style={{
              marginBottom:isMobile ? "60px" : "0px",
              display: "flex",
              gap: "20px",
              marginTop: "20px"
            }}>
              <motion.a 
                href="https://github.com/yashgarg1703" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 0 15px rgba(16, 206, 223, 0.7)"
                }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/yash-garg-1703" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#0077B5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 0 15px rgba(16, 206, 223, 0.7)"
                }}
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a 
                href="https://twitter.com/yashgarg1703" 
                target="_blank"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#1DA1F2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 0 15px rgba(16, 206, 223, 0.7)"
                }}
              >
                <FaTwitter />
              </motion.a>
              
              <motion.a 
                href="mailto:yashgarg1703@gmail.com"
                whileHover={{ scale: 1.2 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#EA4335",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 0 15px rgba(16, 206, 223, 0.7)"
                }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
