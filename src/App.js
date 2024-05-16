// App.jsx
import React from 'react';
import Photo from './photocomponent/photo';
import Name from './namecomponent/Name';
import Description from './discriptioncompnent/discription';
import "../src/photocomponent/photo.scss"
import './App.css'


const App = () => {
  const name = "Sanjay Gowda";
  const photoSrc = "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png";
  const photo1Src = "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png";
  const photo2Src = "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png";
  const discription="Manager"
  return (
    <div className='mainprofile'>
      <Name name={name} /> 
      <Photo src={photoSrc} alt="User" className="profile-photo " />
      <Photo src={photo1Src} alt="User" className="nav-bar small" />
      <Photo src={photo2Src} alt="User" className="user" />
      <Description discription={discription}/>
    </div>
  );
}

export default App;
