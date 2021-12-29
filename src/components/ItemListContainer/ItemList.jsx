import React, {useState, useContext, memo } from 'react'
import Item from './Item'

const ItemList = memo(
    ({productos}) => {
        return(
            <>
            <div>
                {productos.map(producto => <Item producto = {producto}/>)}
            </div>
            </>
        )    
    }
)

export default ItemList
