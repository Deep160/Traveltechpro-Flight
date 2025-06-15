import React, { Fragment } from "react";
import styles from "./flightFIlter.module.scss";
import AirIndia from "@/public/images/Air_India_A_Star_Alliance.jpg";
import AirIndiaExpress from "@/public/images/Air_India_Express.jpg";
import Image from "next/image";
import Checkbox from "@/component/FormElement/Checkbox";

export default function PopularAirlines() {
  return (
    <Fragment>
      {PopularAirlinesData.map((airline) => (
        <div key={airline.id} className={styles.airlineList}>
          <div className="d-flex align-items-center gap-2">
            <div className={styles.airlineImage}>
              {airline?.airlinesLogo ? (
                <Image
                  src={airline.airlinesLogo}
                  alt={airline.name}
                  width={20}
                  height={20}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_552)">
                    <mask
                      id="mask0_1_552"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                    >
                      <path
                        d="M1.28125 15.5302C1.28125 23.538 7.77345 30.0303 15.7806 30.0303C23.7899 30.0303 30.2812 23.5379 30.2812 15.5302C30.2812 7.52247 23.7899 1.03027 15.7806 1.03027C7.77335 1.03037 1.28125 7.52247 1.28125 15.5302Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_1_552)">
                      <path
                        d="M30.2812 15.5302C30.2812 23.538 23.7899 30.0303 15.7806 30.0303C7.77345 30.0303 1.28125 23.5379 1.28125 15.5302C1.28125 7.52247 7.77345 1.03027 15.7806 1.03027C23.7898 1.03037 30.2812 7.52247 30.2812 15.5302Z"
                        fill="#E32526"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_552">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0.75 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
            <span className="airline-name">{airline.name}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="price">
              {airline.currency}
              {airline.price}
            </span>
            <Checkbox />
          </div>
        </div>
      ))}
    </Fragment>
  );
}

const PopularAirlinesData = [
  {
    id: 1,
    airlinesLogo: AirIndia,
    name: "Air India",
    currency: "₹",
    price: "3,659",
  },
  {
    id: 2,
    airlinesLogo: AirIndiaExpress,
    name: "Air-India Express",
    currency: "₹",
    price: "3,659",
  },
  {
    id: 3,
    name: "Air-Asia",
    currency: "₹",
    price: "3,659",
  },
  {
    id: 4,
    name: "Air-Asia",
    currency: "₹",
    price: "3,659",
  },
  {
    id: 5,
    name: "Air-Asia",
    currency: "₹",
    price: "3,659",
  },
];
