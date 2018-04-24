import React from 'react';
import './About.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    <Row>
      <Col>
        <Card body>
          <CardTitle>Contact</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default About;