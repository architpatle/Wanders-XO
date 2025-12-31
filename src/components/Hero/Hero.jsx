import React, { useState } from "react";
import styles from "./Hero.module.css";

import video1 from "../../assets/videos/hero-vid-1.mp4";
import video2 from "../../assets/videos/hero-vid-2.mp4";
import video3 from "../../assets/videos/hero-vid-3.mp4";

const slides = [
  {
    id: 1,
    video: video1,
    heading: "Oh, the places you will go!",
    text: "Travel together, create memories, and explore breathtaking destinations.",
    primaryCta: "Explore Group Trips",
    secondaryCta: "View Packages",
  },
  {
    id: 2,
    video: video2,
    heading: "Design Your Perfect Journey",
    text: "Customized trips designed exactly the way you want.",
    primaryCta: "Customize Trip",
    secondaryCta: "Talk to Expert",
  },
  {
    id: 3,
    video: video3,
    heading: "Unforgettable Travel Experiences",
    text: "From mountains to beaches, we take you everywhere.",
    primaryCta: "View Packages",
    secondaryCta: "Contact Us",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === activeIndex ? styles.active : ""
          }`}
        >
          <video
            className={styles.video}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className={styles.overlay}></div>

          <div className={styles.content}>
            <h1 className={styles.heading}>{slide.heading}</h1>
            <p className={styles.text}>{slide.text}</p>

            <div className={styles.ctaGroup}>
              <button className="btn btn-light px-4">
                {slide.primaryCta}
              </button>
              <button className="btn btn-outline-light px-4">
                {slide.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button className={`${styles.control} ${styles.prev}`} onClick={prevSlide}>
        ‹
      </button>
      <button className={`${styles.control} ${styles.next}`} onClick={nextSlide}>
        ›
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
