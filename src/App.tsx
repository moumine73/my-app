import React from 'react';
import './App.css';
import MonComposant from './components/monComposant/MonComposant';
import Carte from './components/exo1/Carte';

function App() {
  return (
    <div className="App">
      {/* Utilisation de MonComposant */}
      
      <Carte />
    </div>
  );
}

export default App;
