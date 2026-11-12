import { Activity, MapPin, Scale, Stethoscope, TrendingUp, Siren, type LucideIcon } from "lucide-react"

export interface ProjectItem {
  id: string
  number: string
  title: string
  industry: string
  focus: string
  specialty?: string
  location?: string
  overview: string
  responsibilities: string[]
  impact: string
  achievement?: string
  expertise?: string
  specialties?: string[]
  image?: string
  imageAlt?: string
  icon: LucideIcon
  featured?: boolean
}

export const projects: ProjectItem[] = [
  {
    id: "project-01",
    number: "01",
    title: "Emergency Room Revenue Cycle Optimization",
    industry: "Emergency Medicine / Hospital Facility Billing",
    specialty: "Emergency Room (ER)",
    focus: "Revenue Growth, Claims Management & Collections Optimization",
    overview:
      "Managed and optimized Emergency Room revenue cycle operations for healthcare facilities, focusing on improving reimbursement performance, resolving outstanding claims, reducing revenue leakage, and maximizing eligible reimbursement opportunities.",
    responsibilities: [
      "End-to-end Emergency Room facility billing operations.",
      "Claim submission, tracking, and follow-up.",
      "Insurance reimbursement analysis.",
      "Denial identification, investigation, and resolution.",
      "Accounts Receivable (AR) management.",
      "Underpayment identification and revenue recovery.",
      "Coordination of eligible out-of-network claims for Federal IDR.",
    ],
    impact:
      "Contributed to significant improvements in facility revenue performance through structured RCM workflows, aggressive AR follow-up, and strategic Federal IDR initiatives.",
    achievement:
      "Supported facility-level collection growth from approximately $200K–$300K to as much as $2M in monthly collections during the relevant performance period.",
    image: "/images/projects/er-emergency-billing.webp",
    imageAlt: "Paramedics in uniform coordinating emergency care",
    icon: Siren,
    featured: true,
  },
  {
    id: "project-02",
    number: "02",
    title: "Federal IDR & No Surprises Act Revenue Recovery",
    industry: "US Healthcare / Emergency Medicine",
    focus: "CMS Federal IDR, NSA & Out-of-Network Reimbursement",
    overview:
      "Worked on Federal Independent Dispute Resolution (IDR) processes under the No Surprises Act (NSA), helping eligible healthcare facilities pursue appropriate out-of-network reimbursement for qualifying services. The objective was to identify eligible claims, prepare dispute submissions, manage the IDR workflow, and improve reimbursement outcomes.",
    responsibilities: [
      "Identification and review of eligible NSA claims.",
      "Federal IDR eligibility assessment.",
      "CMS IDR process coordination.",
      "Initial payment and qualifying payment amount (QPA) review.",
      "Documentation and supporting evidence preparation.",
      "Offer preparation and dispute submission coordination.",
      "IDR status tracking and follow-up.",
      "Payment reconciliation after dispute resolution.",
    ],
    impact:
      "Supported substantial revenue recovery opportunities for hospital facilities by implementing structured Federal IDR workflows and improving the management of eligible out-of-network claims.",
    expertise: "CMS Federal IDR | No Surprises Act | Out-of-Network Claims | Reimbursement Optimization",
    image: "/images/projects/federal-idr-documents.webp",
    imageAlt: "Professionals reviewing dispute documents around a conference table",
    icon: Scale,
    featured: true,
  },
  {
    id: "project-03",
    number: "03",
    title: "Texas Hospital Revenue Cycle & IDR Operations",
    industry: "Hospital Revenue Cycle Management",
    location: "Texas, USA",
    focus: "Facility Billing, Out-of-Network Claims & Dispute Resolution",
    overview:
      "Supported revenue cycle operations for Texas-based hospital facilities, with a focus on Emergency Room billing, insurance reimbursement, out-of-network claim management, and applicable dispute resolution processes.",
    responsibilities: [
      "Hospital facility claim management.",
      "Emergency Room billing operations.",
      "Texas-specific payer and reimbursement workflow coordination.",
      "Federal IDR case management for eligible claims.",
      "Review of applicable state and federal dispute resolution pathways.",
      "Insurance follow-up and reimbursement tracking.",
      "Denial management and outstanding AR resolution.",
      "Revenue reporting and payment reconciliation.",
    ],
    impact:
      "Improved operational visibility, strengthened reimbursement follow-up, and supported revenue recovery through structured claims and dispute management workflows.",
    image: "/images/projects/texas-hospital-er.webp",
    imageAlt: "Hospital emergency room entrance with a prominent emergency sign",
    icon: MapPin,
  },
  {
    id: "project-04",
    number: "04",
    title: "Nephrology Revenue Cycle Management",
    industry: "Specialty Healthcare",
    specialty: "Nephrology",
    focus: "Specialty Billing, Claims Management & AR Optimization",
    overview:
      "Provided professional RCM support for nephrology-related billing operations, focusing on accurate claim processing, payer compliance, reimbursement tracking, and accounts receivable management.",
    responsibilities: [
      "Nephrology-related medical billing workflows.",
      "Insurance eligibility and benefits verification.",
      "Claim submission and payment tracking.",
      "Denial investigation and resolution.",
      "Coding and documentation review coordination.",
      "AR follow-up and outstanding balance management.",
      "Payment posting and reconciliation.",
    ],
    impact:
      "Supported a more organized billing workflow, improved claim follow-up practices, and strengthened revenue cycle visibility for specialty healthcare services.",
    image: "/images/projects/nephrology-clinic.webp",
    imageAlt: "Modern clinical treatment room with patient chairs and medical equipment",
    icon: Activity,
  },
  {
    id: "project-05",
    number: "05",
    title: "Multi-Specialty Medical Billing & Revenue Cycle Support",
    industry: "US Physician Practices & Specialty Clinics",
    focus: "End-to-End Medical Billing & RCM",
    overview:
      "Worked across multiple healthcare specialties, supporting physician practices and healthcare billing operations through structured revenue cycle management processes.",
    specialties: [
      "Emergency Medicine",
      "Internal Medicine",
      "Family Medicine",
      "Nephrology",
      "Gynecology",
      "Cardiology",
      "Orthopedics",
      "Gastroenterology",
      "General Practice",
      "Other outpatient and hospital-based specialties",
    ],
    responsibilities: [
      "Patient eligibility and insurance verification.",
      "Charge entry and claim submission.",
      "Medical billing workflow coordination.",
      "Payment posting and reconciliation.",
      "Denial management and appeals.",
      "AR follow-up.",
      "Insurance payer communication.",
      "Revenue performance monitoring.",
    ],
    impact:
      "Helped maintain efficient billing workflows, reduce unresolved claim backlogs, and support consistent reimbursement operations across different specialties.",
    image: "/images/projects/multi-specialty-chart-review.webp",
    imageAlt: "Doctors and a nurse reviewing a medical chart together in a hospital",
    icon: Stethoscope,
  },
  {
    id: "project-06",
    number: "06",
    title: "Accounts Receivable Recovery & Denial Management",
    industry: "US Healthcare Providers & Hospital Facilities",
    focus: "A/R Management, Denial Prevention & Revenue Recovery",
    overview:
      "Focused on identifying delayed payments, resolving denied claims, investigating underpayments, and improving outstanding accounts receivable performance.",
    responsibilities: [
      "Insurance AR analysis.",
      "Aging report review (30, 60, 90, 120+ days).",
      "Denial categorization and root-cause analysis.",
      "Corrected claims and appeal coordination.",
      "Payer follow-up and escalation.",
      "Underpayment identification.",
      "Outstanding balance resolution.",
      "AR performance reporting.",
    ],
    impact:
      "Supported improved AR visibility, more organized denial workflows, and stronger follow-up strategies to reduce preventable revenue loss.",
    image: "/images/projects/ar-recovery-records.webp",
    imageAlt: "Healthcare professional typing patient and billing records at a desk",
    icon: TrendingUp,
    featured: true,
  },
]

