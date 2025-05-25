"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Users, Shield, Heart, Award, Clock, Gift, Zap } from "lucide-react"
import { heroData } from "@/lib/all-data"

// Icon mapping
const iconMap = {
  Users,
  Shield,
  Star,
  Heart,
  Award,
  Clock,
  Gift,
  Zap,
}

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-12 md:py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-slide-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(heroData.totalRating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">{heroData.trustBadge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {heroData.heading.split(" ").map((word, index) => (
                <span key={index}>
                  {heroData.highlightWords.includes(word) ? <span className="gradient-text">{word}</span> : word}
                  {index < heroData.heading.split(" ").length - 1 && " "}
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">{heroData.subheading}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={heroData.primaryButton.link}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                {heroData.primaryButton.text}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href={heroData.secondaryButton.link}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                {heroData.secondaryButton.text}
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {heroData.stats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="text-center">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${stat.color} rounded-full mb-2 mx-auto`}
                    >
                      <IconComponent
                        className={stat.color.includes("yellow") ? "text-black" : "text-white"}
                        size={24}
                      />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
                <Image
                  src={heroData.mainImage || "/placeholder.svg"}
                  alt="Digital Subscriptions Hero"
                  fill
                  className="object-contain animate-float"
                  priority
                />
              </div>

              {/* Floating Cards */}
              {heroData.floatingCards.map((card, index) => (
                <div
                  key={index}
                  className={`absolute z-50 ${card.position} bg-white border border-gray-200 rounded-lg p-3 shadow-lg animate-float`}
                  style={{ animationDelay: card.delay }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 ${card.color} rounded`}></div>
                    <div>
                      <div className="text-gray-900 text-sm font-semibold">{card.name}</div>
                      <div className="text-yellow-600 text-xs">{card.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
