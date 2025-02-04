import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://nextlanding.rdev.pro"

export const siteConfig: SiteConfig = {
  name: "Documate_AI",
  author: "engrahmadaya",
  description:
    "Documate_AI is an AI-powered document assistant that allows users to chat, generate, and convert conversations into well-structured documents or PDFs effortlessly",
  keywords: [
    "AI Document Assistant",
    "Chat-to-PDF",
    "AI Writing Tool",
    "Document Generator",
    "Smart PDF Creator",
    "AI-Powered Notes",
    "Text-to-PDF Converter",
    "Automated Document Processing",
  ],
  url: {
    base: baseUrl,
    author: "https://redpangilinan.live",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "engrahmadaya@gmail.com",
}
