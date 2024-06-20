import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./BookingForm.module.css";

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
