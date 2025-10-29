import Layout from '../../components/shared/Layout';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleContactArtisan = () => {
    window.open(`https://wa.me/?text=Hola, me interesa el producto: ${product.name}`, '_blank');
  };

  if (!product) {
    return (
      <Layout>
        <div className="text-center py-16">
          <p className="text-gray-600">Producto no encontrado</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Image Section */}
            <div>
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Destacado
                  </div>
                )}
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200 cursor-pointer hover:border-primary-500 transition-colors">
                    <img 
                      src={product.image} 
                      alt={`Vista ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              {/* Category */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">
                  {product.category === 'cerámica' && '🏺'}
                  {product.category === 'textil' && '🧵'}
                  {product.category === 'arte' && '🎨'}
                  {product.category === 'joyería' && '💍'}
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.stock > 0 ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    ✓ En stock
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    Agotado
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Artisan Info */}
              <div className="bg-earth-50 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-earth-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Artesano</div>
                    <div className="text-sm text-gray-600">{product.artisan}</div>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Materiales</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2">
                  Cantidad
                </label>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-12 text-center border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none"
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  className={`btn-primary w-full text-lg py-4 transition-all ${
                    addedToCart ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                >
                  {addedToCart ? '✓ Agregado al Carrito' : 'Agregar al Carrito'}
                </button>
                <button 
                  onClick={handleContactArtisan}
                  className="btn-secondary w-full text-lg py-4"
                >
                  Contactar Artesano
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Productos Relacionados
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(p => (
                  <div key={p.id} className="card overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{p.name}</h3>
                      <p className="text-primary-600 font-bold mb-3">${p.price.toFixed(2)}</p>
                      <a href={`/product/${p.id}`} className="btn-primary text-sm w-full block text-center">
                        Ver Detalles
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

