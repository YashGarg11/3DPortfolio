import { useSpring } from "@react-spring/three";
import { lazy, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import BookCamera from "./Components/book_camera";
import ButtonContainer from "./Components/ButtonContainer";
import ContactUs from "./Components/Contact-us";
import MainScene from "./Components/MainScene";
import NameScene from "./Components/NameScene";
import Navbar from "./Components/navbar";
import About from "./pages/About";
import HireMe from "./pages/Hire_Me";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Talk from "./pages/Talk";
const LazyName = lazy(() => import("./Components/pr"));
const LazyName1 = lazy(() => import("./Components/skill_book"));
function MainContent() {
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);
    const [showText, setShowText] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [modelZIndex, setModelZIndex] = useState(2001);
    const [modelPosition, setModelPosition] = useState([0, 1, 0]);
    const [modelScale, setModelScale] = useState(3);
    const [modelRotation, setModelRotation] = useState([0, 0, 0]);
    const targetModelPosition = useRef(new Vector3(0, 1, 0));
    const debounceTimeout = useRef(null);
    const [showLazyName, setShowLazyName] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(1);
    const [previousSection, setPreviousSection] = useState("home");
    const [transitionProgress, setTransitionProgress] = useState(0);
   
    const [navbarZIndex, setNavbarZIndex] = useState(10);

    const lightProps = useSpring({
        lightIntensity: startAnimation ? 1.2 : 0.1,
        config: { duration: 3000 },
    });

    const modelScaleSpring = useSpring({
        scale: startAnimation ? 0.5 : 3,
        config: { duration: 7000 },
    });

    // Initial setup effect
    useEffect(() => {
        document.body.style.overflow = "hidden";
        setFadeOpacity(1);

        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.documentElement.style.height = "100%";
        document.body.style.height = "100%";
        document.body.style.minHeight = "100vh";

        const timeouts = [
            setTimeout(() => {
                setStartAnimation(true);
                document.body.style.overflow = "auto";
                setShowText(false);
                setShowLazyName(true);
            }, 7000),
            setTimeout(() => setBackgroundOpacity(0.7), 4000),
            setTimeout(() => setBackgroundOpacity(0), 7000),
            setTimeout(() => setModelZIndex(30), 7000),
            setTimeout(() => {
                setFadeOpacity(0);
            }, 3000),
            setTimeout(() => {
                setShowLazyName(false);
                document.body.style.overflow = "auto";
            }, 7000),
            setTimeout(() => {
                setIsnavbarshow(true);
            }, 7000),
        ];

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
            document.body.style.overflow = "auto";
        };
    }, []);

    // Scroll and section observer effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / pageHeight, 1);
            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setPreviousSection(activeSection);
                        setActiveSection(entry.target.id);
                        setTransitionProgress(0);
                        
                        // Update model z-index based on section
                        if (entry.target.id === "home" || entry.target.id === "about" || entry.target.id === "Skill") {
                            setModelZIndex(2001);
                        } else {
                            setModelZIndex(-200);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [activeSection]);

    // Handle smooth transition between sections
    useEffect(() => {
        if (previousSection !== activeSection) {
            const transitionInterval = setInterval(() => {
                setTransitionProgress(prev => {
                    const newProgress = prev + 0.05;
                    if (newProgress >= 1) {
                        clearInterval(transitionInterval);
                        return 1;
                    }
                    return newProgress;
                });
            }, 20);
            
            return () => clearInterval(transitionInterval);
        }
    }, [previousSection, activeSection]);

    // Model position effect
    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            let targetPosition;

            if (!startAnimation) {
                targetPosition = new Vector3(0, 3, 0);
                setModelScale(3);
                setModelRotation([0, 0, 0]);
            } else {
                switch (activeSection) {
                    case "home":
                        targetPosition = new Vector3(-2.5, 2.15, 0);
                        setModelScale(2.5);
                        setModelRotation([0, 0, 0]);
                        break;
                    case "about":
                        targetPosition = new Vector3(-5, 2 + scrollProgress * 2, 3);
                        setModelScale(2); // Adjusted scale
                        setModelRotation([-2, Math.PI * scrollProgress * 2, 0]);
                        break;
                  
                    case "Skill":
                        targetPosition = new Vector3(-5.5,3, 7.2);
                        setModelScale(1);
                        setModelRotation([Math.PI * 0.2, Math.PI * scrollProgress, 0]);
                        break;
                    default:
                        targetPosition = new Vector3(0, 1, 0);
                        setModelScale(0.5);
                        setModelRotation([0, 0, 0]);
                }
            }
            targetModelPosition.current.copy(targetPosition);
            
            // Apply smooth transitions between sections
            if (previousSection === "home" && activeSection === "about") {
                const homePosition = new Vector3(-2.5, 2.15, 0);
                const aboutPosition = new Vector3(-5, 2, 4);
                targetModelPosition.current.lerpVectors(homePosition, aboutPosition, transitionProgress);
                // Smoothly transition scale and rotation
                const homeScale = 2.5;
                const aboutScale = 3;
                setModelScale(homeScale + (aboutScale - homeScale) * transitionProgress);
                const homeRotation = [0, 0, 0];
                // 
               
            } else if (activeSection === "about") {
                const homePosition = new Vector3(-2.5, 2.15, 0);
                const aboutPosition = new Vector3(-10, 8, 12);
                targetModelPosition.current.lerpVectors(homePosition, aboutPosition, scrollProgress);
                // Adjusted scale and rotation
                setModelScale(2);
                setModelRotation([0, Math.PI * scrollProgress * 2, 0]);
            } 
        }, 100);
    }, [activeSection, scrollProgress, startAnimation, previousSection, transitionProgress]);


    return (
        <>
            <Navbar />
            
            {/* Sections */}
            {["home", "about", "projects", "Skill", "contact"].map((sectionId) => (
                <section 
                    key={sectionId}
                    id={sectionId} 
                    style={{ 
                        position: "relative", 
                        width: "99vw", 
                        minHeight: "100vh", 
                        backgroundImage: sectionId === 'home' ? 'url("/background.jpg")' :
                          sectionId === 'about' ? 'url("/backgrounda2.jpg")' :
                          sectionId === 'projects' ? 'url("/backgrounda1.jpg")' :
                          sectionId === 'contact' ? 'url("/backgrounda1.jpg")' :
                          'url("/backgrounda2.jpg")',
                        backgroundSize: "cover", 
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        transition: "background-image 1s ease-in-out", 
                        zIndex: 10,
                        marginTop: sectionId === 'home' ? "80px" : "0", // Add padding to home section to prevent navbar overlap
                        pointerEvents: "auto" // Ensure sections receive pointer events
                    }}
                >
                    {activeSection === sectionId && {
                        home: <Home />,
                        about: <About />,
                        projects: <Projects />,
                        Skill: <Skill />,
                        contact: <ContactUs />
                    }[sectionId]}
                </section>
            ))}

            {/* Welcome Text */}
            {showText && (
                <div style={{ 
                    position: "fixed", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    fontSize: "3rem", 
                    color: "white", 
                    zIndex: 9999, // Lower than navbar
                    textAlign: "center", 
                    opacity: showText ? 1 : 0, 
                    transition: "opacity 1s ease-in-out",
                    pointerEvents: "none" // Prevent blocking clicks
                }}>
                    <b>Welcome to the 3D Experience</b>
                </div>
            )}

            {/* Button Container */}
            {activeSection === "home" && !showText && (
                <>
                    <ButtonContainer 
                        onClick={() => navigate('/hire-me')} 
                        style={{left:"2rem"}} 
                        text="Hire Me" 
                    />
                    <ButtonContainer style={{left:"15rem"}} 
                        onClick={() => navigate('/talk')}
                        text="Talk To Me" 
                    />
                </>
            )}

            {/* Background Overlay */}
            <div style={{ 
                position: "fixed", 
                top: 0, 
                left: 0, 
                width: "100vw", 
                height: "100vh", 
                backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`, 
                transition: "background-color 3s ease-in-out", 
                zIndex: 2000, 
                pointerEvents: "none" // Ensure overlay doesn't block clicks
            }} />

            {/* Main 3D Scene */}
            <MainScene 
                scrollProgress={scrollProgress}
                startAnimation={startAnimation}
                activeSection={activeSection}
                modelPosition={modelPosition}
                modelScale={modelScale}
                modelRotation={modelRotation}
                setModelPosition={setModelPosition}
                targetModelPosition={targetModelPosition}
                modelZIndex={modelZIndex}
            />

            {/* LazyName Scene */}
            {activeSection === "home" && showLazyName && (
                <NameScene 
                    LazyName={LazyName}
                    fadeOpacity={fadeOpacity}
                />
            )}
            {activeSection === "Skill" && (
                <BookCamera
                    LazyName1={LazyName1}
                />
            )}
        </>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/talk" element={<Talk />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App;