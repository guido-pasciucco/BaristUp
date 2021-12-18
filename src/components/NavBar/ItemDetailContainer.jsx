import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import {getFetch} from './getFetch'

function ItemDetailContainer(){
    const [productos, setProductos] = useState ([])
    const {id} = useParams()
    console.log(id)
    return(
        <>
        <div>
            {productos.map(producto =>
                <><><>
                <div style={{border:"4px solid yellow",padding:"20px"}}>
                    <h1 key={producto.id}>
                        {producto.titulo}
                    </h1>
                    <h2>Detalles del Producto</h2>
                    <p>
                        {producto.detalle}
                    </p>
                    <h3>
                        ${producto.precio}
                    </h3>
                    <img src={producto.img} style={{width:"auto",height:"150px"}}/>
                    <h4>
                        Categoría: {producto.categoria}
                    </h4>
                    <button style={{width:"200px",height:"50px"}}>
                        Detalles
                    </button>
                    <ItemCount/>          
                    <button style={{width:"200px",height:"50px"}}>
                        Añadir al Carrito
                    </button> 
                </div>
                </></></>
            )}
        </div>
        </>
    )
}
export default ItemDetailContainer