"use client";
import React, { useState } from "react";
import styles from "./flightFIlter.module.scss";
import AccordionType, {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "../Accordion";
import RangeSlider from "../RangeSlider";
import Button from "../Button";
import Checkbox from "@/component/FormElement/Checkbox";
import PopularAirlines from "./PopularAirlines";
import OnwardJourney from "./OnwardJourney";

export default function FlightFilter(props) {
  const { moduleClass } = props;
  const marks = {
    0: {
      label: <strong>0</strong>,
    },
    1000: {
      // style: {
      //   color: "#2B2B2B",
      // },
      label: <strong>1000</strong>,
    },
  };
  const [value, setValue] = useState([100, 500]);

  return (
    <div className={`${styles.flightFilter} ${styles[moduleClass]}`}>
      <div className={styles.header}>
        <div className={styles.title}>Filter</div>
        <Button className={styles.resetBtn} variant="link">
          Reset
        </Button>
      </div>

      <AccordionType defaultActiveKey={[1,2,3]} alwaysOpen moduleClass={"accordionType1"}>
        {/* No. of Transit(s) */}
        <AccordionItem eventKey={1}>
          <AccordionHeader>No. of Transit(s)</AccordionHeader>
          <AccordionBody>
            {Transit.map((item) => (
              <Checkbox
                className={Transit.length != item.id ? "mb-2" : ""}
                label={item.label}
                key={item.id}
              />
            ))}
          </AccordionBody>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem eventKey={2}>
          <AccordionHeader>Price Range</AccordionHeader>
          <AccordionBody>
            <span className="d-inline-block mb-4">
              ₹ {value[0]} &nbsp; - &nbsp; ₹ {value[1]}
            </span>
            <RangeSlider
              marks={marks}
              min={0}
              max={1000}
              step={1}
              value={value}
              onChange={(val) => setValue(val)}
            />
          </AccordionBody>
        </AccordionItem>

        {/* Onward Journey */}
        <AccordionItem eventKey={3}>
          <AccordionHeader>Onward Journey</AccordionHeader>
          <AccordionBody>
            <OnwardJourney />
          </AccordionBody>
        </AccordionItem>
      </AccordionType>

      <div className={`d-none d-lg-block ${styles.airlinesBox}`}>
        <div className={styles.airlinesHead}>Popular Airlines</div>
        <div className={styles.airlinesBody}>
          <PopularAirlines />
        </div>
      </div>
    </div>
  );
}

const Transit = [
  { id: 1, label: "Non-stop / 0" },
  { id: 2, label: "1 Stop" },
  { id: 3, label: "2+ Stop" },
];
