import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './modulecss/Contact.module.css'
import emailjs from 'emailjs-com'
import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles({
    button: {
        fontSize: 15,
        color: 'white',
        height: 50,
        cursor: 'pointer',
        backgroundColor: "orange",
        '&:hover':{
            color: '#2a5d9b',
            backgroundColor: "white",

        },
        marginTop:20,
    }
})
  
const ContactForm = () => {
    const classes = useStyles()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6jlucla', 'template_m3rqw57', e.target, "user_c7hTDRc6DgEEkj2BOiw3u")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div className={styles.contactFormContainer}>
            <h1>Get In Touch</h1>
            <p>Please fill out this form and we will get back to you soon</p>
            <form className={styles.contactForm} onSubmit={sendEmail}>
                <label>Name</label>
                <input className={styles.input} type="text" name="name" />
                <label>Email</label>
                <input className={styles.input}type="email" name="email" />
                <label>Phone Number</label>
                <input className={styles.input}type="number" name="phone" />
                <label>Message</label>
                <textarea className={styles.textArea} name="message" rows={5} cols={5}/>
                <Button
                type="submit"
                className={classes.button}>
                 Submit             
                </Button>
                {/* <input className={styles.submitButton}type="submit" value="Send" /> */}
            </form>
        </div>
    )
}

export default ContactForm