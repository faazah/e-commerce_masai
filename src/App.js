// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { Order } from './components/Order';
import { Product } from './components/Product';
import { ProductDetail } from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/product-detail/:id' element={<ProductDetail/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
