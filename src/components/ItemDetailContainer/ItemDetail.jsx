import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import {CartContext}  from '../Cart/CartContext'

function ItemDetail({productos}){
    const [option, setOption] = useState(true)
    const {agregarAlCarrito} = useContext(CartContext)
    function onAdd (cantidad){
        setOption(false)
        agregarAlCarrito(productos, cantidad)
    }
    return(
        <><label>Soy el Detalle</label>    
        <div style={{border:"4px solid yellow",padding:"20px"}}>
            <h1 key={productos.id}>{productos.titulo}</h1>
            <h2>Detalles del Producto</h2><p>{productos.detalle}</p>
            <h3>${productos.precio}</h3>
            <img src={productos.img} style={{width:"auto",height:"150px"}}/>
            <h4>Categoría: {productos.categoria}</h4>
        </div>
        <p>Soy el Detalle</p>
        {option
            ? <ItemCount onAdd={onAdd} />
            : <Link to="/cart"> ¡Agregado! ver carrito </Link>
        }</>
    )
}

export default ItemDetail