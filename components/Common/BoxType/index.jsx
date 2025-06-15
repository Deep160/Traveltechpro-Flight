import React from "react";
import styles from "./boxtype.module.scss";

export default function BoxType({
  onClick,
  moduleClass,
  className,
  icon,
  title,
  desc,
}) {
  return (
    <div
      className={`${styles.boxtype} ${styles[moduleClass]} ${className}`}
      onClick={onClick}
    >
      <span className={styles.iconBox}>{icon}</span>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
