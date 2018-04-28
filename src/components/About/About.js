import React from 'react';
import './About.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    
      
      <Card body className='aboutbox'>
      <div>
                <img src={require('../../images/download.png')} className='picky' style={{width: 253, height: 450}}></img>
                <h1 className="waddup">Hello!</h1>
                <p className="textile">My name is Timour and this is my portfolio website built in React.js.</p>
                <p className='textile'>I am full-stack web developer currently seeking a dev position. After high school I decided to major in french as I am natively bilingual. I then joined the Marine Corps and received some of the best training in the world while simultaneously building some of the greatest and longest lasting friendships I've known. I eventually moved to Richmond, Virginia with a couple of high school friends. That's when I heard about George Washington University's coding bootcamp which piqued my interest as I had been exploring the world of web development on my own. This brings us back to the present in my search for a developer position!
</p>
<p className="textile">I'm always eager to learn so feel free to contact me for a job opportunity or even just to collaborate on a cool project!</p>
</div>
        </Card>
      
     
    
  );
};

export default About;