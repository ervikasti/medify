import styles from "./Button.module.css";
const Button = ({ id, value, click }) => {
  return (
    <button id={id} className={styles.button_primary} onClick={click}>
      {value}
    </button>
  );
};

export { Button };
