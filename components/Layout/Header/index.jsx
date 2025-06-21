"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.module.scss";
import Link from "next/link";
import { Form, Offcanvas } from "react-bootstrap";
import Button from "@/component/Common/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky-top bg-white ${styles.header} ${
        scrolled ? styles.shrink : ""
      }`}
    >
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Link href="/" className="navbar-brand p-0">
            <Image
              priority
              src={"/logo.jpg"}
              width={251}
              height={54}
              alt="site-logo"
            />
          </Link>
          <Navbar.Toggle
            className="shadow-none border-0"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className={styles.navOffcanvas}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image
                  src={"/logo.jpg"}
                  width={151}
                  height={54}
                  alt="site-logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className={styles.navMenu}>
                <Form.Select
                  className={styles.currentSelect}
                  aria-label="Default select example"
                >
                  <option value="1">USD</option>
                  <option value="2">INR</option>
                  <option value="3">EUR</option>
                  <option value="4">GBP</option>
                  <option value="5">TRY</option>
                </Form.Select>
                <Button className={styles.signinBtn} moduleClass="commonButton" variant="outline-primary">
                  Sign In
                </Button>
                <Button className={styles.signupBtn} moduleClass="commonButton" variant="primary">
                  Sign Up
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}
