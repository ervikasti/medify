import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./HospitalCard.module.css";

const HospitalCard = ({ hospitalList }) => {
  console.log(hospitalList);

  const Details = ({ key, name, city, state, type, rating }) => {
    const [bookingFormIsActive, setBookingFormIsActive] = useState(false);
    return (
      <div key={key}>
        <div className={styles.container}>
          <div>
            <img src="/images/hospital_animated.svg" alt="logo" />
          </div>
          <div className={styles.container_details}>
            <h3>{name}</h3>
            <h5>
              {city},{state}
            </h5>
            <p>{type}</p>
            <p>Free Consultation</p>
            <div>Rating {rating}</div>
          </div>
          <div>
            <div>Status</div>
            <button
              onClick={() => {
                setBookingFormIsActive(!bookingFormIsActive);
              }}
            >
              Book a free center visit
            </button>
          </div>
        </div>
        {bookingFormIsActive && <BookingForm></BookingForm>}
      </div>
    );
  };

  return (
    <>
      <div>
        {hospitalList.length} medical center avalilable in{" "}
        {/* {hospitalList[0].City} */}
      </div>
      {hospitalList.map((data) => (
        <Details
          key={data["Provider ID"]}
          name={data["Hospital Name"]}
          city={data["City"]}
          state={data["State"]}
          type={data["Hospital Type"]}
          rating={data["Hospital overall rating"]}
        ></Details>
      ))}
    </>
  );
};

export { HospitalCard };
