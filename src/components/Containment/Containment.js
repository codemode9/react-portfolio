import React from "react";
import { Container, Row, Col } from 'reactstrap';
import About from '../../components/About';
import Side from '../../components/Side';
import './Containment.css';


const Containment = (props) => {
    return (
      <Container>
          <Row>
              <Col md='9'>
                <About />
              </Col>
              <Col>
                <Side />
              </Col>
          </Row>
      </Container>
    );
  };

export default Containment;