"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Award, Shield, Heart, Star } from "lucide-react"
import { aboutData, contactInfo } from "@/lib/all-data"

export default function About() {
  const {
    title,
    subtitle,
    founder,
    stats,
    customerScreenshots,
    mission,
    vision,
    whyChooseUs,
  } = aboutData

  // map string icon names to components
  const iconMap: Record<string, React.ComponentType<any>> = {
    Users,
    Award,
    Shield,
    Heart,
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title.split(" ")[0]} <span className="gradient-text">{title.split(" ")[1]}</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-left">
            <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Founder</h2>
            <div className="space-y-4 text-gray-700">
              {founder.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`${contactInfo.whatsappBaseUrl}${contactInfo.phone}?text=${encodeURIComponent(
                  "Hi Manoj, I'd like to connect!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Connect with Me
              </a>
              <div className="text-gray-600">
                <p className="text-sm">📱 {contactInfo.displayPhone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, idx) => {
            const Icon = iconMap[s.icon] || Star
            return (
              <div
                key={s.label}
                className="text-center p-6 bg-gray-50 rounded-xl hover-lift animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${s.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{s.number}</div>
                <div className="text-gray-600">{s.label}</div>
              </div>
            )
          })}
        </div>

        {/* Customer Screenshots */}
        <div className="mb-16">
          <h2 className="section-title animate-slide-up">Customer Love ❤️</h2>
          <p className="text-center text-gray-600 mb-8 animate-fade-in">
            Real screenshots from our happy customers on WhatsApp
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerScreenshots.map((c, idx) => (
              <div
                key={c.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < c.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 mb-3">
                  <p className="text-gray-800 text-sm italic">"{c.message}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">{c.name}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">WhatsApp</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">{mission}</p>
            </div>
          </div>
          <div className="animate-slide-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed">{vision}</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="animate-slide-up mb-16">
          <h2 className="section-title">Why Choose DigitalDynamo?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = iconMap[item.icon] || Star
              return (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover-lift">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
