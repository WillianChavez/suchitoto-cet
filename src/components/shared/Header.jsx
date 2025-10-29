import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">CAP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Centro Arte para la Paz</h1>
              <p className="text-xs text-gray-600">Artesanías de Suchitoto</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">
              Productos
            </Link>
            <a href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              Nosotros
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block btn-secondary text-sm">
              Iniciar Sesión
            </button>
            <Link to="/cart" className="btn-primary text-sm relative">
              Carrito
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">
              Productos
            </Link>
            <a href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors">
              Nosotros
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contacto
            </a>
            <button className="btn-secondary text-sm w-full">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

