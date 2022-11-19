import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Services/AllProducts.js';
import SingleProduct from './views/Product';
import Home from './views/Home';
import Contacto from './views/Contacto';
import AboutUs from './views/AboutUs';
import Carrito from './views/Carrito';
import { ContextProvider } from './Context';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Home />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/products/:id" element={<SingleProduct/>}/>
              <Route path="/contact" element={<Contacto />}/>
              <Route path="*" element={<h1>404: Not Found</h1>}/>
              <Route path="nosotros" element={<AboutUs/>}/>
              <Route path="carrito" element={<Carrito/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
