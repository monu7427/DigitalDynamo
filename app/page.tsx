"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import SearchBar from "@/components/search-bar"
import CategoryTabs from "@/components/category-tabs"
import ProductCard from "@/components/product-card"
import CustomerReviews from "@/components/customer-reviews"
import FAQSection from "@/components/faq-section"
import UpcomingOffers from "@/components/upcoming-offers"
import { products, getAllCategories, getCategoryTitle } from "@/lib/data"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = useMemo(() => {
    const cats = getAllCategories()
    return cats.map((cat) => ({
      id: cat,
      name: getCategoryTitle(cat),
      count: products.filter((p) => p.category === cat).length,
    }))
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filtered.slice(0, 8) // Show only first 8 products on home page
  }, [searchQuery, activeCategory])

  return (
    <div className="bg-white">
      <HeroSection />

      {/* Search Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 animate-slide-up">
            Find Your Perfect Subscription
          </h2>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title animate-slide-up">Featured Products</h2>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>



      <CustomerReviews />
      <UpcomingOffers />
      <FAQSection />
    </div>
  )
}
