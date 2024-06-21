import styles from "../components/HospitalCard/HospitalCard.module.css";
import { Navbar } from "../components/Navbar/Navbar";
const Booking = () => {
  const name = JSON.parse(localStorage.getItem("name"));
  const city = JSON.parse(localStorage.getItem("city"));
  const state = JSON.parse(localStorage.getItem("state"));
  const type = JSON.parse(localStorage.getItem("type"));
  const rating = JSON.parse(localStorage.getItem("rating"));
  const time = JSON.parse(localStorage.getItem("time"));
  const date = JSON.parse(localStorage.getItem("date"));
  return (
    <>
      <Navbar />
      <h1>Booking Page</h1>
      <div>
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
            <h5>Time : {time}</h5>
            <h5>Date : {date}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export { Booking };
