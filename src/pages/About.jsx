// Import React modules
//import React, {Fragment} from 'react';

// Import npm packages
// NOTE: Use V5 react-bootstrap syntax, to reduce pulling the ENTIRE library in (reduces load size)

import Container from 'react-bootstrap/esm/Container';


import eye from '../assets/eye.png';

const About = () => {
  return (
    <Container>

          <div class="d-flex">
  <div class="p-2 flex-fill"><img src={eye} alt="eye" class="eye"/>
  </div>

  <div class="p-2 flex-fill"><h1>About</h1> 
              <div class="left">
              
                    <p>I operate as AnimatedWeb and I am passionate about animation used for educational purposes.
                      I have undertaken work for clients mainly in the University sector.</p>

                    <p> I have also undertaken front end web development projects for small business.</p>

                    <p>My skills range from
                    <ul>
                      <li> Web-frontend and backend - HTML, CSS, Javascript, React </li>
                      <li> Multimedia - Animate, After Effects</li>
                      <li> Graphic/Drawing - Photoshop, Illustrator, Figma, Milanote</li>
                      <li> Photography</li>
                      <li> Presentation Packages - Powerpoint, Adobe Acrobat</li>
                    </ul>
                    </p>
                    </div>
                  </div>

</div>



      
    </Container>
  )
}

export default About