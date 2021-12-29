import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { collection, getDoc, doc, getFirestore, query, where } from 'firebase/firestore'

function ItemDetailContainer(){
    const [productos, setProductos] = useState ({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    console.log(id)
    console.log('HOLA 1: ' + productos)
    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db, 'productos', id)
        getDoc(queryDb)        
        .then(resp => setProductos({id: resp.id, ...resp.data()}))
        //.then(resp => setProductos(resp.find(prod => prod.id === id)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log('HOLA 2: ' + productos)
    }, [id])
    console.log('HOLA 3: ' + productos)
    return(
        <> <div> {loading ?
        <h2>Cargando Detalle...</h2> : 
        <ItemDetail productos={productos}/>}</div></>
    )
}
export default ItemDetailContainer

/*
useEffect(()=>{
    const db = getFirestore()
    const queryCollection = query(collection(db,'productos'), where('categoria','==',idCate)) 
    getDoc(queryCollection)
    .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))         
},[idCate])
*/