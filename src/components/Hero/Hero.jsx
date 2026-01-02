import React, {useState} from "react";
import styles from "./Hero.module.css";

import video1 from "../../assets/videos/hero-vid-1.mp4";
import video2 from "../../assets/videos/hero-vid-2.mp4";
import video3 from "../../assets/videos/hero-vid-3.mp4";

import {gsap} from "gsap";
import {useEffect, useRef} from "react";

const slides = [
    {
        id: 1,
        video: video1,
        cinematic: true,
        words: [
            // Line 1
            {
                text: "YOU",
                size: "xl",
                tone: "accent",
                x: "22%",
                y: "32%"
            }, {
                text: "will",
                size: "sm",
                tone: "muted",
                x: "41%",
                y: "40%"
            }, {
                text: "go",
                size: "md",
                tone: "light",
                x: "48%",
                y: "37%"
            }, {
                text: "PLACES",
                size: "lg",
                tone: "accentSoft",
                x: "56%",
                y: "35%"
            },

            // Line 2
            {
                text: "FEELS",
                size: "xl",
                tone: "accent",
                x: "26%",
                y: "48%"
            }, {
                text: "different",
                size: "md",
                tone: "light",
                x: "52%",
                y: "54%"
            },

            // Line 3
            {
                text: "STORIES",
                size: "lg",
                tone: "accentSoft",
                x: "12%",
                y: "64%"
            }, {
                text: "worth",
                size: "sm",
                tone: "muted",
                x: "39%",
                y: "68%"
            }, {
                text: "REMEMBERING",
                size: "lg",
                tone: "accent",
                x: "48%",
                y: "64%"
            }
        ],

        primaryCta: "Start Your Journey",
        secondaryCta: "Explore Destinations"
    }, 
    // {
    //     id: 2,
    //     video: video2,
    //     heading: "Design Your Perfect Journey",
    //     text: "Customized trips designed exactly the way you want.",
    //     primaryCta: "Customize Trip",
    //     secondaryCta: "Talk to Expert"
    // }, {
    //     id: 3,
    //     video: video3,
    //     heading: "Unforgettable Travel Experiences",
    //     text: "From mountains to beaches, we take you everywhere.",
    //     primaryCta: "View Packages",
    //     secondaryCta: "Contact Us"
    // }
];

const Hero = () => {
    const [activeIndex,
        setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => prev === 0
            ? slides.length - 1
            : prev - 1);
    };

    const cinematicRef = useRef([]);
    useEffect(() => {
        if (!slides[activeIndex]
            ?.cinematic) 
            return;
        
        const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

        tl.fromTo(cinematicRef.current, {
            opacity: 0,
            y: 40,
            filter: "blur(6px)"
        }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.25,
            duration: 1.2,
            ease: "power3.out"
        })
        // HOLD (sentence visible)
            .to({}, {duration: 2.5})
        // FADE OUT
            .to(cinematicRef.current, {
            opacity: 0,
            y: -40,
            filter: "blur(6px)",
            stagger: 0.2,
            duration: 1.2,
            ease: "power3.in"
        });

        return () => tl.kill();
    }, [activeIndex]);

    return (
        <section className={styles.hero}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === activeIndex
                    ? styles.active
                    : ""}`}>
                    <video
                        className={styles.video}
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        playsInline/>

                    <div className={styles.overlay}></div>

                    {slide.cinematic
                        ? (
                            <React.Fragment>
                            <div className={styles.cinematicWrapper}>
                                <div className={styles.cinematicLayer}>
                                    {slide
                                        .words
                                        .map((word, i) => (
                                            <span
                                                key={i}
                                                ref={(el) => (cinematicRef.current[i] = el)}
                                                className={`${styles.word} ${styles[word.size]} ${styles[word.tone]}`}
                                                style={{
                                                left: word.x,
                                                top: word.y
                                            }}>
                                                {word.text}
                                            </span>
                                        ))}
                                </div>
                            

                                {/* CTA CENTER BOTTOM */}
                                <div className={styles.bottomCTA}>
                                    <button className="btn btn-light px-4">
                                        {slide.primaryCta}
                                    </button>
                                    <button className="btn btn-outline-light px-4">
                                        {slide.secondaryCta}
                                    </button>
                                </div>
                                </div>
                            </React.Fragment>
                        )
                        : (
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
                        )}

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
                        className={`${styles.dot} ${index === activeIndex
                        ? styles.activeDot
                        : ""}`}
                        onClick={() => setActiveIndex(index)}></span>
                ))}
            </div>
        </section>
    );
};

export default Hero;
