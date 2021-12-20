import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { getFetch } from './getFetch'
import ItemDetail from './ItemDetail'


export default function CartButton(id){
    const [option, setOption] = useState(1)
    function optionSelected(value){
        setOption(value)
    }
    return(
        <>
        {option === 1 ?
            <div>
                <ItemCount/>
                <button
                    type="button"
                    class="btn btn-primary"
                    option={option}
                    onClick={optionSelected}
                    defaultOption={option}
                  //  onAdd={onAdd}
                >
                    Agregar al Carrito
                </button>
            </div>
            :
            <Link to="/cart">
                <br/><button type="button" class="btn btn-success">¡Agregado! ver carrito</button>    
            </Link>
        }
        
        </>
    )
}