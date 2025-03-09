import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import Typed from 'typed.js';

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

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

  return (
    <section
      ref={ref}
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: "80px" // Space for navbar
      }}
    >
      
      
      <div style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "6rem",
        gap: "0rem"
      }}>
        <div>
          <h2 style={{ color: "#fff", fontSize: "2rem" }}>Hello, It's Me</h2>
        </div>
        <div>
          <h1  style={{ color: "#10cedf", fontSize: "3.5rem", fontWeight: "bold" }}>Yash Garg</h1>
        </div>
        <br />
        <h3 style={{ color: "#fff", fontSize: "1.8rem" }}>
          And I'm a <span className="text"></span>
        </h3>
        <div>
          <h4 style={{ color: "#ccc", fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6" }}>
            And I'm a passionate and aspiring BTech student currently in my Third year. Welcome to my portfolio!
          </h4>
        </div>
        <br /><br />
      </div>
    </section>
  );
};

export default Home;