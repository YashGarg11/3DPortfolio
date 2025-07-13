import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import Typed from 'typed.js';

const Home = () => {
  const [scale, setScale] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width <= 768) setScale(0.8);
      else if (width <= 1024) setScale(1.2);
      else setScale(2);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (inView) {
      const typed = new Typed(".text", {
        strings: ["Full-Stack Developer", "3D-Web Developer", "Freelancer", "AWS Cloud Developer"],
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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative"
      }}
    >
      {/* Container for desktop layout */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        width: "100%"
      }}>

        {/* Desktop Layout */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "4rem"
        }}>

          {/* Left Text Section */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            maxWidth: "600px"
          }}>
            <h2 style={{
              color: "#fff",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              margin: "0 0 1rem 0",
              fontWeight: "normal"
            }}>
              Hello, It's Me
            </h2>

            <h1 style={{
              color: "#10cedf",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: "bold",
              margin: "0 0 1rem 0",
              lineHeight: "1.1"
            }}>
              Yash Garg
            </h1>

            <h3 style={{
              color: "#fff",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              margin: "0 0 2rem 0",
              lineHeight: "1.3"
            }}>
              And I'm a <span style={{
                color: "#10cedf",
                textShadow: `0 0 3px rgba(16, 206, 223, 0.8), 
                            0 0 6px rgba(16, 206, 223, 0.6), 
                            0 0 12px rgba(16, 206, 223, 0.4), 
                            0 0 24px rgba(16, 206, 223, 0.2)`,
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              }} className="text"></span>
            </h3>

            <p style={{
              color: "#ccc",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "500px",
              lineHeight: "1.6",
              margin: "0 0 3rem 0",
              fontWeight: "normal"
            }}>
              Passionate about building impactful digital experiences across web, cloud, and 3D technologies.
            </p>

            {/* Buttons */}
            <div style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap"
            }}>
              <button style={{
                padding: "1rem 2rem",
                backgroundColor: "transparent",
                border: "2px solid #10cedf",
                color: "#10cedf",
                fontSize: "1.1rem",
                fontWeight: "500",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#10cedf";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#10cedf";
                }}
              >
                Hire Me →
              </button>

              <button style={{
                padding: "1rem 2rem",
                backgroundColor: "transparent",
                border: "2px solid #10cedf",
                color: "#10cedf",
                fontSize: "1.1rem",
                fontWeight: "500",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#10cedf";
                  e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#10cedf";
                }}
              >
                Talk To Me →
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            maxWidth: "600px"
          }}>
            <img
              src="/robo.png"
              alt="Yash Garg"
              style={{
                marginTop: "100px",
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "12px",
                transition: "transform 0.5s ease-in-out",
                filter: "drop-shadow(0 0 30px rgba(16, 206, 223, 0.3))",
                transform: `scale(${scale})`

              }}

            />
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #home {
            padding: 1rem !important;
          }
          
          #home > div > div {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          
          #home > div > div > div:first-child {
            text-align: center !important;
            align-items: center !important;
          }
          
          #home > div > div > div:first-child > div {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          #home > div > div > div:first-child > div {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          #home > div > div > div:first-child > div > button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;