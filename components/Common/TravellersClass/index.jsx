"use client";
import { useState } from "react";
import { Dropdown, DropdownButton, ButtonGroup, Form } from "react-bootstrap";
import styles from "./travellersDropdown.module.scss";
import DropdownType from "../Dropdown";
import Button from "../Button";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function TravellersClass() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  const total = adults + children;

  const handleClassChange = (selectedClass) => {
    setTravelClass(selectedClass);
  };

  return (
    <div className={styles.wrapper}>
      <DropdownType
        as={ButtonGroup}
        className={styles.dropdown}
        buttonLabel={`
        ${total} Traveller${total > 1 ? "s" : ""}, ${travelClass}`}
        menuClass={styles.dropdownMenu}
        icon={travelIcon}
        buttonClass={styles.dropdownToggle}
      >
        <div className={styles.counter}>
          <label>Adults</label>
          <div>
            <Button variant="light" onClick={() => setAdults(Math.max(1, adults - 1))}>
              <FiMinus size={18} />
            </Button>
            <span>{adults}</span>
            <Button variant="light" onClick={() => setAdults(adults + 1)}>
              <FiPlus size={18} />
            </Button>
          </div>
        </div>

        <div className={styles.counter}>
          <label>Children</label>
          <div>
            <Button variant="light" onClick={() => setChildren(Math.max(0, children - 1))}>
              <FiMinus size={18} />
            </Button>
            <span>{children}</span>
            <Button variant="light" onClick={() => setChildren(children + 1)}>
              <FiPlus size={18} />
            </Button>
          </div>
        </div>

        <div className={styles.classSelector}>
          <label>Class</label>
          <DropdownButton
            title={travelClass}
            variant="outline-secondary"
            onSelect={handleClassChange}
            className={styles.innerDropdown}
          >
            <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
            <Dropdown.Item eventKey="Premium Economy">
              Premium Economy
            </Dropdown.Item>
            <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
            <Dropdown.Item eventKey="First">First</Dropdown.Item>
          </DropdownButton>
        </div>
      </DropdownType>
    </div>
  );
}

const travelIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
  >
    <path
      d="M6.87695 1.4502C7.35393 1.49364 7.78252 1.69372 8.12793 2.0459L8.2666 2.20117C8.56676 2.5738 8.71534 3.02083 8.71387 3.50684V7.18359L11.6094 16.6299H20.3271C20.8857 16.6299 21.3889 16.8324 21.7832 17.2344L21.9219 17.3896C22.2223 17.7629 22.3693 18.2109 22.3682 18.6973C22.367 19.182 22.2195 19.6283 21.9209 20.001L21.7842 20.1562C21.5967 20.3488 21.383 20.493 21.1514 20.5938C21.3828 20.6943 21.5954 20.8399 21.7832 21.0312L21.9219 21.1865C22.1794 21.5064 22.3248 21.8813 22.3604 22.2881L22.3682 22.4941C22.3669 23.048 22.1746 23.5522 21.7842 23.9531C21.3905 24.3574 20.8864 24.5594 20.3271 24.5576V24.5586H10.3965C9.90765 24.5586 9.46066 24.4035 9.09277 24.0947L8.94043 23.9531C8.59798 23.6027 8.4074 23.1731 8.36426 22.7002L8.35449 22.4941C8.3533 21.9375 8.54768 21.4313 8.94238 21.0303L9.09473 20.8896C9.29753 20.7202 9.52429 20.598 9.76855 20.5215C9.5155 20.4181 9.27406 20.282 9.04688 20.1113C8.46841 19.6766 8.07311 19.0914 7.86133 18.3887L7.86035 18.3848L8.62695 18.1572L7.86035 18.3838L4.75977 7.88867C4.71602 7.76582 4.68467 7.64059 4.66602 7.51367L4.64941 7.36621C4.64372 7.29364 4.63883 7.22106 4.63574 7.14844L4.63086 6.92969V3.50684C4.63088 2.95132 4.82356 2.44562 5.21777 2.04492C5.61138 1.64499 6.11321 1.44279 6.66992 1.44141L6.87695 1.4502ZM19.0859 1.44141L19.2539 1.44531C20.0859 1.48483 20.8168 1.81894 21.4111 2.4248C22.0445 3.07057 22.369 3.86793 22.3682 4.77246V11.1016C22.3681 11.9496 22.0831 12.703 21.5264 13.3262L21.4111 13.4492C20.7776 14.0962 19.9883 14.4325 19.0859 14.4316V14.4326H16.6035C15.7583 14.4326 15.0114 14.1367 14.3994 13.5674L14.2793 13.4502C13.6858 12.8451 13.3631 12.1062 13.3242 11.2705L13.3203 11.1025V4.77246C13.3204 3.86735 13.6454 3.07008 14.2793 2.4248L14.4004 2.30762C15.0124 1.73906 15.7583 1.44245 16.6025 1.44141H19.0859Z"
      stroke="#1A73E8"
      strokeWidth="1.6"
    />
  </svg>
);
