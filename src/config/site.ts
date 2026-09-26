import { SiteConfig, NavItem } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Prima Claim Solutions",
  tagline: "Enterprise Medical Billing & Revenue Cycle Management (RCM)",
  description:
    "Prima Claim Solutions empowers US healthcare providers, specialty clinics, and health systems with end-to-end medical billing, 99.2% clean claim rates, sub-28-day A/R cycles, and dedicated AAPC/AHIMA certified coders.",
  url: "https://primaclaimsolutions.com",
  ogImage: "https://primaclaimsolutions.com/og-image.jpg",
  links: {
    portal: "https://portal.primaclaimsolutions.com",
    audit: "#audit-form",
    phone: "(888) 427-6664",
    email: "solutions@primaclaimsolutions.com",
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
  { label: "Services", href: "#services" },
  { label: "Why Prima Claim", href: "#why-us" },
  { label: "Process & Workflow", href: "#process" },
  { label: "Results & ROI", href: "#metrics" },
  { label: "Testimonials", href: "#testimonials" },
]
