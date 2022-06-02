import React from "react";
import {
  Header,
  Home,
  Footer,
  About,
  Education,
  Experience,
  Services,
  Review,
  Tools,
} from "../sections";

import { Row, Col, Container } from "react-bootstrap";
import ScrollTopArrow from "./ScrollTopArrow";

import "../components/Icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Certification from "sections/Certification";
import Contact from "sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Review />

        <About />
        {/* <Container>
          <Row>
            <Col md={6}>
              <Education />
            </Col>
            <Col md={6}></Col>
          </Row>
        </Container> */}
        <Education />

        <Experience />
        <Certification />
        {/* <Services />
        <Tools /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
      <ScrollTopArrow />
    </>
  );
}

export default App;
