import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaBars, FaBrain, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = 80; // Height of navbar
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Enhanced Brand Logo with Animation */}
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

        {/* Animated Toggle Button */}
        <button
          className={`navbar-toggler ${styles.toggleButton} ${isOpen ? styles.active : ''}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} className={styles.menuIcon} />
        </button>

        {/* Enhanced Navigation Links with Icons */}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
