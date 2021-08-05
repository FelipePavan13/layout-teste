import React from 'react';
import './ItemContent.css';

function ItemContent(props) {
  return (
    <>
      <div className="header">
        <h1>{props.price}</h1>
      </div>
      <div>
        <h3>condomínio {props.condoPrice} - IPTU {props.taxPrice}</h3>
      </div>
    </>
  );
}

export default ItemContent;