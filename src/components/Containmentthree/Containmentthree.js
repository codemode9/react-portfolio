import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Contact from '../../components/Contact';
import Form from '../../components/Form';
import Side from '../../components/Side';
import './Containmentthree.css';


const Containmentthree = (props) => {
    return (
      <Container>
          <Row>
              <Col md='9'>
                <Form />
              </Col>
              <Col>
                <Side />
              </Col>
          </Row>
      </Container>
    );
  };

export default Containmentthree;