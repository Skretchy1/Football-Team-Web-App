import React from 'react';
import { Ekipa } from '../../Moduli/Ekipa';
import Igral from '../Igralec/Igralec';
import { Igralec } from '../../Moduli/Oseba';


export interface IOpzorilo {
    stevilo: number;
}

function Opozorilo(props: IOpzorilo) {
    if(props.stevilo < 11){
        return <div><h3>V ekipi ima premalo igralcev.</h3></div>;
    } else {
        return <div></div>;
    }

    }
export default Opozorilo;