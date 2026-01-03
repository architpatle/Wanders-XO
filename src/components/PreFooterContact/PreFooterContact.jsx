import React, { useState } from "react";
import styles from "./PreFooterContact.module.css";
import { LuPlus, LuMinus } from "react-icons/lu";

const faqs = [
  {
    question: "Design Your Own Trip",
    answer:
      "Create a journey that matches your pace, preferences, and travel style. From destinations to experiences, we tailor everything for you.",
  },
  {
    question: "Explore Signature Journeys",
    answer:
      "Choose from thoughtfully designed itineraries loved by travelers and ready to book.",
  },
  {
    question: "Travel Support & Assistance",
    answer:
      "Our team is available before, during, and after your trip to ensure a smooth experience.",
  },
];

const PreFooterContact = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* LEFT – FAQ */}
        <div className={styles.faq}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqHeader}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <span>{item.question}</span>
                {active === index ? <LuMinus /> : <LuPlus />}
              </button>

              <div
  className={`${styles.faqBody} ${
    active === index ? styles.open : ""
  }`}
>
  <p className={styles.faqContent}>{item.answer}</p>
</div>

            </div>
          ))}
        </div>

        {/* RIGHT – CONTACT */}
        <div className={styles.contact}>
          <span className={styles.eyebrow}>Contact Us</span>
          <h3 className={styles.heading}>Keep In Touch</h3>

          <form className={styles.form}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="How Can I Help you?" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="3" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PreFooterContact;
