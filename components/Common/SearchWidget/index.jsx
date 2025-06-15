"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Col, Container, Form, Navbar, Offcanvas, Row } from "react-bootstrap";
import styles from "./searchwidget.module.scss";
import Button from "../Button";
import TravellersClass from "../TravellersClass";
import { components } from "react-select";
import Loading from "@/component/FormElement/Select/loading";

const Select = dynamic(() => import("@/component/FormElement/Select"), {
  ssr: false,
});
const DatePicker = dynamic(() => import("@/component/FormElement/Datepicker"), {
  ssr: false,
});

export default function index() {
  const [tab, setTab] = useState("one-way");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className={styles.searchWidgetWrapper}>
      <Navbar expand={"lg"} className="py-0">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}>
          <div className={styles.flightLocation}>
            <span>DEL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M2.4999 6.875V8.125H9.9999L6.5624 11.5625L7.4499 12.45L12.3999 7.5L7.4499 2.55L6.5624 3.4375L9.9999 6.875L2.4999 6.875Z"
                fill="#111928"
              />
            </svg>
            <span>BOM</span>
          </div>
          <div className={styles.flightDetails}>
            <span>05 Sep</span>
            <span>1 Traveller</span>
            <span>Economy</span>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="top"
          className={styles.searchOffcanvas}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Rework Your Flight Search
              <span>Improve your search results with updated preferences.</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-column">
            <div className={styles.tabWrapper}>
              <Container>
                <div className={styles.tabBtnWrapper}>
                  <Button
                    moduleClass="commonButton"
                    className={tab == "one-way" ? styles.active : ""}
                    onClick={() => setTab("one-way")}
                  >
                    One Way
                  </Button>
                  <Button
                    moduleClass="commonButton"
                    className={tab == "round-trip" ? styles.active : ""}
                    onClick={() => setTab("round-trip")}
                  >
                    Round Trip
                  </Button>
                </div>
              </Container>
            </div>
            <div className={styles.searchBarWrapper}>
              <Container>
                <Form>
                  <Row className="align-items-center g-0">
                    <Form.Group
                      className="fromGroup"
                      as={Col}
                      lg={4}
                      xl={2}
                      controlId="formGridFrom"
                    >
                      <div className="fromGroupInner">
                        <Form.Label>From</Form.Label>
                        <Suspense fallback={<Loading />}>
                          <Select
                            options={countries}
                            moduleClass="searchSelect"
                            placeholder="select city"
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                              Control: FromCustomControl,
                            }}
                          />
                        </Suspense>
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="fromGroup"
                      as={Col}
                      lg={4}
                      xl={2}
                      controlId="formGridTo"
                    >
                      <div className="fromGroupInner">
                        <Form.Label>To</Form.Label>
                        <Select
                          moduleClass="searchSelect"
                          placeholder="select city"
                          options={countries}
                          components={{
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null,
                            Control: ToCustomControl,
                          }}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="fromGroup"
                      as={Col}
                      lg={4}
                      xl={2}
                      controlId="formGridDeparture"
                    >
                      <div className="fromGroupInner">
                        <Form.Label>Departure</Form.Label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="fromGroup"
                      as={Col}
                      lg={4}
                      xl={2}
                      controlId="formGridReturn"
                    >
                      <div className="fromGroupInner">
                        <Form.Label>Return</Form.Label>
                        <DatePicker
                          disabled={tab == "one-way"}
                          selected={tab == "one-way" ? null : endDate}
                          onChange={(date) => setEndDate(date)}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="fromGroup"
                      as={Col}
                      lg={4}
                      xl={2}
                      controlId="formGridTravellers"
                    >
                      <div className="fromGroupInner">
                        <Form.Label>Travellers & Class </Form.Label>
                        <TravellersClass />
                      </div>
                    </Form.Group>
                    <Form.Group className="fromGroup" as={Col} lg={4} xl={2}>
                      <div className="fromGroupInner">
                        <Button
                          variant="primary"
                          className="search-btn"
                          moduleClass="commonButton"
                        >
                          Search Flight
                        </Button>
                      </div>
                    </Form.Group>
                  </Row>
                </Form>
              </Container>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      {/* <div className={styles.tabWrapper}>
        <Container>
          <div className={styles.tabBtnWrapper}>
            <Button
              moduleClass="commonButton"
              className={tab == "one-way" ? styles.active : ""}
              onClick={() => setTab("one-way")}
            >
              One Way
            </Button>
            <Button
              moduleClass="commonButton"
              className={tab == "round-trip" ? styles.active : ""}
              onClick={() => setTab("round-trip")}
            >
              Round Trip
            </Button>
          </div>
        </Container>
      </div>
      <div className={styles.searchBarWrapper}>
        <Container>
          <Form>
            <Row className="align-items-center g-0">
              <Form.Group
                className="fromGroup"
                as={Col}
                lg={4}
                xl={2}
                controlId="formGridFrom"
              >
                <div className="fromGroupInner">
                  <Form.Label>From</Form.Label>
                  <Suspense fallback={<Loading />}>
                    <Select
                      options={countries}
                      moduleClass="searchSelect"
                      placeholder="select city"
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        Control: FromCustomControl,
                      }}
                    />
                  </Suspense>
                </div>
              </Form.Group>

              <Form.Group
                className="fromGroup"
                as={Col}
                lg={4}
                xl={2}
                controlId="formGridTo"
              >
                <div className="fromGroupInner">
                  <Form.Label>To</Form.Label>
                  <Select
                    moduleClass="searchSelect"
                    placeholder="select city"
                    options={countries}
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                      Control: ToCustomControl,
                    }}
                  />
                </div>
              </Form.Group>

              <Form.Group
                className="fromGroup"
                as={Col}
                lg={4}
                xl={2}
                controlId="formGridDeparture"
              >
                <div className="fromGroupInner">
                  <Form.Label>Departure</Form.Label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </Form.Group>

              <Form.Group
                className="fromGroup"
                as={Col}
                lg={4}
                xl={2}
                controlId="formGridReturn"
              >
                <div className="fromGroupInner">
                  <Form.Label>Return</Form.Label>
                  <DatePicker
                    disabled={tab == "one-way"}
                    selected={tab == "one-way" ? null : endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </Form.Group>

              <Form.Group
                className="fromGroup"
                as={Col}
                lg={4}
                xl={2}
                controlId="formGridTravellers"
              >
                <div className="fromGroupInner">
                  <Form.Label>Travellers & Class </Form.Label>
                  <TravellersClass />
                </div>
              </Form.Group>
              <Form.Group className="fromGroup" as={Col} lg={4} xl={2}>
                <div className="fromGroupInner">
                  <Button
                    variant="primary"
                    className="search-btn"
                    moduleClass="commonButton"
                  >
                    Search Flight
                  </Button>
                </div>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </div> */}
    </div>
  );
}
const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "IN", label: "India" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "IT", label: "Italy" },
  { value: "JP", label: "Japan" },
  { value: "CN", label: "China" },
  { value: "SG", label: "Singapore" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "TH", label: "Thailand" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "BR", label: "Brazil" },
  { value: "ZA", label: "South Africa" },
  { value: "RU", label: "Russia" },
  { value: "MX", label: "Mexico" },
  { value: "KR", label: "South Korea" },
  { value: "ES", label: "Spain" },
];

