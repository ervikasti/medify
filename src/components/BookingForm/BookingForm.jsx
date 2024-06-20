import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./BookingForm.module.css";
import { TimeCard } from "../TimeCard/TimeCard";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const BookingForm = () => {
  const date = new Date();
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  // let newData = date.getDate() + 3;
  // console.log(dayNames[date.getDay()]);
  // const event = new Date();
  // const options = {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  // };
  // console.log(event.toLocaleDateString(undefined, options));
  const Time = () => {
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <TimeCard title="Today" date={date} />
        </SwiperSlide>
        <SwiperSlide>
          <TimeCard title="Tomorrow" date={date.getDate() + 1} />
        </SwiperSlide>
        <SwiperSlide>
          <TimeCard
            title={`${dayNames[date.getDay() + 2]}, ${date.getDate() + 2}`}
            date={date.getDate() + 2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TimeCard
            title={`${dayNames[date.getDay() + 3]}, ${date.getDate() + 3}`}
            date={date.getDate() + 3}
          />
        </SwiperSlide>
      </Swiper>
    );
  };

  return (
    <div>
      <Time />
    </div>
  );
};

export default BookingForm;
