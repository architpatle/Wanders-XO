// import React from "react";
// import styles from "./BookingSteps.module.css";

// const steps = [
//   {
//     step: "01",
//     title: "Reserve Your Spot",
//     text: [
//       "Choose the trip that fits your travel style and preferences.",
//       "Reserve your spot by paying a small deposit.",
//       "The remaining amount can be paid 30 days before departure."
//     ],
//   },
//   {
//     step: "02",
//     title: "Book Your Flights",
//     text: [
//       "Once your trip is confirmed, proceed with flight bookings.",
//       "We assist with flights, visa guidance, and travel insurance.",
//       "Travel insurance is mandatory for all our trips."
//     ],
//   },
//   {
//     step: "03",
//     title: "Connect & Fly",
//     text: [
//       "Connect with fellow travelers via a private WhatsApp group.",
//       "Meet your tour coordinators and local experts.",
//       "Pack your bags and get ready for an unforgettable journey."
//     ],
//   },
// ];

// const BookingSteps = () => {
//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <span className={styles.label}>How It Works</span>

//         <h2 className={styles.heading}>
//           Three simple steps to
//           <br />
//           start your journey.
//         </h2>

//         <div className={styles.steps}>
//           {steps.map((item, index) => (
//             <div key={index} className={styles.step}>
//               <span className={styles.stepNumber}>{item.step}</span>

//               <h3 className={styles.stepTitle}>{item.title}</h3>

//               <div className={styles.stepText}>
//                 {item.text.map((line, i) => (
//                   <p key={i}>{line}</p>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingSteps;


import React from "react";
import styles from "./BookingSteps.module.css";

import img1 from "../../assets/images/bali.jpg";
import img2 from "../../assets/images/paris.jpg";
import img3 from "../../assets/images/egypt.jpg";

const steps = [
  {
    step: "01",
    title: "Reserve Your Spot",
    text: [
      "Select the trip that matches your travel style.",
      "Secure your spot by paying a small deposit.",
      "Pay the remaining amount 30 days before departure.",
    ],
  },
  {
    step: "02",
    title: "Book Your Flights",
    text: [
      "Once the trip is confirmed, book your flights.",
      "We assist with flights, visa guidance, and insurance.",
      "Travel insurance is mandatory for all trips.",
    ],
  },
  {
    step: "03",
    title: "Connect & Fly",
    text: [
      "Join a private WhatsApp group with fellow travelers.",
      "Meet your tour coordinators and local experts.",
      "Pack your bags and get ready to fly.",
    ],
  },
];

const BookingSteps = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container} `}>

        {/* Left – Image Collage */}
        <div className={styles.collage}>
          <img src={img1} alt="Travel moment" className={styles.imgLarge} />
          <img src={img2} alt="Adventure" className={styles.imgTop} />
          <img src={img3} alt="Travel group" className={styles.imgBottom} />
        </div>

        {/* Right – Text */}
        <div className={styles.content}>
          <span className={styles.label}>How It Works</span>

          <h2 className={styles.heading}>
            Three simple steps to
            <br />
            start your journey.
          </h2>

          <div className={styles.steps}>
            {steps.map((item, index) => (
              <div key={index} className={styles.step}>
                <span className={styles.stepNumber}>{item.step}</span>

                <h3 className={styles.stepTitle}>{item.title}</h3>

                {item.text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;
