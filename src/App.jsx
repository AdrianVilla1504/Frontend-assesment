import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import ProductDetail from './pages/ProductDetail/index';
import AboutPage from './pages/About/index';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/detail/:id' element={<ProductDetail />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
