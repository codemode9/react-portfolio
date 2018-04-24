import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Footer.css";


const Footer = Footer => <footer className="foot">
<Container>
    <Row>
        <Col md="2">
            <h4 className="lowerlogo">Me, Myself and I ©</h4>
        </Col>
        <Col md="8" className="peeps">
            <a href={"https://github.com/codemode9"} className="gitlinks" target="_blank">Linkedin</a><br></br>
            <a href={"https://github.com/ianhawkoh"} className="gitlinks" target="_blank">Github</a><br></br>
        </Col>
        <Col md="2">
        <div>
            <img src={require(`../../images/disc.png`)} className="turntables" alt="turntables"/>
        </div>
        </Col> 
    </Row>
</Container>
</footer>

export default Footer;