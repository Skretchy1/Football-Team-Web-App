import React, { useState } from 'react';
import { Ekipa } from '../../Moduli/Ekipa';
import Igral from '../Igralec/Igralec';
import { Funkcionar, Igralec } from '../../Moduli/Oseba';
import { Link } from 'react-router-dom';


export interface ITelo {
    ime: Ekipa;
}

function Telo(props: ITelo) {
    const [igralci, setIgralci] = useState([]);
    return (<div>
    <table>
        <tbody>
        {props.ime.igralci.map((i: Igralec, index: number): JSX.Element => {
            return (
                <Igral igralec={i} key={i.id} />
            );
        })}
        </tbody>
    </table>
        
        
        </div>
        );
    }

    export default Telo;





// const ekipe: Ekipa [] = [
// const prviDirektor = {
//     ime: "Grega",
//     priimek: "Pavlic",
//     letoRojstva: 1970,
//     krajRojstva: "Ljubljana",
//     id: 1,
//     vloga: "Direktor",
//     veljavnost: 2
// } as Funkcionar;

// //Trener
// const prviTrener = {
//     ime: "Jose",
//     priimek: "Mourinho",
//     letoRojstva: 1963,
//     krajRojstva: "Setubal",
//     id: 2,
//     vloga: "Trener",
//     veljavnost: 7
// } as Funkcionar;

// //Igralci
// const prviIgralec = {
//     ime: "Cristiano",
//     priimek: "Ronaldo",
//     letoRojstva: 1985,
//     krajRojstva: "Funchal",
//     id: 3,
//     visina: 187,
//     teza: 85,
//     poskodovan: false
// } as Igralec;

// const drugiIgralec = {
//     ime: "Erling",
//     priimek: "Haaland",
//     letoRojstva: 2000,
//     id: 4,
//     visina: 194,
//     teza: 88,
//     poskodovan: false
// } as Igralec;

// const tretjiIgralec = {
//     ime: "Zlatan",
//     priimek: "Ibrahimovic",
//     letoRojstva: 1981,
//     id: 5,
//     visina: 195,
//     teza: 95,
//     poskodovan: true
// } as Igralec;

// const cetrtiIgralec = {
//   ime: "Jovan",
//   priimek: "Hristovski",
//   letoRojstva: 2003,
//   id: 6,
//   visina: 190,
//   teza: 90,
//   poskodovan: false
// } as Igralec;

// const pettiIgralec = {
//   ime: "Nekaj222222",
//   priimek: "Nekaj222222",
//   letoRojstva: 2003,
//   id: 6,
//   visina: 190,
//   teza: 90,
//   poskodovan: false
// } as Igralec;

// const sestiIgralec = {
//   ime: "Nekaj333333",
//   priimek: "Nekaj33333",
//   letoRojstva: 2003,
//   id: 6,
//   visina: 190,
//   teza: 90,
//   poskodovan: false
// } as Igralec;

// const prvaEkipa = new Ekipa("Najboljša ekipa", 2023, prviDirektor, prviTrener);
// prvaEkipa.dodajIgralca(prviIgralec);
// prvaEkipa.dodajIgralca(drugiIgralec);
// prvaEkipa.dodajIgralca(tretjiIgralec);
// prvaEkipa.dodajIgralca(cetrtiIgralec);

// const drugaEkipa = new Ekipa("Druga Najboljša ekipa", 2020, prviDirektor, prviTrener);
// prvaEkipa.dodajIgralca(pettiIgralec);
// prvaEkipa.dodajIgralca(pettiIgralec);
// prvaEkipa.dodajIgralca(pettiIgralec);
// prvaEkipa.dodajIgralca(pettiIgralec);

// const tretjaEkipa = new Ekipa("Tretja Najboljša ekipa", 2010, prviDirektor, prviTrener);
// prvaEkipa.dodajIgralca(sestiIgralec);
// prvaEkipa.dodajIgralca(sestiIgralec);
// prvaEkipa.dodajIgralca(sestiIgralec);
// prvaEkipa.dodajIgralca(sestiIgralec);

// ];

// const Ekipa = () => {
//     const { ekipaID } = useParams();
  
//     const ekipa = ekipe.find((e) => e.id === parseInt(ekipaID ?? ''));
  
//     return(
//       <div>
//         <h1>Ime ekipe {ekipa ? ekipa.title : 'ni podatka'}</h1>
//       </div>
//     )
//   }



// const SeznamEkip = (props: ITelo) => {
//     return (
//         <div>
//           <div>
//             {props.ime.igralci.map((i: Igralec, index: number) => (
//               <Link key={i.id} to={`/ekipa/${i.id}`}>
//                 <Igral igralec={i} key={i.id} />
//               </Link>
//             ))}
//           </div>
//         </div>
//       );
    
//   };



// export default SeznamEkip;