export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-earth-50 to-primary-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Arte y Cultura de
            <span className="block text-primary-600 mt-2">Suchitoto</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Descubre nuestras artesanías únicas, elaboradas por manos talentosas de la comunidad.
            Cada pieza cuenta una historia y apoya a los artesanos locales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="btn-primary text-lg px-8">
              Explorar Productos
            </button>
            <button className="btn-secondary text-lg px-8">
              Conocer Nuestra Historia
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">20+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">50+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Artesanos Locales</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">500+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Productos Únicos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,120 250,100 400,90 C550,80 750,90 900,80 C1050,70 1200,75 1200,75 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

