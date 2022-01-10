import React, {useState, useContext, memo } from 'react'
import Item from './Item'

const ItemList = memo(
    ({productos}) => {
        return(
            <>
            <div className='container' >
            <div className='row' style={{display: "flex"}} >
                {productos.map(producto => <Item producto = {producto}/>)}
            </div>
            </div>
            </>
        )    
    }
)

export default ItemList
