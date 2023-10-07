import React from 'react';
import { Ekipa } from '../../Moduli/Ekipa';
import Igral from '../Igralec/Igralec';
import { Igralec } from '../../Moduli/Oseba';


export interface IInfo {
    stevilo: number;
}

function Info(props: IInfo) {
    if(props.stevilo >= 11){
        return <div><h3>V ekipi ima prevec igralcev.</h3></div>;
    } else {
        return <div></div>;
    }

    }
export default Info;