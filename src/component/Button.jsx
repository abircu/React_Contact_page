
import styles from"./Button.module.css";
const Button= (props) => {
  return (
  <button className={styles.primary_btn}>
     {props.icon}
     {props.text}
  
  </button>
  );
};

export default Button;

