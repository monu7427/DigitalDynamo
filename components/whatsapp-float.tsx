"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "@/lib/all-data"

export default function WhatsAppFloat() {
  const openWhatsApp = () => {
    window.open(getWhatsAppLink(), "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
