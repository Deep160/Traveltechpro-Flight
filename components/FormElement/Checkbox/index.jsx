import React from "react";
import styles from "./checkbox.module.scss";
import { Form } from "react-bootstrap";

export default function Checkbox(props) {
  const {
    moduleClass = "",
    className = "",
    id,
    label,
    type = "checkbox",
    ...rest
  } = props;
  return (
    <Form.Check // prettier-ignore
      type={type}
      id={id ?? label}
      label={label}
      className={`${styles.customCheck} ${className} ${styles[moduleClass]}`}
      {...rest}
    />
  );
}
