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
    title: "Solo or Together, Always Personal",
    text: "Travel solo or with a group — either way, your journey feels personal, welcoming, and thoughtfully crafted.",
    icon: <LuUsers />,
  },
  {
    title: "Guided by Those Who Belong There",
    text: "Every destination is explored with local experts who bring culture, stories, and hidden perspectives to life.",
    icon: <LuMapPin />,
  },
  {
    title: "Freedom in How You Pay",
    text: "Flexible payment options that remove pressure and let you focus on the excitement of what’s ahead.",
    icon: <LuWallet />,
  },
  {
    title: "Honest Pricing, Real Value",
    text: "Transparent pricing with low booking fees — no surprises, just great experiences at fair value.",
    icon: <LuBadgePercent />,
  },
];

const Difference = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Why This Travel Feels Different
      </h2>

      <p className={styles.subtext}>
        Because the best journeys aren’t just planned — they’re thoughtfully designed.
      </p>

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

        {/* Center */}
        <div className={styles.centerImage}>
          <img src={centerImage} alt="Designed travel experience" />
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
