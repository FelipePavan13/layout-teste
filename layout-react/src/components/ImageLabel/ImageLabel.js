import React from 'react';
import './ImageLabel.css';

function ImageLabel(props) {
  const {thumbUrl, altDescription} = props;

  return <img src={thumbUrl} alt={altDescription} className="picture"></img>
}

export default ImageLabel;