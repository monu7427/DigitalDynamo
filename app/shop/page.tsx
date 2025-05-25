"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import SearchBar from "@/components/search-bar"
import CategoryTabs from "@/components/category-tabs"
import PriceFilter from "@/components/price-filter"
import ProductCard from "@/components/product-card"
import { products, getAllCategories, getCategoryTitle } from "@/lib/data"

export default function Shop() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [priceRange, setPriceRange] = useState({ min: 0, max: Number.POSITIVE_INFINITY })

  // Handle URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams])

  // Prepare categories with counts
  const categories = useMemo(() => {
    const cats = getAllCategories()
    return cats.map((cat) => ({
      id: cat,
      name: getCategoryTitle(cat),
      count: products.filter((p) => p.category === cat).length,
    }))
  }, [])

  // Filter products by category, search, and price (using each product's first variation price)
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (activeCategory !== "all") {
          return product.category === activeCategory
        }
        return true
      })
      .filter((product) => {
        if (!searchQuery) return true
        const q = searchQuery.toLowerCase()
        return (
          product.title.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q)
        )
      })
      .filter((product) => {
        const basePrice = product.variations[0]?.price ?? 0
        return basePrice >= priceRange.min && basePrice <= priceRange.max
      })
  }, [searchQuery, activeCategory, priceRange])

  const handlePriceFilter = (min: number, max: number) => {
    setPriceRange({ min, max })
  }

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="container mx-auto md:px-4">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8 animate-slide-up flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900   md:mb-4">
            Browse All <span className="gradient-text">Subscriptions</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-lg w-[80%]">
            Discover premium digital services at unbeatable prices
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-2 py-2 md:py-6 ">
          <div className="flex-1 max-w-md">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          <PriceFilter onPriceFilter={handlePriceFilter} />
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Results Count */}
        <div className="mb-6 animate-fade-in">
          <p className="text-gray-600">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && ` in ${getCategoryTitle(activeCategory)}`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
                setPriceRange({ min: 0, max: Number.POSITIVE_INFINITY })
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
