import Layout from '../../components/shared/Layout';
import Hero from '../../components/client/Hero';
import ProductCard from '../../components/client/ProductCard';
import CategoryFilter from '../../components/client/CategoryFilter';
import { useState } from 'react';
import { products } from '../../data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const featuredProducts = products.filter(p => p.featured);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-white" id="featured">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600 text-lg">
              Nuestra selección de artesanías más populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-earth-50" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explora por Categoría
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Encuentra lo que buscas
            </p>
            <CategoryFilter 
              activeCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Durante más de 20 años, el Centro Arte para la Paz ha sido un pilar fundamental 
                  en la comunidad de Suchitoto, promoviendo el arte, la cultura y la transformación 
                  social.
                </p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Nuestro e-commerce nace con la misión de ampliar nuestro alcance, conectando las 
                  hermosas artesanías de nuestros artesanos locales con personas alrededor del mundo.
                </p>
                <button className="btn-primary">
                  Conoce Más
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" 
                  alt="Suchitoto cultura"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-lg opacity-90">
              Apoyando a artesanos locales y preservando la cultura salvadoreña
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">50+ Artesanos</h3>
              <p className="opacity-90">
                Apoyamos directamente a artesanos de la región
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-2">Envíos Internacionales</h3>
              <p className="opacity-90">
                Llevamos la cultura salvadoreña a todo el mundo
              </p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-2">Comercio Justo</h3>
              <p className="opacity-90">
                Precios justos que benefician a la comunidad
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

