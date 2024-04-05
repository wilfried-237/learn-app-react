import react from "../assets/react.svg"
import Button from "../Button.jsx"
import styles from "./Card.module.css"
import propTypes from "prop-types"

function Card(props){
    return(
        <div className={styles.card}>
            <img className={styles.card_img} src={react} alt="Profile Picture" />
            <h2 className={styles.card_title}>{props.name}</h2>
            <p className={styles.card_text}>{props.role}</p>
            <Button></Button>
        </div>
    )
}

Card.propTypes ={
    name: propTypes.string,
    role: propTypes.string,
}
Card.defaultProps = {
    name: "Guest",
    role: "Web Developer",
}

export default Card