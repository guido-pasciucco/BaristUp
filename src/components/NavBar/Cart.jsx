import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'

function Cart(){
    const { cartList, borrarCarrito, quitarDelCarrito } = useContext(CartContext)
    console.log(cartList)
    return(
        <div>
            <button onClick={borrarCarrito} style={{width:"300px"}}>Vaciar Carrito</button>
            <Link to="/">
                <button style={{width:"300px"}} >Seguir comprando</button>
            </Link>
            {cartList.map(prod=>
                <div style={{border:"2px solid red",padding:"20px", width:"600px"}} >
                    <p> {prod.cantidad} Un. {prod.item.titulo} </p> 
                    <button id={prod.id} onClick={()=>quitarDelCarrito(prod.item.id)}>Quitar Item</button>
                </div>
            )}
        </div>
    )
}
export default Cart