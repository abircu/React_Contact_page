import{MdCall} from"react-icons/md"
import { MdMessage } from "react-icons/md";
import Button from "./Button.jsx";
import {HiMail} from"react-icons/hi";
import styles from"./contact_form.module.css";
const Contact_form = () => {
 



  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
       <Button id="Call" text="VIA CALL" icon={<MdCall fontSize="24px"/>}/>
      </div>
       <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
       <form>
        <div className={styles.form_controler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
        </div>
          <div className={styles.form_controler}>
            <label htmlFor="name">E-Mail</label>
            <input type="email" name="email"/>
        </div>
           <div className={styles.form_controler}>
            <label htmlFor="text">TEXT</label>
            <textarea type="text" name="text" rows="8"/>
        </div> 
        <div className={styles.buttom_btn}>
            <Button text="SUBMIT"/>
        </div>
       </form>
    </div>
    <div className={styles.contact_image}>
      <img src="images/service.png" alt="" />
    </div>
  </section>;
};

export default Contact_form;
