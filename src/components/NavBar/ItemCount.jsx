import { useState } from 'react'

function ItemCount(){
    const [ contador, setContador ] = useState(1)

    console.log(contador)

    const handlerClickSuma = ()=>{
        setContador(contador+1)
    }
    const handlerClickResta = ()=>{
        setContador(contador-1)
    }

    return(
        <div>
            <p>
                Cantidad: {contador}
            </p>
            <button type="button" class="btn btn-secondary" onClick={handlerClickResta} style={{width: "45px"}}>-</button>    
            <button type="button" class="btn btn-secondary" onClick={handlerClickSuma}  style={{width: "45px"}}>+</button>  
        </div>
    )
}

export default ItemCount
