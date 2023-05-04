import React, {Fragment} from 'react';



import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.jpg';
import Img6 from '../assets/6.jpg';
import Img7 from '../assets/7.jpg';



const Portfolio = () => {
  return (
    <Fragment>
      <div id="hero-section">
        <h1>Portfolio</h1>
       
        <div class="container">

        <div class="row">
          <div class="col-sm portfoliopad"><div><h4>Website</h4></div><img class="simg1" src={Img1} alt="website" /></div>
          <div class="col-sm portfoliopad"><div><h4>Website</h4></div><img class="simg3" src={Img3} alt="website" /></div>
          <div class="col-sm portfoliopad"><div><h4>Website</h4></div><img class="simg6" src={Img6} alt="website" /></div>
        
        <div class="row">
          <div class="col-sm portfoliopad"><div><h4>Fullstack</h4></div><img class="simg7" src={Img7} alt="fullstack" /></div>
          <div class="col-sm portfoliopad"><div><h4>Animation</h4></div><img class="simg2" src={Img2} alt="animation" /></div>
          <div class="col-sm portfoliopad"><div><h4>Animation</h4></div><img class="simg4" src={Img4} alt="animation" /></div>
        </div>
        </div>

        </div>


      </div>
    </Fragment>

  )
}



export default Portfolio






