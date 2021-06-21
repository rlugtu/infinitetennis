import Navbar from '../components/Navbar'
import styles from '../components/modulecss/locations.module.css'
import Footer from '../components/Footer'
import Image from 'next/image'

const Locations = () => {


    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.hackensack}>
                <div className={styles.singleLocation}>
                    <div className={styles.locationText}>
                        <h1>Hackensack Tennis Center</h1>
                        <p>Hackensack Tennis Center - A brand new facility with 8 indoor hard courts also to be part-owned and operated by Infinite Future Tennis Academy. It will be our new indoor home in the Fall of 2021.</p>  
                        <p className={styles.locationAddress}>236 South River Street, Hackensack, NJ 07601</p>
                    </div>
                    <div className={styles.locationImage}>
                        <Image src="/locations/hackensack.jpg" layout="fill" objectFit="cover"/>
                    </div>
                </div>
            </div>
            <div className={styles.singleLocation}>
            <div className={styles.locationImage}>
                        <Image src="/locations/bergenfield.jpg" layout="fill" objectFit="cover"/>
                    </div>
                <div className={styles.locationTextBergenfield}>
                <h1>Bergenfield Tennis Club</h1>
                <p>“Bergenfield Tennis Club -  A private tennis club with 4 outdoor green clay courts, operated by Infinite Future Tennis Academy with the assistance of the town of Bergenfield. Open time will be on the weekends for $15/hr. Soft opening June 21st, 2021. Date of opening to the public to be announced.</p>
                <p className={styles.locationAddress}>Bergenfield Tennis Club at Pelham Pl, Bergenfield, NJ 07621</p>
                </div>
            </div>
          
        </div>
        <Footer />
        </>
    )
}

export default Locations