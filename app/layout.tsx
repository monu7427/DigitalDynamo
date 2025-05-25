import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import CursorEffect from "@/components/cursor-effect"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DigitalDynamo - Premium Subscriptions at Affordable Prices",
  description:
    "Get premium OTT, creative tools, and software subscriptions at unbeatable prices. Instant delivery via WhatsApp.",
  keywords: "digital subscriptions, OTT plans, Netflix, Adobe, LinkedIn, affordable subscriptions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <CursorEffect />
        <Navbar />
        <main className="min-h-screen bg-white">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}
