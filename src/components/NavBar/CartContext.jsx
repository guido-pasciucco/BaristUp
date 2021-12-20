import { createContext, useState } from 'react'
import { getFetch } from './getFetch'
import cart from './Cart'
import CartButton from './CartButton'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemListContainer from './ItemListContainer'

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item){
        setCartList([...cartList, item])
    }

    function borrarCarrito(){
        setCartList([])
    }

    function quitarDelCarrito(){
        cartList.splice()
        console.log(cartList)
    }

    //function estaEnElCarrito(item){
    //    cartList.some(item)
    //    console.log(true or false)
    //}

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            quitarDelCarrito
        }}> {children}
        </CartContext.Provider>      
    )
}

export default CartContextProvider