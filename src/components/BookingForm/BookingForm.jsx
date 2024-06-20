import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./BookingForm.module.css";

// // Import required modules

// import SwiperCore from "swiper";

// // Install modules
// SwiperCore.use([Navigation]);

// function BookingForm({ isActive }) {
//   // // Sample data for slots
//   const slots = ["Today", "Tomorrow", "Friday", "Monday"];
//   // const timing = {
//   //   morning: ["11:30 AM"],
//   //   afternoon: ["01:30 PM", "02:00 PM", "02:30 PM"],
//   //   evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
//   // };

//   // const [timeDisplay, setTimeDisplay] = useState(false);
//   // const handleSlotSelection = (slot) => {
//   //   setTimeDisplay(!timeDisplay);
//   //   setHandleTime(null);
//   // };

//   // const [handleTime, setHandleTime] = useState(false);
//   // console.log(handleTime);

//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       {isActive && (
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           navigation={true}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log("slide change")}
//           className="mySwiper"
//         >
//           {slots.map((slot, index) => (
//             <SwiperSlide key={index}>
//               <h2>Almaty, Kazakhstan</h2>
//               <Panel
//                 title="About"
//                 isActive={activeIndex === 0}
//                 onShow={() => setActiveIndex(0)}
//               >
//                 {slot}
//               </Panel>
//               {/* <button onClick={() => handleSlotSelection(slot)}>{slot}</button> */}
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         // {timeDisplay && (
//         //   <div className={styles.time}>
//         //     <div className={styles.time_slot}>
//         //       <div>Morning</div>
//         //       {timing.morning.map((val) => (
//         //         <button
//         //           onClick={() => {
//         //             setHandleTime(val);
//         //           }}
//         //         >
//         //           {val}
//         //         </button>
//         //       ))}
//         //     </div>

//         //     <div className={styles.time_slot}>
//         //       <div>Afternoon</div>
//         //       {timing.afternoon.map((val) => (
//         //         <button>{val}</button>
//         //       ))}
//         //     </div>

//         //     <div className={styles.time_slot}>
//         //       <div>Evening</div>
//         //       {timing.evening.map((val) => (
//         //         <button>{val}</button>
//         //       ))}
//         //     </div>
//         //   </div>
//         // )}
//       )}
//     </>
//   );
// }

// function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({ title, children, isActive, onShow }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
//     </section>
//   );
// }

// export default BookingForm;

const BookingForm = () => {
  const [isActive, setIsActive] = useState(false);
  // console.log(isActive);

  const Time = () => {
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>Today</SwiperSlide>
        <SwiperSlide>Tomorrow</SwiperSlide>
        <SwiperSlide>Day after tomorrow</SwiperSlide>
        <SwiperSlide>future</SwiperSlide>
      </Swiper>
    );
  };

  return (
    <div>
      <h1>Days of week</h1>
      {isActive ? (
        <Time />
      ) : (
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Click to show details
        </button>
      )}
    </div>
  );
};

export default BookingForm;
