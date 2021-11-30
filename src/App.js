import './App.css';
import CartWidget from './components/NavBar/CartWidget'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemListContainer saludo='Hola soy el Item List Container' />
			</header>
		</div>
	);
}

export default App;
