import { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Col, Row } from 'react-bootstrap'
import CartContext from './CartContext'

function ItemDetail({prod}){
    const [count, setCount] = useState(0)

    const {cartList, agregarAlCarrito} = useContext(CartContext)

    function onAdd(cant){
        console.log(cant)
        agregarAlCarrito({...prod, cantidad:cant})
    }
    //console.log(prod)
    return(
        <Row>
            <label>Soy el Detalle</label>
            <Col>
                <div className='card w-50' >
                    <div className='container'>
                        <label>
                            {prod.title}
                        </label>
                    </div>
                    <div className='container'>
                        <img src={prod.foto} className='w-25' alt='foto'/>
                        <br/>
                        <label>
                            {prod.descripcion}
                        </label>
                        <label>
                            {prod.categoria}
                        </label>
                    </div>
                </div>
            </Col>
        </Row>
    )
}