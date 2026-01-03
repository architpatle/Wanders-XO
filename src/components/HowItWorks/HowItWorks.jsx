import React from "react";
import styles from "./HowItWorks.module.css";

import { LuMapPin, LuCreditCard, LuPlaneTakeoff } from "react-icons/lu";
import planeDoodle from "../../assets/images/plane-doodle.png";

const steps = [
  {
    icon: <LuMapPin />,
    title: "Choose Your Destination",
    text: "Browse curated trips or customize your own journey based on your travel style, pace, and budget.",
  },
  {
    icon: <LuCreditCard />,
    title: "Reserve Your Spot",
    text: "Secure your trip with a small deposit or flexible payment option — no pressure, no hidden fees.",
  },
  {
    icon: <LuPlaneTakeoff />,
    title: "Pack & Take Off",
    text: "We handle the planning. You connect with fellow travelers and get ready to explore.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
    <div className={styles.airplane}>
  <img height={200} src={planeDoodle} alt="Airplane Doodle" />
</div>

      <div className={styles.header}>
     <div className={styles.eyebrowWrapper}>
  <span className={styles.eyebrow}>How It Works</span>
  <span className={styles.lineRight}></span>
</div>

        <h2 className={styles.heading}>
          Book Your Next Trip <br /> in Just 3 Simple Steps
        </h2>
        <p className={styles.subtext}>
          Thoughtfully designed journeys that are easy to book and effortless to enjoy.
        </p>
      </div>

      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
