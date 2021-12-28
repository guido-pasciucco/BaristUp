import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

function Cart(){
    const { cartList, borrarCarrito, quitarDelCarrito } = useContext(CartContext) ;
    const condition = cartList.length === 0 ;
    const precioFinal =  cartList.map((prod) => Number(prod.item.precio * prod.cantidad)) .reduce((a, b) => a + b, 0) ;
    return(
        <div>
        {condition ? 
            <div>
                <h1>Carrito vacío</h1>
                <p>¡Volvé al home para agregar productos!</p>
                <Link to="/">
                    <button style={{width:"300px"}}>Seguir comprando</button>
                </Link>
            </div>
            : 
            <div>
                <h1 style={{height:"50px"}}>Tu carrito de compras</h1>
                <div style={{display:"flex",justifyContent:"space-evenly",width:"1200px"}}>   
                    <h3 style={{width:"20%",height:"90px"}}>Producto</h3>
                    <h3 style={{width:"20%",height:"90px"}}>Cantidad</h3>
                    <h3 style={{width:"20%",height:"90px"}}>Precio por Unidad</h3>
                    <h3 style={{width:"20%",height:"90px"}}>Subtotal</h3>
                    <h3 style={{width:"20%",height:"90px"}}>Quitar</h3>
                </div>
                {cartList.map(prod=>
                    <div style={{display:"flex",justifyContent:"space-evenly",width:"1200px"}}>
                        <h3 style={{width:"20%",height:"90px"}}>{prod.item.titulo}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>{prod.cantidad}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>${prod.item.precio}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>${parseInt(prod.item.precio) * parseInt(prod.cantidad)}</h3>
                        <h3 style={{width:"20%",height:"90px"}}><button id={prod.id} onClick={()=>quitarDelCarrito(prod.item.id)}>X</button></h3>
                    </div>
                )}
                <h3 style={{height:"50px"}}>Total a pagar: $ {precioFinal}</h3>
                <button onClick={borrarCarrito} style={{width:"300px"}}>Vaciar Carrito</button>
                <Link to="/"><button style={{width:"300px"}} >Seguir comprando</button></Link>
            </div>
        }
        </div>
    )
}

export default Cart