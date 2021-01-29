import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../components/modulecss/Alumni.module.css'
import Prospects from '../components/Prospects'
import Bios from '../components/assets/prospects.json'
const Alumni = () => {
    return (
        <div>
            <Navbar />
                <div className={styles.contentContainer}>
                    <h1 className={styles.pageHeader}>Notable Alumni</h1>
                    <p className={styles.pageDescription}>Several former students are USTA junior sectional and national champions, successful professional players in the WTA and ATP tours, and successful recruits at top academic and athletic universities across the United States.</p>
                    {Bios.alumni.map((player,i) => (
                        <Prospects 
                            {...player}
                            
                        />
                    ))}
                    {/* <div className={styles.noPicTestimonials}>
                        {Bios.alumni2.map((player,i) => (
                            <Prospects2 
                            {...player}
                            />
                        ))}
                    </div> */}
                </div>
            <Footer />
        </div>
    )
}

export default Alumni