import { createContext, useState } from 'react'

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])
   
    function agregarAlCarrito (item, cantidad){
        const index = cartList.findIndex(i => i.item.id === item.id) 
        
        if ( index > -1 ) {
            const oldQy = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, { item, cantidad: cantidad + oldQy}])
        } else { 
            setCartList([...cartList, {item, cantidad}])
        }
    }

    function borrarCarrito(){
        setCartList([])
    }
    function quitarDelCarrito(id){
        setCartList(cartList.filter(productos => productos.item.id !== id ))
    }
    function estaEnElCarrito(id){
        cartList.some()
        console.log()
    }
    
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