import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function CartButton(){
    const [option, setOption] = useState(1)
    function optionSelected(value){
        setOption(value)
        console.log(value)
    }
    return(
        <>
        {option === 1 ?
            <div>
                <ItemCount/>
                <button type="button" class="btn btn-primary" option={option} onClick={optionSelected} defaultOption={option}>Agregar al Carrito</button>
            </div>
            :
            <Link to="/cart">
                <br/><button type="button" class="btn btn-success">¡Agregado! ver carrito</button>    
            </Link>
        }
        
        </>
    )
}