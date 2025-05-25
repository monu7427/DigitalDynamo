"use client"

import Link from "next/link"
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react"
import { contactPageData } from "@/lib/all-data"

export default function Contact() {
  const {
    title,
    subtitle,
    contactMethods,
    quickActions,
    responseGuarantee,
  } = contactPageData

  // map icon names to components
  const iconMap: Record<string, React.ComponentType<any>> = {
    MessageCircle,
    Mail,
    Instagram,
    MapPin,
    Clock,
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title.split(" ")[0]} <span className="gradient-text">{title.split(" ")[1]}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const Icon = iconMap[method.icon]
                return (
                  <div
                    key={method.title}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover-lift"
                  >
                    <div
                      className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-1">{method.title}</h3>
                      <p className="text-gray-600 mb-2">{method.value}</p>
                      {method.link && (
                        <Link
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-600 hover:text-yellow-700 transition-colors duration-300"
                        >
                          {method.title === "Location" ? "View on Map →" : `${method.title === "Email" ? "Send email →" : method.title === "Instagram" ? "Follow us →" : "Chat with us →"}`}
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="animate-slide-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  href={`https://wa.me/919079179449?text=${encodeURIComponent(action.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 bg-gradient-to-r ${action.color} rounded-lg hover-lift transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle size={32} className="text-green-500" />
                    <div>
                      <h3 className="text-black font-bold text-lg">{action.title}</h3>
                      <p className="text-slate-500 text-opacity-80">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Response Guarantee */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-yellow-800 font-bold mb-2">{responseGuarantee.title}</h3>
              <p className="text-yellow-700 text-sm">{responseGuarantee.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
