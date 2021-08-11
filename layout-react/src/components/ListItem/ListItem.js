import React from 'react';
import ImageLabel from '../ImageLabel/ImageLabel';
import ItemContent from '../ItemContent/ItemContent';
import './ListItem.css';

function ListItem(props) {
  const {price, condoPrice, taxPrice, address, description} = props;

  return (
    <div className="container">
      <div className="picture-container">
        <ImageLabel thumbUrl="http://placehold.it/300x270" altDescription="Imagem do Imóvel"/>
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