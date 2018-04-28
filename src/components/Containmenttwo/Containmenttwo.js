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
                        <a href={'https://codemode9.github.io/WDYWTE/'} target={"_blank"} className={'leftlinks'} id={"wdywteLink"}>What do you want to eat?</a>
                            <br></br>
                        <a href={'https://dispensary-app.herokuapp.com/'} target={"_blank"} className={'leftlinks'} id={'dispensaryLink'}>Dispensary App</a>
                    </Col>
                    <Col md='6'>
                        <a href={'https://hoth-or-not.herokuapp.com/'} target={"_blank"} className={'rightlinks'} id={'hothLink'}>Hoth or Not</a>
                            <br></br>
                        <a href={'/'} className={'rightlinks'} id={'portfolioLink'}>This Portfolio!</a>
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