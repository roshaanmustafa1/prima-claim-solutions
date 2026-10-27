import { SiteConfig, NavItem } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Prime Claim Solutions",
  tagline: "Medical Billing Services for Healthcare Practices",
  description:
    "Medical billing, coding, denial management, and insurance follow-up for healthcare practices. Prime Claim Solutions helps your team focus on patient care.",
  url: "https://primeclaimsolutions.com",
  ogImage: "https://primeclaimsolutions.com/og-image.jpg",
  links: {
    portal: "https://portal.primeclaimsolutions.com",
    audit: "/contact",
    phone: "(888) 427-6664",
    email: "solutions@primeclaimsolutions.com",
    address: "700 Technology Square, Suite 400, Cambridge, MA 02139",
  },
  certifications: [
    "HIPAA & HITECH Compliant with BAA",
    "AAPC & AHIMA Certified Coders",
    "SOC 2 Type II Certified Facilities",
    "ISO 27001 Certified Security Controls",
    "HBMA Active Member",
  ],
}

export const navItems: NavItem[] = [
  { label: "Our services", href: "/#services" },
  { label: "Why Prime Claim", href: "/why-prime-claim" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]
