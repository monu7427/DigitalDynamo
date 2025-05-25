"use client"

import { Clock, Gift, Zap } from "lucide-react"
import { upcomingOffersData, getWhatsAppLink } from "@/lib/all-data"

// Icon mapping
const iconMap = {
  Clock,
  Gift,
  Zap,
}

// New eye-catching gradients per offer id
const gradientMap: Record<number, string> = {
  1: "from-purple-600 via-pink-500 to-red-500",
  2: "from-blue-600 via-cyan-500 to-teal-400",
  3: "from-green-600 via-lime-500 to-yellow-400",
}

export default function UpcomingOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-slide-up">🔥 Upcoming Offers & Deals</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {upcomingOffersData.map((offer, index) => {
            const IconComponent = iconMap[offer.icon as keyof typeof iconMap]
            const gradient = gradientMap[offer.id] || offer.color

            return (
              <div
                key={offer.id}
                className="relative overflow-hidden rounded-xl animate-slide-up transform transition-transform duration-300 hover:scale-105 shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-br ${gradient} p-6 text-white relative rounded-xl`}
                >
                  {/* Floating icon */}
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center animate-pulse-custom">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* Offer details */}
                  <div className="mb-4">
                    <div className="text-2xl font-extrabold mb-1">
                      {offer.discount}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white text-opacity-90">
                      {offer.description}
                    </p>
                  </div>

                  {/* Validity and accent */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white bg-opacity-30 px-3 py-1 rounded-full">
                      Valid till: {offer.validTill}
                    </span>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-shake"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp notification CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">
            Want to be notified about new offers?
          </p>
          <a
            href={getWhatsAppLink(
              "Hi, I want to be notified about upcoming offers!"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Gift size={20} />
            Get Notified on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
