import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import styles from '../components/modulecss/Contact.module.css'
import emailjs from 'emailjs-com'
import ContactForm from '../components/Contact'
import Image from 'next/image'
const Contact = () => {
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
    return(
        <div>
            <Navbar />
            <div className={styles.bannerContainer}>
                <Image src="/contactPage/contactBanner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 48%"
                className={styles.bannerPic}
                
                />
                 <h1 className={styles.bannerText}>Contact Us</h1>
            </div>
            {/* <Banner /> */}
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <ContactForm />
                    <div className={styles.connectContainer}>
                        <h1>Connect with us</h1>
                        <p>For questions and inquiries</p>
                        <p>Email us at:</p>
                        <p>paumokuda@gmail.com </p>
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