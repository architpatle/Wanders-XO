import React, { useState, useRef, useEffect } from "react";
import styles from "./FAQ.module.css";
import { LuChevronDown, LuChevronUp, LuPlaneTakeoff, LuWallet, LuUsers, LuShieldCheck, LuMap, LuInfo } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import InquiryForm from "../../components/InquiryForm/InquiryForm";

const categories = [
  { id: "deposit", label: "Deposits & Payments", icon: <LuWallet /> },
  { id: "rooms", label: "Rooms & Sharing", icon: <LuUsers /> },
  { id: "group", label: "Group Travel", icon: <LuPlaneTakeoff /> },
  { id: "booking", label: "Booking & Refunds", icon: <LuMap /> },
  { id: "safety", label: "Safety & Insurance", icon: <LuShieldCheck /> },
  { id: "custom", label: "Custom Trips", icon: <LuInfo /> },
];

const faqData = {
  deposit: [
    {
      q: "Is the deposit refundable?",
      a: `No. The deposit amount is strictly non-refundable under all circumstances, as it is used to secure hotels, transport, and services in advance.`,
    },
    {
      q: "Can my deposit be transferred to another trip or person?",
      a: `In most cases, the deposit is non-transferable. Any exceptions are assessed on a case-by-case basis and are subject to supplier policies and availability.`,
    },
    {
      q: "What happens if I cancel after paying the deposit?",
      a: `Cancellation policies vary by trip. While the deposit remains non-refundable, additional payments may be refundable or partially refundable depending on the cancellation timeline and supplier terms.`,
    },
  ],

  rooms: [
    {
      q: "Can I opt for a single occupancy room?",
      a: `Yes, single occupancy rooms are available on request for most trips, subject to availability. A single supplement applies and varies by destination.`,
    },
    {
      q: "Can I choose my roommate?",
      a: `If you’re travelling with a friend, we room you together automatically. Solo travellers may request roommate preferences — we do our best to match.`,
    },
    {
      q: "What if I don’t want to share a room?",
      a: `If you prefer complete privacy, we recommend opting for single occupancy.`,
    },
  ],

  group: [
    {
      q: "Who can join a Wander XO group trip?",
      a: `Our trips are open to solo travellers, couples, and friends from around the world.`,
    },
    {
      q: "Are Wander XO trips suitable for solo travelers?",
      a: `Absolutely. Most of our travelers join solo and leave with lifelong friendships.`,
    },
    {
      q: "How big are the group sizes?",
      a: `Our groups are intentionally small, typically 12–18 travellers, ensuring a more personal, premium experience.`,
    },
  ],

  booking: [
    {
      q: "What’s included in a Wander XO trip?",
      a: `Premium hotels, curated experiences, transportation, breakfasts, and on-ground coordinators. Full inclusions vary by itinerary.`,
    },
    {
      q: "What’s not included?",
      a: `Usually excluded: international flights, visa fees, insurance, and meals not specified.`,
    },
    {
      q: "Can I cancel or transfer my booking?",
      a: `Policies vary by trip and are communicated before booking. Some itineraries allow partial credits or transfers.`,
    },
  ],

  safety: [
    {
      q: "Are Wander XO trips safe?",
      a: `Safety is priority — we work with verified hotels, trusted partners, and experienced hosts.`,
    },
    {
      q: "Is travel insurance mandatory?",
      a: `Yes. Comprehensive travel insurance is required for select trips and strongly recommended for all.`,
    },
    {
      q: "Do you assist with visas?",
      a: `We provide documentation support. Visa approval remains subject to embassy decision.`,
    },
  ],

  custom: [
    {
      q: "Can Wander XO arrange custom or private trips?",
      a: `Yes. We offer fully bespoke itineraries tailored to travel style, budget, and preferences.`,
    },
    {
      q: "How do payments work?",
      a: `Secure payments via Stripe or bank transfer. We offer flexible payment plans.`,
    },
  ],
};

const FAQ = () => {
  const [active, setActive] = useState(null);
  const [selected, setSelected] = useState("deposit");

  return (
    <section className={styles.section}>
    <InquiryForm />
      {/* Heading */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>FAQ</span>
        <h2 className={styles.heading}>Everything You Need to Know Before You Travel</h2>
      </div>

      <div className={styles.wrapper}>
        {/* LEFT CATEGORY NAV */}
        <div className={styles.sidebar}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryBtn} ${selected === cat.id ? styles.active : ""}`}
              onClick={() => setSelected(cat.id)}
            >
              <span className={styles.icon}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div className={styles.faqContent}>
          {faqData[selected].map((faq, i) => (
            <div className={styles.card} key={i}>
              <button
                className={styles.question}
                onClick={() => setActive(i === active ? null : i)}
              >
                <span>{faq.q}</span>
                {i === active ? <LuChevronUp /> : <LuChevronDown />}
              </button>

             <AnimatePresence initial={false}>
  {i === active && (
    <motion.div
      className={styles.answer}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      }}
      transition={{ duration: 0.45, ease: [0.24, 0.6, 0.4, 1] }}
    >
      <p>{faq.a}</p>
    </motion.div>
  )}
</AnimatePresence>


              {/* dotted travel divider */}
              <div className={styles.divider}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
