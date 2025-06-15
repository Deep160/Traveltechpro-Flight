"use client";
import SelectType, { components } from "react-select";
import styles from "./select.module.scss";

export const CustomControl = (props) => (
  <components.Control {...props}>
    {<svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <path
        d="M23.5664 22.5586V22.5664H5.43262V22.5586H23.5664ZM17.1748 11.1113L17.4131 11.3135L17.7158 11.2334L22.875 9.86816L22.874 9.86719C23.1728 9.78999 23.4484 9.8281 23.7344 9.99609V9.99512C23.9845 10.143 24.1433 10.3332 24.2314 10.5791L24.2646 10.6885C24.3365 10.9649 24.321 11.2195 24.2168 11.4717L24.167 11.5801C24.047 11.8134 23.8804 11.9631 23.6436 12.0479L23.5381 12.0801L23.5342 12.0811L6.71875 16.5225L3.62012 11.3457L4.30469 11.166L7.28809 13.71L7.52637 13.9131L7.8291 13.834L12.8252 12.5303L13.6865 12.3057L13.1553 11.5908L7.7334 4.31641L8.82031 4.03125L17.1748 11.1113Z"
        stroke="#1A73E8"
        strokeWidth="1.2"
      />
    </svg>}
    {props.children}
  </components.Control>
);

export default function Select({ moduleClass,options, placeholder, components, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SelectType
        options={options}
        placeholder={placeholder}
        classNamePrefix="custom"
        className={`${styles[moduleClass]}`}
        components={components}
        {...rest}
      />
    </div>
  );
}
