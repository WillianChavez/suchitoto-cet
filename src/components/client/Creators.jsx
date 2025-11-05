export default function Creators() {
  const creators = [
    {
      id: 1,
      name: 'MANUEL DE JESUS TOBAR LEIVA',
      code: 'TL21001',
      image: '/integrantes/3.jpg',
      role: 'Desarrollador'
    },
    {
      id: 2,
      name: 'DE LA QUADRA MATA, JULIO ENRIQUE',
      code: 'DM14015',
      image: '/integrantes/2.jpg',
      role: 'Desarrollador'
    },
    {
      id: 3,
      name: 'HERNANDEZ ROMERO, JOSE MANUEL',
      code: 'HR22004',
      image: '/integrantes/1.jpg',
      role: 'Desarrollador'
    },
    {
      id: 4,
      name: 'CHÁVEZ SERVELLÓN, WILLIAN ALEXANDER',
      code: 'CS21004',
      image: '/integrantes/4.jpg',
      role: 'Desarrollador'
    }
  ];

  return (
    <section className="py-16 bg-white" id="creators">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Creadores
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
            Conoce al equipo detrás de este proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {creators.map((creator) => (
            <div 
              key={creator.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 break-words">
                  {creator.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {creator.code}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-primary-600">
                  {creator.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