export const FromCustomControl = (props) => (
  <components.Control {...props}>
    {
      <svg
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
      </svg>
    }
    {props.children}
  </components.Control>
);
export const ToCustomControl = (props) => (
  <components.Control {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <mask id="path-1-inside-1_1_824" fill="white">
        <path d="M4.83398 23.1665V21.9582H24.1673V23.1665H4.83398ZM22.0201 17.3423L4.83398 12.3459V5.06566L6.59573 5.5792L7.95148 9.59087L12.8863 11.0252L11.8991 1.12891L14.1418 1.78382L17.7523 12.4425L22.9022 13.9457C23.2663 14.0609 23.568 14.2715 23.8072 14.5777C24.0465 14.8846 24.1661 15.2326 24.1661 15.6217C24.1661 16.1404 23.9567 16.6008 23.5378 17.0028C23.1189 17.4048 22.6126 17.5183 22.0189 17.3435" />
      </mask>
      <path
        d="M4.83398 23.1665H3.63398V24.3665H4.83398V23.1665ZM4.83398 21.9582V20.7582H3.63398V21.9582H4.83398ZM24.1673 21.9582H25.3673V20.7582H24.1673V21.9582ZM24.1673 23.1665V24.3665H25.3673V23.1665H24.1673ZM4.83398 12.3459H3.63398V13.2467L4.49898 13.4982L4.83398 12.3459ZM4.83398 5.06566L5.1698 3.9136L3.63398 3.46592V5.06566H4.83398ZM6.59573 5.5792L7.73257 5.195L7.53225 4.60224L6.93155 4.42715L6.59573 5.5792ZM7.95148 9.59087L6.81465 9.97506L7.01516 10.5684L7.61657 10.7432L7.95148 9.59087ZM12.8863 11.0252L12.5514 12.1775L14.2567 12.6731L14.0804 10.906L12.8863 11.0252ZM11.8991 1.12891L12.2355 -0.0229825L10.5285 -0.521462L10.705 1.24802L11.8991 1.12891ZM14.1418 1.78382L15.2783 1.39883L15.0779 0.807072L14.4782 0.631934L14.1418 1.78382ZM17.7523 12.4425L16.6157 12.8275L16.8162 13.4194L17.416 13.5945L17.7523 12.4425ZM22.9022 13.9457L23.2642 12.8016L23.2513 12.7975L23.2384 12.7938L22.9022 13.9457ZM23.8072 14.5777L24.7537 13.8399L24.7527 13.8387L23.8072 14.5777ZM4.83398 23.1665H6.03398V21.9582H4.83398H3.63398V23.1665H4.83398ZM4.83398 21.9582V23.1582H24.1673V21.9582V20.7582H4.83398V21.9582ZM24.1673 21.9582H22.9673V23.1665H24.1673H25.3673V21.9582H24.1673ZM24.1673 23.1665V21.9665H4.83398V23.1665V24.3665H24.1673V23.1665ZM22.0201 17.3423L22.3551 16.19L5.16899 11.1936L4.83398 12.3459L4.49898 13.4982L21.6851 18.4946L22.0201 17.3423ZM4.83398 12.3459H6.03398V5.06566H4.83398H3.63398V12.3459H4.83398ZM4.83398 5.06566L4.49817 6.21771L6.25992 6.73125L6.59573 5.5792L6.93155 4.42715L5.1698 3.9136L4.83398 5.06566ZM6.59573 5.5792L5.4589 5.96339L6.81465 9.97506L7.95148 9.59087L9.08832 9.20667L7.73257 5.195L6.59573 5.5792ZM7.95148 9.59087L7.61657 10.7432L12.5514 12.1775L12.8863 11.0252L13.2212 9.87284L8.2864 8.43855L7.95148 9.59087ZM12.8863 11.0252L14.0804 10.906L13.0932 1.00979L11.8991 1.12891L10.705 1.24802L11.6922 11.1443L12.8863 11.0252ZM11.8991 1.12891L11.5627 2.28079L13.8054 2.93571L14.1418 1.78382L14.4782 0.631934L12.2355 -0.0229825L11.8991 1.12891ZM14.1418 1.78382L13.0052 2.16882L16.6157 12.8275L17.7523 12.4425L18.8888 12.0575L15.2783 1.39883L14.1418 1.78382ZM17.7523 12.4425L17.416 13.5945L22.566 15.0976L22.9022 13.9457L23.2384 12.7938L18.0885 11.2906L17.7523 12.4425ZM22.9022 13.9457L22.5402 15.0898C22.6692 15.1306 22.7689 15.1978 22.8618 15.3166L23.8072 14.5777L24.7527 13.8387C24.3671 13.3453 23.8634 12.9912 23.2642 12.8016L22.9022 13.9457ZM23.8072 14.5777L22.8608 15.3154C22.9358 15.4116 22.9661 15.4999 22.9661 15.6217H24.1661H25.3661C25.3661 14.9652 25.1572 14.3576 24.7537 13.8399L23.8072 14.5777ZM24.1661 15.6217H22.9661C22.9661 15.7731 22.9209 15.9316 22.7069 16.137L23.5378 17.0028L24.3686 17.8686C24.9924 17.27 25.3661 16.5078 25.3661 15.6217H24.1661ZM23.5378 17.0028L22.7069 16.137C22.6362 16.2048 22.596 16.2152 22.5812 16.2186C22.5621 16.2228 22.4968 16.2333 22.3578 16.1924L22.0189 17.3435L21.68 18.4947C22.6531 18.7812 23.6149 18.592 24.3686 17.8686L23.5378 17.0028Z"
        fill="#1A73E8"
        mask="url(#path-1-inside-1_1_824)"
      />
    </svg>
    {props.children}
  </components.Control>
);
