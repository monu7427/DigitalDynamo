"use client"

import { useState } from "react"
import { Filter } from "lucide-react"

interface PriceFilterProps {
  onPriceFilter: (min: number, max: number) => void
}

export default function PriceFilter({ onPriceFilter }: PriceFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleApplyFilter = () => {
    onPriceFilter(
      minPrice ? Number.parseInt(minPrice) : 0,
      maxPrice ? Number.parseInt(maxPrice) : Number.POSITIVE_INFINITY,
    )
    setIsOpen(false)
  }

  const handleClearFilter = () => {
    setMinPrice("")
    setMaxPrice("")
    onPriceFilter(0, Number.POSITIVE_INFINITY)
  }

  return (
    <div className="relative  animate-slide-up">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
      >
        <Filter size={20} />
        Price Filter
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white border border-gray-300 rounded-lg p-4 shadow-lg z-10 min-w-64">
          <h3 className="text-gray-900 font-semibold mb-3">Filter by Price</h3>
          <div className="space-y-3">
            <div>
              <label className="text-gray-600 text-sm">Min Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
                className="input-field mt-1"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Max Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="No limit"
                className="input-field mt-1"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleApplyFilter}
                className="flex-1 bg-yellow-400 text-black py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
              >
                Apply
              </button>
              <button
                onClick={handleClearFilter}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
