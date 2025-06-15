"use client";
import React from "react";
import { Nav, Tab, Form } from "react-bootstrap";
import styles from "./listing.module.scss";
import FlightBox from "@/component/Common/Flight/FlightBox";

const tabList = [
  {
    id: 1,
    name: "Cheapest",
    time: "3h 20m",
    price: "Rs. 5,434",
  },
  {
    id: 2,
    name: "Best overall",
    time: "3h 20m",
    price: "Rs. 5,434",
  },
  {
    id: 3,
    name: "Fastest",
    time: "3h 20m",
    price: "Rs. 5,434",
  },
];

export default function Listing() {
  return (
    <div className={styles.listing}>
      <div className={styles.tabWrapper}>
        <div className={styles.headContent}>
          <span className={styles.title}>Sort by</span>
          <span className={styles.searchCount}>10+ Flights Available</span>
        </div>
        <Tab.Container defaultActiveKey="Cheapest">
          <Nav variant="pills">
            {tabList.map((item) => (
              <Nav.Item key={item.id}>
                <Nav.Link eventKey={item.name}>
                  <div className="name">{item.name}</div>
                  <div className="d-flex gap-3 justify-content-center">
                    <span className="price">{item.price}</span>
                    <span className="time">{item.time}</span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item>
              <Form.Select
                className={styles.currentSelect}
                aria-label="Default select example"
              >
                <option>Sory by</option>
                <option value="1">Departure time</option>
                <option value="2">Arrival time</option>
                <option value="3">Stops</option>
              </Form.Select>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="Cheapest">
              <FlightList />
            </Tab.Pane>
            <Tab.Pane eventKey="Best overall">
              <FlightList />
            </Tab.Pane>
            <Tab.Pane eventKey="Fastest">
              <FlightList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      <FlightList />
    </div>
  );
}

function FlightList() {
  return (
    <>
      {flightList.map((flight) => (
        <FlightBox
          key={flight.id}
          className={flight.id == 1 ? 'active':''}
          airlineLogo={flight.airlineLogo}
          airlineName={flight.airlineName}
          departureFrom={flight.departureFrom}
          departureTime={flight.departureTime}
          arrivalTo={flight.arrivalTo}
          arrivalTime={flight.arrivalTime}
          fligthTime={flight.fligthTime}
          totalPrice={flight.totalPrice}
          finalPrice={flight.finalPrice}
        />
      ))}
    </>
  );
}

const flightList = [
  {
    id: 1,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Air Asia",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 2,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Indigo",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 3,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Air Asia",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 4,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Indigo",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 5,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Air Asia",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 6,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Indigo",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 7,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Air Asia",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 8,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Indigo",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
  {
    id: 9,
    airlineLogo: "/images/AirAsia.jpg",
    airlineName: "Air Asia",
    departureFrom: "AMD",
    departureTime: "09:15",
    arrivalTo: "DEL",
    arrivalTime: "10:55",
    fligthTime: "1h 40m",
    totalPrice: "Rs.4,809",
    finalPrice: "Rs 2,357",
  },
];
