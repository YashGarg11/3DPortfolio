import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaAddressBook, FaBars, FaBrain, FaCode, FaLaptopCode, FaRocket, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [zIndexHigh, setZIndexHigh] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle z-index transition after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setZIndexHigh(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = 80;
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navStyle = {
    zIndex: zIndexHigh ? 3001 : 9,
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: 'background-color 0.3s ease-in-out'
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      style={navStyle}
    >
      <div className="container">
        {/* Brand Logo */}
        <a className={`navbar-brand ${styles.brand}`} href="#home">
          <div className={styles.logoWrapper}>
            <img src="/yg-logo-monogram.jpg" alt="YG Logo" className={styles.logoIcon} />
          </div>
          <span className={styles.logo}>
            <span className={styles.logoText}>
              {"<"}<span className={styles.highlight}>Yash</span>
              <span className={styles.highlight}>Garg</span>{"/>"}
            </span>
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className={styles.toggleButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`${styles.navLinksContainer} ${isOpen ? styles.navOpen : styles.navClosed}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#home" onClick={(e) => handleClick(e, 'home')}>
                <FaCode className={styles.navIcon} />
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#about" onClick={(e) => handleClick(e, 'about')}>
                <FaBrain className={styles.navIcon} />
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#projects" onClick={(e) => handleClick(e, 'projects')}>
                <FaLaptopCode className={styles.navIcon} />
                Projects
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#Skill" onClick={(e) => handleClick(e, 'Skill')}>
                <FaRocket className={styles.navIcon} />
                Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#contact" onClick={(e) => handleClick(e, 'contact')}>
                <FaAddressBook className={styles.navIcon} />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
