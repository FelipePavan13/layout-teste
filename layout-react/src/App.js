import React from 'react';
import ListItem from './components/ListItem/ListItem';
import './App.css';

function App() {
  return (
    <>
      <ListItem 
        src="http://placehold.it/400x400"
        price="R$ 720.000"
        condoPrice="R$ 450"
        taxPrice="R$ 2.148"
      />
      <ListItem 
        src="http://placehold.it/400x400"
        price="R$ 1.250.000"
        condoPrice="R$ 600"
        taxPrice="R$ 4.250"
      />
    </>
  );
}

export default App;
