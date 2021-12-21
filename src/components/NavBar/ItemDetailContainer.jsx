import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getFetch} from './getFetch'
import ItemDetail from './ItemDetail'

function ItemDetailContainer(){
    const [productos, setProductos] = useState ({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        getFetch
            .then(resp => setProductos(resp.find(prod => prod.id === parseInt(id))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [id])
  
    return(
        <>
        <div>
           {loading ? 
            <h2>Cargando Detalle...</h2>
            :
            <ItemDetail productos={productos}/>   
        }
        </div>
        </>
    )
}
export default ItemDetailContainer