import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/client/Home';
import Products from './pages/client/Products';
import ProductDetail from './pages/client/ProductDetail';
import Cart from './pages/client/Cart';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Artisans from './pages/admin/Artisans';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/artisans" element={<Artisans />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
