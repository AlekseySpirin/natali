import './App.scss';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
	return (
		<div className="App">
			<Header/>
			<AppRouter/>
			<Footer/>
		</div>
	);
}

export default App;
