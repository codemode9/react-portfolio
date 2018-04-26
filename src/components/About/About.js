import React from 'react';
import './About.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    
      
      <Card body className='aboutbox'>
        <img src={require('../../images/linkedin.png')} className='kity' style={{width: 65, height: 65}}></img>
        <img src={require('../../images/octocat.png')} className='kity' style={{width: 150, height: 100}}></img>
        </Card>
      
     
    
  );
};

export default About;