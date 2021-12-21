import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer'
import ItemDetailContainer from './components/NavBar/ItemDetailContainer'
import Cart from './components/NavBar/Cart'
import CartContextProvider from './components/NavBar/CartContext'

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
			<div className="App">
				<header className="App-header"> 
					<NavBar />
					<Routes>
						<Route exact path="/" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
						<Route exact path="/categoria/:idCate" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
						<Route exact path="/detalle/:id" element={<ItemDetailContainer saludo='ILC'/>}/>
						<Route exact path="/cart" element={<Cart saludo='carrito'/>}/>
					</Routes>
				</header>
			</div>
			</BrowserRouter>
		</CartContextProvider>
	)
}

export default App
