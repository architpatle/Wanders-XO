import React from "react";
import styles from "./PopularJourneys.module.css";
import { LuArrowUpRight } from "react-icons/lu";

import france from "../../assets/images/paris.jpg";
import japan from "../../assets/images/japan.jpg";
import dubai from "../../assets/images/dubai.jpg";
import bali from "../../assets/images/bali.jpg";

const journeys = [
  {
    title: "France · Paris",
    description:
      "Romantic streets, iconic landmarks, and timeless culture in the heart of Europe.",
    duration: "7 Days",
    keyword: "Culture",
    image: france,
  },
  {
    title: "Japan · Tokyo & Kyoto",
    description:
      "A seamless blend of tradition and innovation, from ancient temples to neon skylines.",
    duration: "9 Days",
    keyword: "Heritage",
    image: japan,
  },
  {
    title: "UAE · Desert Escape",
    description:
      "Luxury cityscapes, golden dunes, and unforgettable desert adventures.",
    duration: "6 Days",
    keyword: "Adventure",
    image: dubai,
  },
  {
    title: "Bali · Island Life",
    description:
      "Tropical landscapes, slow living, and soulful experiences by the sea.",
    duration: "8 Days",
    keyword: "Wellness",
    image: bali,
  },
];

const PopularJourneys = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
         {/* EYEBROW */}
      <div className={styles.eyebrowWrapper}>
        <span className={styles.eyebrow}>Popular Journeys</span>
        <span className={styles.lineRight}></span>
      </div>
        <h2 className={styles.heading}>Journeys People Fall In Love With</h2>
        <p className={styles.subheading}>
          Curated destinations designed for unforgettable moments — traveled,
          loved, and recommended by our community.
        </p>
      </div>

      {/* Infinite Carousel */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {[...journeys, ...journeys].map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt={item.title} />

              <span className={styles.keyword}>{item.keyword}</span>

              <div className={styles.infoCard}>
                {/* Arrow inside info card */}
                <div className={styles.iconBtn}>
                  <LuArrowUpRight />
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className={styles.footer}>{item.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularJourneys;
