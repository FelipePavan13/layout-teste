import React from 'react';
import ListItem from './components/ListItem/ListItem';
import './App.css';

function App() {
  return (
    <>
      <ListItem 
        src="http://placehold.it/350x270"
        price="R$ 720.000"
        condoPrice="R$ 450"
        taxPrice="R$ 2.148"
        description="Apartamento especial, 80, 65m2, iluminado, 3 quartos, sendo 1 com suíte, sala..."
        address="Rua Livramento, Santana"
      />
    </>
  );
}

export default App;
