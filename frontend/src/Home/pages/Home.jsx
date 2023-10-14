import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";
import FeatCard from "../components/FeatCard";
import Feat1 from '../../shared/components/Feat1';
import Feature2 from "../../shared/components/Feature2"
import Feat3 from '../../shared/components/Feat3';
import Feat4 from '../../shared/components/Feat4';
const Home = (props) => {
    console.log(useParams().contactid);
    return <div className={styles.home}>
        <div className={styles.backgroundImg}></div>
        <div className={styles.feat}>
        <FeatCard  img={<Feat1 key="1"/>} heading="Collection Hub Monitoring" description="It helps local authorities to assign specific dumping areas for each community, connect smoothly with our system, and use AI to optimize waste collection." />
        <FeatCard  img={<Feature2 key ="2"/>} heading="Real-Time Garbage Truck Monitoring" description="Uses trash-carrying trucks with cameras and GPS, and AI algorithms to monitor and improve the waste collection process." />
        <FeatCard img={<Feat3 key="3" />} heading="Crowd Reporting System" description="Allows citizens to report waste issues through an app, and our AI quickly validates and prioritizes the reports, ensuring timely and effective solutions." />
        <FeatCard img={<Feat4 key="4"/>} heading="AI Based Fault Reporting" description="Uses AI to detect anomalies such as missed or incomplete waste collections, and sends smart notifications to authorities only when needed, enhancing the waste management system." />
        </div>
    </div>;
};

export default Home;
