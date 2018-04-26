import React from 'react';
import './Side.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Side = (props) => {
  return (
    
      
      
        <Card body className="sidebox">
        <img src={require('../../images/linkedin.png')} className='linky' style={{width: 65, height: 65}}></img>
        <img src={require('../../images/octocat.png')} className='kitty' style={{width: 150, height: 100}}></img>
        </Card>
    
    
  );
};

export default Side;