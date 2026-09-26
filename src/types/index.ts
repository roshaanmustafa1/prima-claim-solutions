import { z } from "zod"

export interface NavItem {
  label: string
  href: string
  badge?: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  ogImage: string
  links: {
    portal: string
    audit: string
    phone: string
    email: string
    address: string
  }
  certifications: string[]
}

export interface ServiceItem {
  id: string
  title: string
  subtitle: string
  description: string
  category: "Billing" | "Prior Auth" | "Scrubbing" | "Denials" | "Coding" | "A/R Recovery"
  iconName: string
  features: string[]
  statsHighlight: string
  ctaText?: string
}

export interface ProcessStep {
  stepNumber: string
  title: string
  subtitle: string
  description: string
  turnaround: string
  keyDeliverable: string
  iconName: string
}

export interface StatItem {
  id: string
  value: number
  prefix?: string
  suffix: string
  decimals?: number
  label: string
  description: string
  detailBadge?: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
  organization: string
  specialty: string
  metricAchieved: string
  rating: number
}

export interface EHRIntegration {
  name: string
  category: string
  description: string
  compatibility: string
}

export interface TrustPillar {
  title: string
  description: string
  iconName: string
  badge: string
}

// Zod schema for consultation & audit request
export const consultationFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name exceeds maximum length"),
  email: z
    .string()
    .email("Please enter a valid business/provider email address")
    .min(5, "Email is required"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, "Invalid phone format (e.g., (555) 000-0000)"),
  practiceName: z
    .string()
    .min(2, "Practice or organization name is required")
    .max(150, "Practice name is too long"),
  monthlyVolume: z.enum(
    ["$0 - $50k", "$50k - $200k", "$200k - $500k", "$500k+"],
    {
      required_error: "Please select your average monthly billing volume",
    }
  ),
  ehrSystem: z.string().optional(),
  message: z.string().max(1000, "Message cannot exceed 1000 characters").optional(),
  hipaaConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must acknowledge the HIPAA privacy and confidentiality terms",
    }),
  }),
})

export type ConsultationFormData = z.infer<typeof consultationFormSchema>

export interface ApiResponse<T = unknown> {
  success: boolean
  message: string
  data?: T
  errors?: Record<string, string[]>
}
