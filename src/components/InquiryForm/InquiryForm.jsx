import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import { LuSend } from "react-icons/lu";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const InquiryForm = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    details: "",
    budget: "",
    flyingFrom: "",
    nationality: "",
    stay: "",
    occasion: "",
    notes: "",
  });

  const handleSend = (e) => {
    e.preventDefault();

    const msg = `
New Travel Inquiry

Name: ${form.first} ${form.last}
WhatsApp: ${form.phone}
Email: ${form.email}

Trip Details: ${form.details}
Budget: $${form.budget} per person (ex. flights)
Flying From: ${form.flyingFrom}
Nationality: ${form.nationality}
Accommodation: ${form.stay}
Occasion: ${form.occasion || "—"}

Notes:
${form.notes || "—"}
    `;

    const encoded = encodeURIComponent(msg.trim());
    const businessNumber = "919503889337"; // e.g. "919876543210"

    window.open(`https://wa.me/${businessNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>Travel Inquiry</span>
          <span className={styles.lineRight}></span>
        </div>
        <h2 className={styles.heading}>Plan Your Next Journey With Us</h2>
        <p className={styles.subtext}>
          Tell us a bit about your trip — we’ll craft a personalised itinerary just for you.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSend}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>First Name*</label>
            <input required value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name*</label>
            <input required value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroupFull}>
            <label>Phone Number*</label>
            <PhoneInput
              defaultCountry="in"
              value={form.phone}
              onChange={(val) => setForm({ ...form, phone: val })}
              placeholder="WhatsApp Number preferred"
              inputProps={{ required: true }}
              className={styles.phoneField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email*</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Mention country, dates & number of people*</label>
          <textarea required rows={2} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Budget in USD (per person, excluding flights)*</label>
            <input required type="number" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} />
          </div>

          <div className={styles.inputGroup}>
            <label>Flying From*</label>
            <input required placeholder="City / Country" value={form.flyingFrom} onChange={(e) => setForm({ ...form, flyingFrom: e.target.value })} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Nationality*</label>
            <input required placeholder="Which passport do you hold?" value={form.nationality} onChange={(e) => setForm({ ...form, nationality: e.target.value })} />
          </div>

          <div className={styles.inputGroup}>
            <label>Preferred Accommodation*</label>
            <input required placeholder="3★ / 4★ / 5★ / Villas" value={form.stay} onChange={(e) => setForm({ ...form, stay: e.target.value })} />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Special Occasions*</label>
          <input required placeholder="Birthdays / Anniversaries / Bachelorette..." value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} />
        </div>

        <div className={styles.inputGroup}>
          <label>Anything else we should keep in mind?</label>
          <textarea rows={2} placeholder="Food preferences, special arrangements etc" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        </div>

        <button type="submit" className={styles.btn}>
          Send Request <LuSend />
        </button>
      </form>
    </section>
  );
};

export default InquiryForm;
