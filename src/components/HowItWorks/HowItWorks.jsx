import React, { useEffect, useRef } from "react";
import styles from "./HowItWorks.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import step1 from "../../assets/images/japan.jpg";
import step2 from "../../assets/images/paris.jpg";
import step3 from "../../assets/images/switzerland.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    image: step1,
    count: "1 / 3",
    title: "Choose Your Destination",
    text: "Browse curated trips or customize your own journey based on your travel style, pace, and budget.",
  },
  {
    image: step2,
    count: "2 / 3",
    title: "Reserve Your Spot",
    text: "Secure your trip with a small deposit or flexible payment option — no pressure, no hidden fees.",
  },
  {
    image: step3,
    count: "3 / 3",
    title: "Pack & Take Off",
    text: "We handle the planning. You connect with fellow travelers and get ready to explore.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const wrapperHeight = wrapperRef.current.offsetHeight;

      // Initial stack (1 visible, others below)
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i === 0 ? 0 : wrapperHeight,
          zIndex: cards.length + i,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -100px",                 // 🔑 lock scroll immediately
          end: `+=${cards.length * 100}%`,  // 🔑 enough scroll room
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(
          card,
          {
            y: 0,           // 🔑 exact overlap
            ease: "none",
          },
          i
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* HEADER (UNCHANGED) */}
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

      {/* STACK */}
      <div className={styles.stepsWrapper} ref={wrapperRef}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={styles.stepCard}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className={styles.leftImage}>
              <img src={step.image} alt={step.title} />
            </div>

            <div className={styles.rightContent}>
              <div className={styles.barcodeContainer}>
                <div className={styles.barcode}></div>
              </div>

              <div className={styles.stepCount}>{step.count}</div>

              <div className={styles.textBlock}>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
