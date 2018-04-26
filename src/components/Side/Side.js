import React from 'react';
import './Side.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Side = (props) => {
  return (
    
      
      
        <Card body className="sidebox">
            <a href={'https://www.linkedin.com/in/timour-basegmez/'} target={'_blank'}>
                <img src={require('../../images/linkedin.png')} className='linky' style={{width: 65, height: 65}} />
            </a>
            <a href={'https://github.com/codemode9'} target={'_blank'}>
                <img src={require('../../images/octocat.png')} className='kitty' style={{width: 150, height: 100}} href={'https://www.google.com'}/>
            </a>
        </Card>
    
    
  );
};

export default Side;


