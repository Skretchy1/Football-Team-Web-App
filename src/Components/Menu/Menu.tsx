import React from 'react';

export interface nekaj {
    ime: string;
}

function Menu(props: nekaj) {
    return (<header><div>
        <h1>{props.ime}</h1>
        </div>
        </header>
        );
    }
export default Menu;