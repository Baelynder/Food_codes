//here we are importing a React library for creating react components
import React from 'react';

function Footer(){
return <div>

    <select name="cars" class="custom">
      <option selected>Payment Options!!</option><br/><br/>
      <option value="Card">Card</option>
      <option value="Mobile Money">Mobile Money</option>
      <option value="Direct Payment">Direct Payment</option>
    </select><br/><br/>
    <button type="submit" class="btn">Submit</button><br/><br/>


</div>


};

export default Footer;