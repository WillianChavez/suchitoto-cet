# Centro Arte para la Paz - E-commerce

Plataforma de comercio electrónico para el Centro Arte para la Paz de Suchitoto, El Salvador. Esta aplicación permite la venta en línea de artesanías y productos culturales elaborados por artesanos locales.

## 🎨 Sobre el Proyecto

Este proyecto fue desarrollado para el **Centro Arte para la Paz** (CAP), una organización sin fines de lucro con más de 20 años de experiencia en la promoción del arte, la cultura y la transformación social en Suchitoto.

### Objetivos

- Ampliar el alcance de la organización más allá de la comunidad de Suchitoto
- Facilitar la venta de artesanías en línea
- Generar ingresos para la sostenibilidad financiera del Centro
- Proporcionar una plataforma digital para visibilidad institucional
- Conectar artesanos locales con clientes nacionales e internacionales

## 📋 Características

### Para Clientes
- **Catálogo de Productos**: Explora artesanías únicas organizadas por categorías
- **Búsqueda y Filtros**: Encuentra productos por categoría (Cerámica, Textil, Arte, Joyería)
- **Detalle de Productos**: Información completa sobre cada artesanía
- **Información de Artesanos**: Conoce quién elaboró cada pieza
- **Diseño Responsive**: Funciona perfectamente en desktop, tablet y móvil

### Para Administradores
- **Dashboard**: Vista general del inventario y estadísticas
- **Gestión de Productos**: CRUD completo para productos
- **Control de Stock**: Monitoreo de inventario
- **Gestión de Artesanos**: Administración de información de artesanos
- **Panel de Pedidos**: Gestión de órdenes (próximamente)

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de desarrollo frontend
- **Tailwind CSS** - Framework de CSS utility-first
- **React Router DOM** - Enrutamiento para aplicaciones React

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── admin/          # Componentes del panel de administración
│   │   └── AdminLayout.jsx
│   ├── client/         # Componentes del área de clientes
│   │   ├── ProductCard.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── Hero.jsx
│   └── shared/         # Componentes compartidos
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Layout.jsx
├── pages/
│   ├── admin/          # Páginas del panel de administración
│   │   ├── Dashboard.jsx
│   │   └── Products.jsx
│   └── client/         # Páginas del área de clientes
│       ├── Home.jsx
│       ├── Products.jsx
│       └── ProductDetail.jsx
├── data/               # Datos simulados
│   └── products.js
├── hooks/              # Custom hooks (para implementación futura)
└── assets/             # Recursos estáticos
```

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js (versión 18 o superior)
- pnpm (gestor de paquetes)

### Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd suchitoto-project-cet
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de producción
pnpm preview

# Ejecutar linter
pnpm lint
```

## 🎯 Rutas Disponibles

### Cliente
- `/` - Página de inicio
- `/products` - Catálogo de productos
- `/product/:id` - Detalle de producto

### Administración
- `/admin/dashboard` - Panel de control
- `/admin/products` - Gestión de productos

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores inspirada en la cultura de Suchitoto:

- **Primary** (Naranja/Terracota): Representa la tierra y las artesanías locales
- **Earth** (Tonos de tierra): Colores naturales que reflejan la esencia local

## 📝 Notas de Desarrollo

- **Estado Actual**: Este es un proyecto en fase de maquetado estético
- **Funcionalidad**: Actualmente solo incluye la interfaz de usuario (UI)
- **Estado Futuro**: Se implementará la lógica de negocio, integración con backend, pagos, etc.

## 🤝 Contribuir

Este proyecto forma parte del trabajo académico del Centro Educativo Suchitoto (CET).

## 📞 Contacto

Centro Arte para la Paz
- Website: https://capsuchitoto.org/
- Facebook: https://www.facebook.com/CentroArteParaLaPaz
- Ubicación: Suchitoto, El Salvador

## 📄 Licencia

Este proyecto es de uso educativo y comunitario.
