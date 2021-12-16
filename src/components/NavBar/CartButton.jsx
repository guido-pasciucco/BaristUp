import {useState} from 'react'
import { Link } from 'react-router-dom'

export default function CartButton(){
    const [option, setOption] = useState(1)
    function optionSelected(value){
        setOption(value)
        console.log(value)
    }
    return(
        <>
        {option === 1 ?
            <button type="button" class="btn btn-primary" option={option} onClick={optionSelected} defaultOption={option}>Agregar al Carrito</button>
            :
            <Link to="/cart">
                <button type="button" class="btn btn-success">¡Agregado! ver carrito</button>    
            </Link>
        }
        </>
    )
}