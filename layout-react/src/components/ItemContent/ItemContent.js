import React, { useState } from 'react';
import './ItemContent.css';
import heartPic from '../static/heart1.png';
import fullHeartPic from '../static/heart2.png';
import Button from '../Button/Button';
import IconLabel from '../IconLabel/IconLabel'

function ItemContent(props) {
  const {price, condoPrice, taxPrice, address, description} = props;

  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div className="header">
        <h1>{price}</h1>
        <h3>condomínio {condoPrice} • IPTU {taxPrice}</h3>
        <button onClick={() => setFavorite(!favorite)}><img src={favorite ? fullHeartPic : heartPic} alt="" /></button>
      </div>
      <div className="body">
        <p>{description}</p>
      </div>
      <div className="footer">
        <div className="address-container">
          <p>{address}</p>
          <IconLabel iconUrl="http://placehold.it/15x15" label="85m2"/>
          <IconLabel iconUrl="http://placehold.it/15x15" label="2"/>
          <IconLabel iconUrl="http://placehold.it/15x15" label="4"/>
          <IconLabel iconUrl="http://placehold.it/15x15" label="1"/>
        </div>
        <div className="contact-container">
          <Button label="Telefone" ghost />
          <Button label="Mensagem" />
        </div>
      </div>
    </>
  );
}

export default ItemContent;