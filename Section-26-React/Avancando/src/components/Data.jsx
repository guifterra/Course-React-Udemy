import React from 'react'
import { useState } from 'react';

const Data = () => {
  
    let x = 10;
    const [usandoUSeState, setUsandoUseState] = useState(10);

    const aumentaValor = () => {
        x = x + 10;
        setUsandoUseState( usandoUSeState + 10 );

        console.log("Variavel comum: " + x);
        console.log( "Variavel useState: " + usandoUSeState );
    }

    return (
    <div>
        <p>Valor de X: { x }</p>
        <p>Valor com UseState: { usandoUSeState }</p> 
        <button onClick={ aumentaValor }>Aumentar Valor</button>
    </div>
  )
}

export default Data