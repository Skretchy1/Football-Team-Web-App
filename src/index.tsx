import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Link } from 'react-router-dom';
import { RouterProvider, useParams } from 'react-router';
import { Funkcionar, Igralec } from './Moduli/Oseba';
import { Ekipa } from './Moduli/Ekipa';
import Telo from './Components/Telo/Telo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





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

const prvaEkipa = new Ekipa("Najboljša ekipa", 2023, prviDirektor, prviTrener,1);
prvaEkipa.dodajIgralca(prviIgralec);
prvaEkipa.dodajIgralca(drugiIgralec);
prvaEkipa.dodajIgralca(tretjiIgralec);
prvaEkipa.dodajIgralca(cetrtiIgralec);

const drugaEkipa = new Ekipa("Druga Najboljša ekipa", 2020, prviDirektor, prviTrener, 2);
drugaEkipa.dodajIgralca(pettiIgralec);
drugaEkipa.dodajIgralca(pettiIgralec);
drugaEkipa.dodajIgralca(pettiIgralec);
drugaEkipa.dodajIgralca(pettiIgralec);

const tretjaEkipa = new Ekipa("Tretja Najboljša ekipa", 2010, prviDirektor, prviTrener, 3);
tretjaEkipa.dodajIgralca(sestiIgralec);
tretjaEkipa.dodajIgralca(sestiIgralec);
tretjaEkipa.dodajIgralca(sestiIgralec);
tretjaEkipa.dodajIgralca(sestiIgralec);

const ekipiii: Ekipa[] = [];
ekipiii.push(prvaEkipa);
ekipiii.push(drugaEkipa);
ekipiii.push(tretjaEkipa);




const UAEkipa = () => {
  const { ekipaID } = useParams();

  const ekipa = ekipiii.find((e) => e.id === parseInt(ekipaID ?? ''));

  return(
    <div>
      <h1>Ime ekipe {ekipa ? ekipa.ime : 'ni podatka'}</h1>
      {ekipa ? <h1> <Telo ime={ekipa} /> </h1> : <></>}
      
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
      children: [
          {
              path: 'ekipa/:ekipaID',
              element: <UAEkipa />,
          }
      ]
  },
]);

const SeznamEkip = () => {
  return (
    <div>
      <div>
        {ekipiii.map((e) => (
          <Link key={e.id} to={`/ekipa/${e.id}`}>
            {e.ime} |{'  '} 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeznamEkip;



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
