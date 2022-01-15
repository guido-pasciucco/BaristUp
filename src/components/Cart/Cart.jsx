import { useContext } from "react"
import { CartContext } from "../Cart/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from "react"

function Cart(){
    const inputInicialBuyer = { nombre : '', tel    : '', email  : '', confirmEmail  : '', items : [''] }
    const [buyer, setBuyer] = useState(inputInicialBuyer)
    const { cartList, borrarCarrito, quitarDelCarrito } = useContext(CartContext) ;
    const condition = cartList.length === 0 ;
    const precioFinal = cartList.map((prod) => Number(prod.item.precio * prod.cantidad)) .reduce((a, b) => a + b, 0) ;
    const handleInputs = (e) => {
        e.preventDefault()
        setBuyer({ ...buyer, [e.target.name]: e.target.value }, {})   
    }
    const generarOrden = (e) => {        
        e.preventDefault()
        const orden = {}
        orden.buyer = buyer
        const db = getFirestore()
        if (orden.buyer.email !== orden.buyer.confirmEmail){
            alert("ERROR:\n\nConfirme su mail")
        }else{
            const ordenCollecion = collection(db, 'orders')
            addDoc(ordenCollecion, orden)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))         
            .finally(()=> {
                borrarCarrito()
                setBuyer(inputInicialBuyer)
            })
            orden.total = precioFinal
            orden.buyer.items = cartList.map(prod => {
                const id = prod.id
                const nombre = prod.item.titulo
                const precio = prod.item.precio * prod.cantidad
                return {id, nombre, precio}
            })
            alert(
                'ORDEN GENERADA' + 
                '\n\n Tu nombre: ' + orden.buyer.nombre +
                '\n Teléfono: ' + orden.buyer.tel +
                '\n Email: ' + orden.buyer.email + '\n' +
                '\n\nPrecio Final: $' + precioFinal
            )
        }
    }
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
                    <>
                    <div style={{ display: "flex", justifyContent: "space-evenly", width: "1200px" }}>
                        <h3 style={{ width: "20%", height: "90px" }}>{prod.item.titulo}</h3>
                        <h3 style={{ width: "20%", height: "90px" }}>{prod.cantidad}</h3>
                        <h3 style={{ width: "20%", height: "90px" }}>${prod.item.precio}</h3>
                        <h3 style={{ width: "20%", height: "90px" }}>${parseInt(prod.item.precio) * parseInt(prod.cantidad)}</h3>
                        <h3 style={{ width: "20%", height: "90px" }}><button id={prod.id} onClick={() => quitarDelCarrito(prod.item.id)}>X</button></h3>
                    </div>
                    </>
                )}
                <h3 style={{ height: "50px" }}>Total a pagar: $ {precioFinal}</h3> 
                <button onClick={borrarCarrito} style={{width:"300px"}}>Vaciar Carrito</button>
                <Link to="/"><button style={{width:"300px"}} >Seguir comprando</button></Link>
                <hr />
                <div>
                    <form onSubmit={generarOrden}>
                        <h4>Para generar su orden <br /> complete el siguiente formulario</h4>
                        <input type="text" name='nombre' placeholder='Nombre y Apellido' onChange={handleInputs} /> <br />
                        <input type="text" name='tel' placeholder='Teléfono' onChange={handleInputs}/> <br />
                        <input type="email" name='email' placeholder='Email' onChange={handleInputs}/> <br />
                        <input type="email" name='confirmEmail' placeholder='Confirme su Email' onChange={handleInputs}/> <br />
                        <button>Generar Orden</button>
                    </form>
                </div>

            </div>
        }
        </div>
    )
}

export default Cart