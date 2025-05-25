"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Shield,
  Clock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Share2,
} from "lucide-react"
import { products } from "@/lib/data"
import type { Product, Variation } from "@/lib/types"
import ProductCard from "@/components/product-card"

export default function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0)

  // Load the product matching the ID in the URL, reset image + variation index
  useEffect(() => {
    const found = products.find((p) => p.id === params.id)
    setProduct(found || null)
    setCurrentImageIndex(0)
    setSelectedVariationIndex(0)
  }, [params.id])

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in max-w-md mx-auto px-4">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-6xl">😕</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <div className="space-y-4">
            <Link href="/shop" className="btn-primary inline-block">
              Browse All Products
            </Link>
            <div>
              <Link href="/" className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grab the selected variation
  const variations: Variation[] = product.variations
  const detail = variations[selectedVariationIndex]

  // Compute discount percentage for this variation
  const discountPercentage = detail.originalPrice
    ? Math.round(((detail.originalPrice - detail.price) / detail.originalPrice) * 100)
    : 0

  // Image navigation
  const handlePrevImage = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  const handleNextImage = () =>
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))

  // Buy via WhatsApp
  const handleBuyViaWhatsApp = () => {
    const msg = `Hi, I want to purchase the plan: ${product.title} (${detail.name})`
    window.open(`https://api.whatsapp.com/send?phone=919079179449&text=${encodeURIComponent(msg)}`, "_blank")
  }

  // Share product link
  const handleShare = () => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({
        title: product.title,
        url,
      }).catch((err) => {
        console.error("Share failed:", err)
      })
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert("Product link copied to clipboard!")
      })
    }
  }

  // Related products
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const handleRelatedClick = (id: string) => {
    router.push(`/product/${id}`)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 animate-slide-left">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-yellow-600 transition-colors duration-300">Shop</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="animate-slide-left">
            <div className="relative h-80 md:h-96 lg:h-[500px] mb-4 rounded-xl overflow-hidden ">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain"
                priority
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {discountPercentage > 0 && (
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse-custom">
                    {discountPercentage}% OFF
                  </span>
                )}
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  product.availability ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}>
                  {product.availability ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button
                  onClick={handleShare}
                  className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
                >
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "border-yellow-400 ring-2 ring-yellow-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image src={img || "/placeholder.svg"} alt={`${product.title} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="animate-slide-right">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">(4.2 out of 5)</span>
              <span className="text-blue-600 hover:underline cursor-pointer">1,234 reviews</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-red-600">₹{detail.price}</span>
                {detail.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{detail.originalPrice}</span>
                )}
              </div>
              {discountPercentage > 0 && (
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Save {discountPercentage}%
                  </span>
                  <span className="text-green-600 text-sm font-medium">Limited time offer!</span>
                </div>
              )}
            </div>

            {/* Variations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Plan:</h3>
              <div className="grid grid-cols-3 gap-2">
                {variations.map((v, idx) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariationIndex(idx)}
                    className={`p-3 rounded-lg border-2 text-center transition-all duration-300 ${
                      idx === selectedVariationIndex
                        ? "border-yellow-400 bg-yellow-50 text-yellow-800"
                        : "border-gray-200 hover:border-gray-300 text-gray-700"
                    }`}
                  >
                    <div className="font-medium">{v.name}</div>
                    <div className="text-sm">₹{v.price}</div>
                    {v.subPrice && <div className="text-xs mt-1">{v.subPrice}</div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-price info */}
            {detail.subPrice && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium">{detail.subPrice}</p>
              </div>
            )}

            {/* Features */}
            {detail.features && detail.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Features:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {detail.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Static Service Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Shield className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <div className="text-gray-900 font-semibold text-sm">100% Authentic</div>
                  <div className="text-gray-600 text-xs">Genuine subscription</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <Clock className="text-blue-500 flex-shrink-0" size={24} />
                <div>
                  <div className="text-gray-900 font-semibold text-sm">Instant Delivery</div>
                  <div className="text-gray-600 text-xs">Within 5-10 minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <MessageCircle className="text-yellow-500 flex-shrink-0" size={24} />
                <div>
                  <div className="text-gray-900 font-semibold text-sm">24/7 Support</div>
                  <div className="text-gray-600 text-xs">WhatsApp support</div>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <div className="space-y-4 mb-8">
              <button
                onClick={handleBuyViaWhatsApp}
                disabled={!product.availability}
                className={`w-full py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                  product.availability
                    ? "bg-yellow-400 text-black hover:bg-yellow-500 hover-lift animate-glow"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <MessageCircle size={24} />
                {product.availability ? "Buy via WhatsApp" : "Out of Stock"}
              </button>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  🔒 Secure payment • ⚡ Instant delivery • ✅ 100% authentic
                </p>
              </div>
            </div>

            {/* Description & Specs */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About this product</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className={`font-medium ${
                    product.availability ? "text-green-600" : "text-red-600"
                  }`}>
                    {product.availability ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span className="font-medium">Instant via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="section-title">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((rp, i) => (
              <div
                key={rp.id}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => handleRelatedClick(rp.id)}
                className="cursor-pointer"
              >
                <ProductCard product={rp} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
