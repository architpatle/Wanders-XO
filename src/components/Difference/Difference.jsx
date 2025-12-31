import React from "react";
import styles from "./Difference.module.css";
import centerImage from "../../assets/images/difference.jpg";

import { 
  LuWallet, 
  LuMapPin, 
  LuUsers, 
  LuBadgePercent, 
} from "react-icons/lu";

const features = [
  {
    title: "Join Us Solo Or Group",
    text: "Travel your way — join as a solo explorer or be part of an exciting group journey with like-minded travelers.",
    icon: <LuUsers />,
  },
  {
    title: "Local Experts",
    text: "Explore destinations with insights from local experts who know the culture, routes, and hidden gems.",
    icon: <LuMapPin />,
  },
  {
    title: "Flexible Payments",
    text: "Flexible and affordable payment options that let you pay in full or through easy monthly installments.",
    icon: <LuWallet />,
  },
  {
    title: "Low Booking Fees",
    text: "Enjoy transparent pricing with minimal booking fees and no hidden charges — just great travel value.",
    icon: <LuBadgePercent />,
  },
];

const Difference = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How We Are Different?</h2>

      <div className={styles.wrapper}>
        {/* Left */}
        <div className={styles.column}>
          {features.slice(0, 2).map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerImage}>
          <img src={centerImage} alt="Travel experience" />
        </div>

        {/* Right */}
        <div className={styles.column}>
          {features.slice(2).map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;
