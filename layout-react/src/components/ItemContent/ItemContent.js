import React from 'react';
import './ItemContent.css';

function ItemContent(props) {
  const {price, condoPrice, taxPrice, address, description} = props;

  return (
    <>
      <div className="header">
        <h1>{price}</h1>
        <h3>condomínio {condoPrice} • IPTU {taxPrice}</h3>
        <img src="http://placehold.it/30x30" alt="" />
      </div>
      <div className="body">
        <p>{description}</p>
      </div>
      <div className="footer">
        <div className="address-container">
          <p>{address}</p>
          <span><img src="http://placehold.it/15x15" alt=""/>81m2</span>
          <span><img src="http://placehold.it/15x15" alt=""/>3</span>
          <span><img src="http://placehold.it/15x15" alt=""/>2</span>
          <span><img src="http://placehold.it/15x15" alt=""/>2</span>
        </div>
        <div className="contact-container">
          <button className="button ghost">Telefone</button>
          <button className="button">Mensagem</button>
        </div>
      </div>
    </>
  );
}

export default ItemContent;