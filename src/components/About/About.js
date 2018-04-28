import React from 'react';
import './About.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const About = (props) => {
  return (
    
      
      <Card body className='aboutbox'>
      <div>
                <img src={require('../../images/download.png')} className='picky' style={{width: 253, height: 450}}></img>
                <p className='textile'>Bacon ipsum dolor amet bresaola filet mignon pork belly porchetta salami tri-tip. Ground round bacon picanha strip steak alcatra bresaola. Tenderloin rump ham cupim beef ribs, pork loin boudin biltong alcatra jowl kevin picanha shoulder. Jerky meatloaf meatball pork loin prosciutto, landjaeger spare ribs ribeye pig pork belly pork chop andouille. Pork sirloin alcatra jowl kielbasa capicola landjaeger meatloaf. Hamburger doner shankle, brisket venison sausage jerky. Drumstick spare ribs biltong boudin.

Short loin salami cupim tri-tip burgdoggen pork loin rump strip steak ground round. Tri-tip doner shankle tail kielbasa, ham hock ham tongue corned beef ball tip cupim pancetta strip steak pork chop. Landjaeger ground round meatloaf tail t-bone. Shankle pork flank tail prosciutto leberkas shoulder frankfurter. Porchetta jowl brisket biltong ground round. Spare ribs pork loin jerky, boudin ribeye cupim tenderloin beef ribs tri-tip. Spare ribs frankfurter pig tenderloin, venison meatball beef.
Bacon ipsum dolor amet bresaola filet mignon pork belly porchetta salami tri-tip. Ground round bacon picanha strip steak alcatra bresaola. Tenderloin rump ham cupim beef ribs, pork loin boudin biltong alcatra jowl kevin picanha shoulder. Jerky meatloaf meatball pork loin prosciutto, landjaeger spare ribs ribeye pig pork belly pork chop andouille. Pork sirloin alcatra jowl kielbasa capicola landjaeger meatloaf. Hamburger doner shankle, brisket venison sausage jerky. Drumstick spare ribs biltong boudin.

</p>
</div>
        </Card>
      
     
    
  );
};

export default About;