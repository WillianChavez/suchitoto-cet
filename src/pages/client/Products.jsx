import Layout from '../../components/shared/Layout';
import ProductCard from '../../components/client/ProductCard';
import CategoryFilter from '../../components/client/CategoryFilter';
import { useState } from 'react';
import { products } from '../../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="bg-earth-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Nuestro Catálogo
            </h1>
            <p className="text-gray-600 text-lg">
              Descubre nuestras artesanías únicas
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-gray-900"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <CategoryFilter 
              activeCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Count */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Mostrando <span className="font-bold text-primary-600">{filteredProducts.length}</span> productos
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600">
                Intenta con otra búsqueda o categoría
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

