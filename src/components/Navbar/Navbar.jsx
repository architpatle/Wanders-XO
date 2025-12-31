import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/Wanders-XO-Logo.png";

const Navbar = () => {
    const [scrolled,
        setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${styles.navbar} ${scrolled
            ? styles.scrolled
            : ""}`}>
            <div className="container-fluid px-5">

                {/* Left Nav */}
                <div className="collapse navbar-collapse justify-content-start">
                    <ul className={`navbar-nav gap-3`}>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="/group-trips">
                                Group Trip
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="/customize-trip">
                                Customize Trip
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="/packages">
                                Packages
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Center Logo */}
                <Link className={`navbar-brand ${styles.logoWrapper}`} to="/">
                    <img src={logo} alt="Brand Logo" className={styles.logo}/>
                </Link>

                {/* Right Nav */}
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className={`navbar-nav align-items-center gap-3`}>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="/our-story">
                                Our Story
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${styles.navLink}`} to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`btn ${styles.loginBtn} ${scrolled
                                ? styles.loginBtnScrolled
                                : ""}`}
                                to="/login">
                                Login
                            </Link>

                        </li>
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
