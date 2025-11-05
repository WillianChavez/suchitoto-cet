import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegar primero
      window.location.href = `/#${targetId}`;
      return;
    }

    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  const handleHomeClick = (e) => {
    if (location.pathname !== '/') {
      return; // Dejar que Link maneje la navegación
    }
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">CAP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">Centro Arte para la Paz</h1>
              <p className="text-xs text-gray-600">Artesanías de Suchitoto</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-gray-800">CAP</h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Inicio
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors">
              Productos
            </Link>
            <a 
              href="/#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="/#creators" 
              onClick={(e) => handleSmoothScroll(e, 'creators')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Creadores
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="btn-primary text-sm relative">
              Carrito
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              onClick={(e) => {
                handleHomeClick(e);
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Inicio
            </Link>
            <Link 
              to="/products" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Productos
            </Link>
            <a 
              href="/#about" 
              onClick={(e) => {
                handleSmoothScroll(e, 'about');
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="/#creators" 
              onClick={(e) => {
                handleSmoothScroll(e, 'creators');
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Creadores
            </a>
            <a 
              href="/#contact" 
              onClick={(e) => {
                handleSmoothScroll(e, 'contact');
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}

