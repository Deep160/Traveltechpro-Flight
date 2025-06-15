"use client";

import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./rangeslider.module.scss";

export default function RangeSlider(props) {
  const {
    min = 0,
    max = 100,
    step = 1,
    marks,
    className,
    onChange,
    value
  } = props;

  return (
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={`${styles.customSlider} ${className}`}
      range
      marks={marks}
      allowCross={false}
      trackStyle={{ backgroundColor: "#007bff", height: 6 }}
      handleStyle={{
        borderColor: "#007bff",
        height: 20,
        width: 20,
        marginTop: -7,
        backgroundColor: "#fff",
      }}
      railStyle={{ backgroundColor: "#ddd", height: 6 }}
    />
  );
}
