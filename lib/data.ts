import type { Product } from "./types"



export const products: Product[] = [
  // LinkedIn
  {
    id: "linkedin-sales-navigator",
    title: "LinkedIn Sales Navigator",
    description: "Premium tools for sales research and lead generation on LinkedIn.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.jpg"],
    variations: [
      { name: "1 Month", price: 1999, originalPrice: 12000, subPrice: "For new & old accounts" },
      { name: "12 Months", price: 22999, originalPrice: 167988, subPrice: "For new & old accounts" },
    ],
  },
  {
    id: "linkedin-recruiter-lite",
    title: "LinkedIn Recruiter Lite",
    description: "Essential recruiting tools for HR professionals.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.jpg"],
    variations: [
      { name: "4 Months", price: 3499, originalPrice: 17000, subPrice: "Limited slots available" },
      { name: "4 Months", price: 14999, originalPrice: 50000, subPrice: "Limited slots available" },
    ],
  },
  {
    id: "linkedin-ads-credit",
    title: "LinkedIn Ads Credit",
    description: "Boost your LinkedIn marketing campaigns with ad credit.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.jpg"],
    variations: [
      { name: "₹8000 Credit", price: 799, originalPrice: 8000, subPrice: "Valid for 30 days" },
    ],
  },

  // Creative Tools
  {
    id: "adobe-creative-cloud",
    title: "Adobe Creative Cloud",
    description: "Full suite access: Photoshop, Illustrator, and more.",
    category: "creative",
    availability: true,
    images: ["/images/adobe1.jpg", "/images/adobe2.jpg", "/images/adobe3.png"],
    variations: [
      { name: "12 Months", price: 2999, originalPrice: 21070, subPrice: "All apps included" },
    ],
  },
  {
    id: "canva-pro",
    title: "Canva Pro",
    description: "Premium design tools: templates, stock photos, collaboration.",
    category: "creative",
    availability: true,
    images: ["/images/canva1.jpg", "/images/canva2.png", "/images/canva3.png", "/images/canva4.jpg"],
    variations: [
      { name: "1 Year", price: 299, originalPrice: 3000, subPrice: "Single user license" },
  },
  {
    id: "notion-plus",
    title: "Notion Plus",
    description: "Advanced workspace with unlimited blocks and collaboration.",
    category: "creative",
    availability: true,
    images: ["/images/notion1.png"],
    variations: [
      { name: "12 Months", price: 999, originalPrice: 4000, subPrice: "Unlimited blocks" },
    ],
  },
  {
    id: "filmora-pro",
    title: "Filmora Pro",
    description: "Professional video editing software with lifetime license.",
    category: "creative",
    availability: true,
    images: ["/images/filmora1.png", "/images/filmora2.png", "/images/filmora3.jpg"],
    variations: [
      { name: "Lifetime", price: 799, originalPrice: 7999, subPrice: "One-time payment" },
    ],
  },

  // Developer Tools
  {
    id: "github-student-pack",
    title: "GitHub Student Pack",
    description: "Free developer tools and services for students.",
    category: "developer",
    availability: true,
    images: ["/images/github.png"],
    variations: [
      { name: "12 Months", price: 999, originalPrice: 5000, subPrice: "Educational benefits" },
    ],
  },
  {
    id: "autodesk-suite",
    title: "Autodesk Suite",
    description: "AutoCAD, Maya, 3ds Max and more – educational license.",
    category: "developer",
    availability: true,
    images: ["/images/autodesk.png"],
    variations: [
      { name: "12 Months", price: 1499, originalPrice: 15000, subPrice: "Educational license" },
    ],
  },
  {
    id: "flutterflow-pro",
    title: "FlutterFlow Pro",
    description: "Visual Flutter app builder with code export.",
    category: "developer",
    availability: true,
    images: ["/images/flutterflow.png"],
    variations: [
      { name: "6 Months", price: 899, originalPrice: 9000, subPrice: "Includes code export" },
    ],
  },
  {
    id: "chatgpt-plus",
    title: "ChatGPT Plus",
    description: "Priority access to GPT-4 and new features.",
    category: "developer",
    availability: true,
    images: ["/images/chatgpt.png"],
    variations: [
      { name: "1 Months", price: 599, originalPrice: 2000, subPrice: "Faster response times" },
      { name: "2 Months", price: 2499, originalPrice: 4000, subPrice: "Best value annually" },
    ],
  },

  // Marketing & Leads
  {
    id: "whatsapp-crm",
    title: "WhatsApp CRM",
    description: "Manage up to 5,000 contacts via WhatsApp.",
    category: "marketing",
    availability: true,
    images: ["/images/whatsapp-crm.png"],
    variations: [
      { name: "12 Months", price: 799, originalPrice: 8000, subPrice: "Up to 5000 contacts" },
    ],
  },
  {
    id: "bulk-email-sender",
    title: "Bulk Email Sender",
    description: "Send up to 10,000 emails/month.",
    category: "marketing",
    availability: true,
    images: ["/images/email-sender.png"],
    variations: [
      { name: "12 Months", price: 599, originalPrice: 6000, subPrice: "10,000 emails/month" },
    ],
  },
  {
    id: "lead-extractor-pro",
    title: "Lead Extractor Pro",
    description: "Lifetime access to lead extraction tools.",
    category: "marketing",
    availability: true,
    images: ["/images/lead-extractor.png"],
    variations: [
      { name: "Lifetime", price: 899, originalPrice: 9000, subPrice: "One-time payment" },
    ],
  },
  {
    id: "fb-bulk-poster",
    title: "FB Bulk Poster",
    description: "Schedule unlimited posts across Facebook pages.",
    category: "marketing",
    availability: true,
    images: ["/images/fb-poster.png"],
    variations: [
      { name: "6 Months", price: 999, originalPrice: 5000, subPrice: "Unlimited posts" },
    ],
  },

  // Streaming & Entertainment
  {
    id: "netflix-premium",
    title: "Netflix Premium",
    description: "4K Ultra HD streaming on 1 screens, ad-free.",
    category: "entertainment",
    availability: true,
    images: ["/images/netflix.png"],
    variations: [
      { name: "1 Month", price: 119, originalPrice: 799, features: ["4K quality", "1 Screens", "Ad-free"] },
      { name: "3 Months", price: 249, originalPrice: 2397, features: ["4K quality", "1 Screens", "Ad-free"] },
      { name: "12 Months", price: 599, originalPrice: 7999, features: ["Best Value", "Priority Support", "4K Ultra HD"] },
    ],
  },
  {
    id: "amazon-prime-video",
    title: "Amazon Prime Video",
    description: "Amazon Prime Video Subscription – Your Gateway to Limitless Entertainment
    Discover an exceptional streaming experience with Amazon Prime Video Subscription, offering ad-free access to movies and shows in stunning UHD (2160 Pixel) quality. With instant activation and secure access, enjoy uninterrupted entertainment across multiple devices.
    
    Please note that this is a subscription to “Amazon Prime Video” only, and you will receive separate account credentials for an individual account to access it, we will not activate this on your email.
    
    Key Features:
    Multi-Device Access: Stream your favorite content on mobile, TV, or laptop. Enjoy seamless viewing on up to 5 devices.
    UHD Streaming: Experience theater-like visuals with Ultra HD quality, perfect for movie enthusiasts.
    Ad-Free Content: Say goodbye to interruptions and enjoy smooth, immersive streaming.
    Secure Login: After purchase, your subscription activates instantly on the email used. Reset the password anytime for added security.
    How It Solves Your Entertainment Needs:
    This Subscription offers a diverse library of content, including blockbuster movies, trending shows, and exclusive originals. The multi-device feature lets you share your subscription with family or enjoy on-the-go convenience. UHD quality ensures a premium experience, while ad-free viewing allows for uninterrupted binge-watching.
    
    Use Cases for Amazon Prime Video Subscription:
    Family Viewing: Connect up to 5 devices for shared entertainment.
    Travel Companion: Watch downloaded content offline on mobile.
    Exclusive Content: Access Amazon Originals and top-rated shows anytime.
    Secure Access: Log in with your email and reset your password for peace of mind.
    Elevate your entertainment with Amazon Prime Video Subscription today. With instant activation and the ability to reset your password, you’re always in control of your account.
    
    Subscribe now to start your ad-free UHD streaming journey!",
    category: "entertainment",
    availability: true,
    images: ["/images/prime-1.jpg", "/images/prime-2.jpg"],
    variations: [
      { name: "1 Month", price: 89, originalPrice: 299 },
      { name: "6 Months", price: 349, originalPrice: 1499 },
    ],
  },
  {
    id: "youtube-premium",
    title: "YouTube Premium",
    description: "Ad-free videos, background play & YouTube Music.",
    category: "entertainment",
    availability: true,
    images: ["/images/youtube.png"],
    variations: [
      { name: "1 Months", price: 49, originalPrice: 149 },
    ],
  },
  {
    id: "Spotify",
    title: "Spotify",
    description: "Ad-free music, offline downloads.",
    category: "music",
    availability: true,
    images: ["/images/spotify-1.jpg", "/images/spotify-2.jpg"],
    variations: [
      { name: "3 Month", price: 199, features: [ "Ad-free music", "Download Songs"] },
    ],
  },
  {
    id: "zee5-premium",
    title: "Zee5 Premium",
    description: "Regional & latest movies, ad-free streaming.",
    category: "entertainment",
    availability: true,
    images: ["/images/zee5-1.jpg"],
    variations: [
      { name: "12 Months", price: 399, originalPrice: 999 },
    ],
  },
]



export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

export const getAllCategories = () => {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories)
}

export const getCategoryTitle = (category: string): string => {
  const categoryMap: Record<string, string> = {
    linkedin: "LinkedIn Subscriptions",
    creative: "Creative Tools",
    developer: "Developer Tools",
    marketing: "Marketing & Leads",
    entertainment: "Entertainment",
  }

  return categoryMap[category] || "Products"
}
