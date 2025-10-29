import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="card overflow-hidden group">
      {/* Image Section */}
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Destacado
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white text-earth-800 px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price.toFixed(2)}
        </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-2xl">{product.category === 'cerámica' && '🏺'}
                                        {product.category === 'textil' && '🧵'}
                                        {product.category === 'arte' && '🎨'}
                                        {product.category === 'joyería' && '💍'}</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Artisan Info */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-earth-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-earth-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
          </div>
          <span className="text-xs text-gray-600">por {product.artisan}</span>
        </div>

        {/* Stock and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-green-600">{product.stock} disponibles</span>
          </div>
          <button 
            onClick={handleAddToCart}
            className={`btn-primary text-sm transition-all ${
              addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
            }`}
          >
            {addedToCart ? '✓ Agregado' : 'Agregar al Carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}

