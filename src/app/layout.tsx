import type { Metadata, Viewport } from "next"
import { Nunito_Sans } from "next/font/google"
import { siteConfig } from "@/config/site"
import { brandAssets } from "@/config/branding"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SiteMotion } from "@/components/layout/SiteMotion"
import { MotionPreferences } from "@/components/layout/MotionPreferences"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-practice-sans",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#193c43",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Medical Billing Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: brandAssets.icon, type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: brandAssets.iconDark, type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: { url: brandAssets.touchIcon, sizes: "512x512", type: "image/png" },
  },
  keywords: [
    "Medical Billing Services",
    "Revenue Cycle Management",
    "RCM Healthcare",
    "Physician Billing Services",
    "Clean Claims Rate",
    "Denial Management Healthcare",
    "AAPC Certified Coders",
    "HIPAA Compliant Medical Billing",
    "Prior Authorization Support",
    "Aged A/R Recovery",
  ],
  authors: [{ name: "Prime Claim Solutions" }],
  creator: "Prime Claim Solutions",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Medical Billing Services`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Claim Solutions - Medical Billing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Medical Billing Services`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema.org Structured Data (JSON-LD) for MedicalBusiness / ProfessionalService
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    logo: new URL(brandAssets.header, siteConfig.url).href,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.links.phone,
    email: siteConfig.links.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "700 Technology Square, Suite 400",
      addressLocality: "Cambridge",
      addressRegion: "MA",
      postalCode: "02139",
      addressCountry: "US",
    },
    areaServed: "United States",
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Billing & RCM Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Cycle Medical Billing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Denial Management and Appeals Recovery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Coding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prior Authorization Support",
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className={`${nunitoSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fcfcf9] text-[#193c43] min-h-screen selection:bg-orange-600 selection:text-white">
        <MotionPreferences>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Navbar />
        <SiteMotion>{children}</SiteMotion>
        <Footer />
        </MotionPreferences>
      </body>
    </html>
  )
}
