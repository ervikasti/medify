import { Button } from "../Button/Button";
import styles from "./Search.module.css";
const Search = ({ stateList, city, handleSelect }) => {
  return (
    <div className={styles.search_home}>
      <div>
        <label htmlFor="state">State</label>
        <select name="state" id="state" onChange={handleSelect}>
          <option value="none" selected disabled>
            State
          </option>
          {stateList.map((value, index) => (
            <option key={value + index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">City</label>
        <select name="city" id="city" onChange={handleSelect}>
          <option value="none" selected disabled>
            City
          </option>
          {city &&
            city.map((value, index) => (
              <option key={value + index} value={value}>
                {value}
              </option>
            ))}
        </select>
      </div>

      <Button id="search_btn" value={"search"} click={handleSelect} />
    </div>
  );
};

export { Search };
