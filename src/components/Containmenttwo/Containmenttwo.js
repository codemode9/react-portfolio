import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Portfolio from '../../components/Portfolio';
import Side from '../../components/Side';
import './Containmenttwo.css';


const Containmenttwo = (props) => {
    return (
      <Container>
          <Row>
              <Col md='9'>
                <Portfolio />
                    <Row>
                    <Col md='6'>
                        <a href={'#'} className={'leftlinks'}>What do you want to eat?</a>
                            <br></br>
                        <a href={'#'} className={'leftlinks'}>Dispensary App</a>
                    </Col>
                    <Col md='6'>
                        <a href={'#'} className={'rightlinks'}>Hoth or Not</a>
                            <br></br>
                        <a href={'#'} className={'rightlinks'}>This Portfolio!</a>
                    </Col>
                    </Row>
              </Col>
              <Col>
                <Side />
              </Col>
          </Row>
      </Container>
    );
  };

export default Containmenttwo;