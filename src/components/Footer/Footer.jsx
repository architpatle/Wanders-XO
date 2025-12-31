import React from "react";
import styles from "./Footer.module.css";
import { LuInstagram, LuFacebook, LuYoutube } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>

        {/* Brand / Contact Form */}
        <div className={styles.contact}>
          <h4>Let’s Connect</h4>

          <div className={styles.formGrid}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email *" />
            <input type="tel" placeholder="Phone" />
          </div>

          <textarea placeholder="Type your message here..." />

          <button className={styles.primaryBtn}>Submit</button>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h4>Weekly Travel Inspiration</h4>
          <p>
            Get destination ideas, travel tips, and exclusive offers delivered
            straight to your inbox.
          </p>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email *" />

          <button className={styles.secondaryBtn}>Subscribe</button>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>Cancellation Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={styles.info}>
          <p>Email: hi@wanderxo.com</p>
          <p>Phone: +91-9503-889-337</p>
        </div>

        <div className={styles.socials}>
          <LuFacebook />
          <LuInstagram />
          <LuYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
