import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CustomButton from "../Components/CustomButton";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);
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
    // Apply base styles to prevent layout issues
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "auto";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundColor = "rgb(19, 12, 12)";
    document.body.style.transition = "none";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      fullDescription: "This is a detailed description of Project 1. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/t2.png",
      demoUrl: "https://sketchfab.com/3d-models/saturn-8f98132d421848aeb12e2165a81838b6",
      sourceCode: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      fullDescription: "This is a detailed description of Project 2. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/project2.jpg",
      demoUrl: "https://demo2.com",
      sourceCode: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      fullDescription: "This is a detailed description of Project 3. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/project3.jpg",
      demoUrl: "https://demo3.com",
      sourceCode: "https://github.com/yourusername/project3"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      fullDescription: "This is a detailed description of Project 4. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/project4.jpg",
      demoUrl: "https://demo4.com",
      sourceCode: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description of Project 5",
      fullDescription: "This is a detailed description of Project 5. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/project5.jpg",
      demoUrl: "https://demo5.com",
      sourceCode: "https://github.com/yourusername/project5"
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description of Project 6",
      fullDescription: "This is a detailed description of Project 6. It includes information about the technologies used, challenges faced, and solutions implemented.",
      image: "/project6.jpg",
      demoUrl: "https://demo6.com",
      sourceCode: "https://github.com/yourusername/project6"
    }
  ];

  // Determine projects per slide based on screen size
  const getProjectsPerSlide = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  // Group projects into slides
  const groupedProjects = projects.reduce((acc, curr, i) => {
    const groupIndex = Math.floor(i / getProjectsPerSlide());
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(curr);
    return acc;
  }, []);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  // Common styles
  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    padding: "10px",
    zIndex: 60,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  };

  const detailsContainerStyle = {
    flex: "1",
    minHeight: "60vh",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
  };

  const detailsCardStyle = {
    backgroundColor: "rgba(19, 12, 12, 0.66)",
    border: "2px solid #10cedf",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "1500px",
    minHeight: "500px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(16, 206, 223, 0.5)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden"
  };

  const glowBorderStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "18px",
    pointerEvents: "none",
    boxShadow: "inset 0 0 15px rgba(16, 206, 223, 0.3)"
  };

  const projectTitleStyle = {
    color: "#10cedf",
    marginBottom: "15px",
    fontSize: "3rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
  };

  const projectDescriptionStyle = {
    color: "white",
    marginBottom: "15px",
    lineHeight: "2.2",
    fontSize: "1.2rem"
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "60px"
  };

  const imageContainerStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  };

  const imageWrapperStyle = {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 0 30px rgba(16, 206, 223, 0.4)"
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    transform: "translateZ(0)",
    transition: "transform 0.3s ease"
  };

  const imageOverlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "15px",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  };

  const iconButtonStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(16, 206, 223, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#10cedf",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    backdropFilter: "blur(5px)"
  };

  const carouselContainerStyle = {
    flex: "1",
    minHeight: "40vh",
    padding: "5px",
    marginTop: "5px",
    height: "auto",
    overflow: "visible"
  };

  const carouselStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    overflow: "visible"
  };

  const projectGroupStyle = {
    display: "flex",
    justifyContent: "center",
    // CHANGED: Decreased gap from 15px to 10px to allow more space for containers
    gap: "10px",
    padding: "0 15px",
    marginBottom: "40px"
  };

  const projectCardStyle = {
    // CHANGED: Increased container width by adjusting flex basis
    flex: `1 1 ${100 / getProjectsPerSlide() + 5}%`,
    backgroundColor: "rgba(19, 12, 12, 0.95)",
    border: "2px solid #10cedf",
    borderRadius: "20px",
    padding: "20px",
    minHeight: "250px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(16, 206, 223, 0.5)",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden",
    transformOrigin: "center center",
    zIndex: 1,
    transition: "transform 0.3s ease"
  };

  const projectCardTitleStyle = {
    color: "#10cedf",
    marginBottom: "10px",
    fontSize: "2rem",
    textShadow: "0 0 8px rgba(16, 206, 223, 0.4)"
  };

  const projectCardDescriptionStyle = {
    color: "white",
    margin: "10px 0",
    lineHeight: "1.5"
  };

  const projectCardButtonContainerStyle = {
    marginTop: "100px",
    textAlign: "center"
  };

  const quickLinksStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    display: "flex",
    gap: "8px"
  };

  const smallIconButtonStyle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "rgba(16, 206, 223, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#10cedf",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    backdropFilter: "blur(5px)"
  };

  return (
    <div ref={ref} style={containerStyle}>
      {/* Top Half - Project Details Container */}
      <div style={detailsContainerStyle}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={detailsCardStyle}
        >
          {/* Glowing border effect */}
          <div style={glowBorderStyle} />
          
          {selectedProject ? (
            <div style={{ 
              display: "flex", 
              flexDirection: isMobile ? "column" : "row",
              gap: "20px" 
            }}>
              <div style={{ flex: "1" }}>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={projectTitleStyle}
                >
                  {selectedProject.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={projectDescriptionStyle}
                >
                  {selectedProject.fullDescription}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={buttonContainerStyle}
                >
                  {selectedProject.demoUrl && (
                    <CustomButton 
                      text="Live Demo" 
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                      className="project-button"
                    />
                  )}
                  
                  {selectedProject.sourceCode && (
                    <CustomButton 
                      text="Source Code" 
                      onClick={() => window.open(selectedProject.sourceCode, '_blank')}
                      className="project-button"
                    />
                  )}
                </motion.div>
              </div>
              
              {selectedProject.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  style={imageContainerStyle}
                >
                  <div style={imageWrapperStyle}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      style={imageStyle}
                    />
                    
                    {/* Quick action links */}
                    <div style={imageOverlayStyle}>
                      {selectedProject.demoUrl && (
                        <a 
                          href={selectedProject.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={iconButtonStyle}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      
                      {selectedProject.sourceCode && (
                        <a 
                          href={selectedProject.sourceCode} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={iconButtonStyle}
                        >
                          <FaGithub />
                        </a>
                      )}
                      
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          // Could add additional action here
                        }}
                        style={iconButtonStyle}
                      >
                        <FaInfoCircle />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ 
                textAlign: "center",
                color: "white",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h2 style={{ 
                color: "#10cedf",
                marginBottom: "20px",
                textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
              }}>Select a Project</h2>
              <p>Click on any project below to view its details</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom Half - Project Carousel Container */}
      <div style={carouselContainerStyle}>
        <Carousel 
          interval={5000}
          indicators={true}
          controls={true}
          style={carouselStyle}
          className="custom-carousel"
        >
          {groupedProjects.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div style={projectGroupStyle}>
                {group.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 206, 223, 0.7)"
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: inView ? 1 : 0, 
                      y: inView ? 0 : 50 
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.1 * (project.id % getProjectsPerSlide())
                    }}
                    style={projectCardStyle}
                    onClick={() => handleProjectSelect(project)}
                  >
                    <h3 style={projectCardTitleStyle}>{project.title}</h3>
                    
                    <p style={projectCardDescriptionStyle}>{project.description}</p>
                    
                    <div style={projectCardButtonContainerStyle}>
                      <CustomButton 
                        text="View Details" 
                        onClick={() => handleProjectSelect(project)}
                      />
                    </div>
                    
                    {/* Quick links at the bottom */}
                    <div style={quickLinksStyle}>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={smallIconButtonStyle}
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      
                      {project.sourceCode && (
                        <a 
                          href={project.sourceCode} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={smallIconButtonStyle}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <style jsx global>{`
        .custom-carousel .carousel-indicators {
          bottom: -40px;
        }
        
        .custom-carousel .carousel-indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #10cedf;
          opacity: 0.5;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .custom-carousel .carousel-indicators button.active {
          opacity: 1;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(16, 206, 223, 0.7);
        }
        
        .custom-carousel .carousel-control-prev,
        .custom-carousel .carousel-control-next {
          width: 40px;
          height: 40px;
          background-color: rgba(16, 206, 223, 0.2);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.8;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        .custom-carousel .carousel-control-prev:hover,
        .custom-carousel .carousel-control-next:hover {
          background-color: rgba(16, 206, 223, 0.4);
          opacity: 1;
          box-shadow: 0 0 15px rgba(16, 206, 223, 0.6);
        }
        
        .project-button {
          transform: translateZ(0);
        }
        
        .custom-carousel {
          overflow: visible !important;
        }
        
        .carousel-inner {
          overflow: visible !important;
        }
      `}</style>
    </div>
  );
}
