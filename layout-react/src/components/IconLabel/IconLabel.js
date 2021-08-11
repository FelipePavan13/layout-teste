import React from 'react';
import './IconLabel.css';

function IconLabel(props) {
  const {iconUrl, label} = props;

  return <span><img src={iconUrl} alt="Ícone"/>{label}</span>
}

export default IconLabel;