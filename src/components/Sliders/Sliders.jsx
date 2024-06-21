// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Sliders.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Sliders() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={"swiper"}
      >
        <SwiperSlide className={`swiper - slide`}>
          <img src="/images/offerImage1.svg" />
        </SwiperSlide>
        <SwiperSlide className={`swiper - slide`}>Slide 2</SwiperSlide>
        <SwiperSlide className={`swiper - slide`}>Slide 3</SwiperSlide>
        <SwiperSlide className={`swiper - slide`}>Slide 4</SwiperSlide>
        <SwiperSlide className={`swiper - slide`}>Slide 5</SwiperSlide>
        <SwiperSlide className={`swiper - slide`}>Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
