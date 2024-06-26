import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

const Navbar = () => {
  const company_name = "Medify";
  let btnArray = [
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Software for Provider",
    "facilities",
  ];

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.navbar_logo}>
          <img src="/images/medify_logo.svg" alt="logo" />
          <span>{company_name}</span>
        </div>
      </Link>
      <div className={styles.navbar_section}>
        {btnArray.map((val, index) => (
          <li key={index}>{val}</li>
        ))}

        <Link to="/booking">
          <Button value={"My Booking"} />
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
