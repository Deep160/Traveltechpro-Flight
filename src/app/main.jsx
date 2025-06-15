"use client";
import React, { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import Filter from "@/sections/ListingPage/Filter";
import Listing from "@/sections/ListingPage/Listing";
import styles from "./main.module.scss";
import BookingAd from "@/component/Common/BookingAd";
import Button from "@/component/Common/Button";
import Checkbox from "@/component/FormElement/Checkbox";
import PopularAirlines from "@/component/Common/FlightFilter/PopularAirlines";
import OnwardJourney from "@/component/Common/FlightFilter/OnwardJourney";
import FlightFilter from "@/component/Common/FlightFilter";

export default function index() {
  const [filter, setFilter] = useState(false);
  const [time, setTime] = useState(false);
  const [airline, setAirline] = useState(false);
  const [sortby, setSortby] = useState(false);
  return (
    <div className={styles.pageMain}>
      <Container>
        <div className={styles.mainContent}>
          <div className="d-none d-lg-block">
            <Filter />
          </div>
          <div className="flex-grow-1">
            <Listing />
          </div>
          <div className="d-none d-xxl-block">
            <BookingAd />
          </div>
        </div>
      </Container>
      <div className={styles.shortcutBtnWrapper}>
        <Button title={'Filters'} className={styles.shortcutBtn} onClick={() => setFilter(true)}>
          {filterIcon}
        </Button>
        <div className={styles.shortcutBtn} title={'Non stop'}>
          <Checkbox type="switch" className="m-auto" />
        </div>
        <Button title={'Time'} className={styles.shortcutBtn} onClick={() => setTime(true)}>
          {timeIcon}
        </Button>
        <Button title={'Airline'} className={styles.shortcutBtn} onClick={() => setAirline(true)}>
          {airlineIcon}
        </Button>
        <Button title={'Sort by'} className={styles.shortcutBtn} onClick={() => setSortby(true)}>
          {sortbyIcon}
        </Button>
      </div>
      <PopularAirlinesOffcanvas
        show={airline}
        onHide={() => setAirline(false)}
      />
      <FiltersOffcanvas show={filter} onHide={() => setFilter(false)} />
      <SortbyOffcanvas show={sortby} onHide={() => setSortby(false)} />
    </div>
  );
}
function PopularAirlinesOffcanvas({ show, onHide }) {
  return (
    <Offcanvas
      placement="bottom"
      show={show}
      onHide={onHide}
      className={styles.airlinesOffcanvas}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Popular Airlines</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <PopularAirlines />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
function FiltersOffcanvas({ show, onHide }) {
  return (
    <Offcanvas
      placement="bottom"
      show={show}
      onHide={onHide}
      className={styles.filtersOffcanvas}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <FlightFilter moduleClass="offcanvasFilter" />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
function SortbyOffcanvas({ show, onHide }) {
  return (
    <Offcanvas
      placement="bottom"
      show={show}
      onHide={onHide}
      className={styles.sortbyOffcanvas}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sort By</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row className="g-3">
          {sortList.map((sort) => (
            <Col key={sort.id} xs={6}>
              <Checkbox
               className={styles.customCheck}
               id={sort.title}
                label={
                  <>
                    <span className={styles.title}>{sort.title}</span>
                    <span className={styles.desc}>{sort.desc}</span>
                  </>
                }
              />
            </Col>
          ))}
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

const sortList = [
  {
    id: 1,
    title: "Cheapest",
    desc: "Cheapest First",
  },
  {
    id: 2,
    title: "Best overall",
    desc: "Cheap, short flights",
  },
  {
    id: 3,
    title: "Fastest",
    desc: "Fastest First",
  },
  {
    id: 4,
    title: "Departure time",
    desc: "Earliest first",
  },
  {
    id: 5,
    title: "Arrival time",
    desc: "Earliest first",
  },
  {
    id: 6,
    title: "Stops",
    desc: "Fewest stops first",
  },
];
const filterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      d="M8.37495 11.2336V19.5312C8.37495 19.6431 8.40358 19.7532 8.4581 19.8509C8.51261 19.9486 8.59122 20.0308 8.68644 20.0896C8.78167 20.1484 8.89034 20.1819 9.00214 20.1868C9.11394 20.1918 9.22515 20.168 9.3252 20.1179L13.2627 18.1492C13.3716 18.0946 13.4631 18.0108 13.5271 17.9072C13.5911 17.8036 13.6249 17.6842 13.6249 17.5625V11.2336L19.3829 4.19728C19.4375 4.13058 19.4785 4.05377 19.5034 3.97123C19.5284 3.8887 19.5368 3.80206 19.5283 3.71626C19.5198 3.63046 19.4944 3.54717 19.4537 3.47117C19.413 3.39516 19.3577 3.32792 19.291 3.27328C19.2243 3.21865 19.1475 3.17768 19.065 3.15273C18.9824 3.12778 18.8958 3.11932 18.81 3.12786C18.7242 3.13639 18.6409 3.16173 18.5649 3.20245C18.4889 3.24317 18.4216 3.29846 18.367 3.36516L12.4608 10.5839C12.3647 10.7013 12.3123 10.8483 12.3124 11V17.1569L9.68745 18.4694V11C9.68757 10.8483 9.63517 10.7013 9.53914 10.5839L4.50964 4.43747H14.9374C15.1115 4.43747 15.2784 4.36833 15.4015 4.24526C15.5246 4.12219 15.5937 3.95527 15.5937 3.78122C15.5937 3.60717 15.5246 3.44025 15.4015 3.31718C15.2784 3.19411 15.1115 3.12497 14.9374 3.12497H3.12495C3.00063 3.12489 2.87884 3.16012 2.77377 3.22657C2.66869 3.29301 2.58465 3.38794 2.53143 3.50029C2.47821 3.61264 2.458 3.7378 2.47315 3.8612C2.4883 3.98459 2.53819 4.10114 2.61701 4.19728L8.37495 11.2336Z"
      fill="#585858"
    />
  </svg>
);

const timeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5ZM15 5C12.3478 5 9.8043 6.05357 7.92893 7.92893C6.05357 9.8043 5 12.3478 5 15C5 17.6522 6.05357 20.1957 7.92893 22.0711C9.8043 23.9464 12.3478 25 15 25C17.6522 25 20.1957 23.9464 22.0711 22.0711C23.9464 20.1957 25 17.6522 25 15C25 12.3478 23.9464 9.8043 22.0711 7.92893C20.1957 6.05357 17.6522 5 15 5ZM15 7.5C15.3062 7.50004 15.6017 7.61244 15.8305 7.81589C16.0593 8.01934 16.2054 8.29969 16.2413 8.60375L16.25 8.75V14.4825L19.6337 17.8663C19.8579 18.0912 19.9881 18.393 19.9978 18.7105C20.0075 19.0279 19.896 19.3371 19.6859 19.5753C19.4759 19.8136 19.1831 19.9629 18.8669 19.993C18.5508 20.0231 18.235 19.9318 17.9838 19.7375L17.8663 19.6337L14.1163 15.8837C13.922 15.6893 13.7972 15.4363 13.7612 15.1637L13.75 15V8.75C13.75 8.41848 13.8817 8.10054 14.1161 7.86612C14.3505 7.6317 14.6685 7.5 15 7.5Z"
      fill="#585858"
    />
  </svg>
);

const airlineIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M4.34132 22.95L16.0038 7.08C16.1855 6.82167 16.4226 6.61875 16.7151 6.47125C17.0076 6.32375 17.3142 6.25 17.6351 6.25H23.8026C24.4509 6.25 24.9759 6.49583 25.3776 6.9875C25.7776 7.47917 25.913 8.03875 25.7838 8.66625L22.9276 22.935C22.8817 23.1792 22.7663 23.3758 22.5813 23.525C22.3955 23.675 22.1851 23.75 21.9501 23.75H4.74507C4.54507 23.75 4.39924 23.6608 4.30757 23.4825C4.21591 23.3033 4.22716 23.1258 4.34132 22.95ZM17.8613 16.7313C18.5272 16.7313 19.0901 16.5042 19.5501 16.05C20.0101 15.5967 20.2401 15.0417 20.2401 14.385C20.2401 13.7275 20.0101 13.1692 19.5501 12.71C19.0901 12.25 18.5272 12.02 17.8613 12.02C17.208 12.02 16.6559 12.2483 16.2051 12.705C15.7542 13.1617 15.5288 13.7208 15.5288 14.3825C15.5288 15.0442 15.7542 15.6008 16.2051 16.0525C16.6559 16.5042 17.208 16.7304 17.8613 16.7313Z"
      fill="#585858"
    />
  </svg>
);

const sortbyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M5 7.5H25V10H5V7.5ZM10 13.75H25V16.25H10V13.75ZM16.25 20H25V22.5H16.25V20Z"
      fill="#585858"
    />
  </svg>
);
