import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import CartWidget from './components/NavBar/CartWidget'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer'
import ItemCount from './components/NavBar/ItemCount'
import ItemDetailContainer from './components/NavBar/ItemDetailContainer'

function App() {
	return (
		<BrowserRouter>
		<div className="App">
			<header className="App-header"> 
				<NavBar />
				<Routes>
					<Route exact path="/" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
					<Route exact path="/categoria/:idCate" element={<ItemListContainer saludo='Hola soy el ILC'/>}/>
					<Route exact path="/detalle/:id" element={<ItemDetailContainer saludo='ILC'/>}/>
				</Routes>
			</header>
		</div>
		</BrowserRouter>
	);
}
//<Route exact path="/" element={<CartWidget/>}/>

export default App;
