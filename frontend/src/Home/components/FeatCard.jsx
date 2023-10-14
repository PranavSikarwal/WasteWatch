import React from "react";
import styles from "./FeatCard.module.css";

const FeatCard = (props)=>{
    const image = props.img;
    console.log(image);
    return(
        <div className={styles.card}>
            <div className={styles.img}>
                {image}
            </div>
            <div className={styles.heading}>
                {props.heading}
            </div>
            <div className={styles.desc}>
                {props.description}
            </div>
        </div>
    )
};

export default FeatCard;