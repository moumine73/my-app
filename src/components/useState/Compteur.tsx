import React, { useState } from 'react'

const Compteur = () => {


    const [count, setCount] = useState(0);

return (
    <div>
        <p>Le compteur est actuellement a : {count}</p>
        <button onClick={() =>setCount(count + 1)}>Incrementer</button>

        <button onClick={() =>setCount(count - 1)}>Decrementer</button>
        
        
    </div>
)
}

export default Compteur