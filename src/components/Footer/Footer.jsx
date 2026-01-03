import React from "react";
import styles from "./Footer.module.css";
import {
  LuArrowUpRight,
  LuPhone,
  LuMail
} from "react-icons/lu";
import logo from "../../assets/images/Wanders-XO-Logo.png"
import img1 from "../../assets/images/paris.jpg";
import img2 from "../../assets/images/japan.jpg";
import img3 from "../../assets/images/bali.jpg";
import img4 from "../../assets/images/dubai.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* BRAND */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img height={50} src={logo} alt="LOGO"/>
          </div>
          <h3>Wander XO</h3>
          <p>
            Thoughtfully designed journeys, built for people who
            value experience over itineraries.
          </p>

          <div className={styles.socials}>
            <span>FACEBOOK</span>
            <span>INSTAGRAM</span>
          </div>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <ul>
            <li><LuArrowUpRight /> Recent Journeys</li>
            <li><LuArrowUpRight /> Travel Styles</li>
            <li><LuArrowUpRight /> About Us</li>
            <li><LuArrowUpRight /> Gallery</li>
          </ul>

          <ul>
            <li><LuArrowUpRight /> Branding</li>
            <li><LuArrowUpRight /> Web & Interactive</li>
            <li><LuArrowUpRight /> Merchandise</li>
            <li><LuArrowUpRight /> Experiences</li>
          </ul>

          <ul>
            <li><LuArrowUpRight /> Our Story</li>
            <li><LuArrowUpRight /> Help & Support</li>
            <li><LuArrowUpRight /> Awards</li>
            <li><LuArrowUpRight /> Contact</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className={styles.divider} />

      {/* BOTTOM */}
      <div className={styles.bottom}>
        {/* GALLERY */}
        <div className={styles.gallery}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.contact}>
          <p><LuPhone /> +91-9503-889-337</p>
          <p><LuMail /> hi@wanderxo.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.copyright}>
        © Copyright 2026. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
