import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import { Button } from "../Button/Button";
import styles from "./HospitalCard.module.css";

const HospitalCard = ({ hospitalList }) => {
  // console.log(hospitalList);

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
            <Button
              value={"Book a free center visit"}
              click={() => {
                setBookingFormIsActive(!bookingFormIsActive);
                localStorage.setItem("name", JSON.stringify(name));
                localStorage.setItem("city", JSON.stringify(city));
                localStorage.setItem("state", JSON.stringify(state));
                localStorage.setItem("type", JSON.stringify(type));
                localStorage.setItem("rating", JSON.stringify(rating));
                localStorage.setItem("id", JSON.stringify(key));
              }}
            ></Button>
          </div>
        </div>
        {bookingFormIsActive && <BookingForm></BookingForm>}
      </div>
    );
  };

  return (
    <>
      <div>
        {hospitalList.length} medical center avalilable
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
