import React from 'react';
import ItemContent from '../ItemContent/ItemContent';
import './ListItem.css';

function ListItem(props) {

  return (
    <div className="container">
      <div className="picture_container">
        <img src={props.src} alt="Imagem do Imóvel" className="picture"></img>
      </div>
      <div className="content_container">
        <ItemContent price={props.price} condoPrice={props.condoPrice} taxPrice={props.taxPrice}/>
      </div>
    </div>
  );

}

export default ListItem;