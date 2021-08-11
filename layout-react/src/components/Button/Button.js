import React from 'react';
import './Button.css';

function Button(props) {
  const {label, ghost} = props;
  
  if(ghost) {
    return <button className="button ghost">{label}</button>
  } else {
    return <button className="button">{label}</button>
  }
}

export default Button;