import React from 'react';
import ItemContent from '../ItemContent/ItemContent';
import './ListItem.css';

function ListItem(props) {
  const {price, condoPrice, taxPrice, address, description} = props;

  return (
    <div className="container">
      <div className="picture-container">
        <img src={props.thumbUrl} alt="Imagem do Imóvel" className="picture"></img>
      </div>
      <div className="content-container">
        <ItemContent 
          price={price} 
          condoPrice={condoPrice} 
          taxPrice={taxPrice} 
          description={description}
          address={address}
        />
      </div>
    </div>
  );

}

export default ListItem;