"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { faqData } from "@/lib/all-data"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-slide-up">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden animate-slide-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <span className="text-gray-900 font-semibold">{faq.question}</span>
                {openFAQ === faq.id ? (
                  <ChevronUp className="text-yellow-500" size={20} />
                ) : (
                  <ChevronDown className="text-yellow-500" size={20} />
                )}
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 py-4 bg-gray-50 animate-slide-up">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
