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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia neque aut dicta. Ab enim obcaecati repellendus eius eos! Voluptates ut eaque ipsam temporibus officia similique, vero dolor at. Ea, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil nulla odio fugit ipsa magnam, quas labore magni sit quos rerum quidem dolorem et nam ea eaque voluptatibus odit voluptatem?</p>
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