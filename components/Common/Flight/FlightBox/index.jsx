import React from "react";
import styles from "./flightbox.module.scss";
import Image from "next/image";

export default function FlightBox(props) {
  const {
    airlineLogo,
    airlineName,
    departureFrom,
    departureTime,
    arrivalTo,
    arrivalTime,
    fligthTime,
    totalPrice,
    finalPrice,
    className
  } = props;
  return (
    <div className={`${styles.flightBox} ${className}`}>
      <div className={styles.airlineInfo}>
        <span className={styles.airlineLogo}>
          <Image src={airlineLogo} width={48} height={48} alt={airlineName} />
        </span>
        <span className={styles.airlineName}>{airlineName}</span>
      </div>
      <div className={styles.flightInfo}>
        <div className={styles.departure}>
          <span className={styles.time}>{departureTime}</span>
          <span className={styles.location}>{departureFrom}</span>
        </div>
        <div className={styles.middle}>
          <span>Nonstop</span>
          <span className="arrow">
            <svg
              className="desktop d-none d-md-block"
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="18"
              viewBox="0 0 255 18"
              fill="none"
            >
              <g clipPath="url(#clip0_1_127)">
                <path
                  d="M240.374 0L254.893 14.828H-4.99934L-5 10.828H214.915H245.438L237.605 2.828L240.374 0Z"
                  fill="#E0E0E0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_127">
                  <rect width="255" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
             className="d-md-none mobile"
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="2"
              viewBox="0 0 51 2"
              fill="none"
            >
              <path d="M0.5 1H50.5" stroke="#9CA3AF" />
            </svg>
          </span>
          <span>{fligthTime}</span>
        </div>
        <div className={styles.arrival}>
          <span className={styles.time}>{arrivalTime}</span>
          <span className={styles.location}>{arrivalTo}</span>
        </div>
      </div>
      <div className={styles.priceInfo}>
        <span className={styles.totalPrice}>{totalPrice}</span>
        <span className={styles.finalPrice}>{finalPrice}</span>
      </div>
    </div>
  );
}
