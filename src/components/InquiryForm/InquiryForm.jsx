import React from "react";
import styles from "./InquiryForm.module.css";
import { LuSend, LuCalendar, LuUser, LuGlobe, LuFlag, LuPhone, LuMail } from "react-icons/lu";

const InquiryForm = () => {
  return (
    <section className={styles.section}>
      
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.eyebrowWrapper}>
                     <span className={styles.eyebrow}>Travel Inquiry</span>
                     <span className={styles.lineRight}></span>
                   </div>
        <h2 className={styles.heading}>Plan Your Next Journey With Us</h2>
        <p className={styles.subtext}>
          Tell us a bit about your trip — we’ll craft a personalized itinerary just for you.
        </p>
      </div>

      {/* FORM */}
      <form className={styles.form}>
        
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>First Name*</label>
            <input type="text" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name*</label>
            <input type="text" required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Phone Number*</label>
            <input type="tel" placeholder="WhatsApp number preferred" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Email*</label>
            <input type="email" required />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Mention country, dates and number of people*</label>
          <textarea rows={2} required />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Budget in USD (per person, excluding flights)*</label>
            <input type="number" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Flying From*</label>
            <input type="text" placeholder="City / Country" required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Nationality*</label>
            <input type="text" placeholder="Which passport do you hold?" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Preferred Accommodation*</label>
            <input type="text" placeholder="3★ / 4★ / 5★ / Villas" required />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Special Occasions*</label>
          <input type="text" placeholder="Birthdays / Anniversaries / Bachelorette / Proposals" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Anything we should keep in mind?</label>
          <textarea
            placeholder="Food preferences / Interconnecting rooms / Special arrangements etc"
            rows={2}
          />
        </div>

        {/* DECORATIVE DIVIDER */}
        <div className={styles.barcodeWrapper}>
          <div className={styles.barcode}></div>
        </div>

        <button type="submit" className={styles.btn}>
          Send Request <LuSend />
        </button>
        
      </form>
    </section>
  );
};

export default InquiryForm;
