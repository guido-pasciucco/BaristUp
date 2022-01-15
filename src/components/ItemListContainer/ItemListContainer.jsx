import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemListContainer/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({greeting}){
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
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
