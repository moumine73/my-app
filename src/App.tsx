import React from 'react';
import './App.css';


import Welcome from './components/welcome/Welcome';
import MonComposant from './components/props/MonComposant';
import Compteur from './components/useState/Compteur';
import HelloWorld from './components/useEffect/HelloWorld';
import CountUseEffect from './components/countUseEffect/CountUseEffect';
import Router from './routes/Router';
import Formulaire from './components/formulaire/Formulaire';

function App() {
  return (
    <div className="App">
      {/* Utilisation de MonComposant */}
      {/*<MonComposant />
      
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />*/}

      {/*<MonComposant nom='Batman' age={35} />
      <MonComposant nom='Superman' age={200} />*/}

      {/* <Compteur /> */}
      {/* <HelloWorld /> */}
      {/*<CountUseEffect />*/}
      {/* <Router /> */}
      <Formulaire />

    </div>
  );
}

export default App;
