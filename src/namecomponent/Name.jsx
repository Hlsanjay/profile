import React from 'react';
import './name.css';
const Name = (props) => {
  const { name} = props; // Destructure props to extract name and email

  return (
    <div className="profile-details">
      <h2>{name}</h2>
    </div>
  );
}
export default Name;
