import { categories } from '../../data/products';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeCategory === 'all'
            ? 'bg-primary-600 text-white'
            : 'bg-earth-100 text-earth-800 hover:bg-earth-200'
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            activeCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-earth-100 text-earth-800 hover:bg-earth-200'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}

