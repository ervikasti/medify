import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./BookingForm.module.css";

// Import required modules
import { Navigation,Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';


// Install modules
SwiperCore.use([Navigation]);

function BookingForm() {
  // Sample data for slots
  const slots = ['Today', 'Tomorrow', 'Friday', 'Monday'];
  const timing = {
    morning:['11:30 AM'],
    afternoon: ['01:30 PM', '02:00 PM', '02:30 PM'],
    evening: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
  };
  

  const [timeDisplay, setTimeDisplay] = useState(false);
  const handleSlotSelection = (slot) => {
      setTimeDisplay(!timeDisplay);
      setHandleTime(null);
  };

  const [handleTime, setHandleTime] = useState(null);
  console.log(handleTime)



  return (
    <>
    
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
      >
      {slots.map((slot, index) => (
        <SwiperSlide key={index} >
          <button onClick={()=>handleSlotSelection(slot)}>{slot}</button>
        </SwiperSlide>
      ))}
    </Swiper>


    {timeDisplay && (
            <div className={styles.time}>
              <div className={styles.time_slot}>
                <div>Morning</div>
              {timing.morning.map((val)=>(
                <button onClick={ ()=>{setHandleTime(val)}}>{val}</button>
              ))}
              </div>

              <div className={styles.time_slot}>
                <div>Afternoon</div>
              {timing.afternoon.map((val)=>(
                <button>{val}</button>
              ))}
              </div>

              <div className={styles.time_slot}>
                <div>Evening</div>
              {timing.evening.map((val)=>(
                <button>{val}</button>
              ))}
              </div>
            </div>
          )}

    </>
  );
}

export default BookingForm;
