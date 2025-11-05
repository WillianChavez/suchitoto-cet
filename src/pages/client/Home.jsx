import Layout from '../../components/shared/Layout';
import Hero from '../../components/client/Hero';
import ProductCard from '../../components/client/ProductCard';
import CategoryFilter from '../../components/client/CategoryFilter';
import Creators from '../../components/client/Creators';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../../data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contactForm, setContactForm] = useState({
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const featuredProducts = products.filter(p => p.featured);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.email.trim() && contactForm.message.trim()) {
      setFormSubmitted(true);
      setContactForm({ email: '', message: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    // Manejar scroll cuando se carga la página con hash
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-white" id="featured">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
              Nuestra selección de artesanías más populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary inline-block">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-earth-50" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Explora por Categoría
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 mb-4 text-base sm:text-lg leading-relaxed">
                  Durante más de 20 años, el Centro Arte para la Paz ha sido un pilar fundamental 
                  en la comunidad de Suchitoto, promoviendo el arte, la cultura y la transformación 
                  social.
                </p>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
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
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-base sm:text-lg opacity-90 px-2 sm:px-0">
              Apoyando a artesanos locales y preservando la cultura salvadoreña
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Creators Section */}
      <Creators />

      {/* Contact Section */}
      <section className="py-16 bg-earth-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Contáctanos
              </h2>
              <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
                ¿Tienes alguna pregunta? Estamos aquí para ayudarte
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Te responderemos pronto
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-3"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

