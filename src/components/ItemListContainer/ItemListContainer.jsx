import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {getFetch} from '../ItemListContainer/getFetch'
import ItemList from '../ItemListContainer/ItemList'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer({greeting}){
    const [productos, setProductos] = useState ([])
    //const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    // el de uno solo ( o sea detalle)
    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db, 'productos', '3myPaTaZ5ge5DtjdrgeL')
        getDoc(queryDb)
        .then(resp => setProductos({id: resp.id, ...resp.data()}))
    })
    // el de todos (el home), falta un where para las categorías
    useEffect (()=>{    
        const db = getFirestore()
        const queryCollection = query(collection(db, 'productos'), where('precio', '<', 1000))
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])
    return (
        <div>
            {greeting}
            {loading ?
                <h2>Cargando...</h2>
                :
                <ItemList productos={productos}/>
            }
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
    */
