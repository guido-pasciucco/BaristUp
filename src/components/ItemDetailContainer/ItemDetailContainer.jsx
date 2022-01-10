import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { collection, getDoc, doc, getFirestore, query, where } from 'firebase/firestore'

function ItemDetailContainer(){
    const [productos, setProductos] = useState ({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db, 'productos', id)
        getDoc(queryDb)        
        .then(resp => setProductos({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [id])
    return(
        <> <div> {loading ?
        <h2>Cargando Detalle...</h2> : 
        <ItemDetail productos={productos}/>}</div></>
    )
}
export default ItemDetailContainer
