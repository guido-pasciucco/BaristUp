import { useContext } from "react"
import { CartContext } from "./CartContext"

function Cart(){
    const { cartList, borrarCarrito } = useContext(CartContext)

    return(
        <div>
            {cartList.map( prod=>
                <li>
                    {prod.name}
                    {prod.cantidad}
                    <button onClick={borrarCarrito} >Vaciar Carrito</button>
                </li>
            )}
        </div>
    )
}
export default Cart