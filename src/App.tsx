import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu/Menu';
import { Funkcionar, Igralec } from './Moduli/Oseba';
import Telo from './Components/Telo/Telo';
import Opozorilo from './Components/Opozorilo/Opozorilo';
import Info from './Components/Info/Info';
import Noga from './Components/Noga/Noga';
import { Outlet } from 'react-router';
import { idText } from 'typescript';
import SeznamEkip from '.';
import { Ekipa } from './Moduli/Ekipa';


function App() {

  const prviDirektor = {
    ime: "Grega",
    priimek: "Pavlic",
    letoRojstva: 1970,
    krajRojstva: "Ljubljana",
    id: 1,
    vloga: "Direktor",
    veljavnost: 2
} as Funkcionar;

//Trener
const prviTrener = {
    ime: "Jose",
    priimek: "Mourinho",
    letoRojstva: 1963,
    krajRojstva: "Setubal",
    id: 2,
    vloga: "Trener",
    veljavnost: 7
} as Funkcionar;

//Igralci
const prviIgralec = {
    ime: "Cristiano",
    priimek: "Ronaldo",
    letoRojstva: 1985,
    krajRojstva: "Funchal",
    id: 3,
    visina: 187,
    teza: 85,
    poskodovan: false
} as Igralec;

const drugiIgralec = {
    ime: "Erling",
    priimek: "Haaland",
    letoRojstva: 2000,
    id: 4,
    visina: 194,
    teza: 88,
    poskodovan: false
} as Igralec;

const tretjiIgralec = {
    ime: "Zlatan",
    priimek: "Ibrahimovic",
    letoRojstva: 1981,
    id: 5,
    visina: 195,
    teza: 95,
    poskodovan: true
} as Igralec;

const cetrtiIgralec = {
  ime: "Jovan",
  priimek: "Hristovski",
  letoRojstva: 2002,
  id: 6,
  visina: 190,
  teza: 90,
  poskodovan: false
} as Igralec;

const pettiIgralec = {
  ime: "Nekaj222222",
  priimek: "Nekaj222222",
  letoRojstva: 2003,
  id: 6,
  visina: 190,
  teza: 90,
  poskodovan: false
} as Igralec;

const sestiIgralec = {
  ime: "Nekaj333333",
  priimek: "Nekaj33333",
  letoRojstva: 2003,
  id: 6,
  visina: 190,
  teza: 90,
  poskodovan: false
} as Igralec;

const prvaEkipa = new Ekipa("Najboljša ekipa", 2023, prviDirektor, prviTrener, 5);
prvaEkipa.dodajIgralca(prviIgralec);
prvaEkipa.dodajIgralca(drugiIgralec);
prvaEkipa.dodajIgralca(tretjiIgralec);
prvaEkipa.dodajIgralca(cetrtiIgralec);

const drugaEkipa = new Ekipa("Druga Najboljša ekipa", 2020, prviDirektor, prviTrener, 6);
prvaEkipa.dodajIgralca(pettiIgralec);
prvaEkipa.dodajIgralca(pettiIgralec);
prvaEkipa.dodajIgralca(pettiIgralec);
prvaEkipa.dodajIgralca(pettiIgralec);

const tretjaEkipa = new Ekipa("Tretja Najboljša ekipa", 2010, prviDirektor, prviTrener, 7);
prvaEkipa.dodajIgralca(sestiIgralec);
prvaEkipa.dodajIgralca(sestiIgralec);
prvaEkipa.dodajIgralca(sestiIgralec);
prvaEkipa.dodajIgralca(sestiIgralec);

const ekipiii = [];
ekipiii.push(prvaEkipa);
ekipiii.push(drugaEkipa);
ekipiii.push(tretjaEkipa);


  return (
      <div>
        {/* <div className="menu"> */}
            <Menu ime={prvaEkipa.ime}/>
            
        {/* </div> */}
        <div className="centralni">
          <div>
              {/* <Telo ime={prvaEkipa}/> */}
              <SeznamEkip />
          </div>
          <div>
              <Opozorilo stevilo={prvaEkipa.igralci.length}/>
          </div>
        </div>
        <div className='malodol'>
              <Info stevilo={prvaEkipa.igralci.length}/>
          </div>
        <footer>
          <div>
              <Noga/>
              <Outlet />
          </div>
        </footer>
      </div>
  );
}

export default App;










{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}