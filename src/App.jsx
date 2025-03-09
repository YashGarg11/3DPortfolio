import { useSpring } from "@react-spring/three";
import { lazy, useEffect, useRef, useState } from "react";
import { Vector3 } from 'three';
import ButtonContainer from "./Components/ButtonContainer";
import MainScene from "./Components/MainScene";
import NameScene from "./Components/NameScene";
import Navbar from "./Components/navbar";
import About from "./pages/About";
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";

const LazyName = lazy(() => import("./Components/pr"));

function App() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);
    const [showText, setShowText] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [modelZIndex, setModelZIndex] = useState(2001);
    const [modelPosition, setModelPosition] = useState([0, 1, 0]);
    const targetModelPosition = useRef(new Vector3(0, 1, 0));
    const debounceTimeout = useRef(null);
    const [showLazyName, setShowLazyName] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(1);

    const lightProps = useSpring({
        lightIntensity: startAnimation ? 1.2 : 0.1,
        config: { duration: 3000 },
    });

    const modelScale = useSpring({
        scale: startAnimation ? 0.5 : 3,
        config: { duration: 7000 },
    });

    // Initial setup effect
    useEffect(() => {
        document.body.style.overflow = "hidden";
        setFadeOpacity(1);

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
            }, 7000)
        ];

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
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
                        setActiveSection(entry.target.id);
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
    }, []);

    // Model position effect
    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            let targetPosition;

            if (!startAnimation) {
                targetPosition = new Vector3(0, 1, 0);
            } else {
                switch (activeSection) {
                    case "home":
                        targetPosition = new Vector3(-1.5, 1.2, 0);
                        break;
                    case "about":
                        targetPosition = new Vector3(-8, 1 + scrollProgress * 3, 0);
                        break;
                    case "projects":
                        targetPosition = new Vector3(8, 1 + scrollProgress * 3, 0);
                        break;
                    case "skill":
                        targetPosition = new Vector3(0, 2 + scrollProgress * 3, 0);
                        break;
                    default:
                        targetPosition = new Vector3(0, 1, 0);
                }
            }
            targetModelPosition.current.copy(targetPosition);
            if (activeSection === "about") {
                const homePosition = new Vector3(0, 1, 0);
                const aboutPosition = new Vector3(-10, 1 + scrollProgress * 3, 0);
                targetModelPosition.current.lerpVectors(homePosition, aboutPosition, scrollProgress);
            } else if (activeSection === "projects") {
                const homePosition = new Vector3(-10, 1 + scrollProgress * 3, 0);
                const projectPosition = new Vector3(10, 1 + scrollProgress * 3, 0);
                targetModelPosition.current.lerpVectors(homePosition, projectPosition, scrollProgress);
            } else if (activeSection === "skill") {
                const homePosition = new Vector3(0, 1, 0);
                const skillPosition = new Vector3(0, 2 + scrollProgress * 3, 0);
                targetModelPosition.current.lerpVectors(homePosition, skillPosition, scrollProgress);
            }
        }, 100);
    }, [activeSection, scrollProgress, startAnimation]);


    return (
        <>
            <Navbar style={{ zIndex: 50 }} />
            
            {/* Sections */}
            {["home", "about", "projects", "Skill"].map((sectionId) => (
                <section 
                    key={sectionId}
                    id={sectionId} 
                    style={{ 
                        position: "relative", 
                        width: "100vw", 
                        minHeight: "100vh", 
                        backgroundImage: `url("/background${sectionId === 'home' ? '' : '1'}.jpg")`,
                        backgroundSize: "cover", 
                        backgroundPosition: "center", 
                        backgroundRepeat: "no-repeat", 
                        transition: "background-image 1s ease-in-out", 
                        zIndex: -10 
                    }}
                >
                    {activeSection === sectionId && {
                        home: <Home />,
                        about: <About />,
                        projects: <Projects />,
                        Skill: <Skill />
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
                    zIndex: 10000, 
                    textAlign: "center", 
                    opacity: showText ? 1 : 0, 
                    transition: "opacity 1s ease-in-out" 
                }}>
                    <b>Welcome to the 3D Experience</b>
                </div>
            )}

            {/* Button Container */}
            {activeSection === "home" && !showText && (
                <>
                    <ButtonContainer style={{left:"2rem"}} text="Hire Me" />
                    <ButtonContainer style={{left:"15rem"}} text="Talk To Me"  />
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
                pointerEvents: "none" 
            }} />

            {/* Main 3D Scene */}
            <MainScene 
                scrollProgress={scrollProgress}
                startAnimation={startAnimation}
                activeSection={activeSection}
                modelPosition={modelPosition}
                modelScale={modelScale.scale}
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
        </>
    );
}

export default App;