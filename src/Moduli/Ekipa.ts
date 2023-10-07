import { Igralec } from "./Oseba";
import { Funkcionar } from "./Oseba";

export class Ekipa {

    id!: number;
    letoUstanovitve: number; 
    direktor: Funkcionar; 
    trener: Funkcionar; 
    igralci: Igralec[];
    

    constructor(public ime: string, letoUstanovitve: number, direktor: Funkcionar, trener: Funkcionar, id: number) {
            this.letoUstanovitve = letoUstanovitve;
            this.direktor = direktor;
            this.trener = trener;
            this.id = id;
            this.igralci = [];
    }

    
    public getid(): number {
        return this.id;
    }

    public setid(id: number): void {
        this.id = id;
    }    

    public getletoUstanovitve(): number {
        return this.letoUstanovitve;
    }

    public setletoUstanovitve(letoUstanovitve: number): void {
        this.letoUstanovitve = letoUstanovitve;
    }
    
    public getdirektor(): Funkcionar {
        return this.direktor;
    }

    public setdirektor(direktor: Funkcionar): void {
        this.direktor = direktor;
    }
    public gettrener(): Funkcionar {
        return this.trener;
    }

    public settrener(trener: Funkcionar): void {
        this.trener = trener;
    }
 
    //Metode
    public dodajIgralca(igralec: Igralec): void {
        this.igralci.push(igralec);
    };

    public posodobiIgralca(igralec: Igralec): void {
        const temp = this.igralci.find(i => i.id === igralec.id);
        if (temp) {
            Object.assign(temp, igralec);
        }
    }

    public odstraniIgralca(id: number) {
        const index = this.igralci.findIndex(i => i.id === id);
        //Ker findIdex vrne -1 če ne najde igralec
        if (index !== -1) {
            this.igralci.splice(index, 1);
        }
    }

    public izpisiPodatke():string{
        let izpisi = "";
        izpisi += "Ime: " + this.ime;
        izpisi += "Trener: " + JSON.stringify(this.trener);
        izpisi += "Direktor: " + JSON.stringify(this.direktor);
        izpisi += "Leto Ustvarjanje: " + this.letoUstanovitve;
        izpisi += "Igralci: ";
        this.igralci.forEach(function (i){
            izpisi = izpisi + "\n" + JSON.stringify(i);
        })

        return izpisi;
    }
    
}