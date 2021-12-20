import { useContext } from "react"
import { CartContext } from "./CartContext"
import { CartButton } from "./CartButton"
import ItemDetail from "./ItemDetail"
import ItemListContainer from "./ItemListContainer"
import ItemList from "./ItemList"
import ItemDetailContainer from "./ItemDetailContainer"
import { getFetch } from "./getFetch"
import Item from './Item'

function Cart(){
    const { cartList, borrarCarrito, quitarDelCarrito } = useContext(CartContext)
    console.log(cartList)
    return(
        <div>
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
            ACA EMPIEZA EL CARRITO
            {cartList.map(prod=>
                <li>
                    <p>Nombre {prod.name}</p>
                    <p>Cantidad {prod.cantidad}</p> 
                    <button id={prod.id} onClick={quitarDelCarrito}>Quitar Item</button>
                </li>
            )}
        </div>
    )
}
export default Cart