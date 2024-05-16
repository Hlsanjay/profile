import React from 'react';
import './photo.scss';

const Photo = (props) => {
  const { src, alt, className } = props;

  return (
    <div className={className}>
      <img src={src} alt={alt} className="photo" /> {/* Apply className here */}
    </div>  
  );
}

export default Photo;
