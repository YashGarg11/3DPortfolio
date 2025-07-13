// ✅ FINAL FIXED VERSION WITHOUT BOOKCAMERA
// Fixed:
// - Restored transformation and home page logic
// - Made sure background doesn't cover navbar
// - Ensured home background shows behind navbar

import { lazy, useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import ButtonContainer from "./Components/ButtonContainer";
import ClientOnly from "./Components/ClientOnly";
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
import { SafeSpringProvider } from "./utils/SafeSpringProvider";

const LazyName = lazy(() => import("./Components/pr"));

function MainContent() {
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);
    const [showText, setShowText] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [modelPosition, setModelPosition] = useState([0, 1, 0]);
    const [modelScale, setModelScale] = useState(3);
    const [modelRotation, setModelRotation] = useState([0, 0, 0]);
    const targetModelPosition = useRef(new Vector3(0, 1, 0));
    const debounceTimeout = useRef(null);
    const [showLazyName, setShowLazyName] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(1);
    const [previousSection, setPreviousSection] = useState("home");
    const [transitionProgress, setTransitionProgress] = useState(0);
    const [zIndex, setZIndex] = useState(100);

    const shouldRenderModel = () => !startAnimation || activeSection === "home";

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setFadeOpacity(1);
        document.documentElement.style.scrollBehavior = "smooth";

        const timeouts = [
            setTimeout(() => {
                setStartAnimation(true);
                document.body.style.overflow = "auto";
                setShowText(false);
                setShowLazyName(true);
            }, 7000),
            setTimeout(() => setBackgroundOpacity(0.7), 4000),
            setTimeout(() => setBackgroundOpacity(0), 7000),
            setTimeout(() => setFadeOpacity(0), 3000),
            setTimeout(() => setShowLazyName(false), 7000),
            setTimeout(() => setZIndex(4000), 7000)
        ];

        return () => {
            timeouts.forEach(clearTimeout);
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / pageHeight, 1);
            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                let maxRatio = 0;
                let visibleSection = activeSection;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        visibleSection = entry.target.id;
                    }
                });

                if (visibleSection !== activeSection) {
                    setPreviousSection(activeSection);
                    setActiveSection(visibleSection);
                    setTransitionProgress(0);
                }
            },
            {
                threshold: Array.from({ length: 100 }, (_, i) => i / 100),
                rootMargin: "0px 0px -30% 0px",
            }
        );

        const sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));
        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

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

    useEffect(() => {
        if (!shouldRenderModel()) return;

        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            let targetPosition;

            if (!startAnimation) {
                targetPosition = new Vector3(0, 3, 0);
                setModelScale(3);
                setModelRotation([0, 0, 0]);
            } else {
                targetPosition = new Vector3(-2.5, 2.15, 0);
                setModelScale(2.5);
                setModelRotation([0, 0, 0]);
            }

            targetModelPosition.current.copy(targetPosition);
        }, 100);
    }, [startAnimation, activeSection]);

    return (
        <>
            <div style={{ position: "relative", zIndex }}>
                <Navbar />
            </div>

            {["home", "about", "projects", "Skill", "contact"].map((sectionId) => (
                <section
                    key={sectionId}
                    id={sectionId}
                    style={{
                        position: "relative",
                        width: "100vw",
                        minHeight: "100vh",
                        backgroundColor: sectionId === "home" ? "transparent" : "#000",
                        zIndex: 10,
                        overflow: "hidden"
                    }}
                >
                    <div style={{ position: 'relative', zIndex: 2, paddingTop: sectionId === 'home' ? "80px" : "0" }}>
                        {sectionId === "home" && <Home />}
                        {sectionId === "about" && <About />}
                        {sectionId === "projects" && <Projects />}
                        {sectionId === "Skill" && <Skill />}
                        {sectionId === "contact" && <ContactUs />}
                    </div>
                </section>
            ))}

            {showText && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "3rem",
                    color: "white",
                    zIndex: 9999,
                    textAlign: "center",
                    opacity: showText ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    pointerEvents: "none"
                }}>
                    <b>Welcome to the 3D Experience</b>
                </div>
            )}

            {activeSection === "home" && !showText && (
                <>
                    <ButtonContainer onClick={() => navigate('/hire-me')} style={{ left: "5rem", bottom: "15rem", zIndex: 3000 }} text="Hire Me" />
                    <ButtonContainer onClick={() => navigate('/talk')} style={{ left: "17rem", bottom: "15rem", zIndex: 3000 }} text="Talk To Me" />
                </>
            )}

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

            {shouldRenderModel() && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 2001, pointerEvents: "none" }}>
                    <MainScene
                        scrollProgress={scrollProgress}
                        startAnimation={startAnimation}
                        activeSection={activeSection}
                        modelPosition={modelPosition}
                        modelScale={modelScale}
                        modelRotation={modelRotation}
                        setModelPosition={setModelPosition}
                        targetModelPosition={targetModelPosition}
                        modelZIndex={2001}
                    />
                </div>
            )}

            {activeSection === "home" && showLazyName && (
                <NameScene LazyName={LazyName} fadeOpacity={fadeOpacity} />
            )}
        </>
    );
}

const App = () => (
    <ClientOnly>
        <SafeSpringProvider value={{ tension: 170, friction: 26, mass: 1, immediate: false }}>
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
        </SafeSpringProvider>
    </ClientOnly>
);

export default App;
