import { useState } from 'react'

function ItemCount(){
    const [ contador, setContador ] = useState(0)

    console.log(contador)

    const handlerClickSuma = ()=>{
        setContador(contador+1)
    }
    const handlerClickResta = ()=>{
        setContador(contador-1)
    }
    return(
        <div>
            <p>{contador}</p>
            <button onClick={handlerClickSuma}  style={{width: "100px", height: "50px"}}>+</button>
            <button onClick={handlerClickResta} style={{width: "100px", height: "50px"}}>-</button>
        </div>
    )
}

export default ItemCount
