import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Contact from '../../components/Contact';
import Side from '../../components/Side';
import './Containmentthree.css';


const Containmentthree = (props) => {
    return (
      <Container>
          <Row>
              <Col md='9'>
                <Contact />
              </Col>
              <Col>
                <Side />
              </Col>
          </Row>
      </Container>
    );
  };

export default Containmentthree;