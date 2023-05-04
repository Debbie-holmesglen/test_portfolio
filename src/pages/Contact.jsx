// Import React modules
import React, {Fragment} from 'react';


//locationmap of Holmesglen Institute
import locationmap from '../assets/locationmap.png';

//Function
const Contact = () => {
  return (
    <Fragment>
      <div id="hero-section">
        <h1>Contact</h1>
        <p class='Homeparagraph'><h4>Debbie Rose 040 955 5555</h4> 
          Holmesglen 448 South Road, Moorabbin &nbsp;    
          <button  class="button"><a href="https://www.google.com/search?channel=crow5&client=firefox-b-d&q=get+directions" >Get directions</a></button> 
        </p>
 
        <div><img class="border" src={locationmap} alt="Holmesglen 448 South Road, Moorabbin"/>
        </div>

      </div>



    </Fragment>
  )
}

export default Contact