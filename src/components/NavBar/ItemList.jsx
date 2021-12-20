import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import {getFetch} from "./getFetch"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import CartButton from './CartButton'
import { CartContext } from './CartContext'

function ItemList(){
    const contexto = useContext(CartContext)
    console.log(contexto)
    const [productos, setProductos] = useState([])
    getFetch.then(resp => setProductos(resp))    
    return(
        <>
        <div>
            {productos.map(producto =>
                <><><>
                <div style={{border:"2px solid green",padding:"20px"}}>
                    <h1 key={producto.id}>
                        {producto.titulo}
                    </h1>
                    <img src={producto.img} style={{width:"auto",height:"250px"}}/>
                    <h5>
                        Cat.: {producto.categoria}
                    </h5>
                    <h2>
                        ${producto.precio}
                    </h2>
                    <button type="button" class="btn btn-secondary">Detalles</button>    
                    <CartButton />
                </div>
                </></></>
            )}
        </div>
        </>
    )
}
export default ItemList
