import AdminLayout from '../../components/admin/AdminLayout';
import { products } from '../../data/products';
import { useState } from 'react';

export default function Products() {
  const [showModal, setShowModal] = useState(false);

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Productos</h1>
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            + Agregar Producto
          </button>
        </div>

        {/* Search and Filter */}
        <div className="card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Todas las categorías</option>
              <option>Cerámica</option>
              <option>Textil</option>
              <option>Arte</option>
              <option>Joyería</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Todos los estados</option>
              <option>Destacado</option>
              <option>Normal</option>
              <option>Bajo Stock</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Producto</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Categoría</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Precio</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Stock</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Estado</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-600">#{product.id}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.artisan}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-earth-100 text-earth-700 rounded-full text-xs font-semibold uppercase">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-semibold">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <span className={`font-semibold ${product.stock < 5 ? 'text-red-600' : 'text-green-600'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {product.featured ? (
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                          Destacado
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                          Normal
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                          Editar
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm font-semibold">
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Mostrando 1-{products.length} de {products.length} productos
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Siguiente
            </button>
          </div>
        </div>

        {/* Add Product Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Agregar Nuevo Producto</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Nombre del producto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Descripción
                  </label>
                  <textarea
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Descripción del producto"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Precio
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Categoría
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Seleccionar categoría</option>
                    <option>Cerámica</option>
                    <option>Textil</option>
                    <option>Arte</option>
                    <option>Joyería</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3 pt-4">
                  <button type="button" className="btn-secondary flex-1" onClick={() => setShowModal(false)}>
                    Cancelar
                  </button>
                  <button type="button" className="btn-primary flex-1">
                    Guardar Producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

