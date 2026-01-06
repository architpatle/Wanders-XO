import React from "react";
import styles from "./PopularJourneys.module.css";

import france from "../../assets/images/paris.jpg";
import japan from "../../assets/images/japan.jpg";
import bali from "../../assets/images/bali.jpg";
import dubai from "../../assets/images/dubai.jpg";
import { LuAArrowUp, LuArrowBigRight, LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const journeys = [
    {
        location: "PARIS · FRANCE",
        code: "CDG",
        image: france
    }, {
        location: "TOKYO · JAPAN",
        code: "NRT",
        image: japan
    }, {
        location: "BALI · INDONESIA",
        code: "DPS",
        image: bali
    }, {
        location: "DUBAI · UAE",
        code: "FLR",
        image: dubai
    }
];

const PopularJourneys = () => {
    return (
        <section className={styles.section}>
            {/* HEADER */}
            <div className={styles.header}>
                <div className={styles.eyebrowWrapper}>
                    <span className={styles.eyebrow}>Popular Journeys</span>
                    <span className={styles.lineRight}></span>
                </div>

                <h2 className={styles.heading}>
                    Journeys People Fall In Love With
                </h2>

                <p className={styles.subheading}>
                    Destinations designed like keepsakes — collected through travel, memories, and
                    moments worth revisiting.
                </p>
            </div>

            {/* Infinite Carousel */}
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    {[
                        ...journeys,
                        ...journeys
                    ].map((item, index) => (
                        <div className={styles.ticketCard} key={index}>

                            {/* TOP DESTINATION */}
                            <div className={styles.ticketTop}>
                                {item.location}
                            </div>

                            {/* IMAGE */}
                            <div className={styles.ticketImage}>
                                <img src={item.image} alt={item.location}/>
                            </div>

                            {/* BOTTOM */}
                            <div className={styles.ticketBottom}>
                                <div className={styles.ticketBottomInner}>
                                    <span className={styles.airportCode}>{item.code}</span>
                                    <div className={styles.barcode}></div>
                                </div>

                                {/* EXPLORE CTA BELOW */}
                                <button
                                    className={styles.exploreBtn}
                                    onClick={() => { 
                                      // future route // navigate(`/journeys/${item.code.toLowerCase()}`);
                                       }}>
                                    Explore
                                    <span className={styles.arrow}> <LuArrowRight fontSize={18} style={{padding:"2px",color:"#fff",background: "#000000ff", borderRadius: "50%"}} /> </span>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularJourneys;
