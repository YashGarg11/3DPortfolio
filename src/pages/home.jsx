import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import Typed from 'typed.js';

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const typed = new Typed(".text", {
        strings: ["Full-Stack Developer", "3D-Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, [inView]);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section
      ref={ref}
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isMobile ? "center" : isTablet ? "center" : "flex-start",
        padding: isMobile ? "60px 1.5rem 0" : isTablet ? "70px 2.5rem 0" : "80px 3rem 0",
        marginTop: "1rem"
      }}
    >
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : isTablet ? "center" : "flex-start",
        marginLeft: isMobile ? "0" : isTablet ? "0" : "-1rem",
        textAlign: isMobile ? "center" : isTablet ? "center" : "left",
        marginTop: isMobile ? "3rem" : isTablet ? "2.5rem" : "0",
      }}>
        <h2 style={{ color: "#fff", fontSize: isMobile ? "1.4rem" : isTablet ? "1.7rem" : "2rem" }}>Hello, It's Me</h2>
        <h1 style={{ 
          color: "#10cedf", 
          fontSize: isMobile ? "2.5rem" : isTablet ? "3rem" : "3.5rem", 
          fontWeight: "bold",
          margin: "0.5rem 0"
        }}>Yash Garg</h1>
        <h3 style={{ 
          color: "#fff", 
          fontSize: isMobile ? "1.3rem" : isTablet ? "1.5rem" : "1.8rem",
          margin: "0.5rem 0"
        }}>
          And I'm a <span style={{
          color: "aqua",
          textShadow: `
      0 0 3px rgba(0, 255, 255, 0.8),
      0 0 6px rgba(0, 255, 255, 0.6),
      0 0 12px rgba(0, 255, 255, 0.4),
      0 0 24px rgba(0, 255, 255, 0.2)
    `,
          fontSize: "2rem",
          }} className="text"></span>
        </h3>
        <h4 style={{ 
          color: "#ccc", 
          fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.2rem", 
          maxWidth: isMobile ? "100%" : isTablet ? "80%" : "600px", 
          lineHeight: "1.6",
          marginTop: "2rem"
        }}>
          And I'm a passionate and aspiring BTech student currently in my Third year. Welcome to my portfolio!
        </h4>
        <div style={{ marginTop: isMobile ? "0.5rem" : isTablet ? "0.5rem" : "5rem" }}></div>
      </div>
    </section>
  );
};

export default Home;