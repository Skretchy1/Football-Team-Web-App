import { Ekipa } from "./Ekipa";
import { Igralec } from "./Oseba";
import { Funkcionar } from "./Oseba";


let message : string = "Hello";
console.log(message);

//Direktor
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

const prvaEkipa = new Ekipa("Najboljša ekipa", 2023, prviDirektor, prviTrener, 1);
prvaEkipa.dodajIgralca(prviIgralec);
prvaEkipa.dodajIgralca(drugiIgralec);
prvaEkipa.dodajIgralca(tretjiIgralec);

console.log("Prvi Primer");
console.log(prvaEkipa.izpisiPodatke());

const sprememba = {
    ime: "Zlatan",
    priimek: "Ibrahimovic",
    letoRojstva: 1981,
    id: 5,
    visina: 180,
    teza: 80,
    poskodovan: true
} as Igralec;

prvaEkipa.posodobiIgralca(sprememba);

console.log("Sprement igralec");
console.log(prvaEkipa.izpisiPodatke())
 