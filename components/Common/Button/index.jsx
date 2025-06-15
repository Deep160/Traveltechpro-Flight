import React from "react";
import ButtonType from "react-bootstrap/Button";
import styles from "./button.module.scss";

export default function Button(props) {
  const {
    children,
    onClick,
    variant = "",
    className,
    moduleClass,
    ...rest
  } = props;
  return (
    <ButtonType
      variant={variant}
      className={`${styles[moduleClass]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonType>
  );
}
