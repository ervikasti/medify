import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import axios from "axios";
import { Search } from "../components/Search/Search";
import { HospitalCard } from "../components/HospitalCard/HospitalCard";

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
    // console.log(e.target.id);
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

  return (
    <div>
      <Navbar></Navbar>
      {hospitalList && searchBtnCliked ? (
        <>
          <h1>Search btn Clicked loading hospital details</h1>
          <HospitalCard hospitalList={hospitalList}></HospitalCard>
        </>
      ) : (
        <div>
          <section>
            <section>Part 1</section>
            <section>Part 2</section>
          </section>
          {stateList && (
            <Search
              stateList={stateList}
              handleSelect={handleSelect}
              city={cityList}
            ></Search>
          )}
        </div>
      )}
    </div>
  );
};

export { Home };
