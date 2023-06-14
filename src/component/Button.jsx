
import styles from"./Button.module.css";
const Button= (prop) => {
  return (
  <button
   className={prop.isOutline ? styles.outline_btn : styles.primary_btn}>
     {prop.icon}
     {prop.text}
  </button>
  );
};

export default Button;

