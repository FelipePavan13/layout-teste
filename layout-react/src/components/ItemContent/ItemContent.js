import React from 'react';
import './ItemContent.css';

function ItemContent(props) {
  return (
    <>
      <div className="header">
        <h1>{props.price}</h1>
        <h3>condomínio {props.condoPrice} • IPTU {props.taxPrice}</h3>
        <img src="http://placehold.it/30x30" alt="" />
      </div>
      <div className="body">
        <p>{props.description}</p>
      </div>
      <div className="footer">
        <div className="address_container">
          <p>{props.address}</p>
          <span><img src="http://placehold.it/15x15" />81m2</span>
          <span><img src="http://placehold.it/15x15" />3</span>
          <span><img src="http://placehold.it/15x15" />2</span>
          <span><img src="http://placehold.it/15x15" />2</span>
        </div>
        <div className="contact_container">
          <button className="button ghost">Telefone</button>
          <button className="button">Mensagem</button>
        </div>
      </div>
    </>
  );
}

export default ItemContent;