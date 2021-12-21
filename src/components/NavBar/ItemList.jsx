import React, {useState, useContext} from 'react'

import Item from './Item'

function ItemList({productos}){  
    return(
        <>
        <div>
            {productos.map(producto => <Item producto={producto}/>)}
        </div>
        </>
    )
}
export default ItemList
