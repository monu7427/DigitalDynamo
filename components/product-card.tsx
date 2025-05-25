"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Eye } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // Always show the first variation in the card
  const variation = product.variations[0]
  const price = variation.price
  const originalPrice = variation.originalPrice
  const subPrice = variation.subPrice

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="card group animate-slide-up">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="btn-primary flex items-center gap-2">
              <Eye size={20} />
              View Details
            </button>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse-custom">
                {discountPercentage}% OFF
              </span>
            )}
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${
                product.availability ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {product.availability ? "Available" : "Out of Stock"}
            </span>
          </div>

          {/* Offer icon */}
          <div className="absolute top-2 right-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-shake">
              <span className="text-black font-bold text-xs">🔥</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < 4 ? "text-yellow-400 fill-current" : "text-gray-400"}`}
              />
            ))}
            <span className="text-gray-500 text-sm ml-1">(4.2)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-xl text-yellow-600">₹{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">₹{originalPrice}</span>
            )}
          </div>

          {/* Sub-price info */}
          {subPrice && (
            <p className="text-xs text-gray-500 mb-3 bg-gray-100 px-2 py-1 rounded">
              {subPrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
