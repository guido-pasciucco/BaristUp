import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Col, Row } from 'react-bootstrap'
import CartContext from './CartContext'

function ItemDetail({prod}){
    const [count, setCount] = useState(0)

    const {cartList, agregarAlCarrito} = useContext(CartContext)

    //const onAdd = ()=>{addItem(item, cantidad)}

    /* ESTE ES EL ONADD */
    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito({...prod, cant:cant})
    }

    //console.log(prod)
    return(
        <>
        <label>Soy el Detalle</label>
        <p>Soy el Detalle</p>
        <button onAdd={onAdd}> AGREGAR AL CHANGUITO</button>
        </>
    )
}

export default ItemDetail