import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemListContainer/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({greeting}){
    const [productos, setProductos] = useState ([])
    //const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    // el de uno solo ( o sea detalle)
    useEffect(()=>{
        const db = getFirestore()
        if(idCate){
            const queryCollection = query(collection(db,'productos'), where('categoria','==',idCate)) 
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }else{
            const queryCollection = query(collection(db,'productos'))
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false)) 
        }
    },[idCate])
    console.log(idCate)
    return (
        <div>
            {greeting} {loading ? <h2>Cargando...</h2> : <ItemList productos={productos}/> }
        </div>
    )
}

export default ItemListContainer

/*
useEffect(()=>{
    if(idCate){
        getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }else{
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }
},[idCate])
////////////////////////////////////
useEffect(()=>{
    const db = getFirestore()
    if(idCate){
        const queryCollection = query(collection(db, 'productos'), where('categoria', '==', idCate))
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }else{
        const queryDb = query(db, 'productos')
        getDocs(queryDb)
        .then( resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    }
},[idCate])
*/