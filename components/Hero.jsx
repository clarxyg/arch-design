import { Waves } from "phosphor-react";
import styles from '../styles/Hero.module.css'


export function Hero() {
    return(
        <div className={styles.container_hero}>
            <Waves size={80} color="#803030" className={styles.icon}/>
            <div>
                <h1 className={styles.text}>
                    O design pensado em você
                </h1>
            </div>
            <div className={styles.house_hero}>
                <img src="house.jpg" alt="casa" className={styles.image}/>
            </div>
        </div>
    )
}