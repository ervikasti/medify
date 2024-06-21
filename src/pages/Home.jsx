import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import axios from "axios";
import { Search } from "../components/Search/Search";
import { HospitalCard } from "../components/HospitalCard/HospitalCard";
import styles from "./Home.module.css";
import { Button } from "../components/Button/Button";
import Sliders from "../components/Sliders/Sliders";

const Home = () => {
  const [stateList, setStateList] = useState();
  const [cityList, setCityList] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [searchBtnCliked, setSearchBtnClicked] = useState(false);
  const [hospitalList, setHospitalList] = useState();

  useEffect(() => {
    try {
      axios
        .get(`https://meddata-backend.onrender.com/states`)
        .then((response) => {
          setStateList(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  useEffect(() => {
    try {
      axios
        .get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then((response) => {
          setCityList(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [selectedState]);

  // Searchinng the list of hospital based on selected state and city
  useEffect(() => {
    try {
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`,
        )
        .then((response) => {
          setHospitalList(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [selectedState, selectedCity, searchBtnCliked]);

  const handleSelect = (e) => {
    console.log(e);
    if (e.target.id === "state") {
      setSelectedState(e.target.value);
    } else if (e.target.id === "city") {
      setSelectedCity(e.target.value);
    } else if (e.target.id === "search_btn") {
      if (selectedState && selectedCity) {
        console.log("search btn clicked");
        setSearchBtnClicked(true);
        console.log(hospitalList);
      }
    }
  };

  const Hero = () => {
    return (
      <section className={styles.hero_container}>
        <section className={styles.hero_container_details}>
          <h3>skip the travel! Find Online</h3>
          <h1>
            Medical <span style={{ color: "#2aa7ff" }}>Centers</span>
          </h1>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <Button value={"Find Centers"} />
        </section>
        <section className={styles.hero_container_image}>
          <img src="/images/hero_image.svg" alt="hero_image" />
        </section>
      </section>
    );
  };

  return (
    <div>
      <div
        className={styles.floating_banner}
      >{`The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.`}</div>
      <Navbar></Navbar>
      {hospitalList && searchBtnCliked ? (
        <HospitalCard hospitalList={hospitalList}></HospitalCard>
      ) : (
        <div className={styles.home_container}>
          <Hero />
          {stateList && (
            <Search
              stateList={stateList}
              handleSelect={handleSelect}
              city={cityList}
            ></Search>
          )}
          {/* offer slider */}
          <Sliders
            data={[
              "offerImage1",
              "offerImg2",
              "offerImage1",
              "offerImg2",
              "offerImage1",
              "offerImg2",
            ]}
          />
          {/* doctors specialist sliders */}
          <h4>Our Medical Specilist</h4>
          <Sliders
            data={[
              "doctor1",
              "doctor2",
              "doctor3",
              "doctor1",
              "doctor2",
              "doctor3",
            ]}
          />
        </div>
      )}
    </div>
  );
};

export { Home };
