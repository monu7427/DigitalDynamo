"use client"

import { Clock, Gift, Zap } from "lucide-react"
import { upcomingOffersData, getWhatsAppLink } from "@/lib/all-data"

// Icon mapping
const iconMap = {
  Clock,
  Gift,
  Zap,
}

export default function UpcomingOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-slide-up">🔥 Upcoming Offers & Deals</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingOffersData.map((offer, index) => {
            const IconComponent = iconMap[offer.icon as keyof typeof iconMap]
            return (
              <div
                key={offer.id}
                className="relative overflow-hidden rounded-xl animate-slide-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`bg-gradient-to-br ${offer.color} p-6 text-white relative`}>
                  <div className="absolute top-2 right-2">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse-custom">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-2">{offer.discount}</div>
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white text-opacity-90">{offer.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      Valid till: {offer.validTill}
                    </span>
                    <div className="w-6 h-6 bg-yellow-400 rounded-full animate-shake"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 animate-fade-in">
          <p className="text-gray-600 mb-4">Want to be notified about new offers?</p>
          <a
            href={getWhatsAppLink("Hi, I want to be notified about upcoming offers!")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Gift size={20} />
            Get Notified on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
