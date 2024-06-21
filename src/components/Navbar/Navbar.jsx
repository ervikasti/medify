import styles from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

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

  const handleMyBooking = () => {};

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
          <button>My Booking</button>
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
