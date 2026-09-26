import type { Metadata, Viewport } from "next"
import { Nunito_Sans, Geist_Mono } from "next/font/google"
import { siteConfig } from "@/config/site"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#090A0C",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Enterprise Medical Billing & Revenue Cycle Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Medical Billing Services",
    "Revenue Cycle Management",
    "RCM Healthcare",
    "Physician Billing Services",
    "Clean Claims Rate",
    "Denial Management Healthcare",
    "AAPC Certified Coders",
    "HIPAA Compliant Medical Billing",
    "Prior Authorization Automation",
    "Aged A/R Recovery",
  ],
  authors: [{ name: "Prima Claim Solutions" }],
  creator: "Prima Claim Solutions",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Enterprise Medical Billing & RCM`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prima Claim Solutions - Enterprise Healthcare RCM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Enterprise Medical Billing`,
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
    "@type": "MedicalBusiness",
    name: siteConfig.name,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
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
            name: "AAPC/AHIMA Certified Medical Coding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Prior Authorization Automation",
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className={`${nunitoSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAFA] text-[#090A0C] min-h-screen selection:bg-orange-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
