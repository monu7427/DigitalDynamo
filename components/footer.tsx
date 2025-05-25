"use client"

import Link from "next/link"
import { Instagram, MessageCircle, Mail } from "lucide-react"
import { contactInfo } from "@/lib/all-data"

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function Footer() {
  const { whatsappBaseUrl, phone, displayPhone, email, instagram, location } = contactInfo

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-slide-left">
            <h3 className="text-2xl font-bold mb-4 gradient-text">DigitalDynamo</h3>
            <p className="text-gray-400 mb-4">Affordable subscriptions to premium digital services.</p>
            <div className="flex space-x-4">
              <a
                href={`${whatsappBaseUrl}${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors duration-300 hover-lift"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-300 hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={`mailto:${email}`}
                className="text-blue-500 hover:text-blue-400 transition-colors duration-300 hover-lift"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Premium Software
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  OTT Subscriptions
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-lg font-bold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop?category=linkedin"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  LinkedIn Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=creative"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Creative Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=developer"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=entertainment"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-slide-right">
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📱 {displayPhone}</p>
              <p>📧 {email}</p>
              <p>📍 {location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 animate-fade-in">
          <p>&copy; {new Date().getFullYear()} DigitalDynamo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
