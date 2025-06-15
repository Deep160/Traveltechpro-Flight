import Dropdown from "react-bootstrap/Dropdown";
import styles from "./dropdown.module.scss";

export default function DropdownType(props) {
  const {
    children,
    dropdownData = [],
    buttonLabel,
    className,
    moduleClass,
    menuClass,
    buttonClass,
    icon
  } = props;
  return (
    <Dropdown className={`${styles.customDropdown} ${styles[moduleClass]} ${className}`}>
      <Dropdown.Toggle variant="" id="dropdown-basic" className={buttonClass}>
        {icon}{buttonLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu className={menuClass}>
        {children ??
          dropdownData.map((item) => (
            <Dropdown.Item key={item.id} href={item.url}>
              {item.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
