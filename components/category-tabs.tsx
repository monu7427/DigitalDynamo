"use client"

interface CategoryTabsProps {
  categories: { id: string; name: string; count: number }[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up">
      <button
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
          activeCategory === "all"
            ? "bg-yellow-400 text-black shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative ${
            activeCategory === category.id
              ? "bg-yellow-400 text-black shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          }`}
        >
          {category.name}
          <span className="ml-1 text-xs">({category.count})</span>
        </button>
      ))}
    </div>
  )
}
