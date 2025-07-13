import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import CustomButton from "../Components/CustomButton";

export default function Talk() {
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
    const isDesktop = windowWidth >= 1024;


    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <div className="bg-black" style={{
            minHeight: "100vh",

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
                    Let's Connect
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
                    <h2 style={{ color: "#fff", marginBottom: "1.5rem" }}>Get in Touch</h2>
                    <p style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                        marginBottom: "2rem",
                        color: "#ccc"
                    }}>
                        Have a question or want to work together? Feel free to reach out through any of the channels below.
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        gap: "2rem",
                        marginTop: "3rem",
                        marginBottom: "3rem"
                    }}>
                        {/* Email Contact */}
                        <motion.div
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
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                            }}
                        >
                            <div style={{
                                fontSize: "3rem",
                                color: "#10cedf",
                                marginBottom: "1rem",
                                textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                            }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Email</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                                Drop me an email anytime. I typically respond within 24 hours.
                            </p>
                            <CustomButton
                                text="Send Email"
                                onClick={() => window.open("mailto:gargyash9822222@example.com")}
                            />
                        </motion.div>

                        {/* Social Media Contact */}
                        <motion.div
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
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                            }}
                        >
                            <div style={{
                                fontSize: "3rem",
                                color: "#10cedf",
                                marginBottom: "1rem",
                                textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                            }}>
                                <i className="fas fa-hashtag"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Social Media</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                                Connect with me on social media for updates and more casual conversations.
                            </p>
                            <div style={{ marginTop: "1rem" }}>
                                <CustomButton
                                    text="LinkedIn"
                                    onClick={() => window.open("https://www.linkedin.com/in/yash-garg-b90956258")}
                                /></div> <div style={{ marginTop: "1rem" }}>
                                <CustomButton
                                    text="Instagram"
                                    onClick={() => window.open("https://instagram.com/__yash_garg_30")}
                                />
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <CustomButton
                                    text="YouTube"
                                    onClick={() => window.open("https://youtube.com/@yashSculpt_x")}
                                />
                            </div>
                        </motion.div>

                        {/* Schedule a Paid Consultation */}
                        <motion.div
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
                                padding: "2rem",
                                width: isMobile ? "100%" : "300px",
                                border: "1px solid rgba(16, 206, 223, 0.3)",
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)"
                            }}
                        >
                            <div style={{
                                fontSize: "3rem",
                                color: "#10cedf",
                                marginBottom: "1rem",
                                textShadow: "0 0 10px rgba(16, 206, 223, 0.5)"
                            }}>
                                <i className="fas fa-calendar-check"></i>
                            </div>
                            <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Premium Consultation</h3>
                            <p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
                                Book a dedicated one-on-one consultation session to discuss your project in detail.
                            </p>
                            <div style={{
                                background: "rgba(16, 206, 223, 0.1)",
                                padding: "0.8rem",
                                borderRadius: "8px",
                                marginBottom: "1rem"
                            }}>
                                <p style={{ color: "#10cedf", margin: 0 }}>Starting at $50/hour</p>
                                <p style={{ color: "#ccc", margin: "0.5rem 0 0 0", fontSize: "0.9rem" }}>Personalized advice & solutions</p>
                            </div>
                            <CustomButton
                                text="Book Paid Session"
                                onClick={() => window.open("https://calendly.com/yourusername/paid-consultation")}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        style={{
                            marginTop: "4rem",
                            padding: "2rem",
                            background: "rgba(16, 206, 223, 0.1)",
                            borderRadius: "12px",
                            border: "1px solid rgba(16, 206, 223, 0.3)"
                        }}
                    >
                        <h3 style={{ color: "#10cedf", marginBottom: "1rem" }}>Why Book a Paid Consultation?</h3>
                        <p style={{ color: "#ccc" }}>
                            Get dedicated time with me to discuss your specific needs, receive personalized advice,
                            and develop actionable strategies for your project. Paid sessions ensure my full attention
                            and expertise focused entirely on your goals.
                        </p>
                    </motion.div>
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