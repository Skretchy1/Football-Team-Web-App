import React from 'react';
import { Ekipa } from '../../Moduli/Ekipa';
import { Igralec } from '../../Moduli/Oseba';



export interface nekaj {
    igralec: Igralec;
}

function Igral(atr: nekaj) {
    return (
            <tr>
                <td>
                    {atr.igralec.ime}
                </td>
                <td>
                    {atr.igralec.priimek}
                </td>
                <td>
                    {atr.igralec.letoRojstva}
                </td>
                <td>
                    {(atr.igralec.poskodovan? "Poskodovan":"Ni poskodovan")}
                </td>
            </tr>
                 
        );
    }
export default Igral;