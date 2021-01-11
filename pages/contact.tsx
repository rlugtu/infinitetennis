import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import styles from '../components/modulecss/Contact.module.css'
import emailjs from 'emailjs-com'
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6jlucla', 'template_m3rqw57', e.target, "user_c7hTDRc6DgEEkj2BOiw3u")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return(
        <div>
            <Navbar />
            <Banner />
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <div className={styles.contactFormContainer}>
                        <h1>Get In Touch</h1>
                        <p>Please fill out this form and we will be in touch</p>
                        <form className={styles.contactForm} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className={styles.input} type="text" name="name" />
                            <label>Email</label>
                            <input className={styles.input}type="email" name="email" />
                            <label>Phone Number</label>
                            <input className={styles.input}type="number" name="phone" />
                            <label>Message</label>
                            <textarea className={styles.textArea} name="message" rows={5} cols={5}/>
                            <input className={styles.submitButton}type="submit" value="Send" />
                        </form>
                    </div>
                    <div className={styles.connectContainer}>
                        <h1>Connect with us:</h1>
                        <p>For questions and inquiries</p>
                        <p>Email us at paumokuda@gmail.com </p>
                        <h2 className={styles.location}>Current Camp Locations:</h2>
                        <p>Haworth Country Club</p>
                        <p>Waldwick Covered Courts</p>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Contact