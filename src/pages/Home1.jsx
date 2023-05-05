// Import React modules
//import React, {Fragment} from 'react';

// Import npm packages
// NOTE: Use V5 react-bootstrap syntax, to reduce pulling the ENTIRE library in (reduces load size)


import logopic from '../assets/logopic.png';


const Home = () => {
  return (

<div class="d-flex">
  <div class="p-2 flex-fill"><img src={logopic} alt="biglogo" class="logo"/>
  </div>

  <div class="p-2 flex-fill"><h1>Debbie Rose</h1> 
              <p class="homeparagraph"> I am a web developer from Melbourne and generally work remotely. <br />
                  My passion is using animation for educational purposes so it has a <br/>
                  meaning and purpose for learning. <br/>
                  I have excellent communication skills and arrange of technical skills that suit a range of projects.</p>
                  </div>

</div>
  
    
  )
}

export default Home