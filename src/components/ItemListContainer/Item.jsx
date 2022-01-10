import {Link} from 'react-router-dom'

function Item ({producto}){
    return(
        <><><>
        <div className="card col-md-4" style={{ height : "700px", backgroundColor : "brown", justifyContent: "space-evenly" }}>
            <img src={producto.img} className="card-img-top " alt="..." style={{ width: ".." }} /><div class="card-body">
                    <h5 className="card-title" key={producto.id}>
                        {producto.titulo}
                    </h5>
                    <p className="card-text">
                        ${producto.categoria}
                    </p>
                    <p className="card-text">
                        ${producto.precio}
                    </p>
                    <Link to={`/detalle/${producto.id}`}>
                        <button className="btn btn-primary">
                            Detalle del Producto
                        </button>
                    </Link>
                </div>
        </div>        
        </></></>
    )
}

export default Item