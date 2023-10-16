//here we are importing a React library for creating react components
import React from 'react';

function footer(){
return <div>

    <select name="cars" class="custom">
      <option selected>Payment Options!!</option>
      <option value="Card">Card</option>
      <option value="Mobile Money">Mobile Money</option>
      <option value="Direct Payment">Direct Payment</option>
    </select>
    <button type="submit" class="btn">Submit</button>


</div>


};

export default footer;