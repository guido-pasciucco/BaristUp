import { useContext } from "react"
import { CartContext, cartList } from "../Cart/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, doc, collection, getFirestore, writeBatch } from 'firebase/firestore'
import { useState } from "react"

function Cart(){
    const inputInicial = { nombre : '', tel    : '', email  : '' }
    const [buyer, setBuyer] = useState(inputInicial)
    const { cartList, borrarCarrito, quitarDelCarrito } = useContext(CartContext) ;
    const condition = cartList.length === 0 ;
    const [idOrder, setIdOrder] = useState('')
    function precioFinal(){
        cartList.map((prod) => Number(prod.item.precio * prod.cantidad)).reduce((a, b) => a + b, 0);
    }
    const handleInputs = (e) => {
        e.preventDefault()
        setBuyer({ ...buyer, [e.target.name]: e.target.value })   
    }
    const generarOrden = (e) => {        
        e.preventDefault()
        const orden = {}
        const db = getFirestore()
        const ordenCollecion = collection(db, 'orders')
        addDoc(ordenCollecion, orden)
        .then(resp => console.log(resp))
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err)) 
        .finally(()=> {
            borrarCarrito()
            setBuyer(inputInicial)
        })
        orden.buyer = buyer
        orden.total = precioFinal()
        orden.items = cartList.map(prod => {
            const id = prod.id
            const nombre = prod.item.titulo
            const precio = prod.item.precio * prod.cantidad
            return {id, nombre, precio}
        })   
        console.log(orden)
        alert(
            'Orden generada' + 
            '\n\n Tu nombre: ' + orden.buyer.nombre +
            '\n Tu Teléfono: ' + orden.buyer.tel +
            '\n Tu Email: ' + orden.buyer.email + '\n' + JSON.stringify(orden.items)
        )
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
                    <div style={{display:"flex",justifyContent:"space-evenly",width:"1200px"}}>
                        <h3 style={{width:"20%",height:"90px"}}>{prod.item.titulo}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>{prod.cantidad}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>${prod.item.precio}</h3>
                        <h3 style={{width:"20%",height:"90px"}}>${parseInt(prod.item.precio) * parseInt(prod.cantidad)}</h3>
                        <h3 style={{width:"20%",height:"90px"}}><button id={prod.id} onClick={()=>quitarDelCarrito(prod.item.id)}>X</button></h3>
                    </div>
                )}
                <h3 style={{height:"50px"}}>Total a pagar: $ {precioFinal}</h3>
                <div>{cartList.map(prod =>
                    <li>{prod.item.titulo} {prod.cantidad}</li>
                )} 
                    <form onSubmit={generarOrden}>
                        <input type="text" name='nombre' placeholder='clientName' onChange={handleInputs} />
                        <input type="text" name='tel' placeholder='clientPhone' onChange={handleInputs}/>
                        <input type="email" name='email' placeholder='clientEmail' onChange={handleInputs}/>
                        <button>Generar Orden</button>
                    </form>
                </div>
                <button onClick={borrarCarrito} style={{width:"300px"}}>Vaciar Carrito</button>
                <Link to="/"><button style={{width:"300px"}} >Seguir comprando</button></Link>
            </div>
        }
        </div>
    )
}
export default Cart

/* 1

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

*/
 
/* 2 

    function Cart(){
        const { cartList, borrarCarrito, precioTotal } = useContext()
        // yo preciototal lo tengo como precio final y acá, no en cContext
        const generarOrden = (e) => {
            e.preventDefault()
            let orden = {}
            // orden.date = firebase.firestore.Timestamp.fromDate(newDate())
            orden.buyer = {nombre: 'Fede', tel: '1144448888', email: 'fede@gmail.com'}
            orden.total = precioTotal()
            orden.items = cartList.map(cartItem => {
                const id = cartItem.id
                const nombre = cartItem.name
                const precio = cartItem.price * cartItem.cantidad
                return {id, nombre, precio}
            })
            console.log(orden)        
        }
        return (
            <div>
                {cartList.map(prod => <li>{prod.name} {prod.cantidad} </li>)}
                <form onSubmit={generarOrden}
                    //onChange={handleChange}
                >
                    {/*
                    <input type="text"  name='name'  placeholder="name"  value={FormData.name}/>
                    <input type="text"  name='phone' placeholder="tel"   value={FormData.phone}/>
                    <input type="email" name='email' placeholder="email" value={FormData.email}/>
                    /*}
                    <button>Generar Orden</button>
                </form>
                <button onClick={borrarCarrito} >Vaciar Carrito</button>
            </div>
        )
    }

*/
 
/*  COPIA DE COMO ESTABA ANTES POR LAS DUDAS

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

*/
