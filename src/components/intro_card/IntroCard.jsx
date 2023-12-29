import styles from "./styles.module.css"
import intro_image from "../../assets/intro_image1.png"
import line from "../../assets/line.svg"

const IntroCard = ({ 
    title = "Notre Parcours Collectif", 
    subtitle = "Embarquez pour une odyssée éducative unique. Explorez la riche diversité de cultures, de langues et d'expériences qui rendent notre aventure académique commune inoubliable.", 
    image,
}) => {
        return (
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <img src={line} className={styles.line}/>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image}  alt="étudiante" />
                </div>
            </div>
          );
}

export default IntroCard;


