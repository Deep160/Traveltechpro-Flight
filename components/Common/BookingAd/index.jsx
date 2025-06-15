import React from "react";
import styles from "./bookingad.module.scss";
import Button from "../Button";

export default function BookingAd() {
  return (
    <div className={styles.bookingAd}>
      <video width="100%" height="auto" autoPlay loop>
        <source src="/images/Flight_Animation.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h2>Explore the World</h2>
        <h3>with Exclusive Deals!</h3>
        <p>
          Book your next adventure now and save up to 40% on flights, hotels,
          and tours!
        </p>
        <Button className={styles.actionButton}>Start Your Journey</Button>
      </div>
    </div>
  );
}