export const rcmExpertise = [
  { title: "Hospital & Facility RCM", items: ["Emergency Room Facility Billing", "Hospital Revenue Cycle Management", "Out-of-Network Billing", "Facility Claims Management"] },
  { title: "Federal IDR & NSA", items: ["CMS Federal IDR", "No Surprises Act (NSA)", "IDR Eligibility Review", "QPA Review", "Dispute Submission Coordination", "Reimbursement & Payment Tracking"] },
  { title: "Medical Billing Operations", items: ["Charge Entry", "Claim Submission", "Payment Posting", "Eligibility & Benefits Verification", "Denial Management", "AR Follow-up", "Appeals & Reconsiderations", "Underpayment Analysis"] },
  { title: "Revenue Optimization", items: ["Revenue Leakage Identification", "Collection Performance Analysis", "AR Reduction Strategies", "Denial Prevention", "Reimbursement Optimization", "Revenue Cycle Reporting"] },
]

export const whyChooseUs = [
  { title: "10 Years of Industry Experience", description: "Hands-on professional experience in US healthcare medical billing and revenue cycle management." },
  { title: "Emergency Room Billing Expertise", description: "Specialized experience in complex ER facility billing and reimbursement workflows." },
  { title: "Federal IDR Knowledge", description: "Practical experience supporting eligible NSA-related Federal IDR cases and out-of-network reimbursement processes." },
  { title: "Multi-Specialty Experience", description: "Exposure to multiple physician specialties and hospital-based billing operations." },
  { title: "Revenue-Focused Approach", description: "A commitment to identifying reimbursement opportunities, resolving outstanding claims, and improving financial performance." },
  { title: "Scalable RCM Support", description: "Flexible operational support designed around the needs of independent physicians, specialty practices, and hospital facilities." },
]
