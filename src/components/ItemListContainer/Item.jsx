import {Link} from 'react-router-dom'

function Item ({producto}){
    return(
        <><><>
        <div style={{border:"2px solid green",padding:"20px"}}>
            <h1 key={producto.id}>{producto.titulo}</h1>
            <img src={producto.img} style={{width:"auto",height:"250px"}}/>
            <h5>Cat.: {producto.categoria}</h5>
            <h2>${producto.precio}</h2>
            <Link to={`/detalle/${producto.id}`}>
                <button className="btn btn outline success btn block">
                    Detalle del Producto
                </button>
            </Link>
        </div>
        </></></>
    )
}

export default Item