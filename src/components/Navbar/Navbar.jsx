import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/Wanders-XO-Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        styles.navbar
      } ${scrolled ? styles.scrolled : ""}`}
    >
      <div className="container-fluid px-5">
        {/* LEFT NAV */}
        <div className="collapse navbar-collapse justify-content-start">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className={styles.navLink} to="/group-journeys">
                Group Journeys
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/plan-your-trip">
                Plan Your Trip
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/journeys">
                Journeys
              </Link>
            </li>
          </ul>
        </div>

        {/* CENTER LOGO */}
        <Link className={`navbar-brand ${styles.logoWrapper}`} to="/">
          <img src={logo} alt="Wander XO Logo" className={styles.logo} />
        </Link>

        {/* RIGHT NAV */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center gap-4">
            <li className="nav-item">
              <Link className={styles.navLink} to="/our-story">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className={styles.navLink} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${styles.ctaBtn} ${
                  scrolled ? styles.ctaScrolled : ""
                }`}
                to="/start-planning"
              >
                Start Planning
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
