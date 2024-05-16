import React, { useState } from 'react';
import './discription.scss'; 

const Description = (props) => {
  const {discription}=props;
  return (
    <div className="description-container"> {/* Add the class to the container */}
     <p>{discription}</p>
    </div>
  );
};

export default Description;
