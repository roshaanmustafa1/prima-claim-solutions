import {
  ServiceItem,
  ProcessStep,
  StatItem,
  TestimonialItem,
  EHRIntegration,
  TrustPillar,
} from "@/types"

export const HERO_TRUST_BADGES = [
  "100% HIPAA & HITECH Compliant",
  "99.2% First-Pass Clean Claims",
  "AAPC & AHIMA Certified Coders",
  "Zero Onboarding Downtime",
]

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "full-cycle-rcm",
    title: "Full-Cycle Medical Billing & RCM",
    subtitle: "End-to-end revenue management from charge capture to final payment reconciliation.",
    category: "Billing",
    iconName: "ReceiptCheck",
    description:
      "Eliminate administrative friction with automated charge posting, electronic claim submission (EDI 837), payer remittance matching (ERA 835), and secondary/tertiary crossover claim routing.",
    features: [
      "Charge capture & daily reconciliation within 24 hours",
      "EDI 837/835 automated transmission & clearinghouse routing",
      "Comprehensive patient balance billing with merchant integrations",
      "Real-time cash flow & lockbox bank reconciliation",
    ],
    statsHighlight: "+32% Net Collections",
    ctaText: "Explore Billing Ops",
  },
  {
    id: "prior-authorization",
    title: "Automated Prior Authorization",
    subtitle: "AI-assisted clinical validation and rapid turnaround for specialized treatment approvals.",
    category: "Prior Auth",
    iconName: "ShieldCheck",
    description:
      "Avoid scheduling cancellations and delayed surgeries. Our dedicated clinical review specialists manage insurer portals, gather medical necessity criteria, and secure prior auths 70% faster.",
    features: [
      "Specialty-specific clinical documentation matching",
      "Real-time payer portal tracking & automated escalation",
      "Peer-to-peer prep sheets delivered directly to providers",
      "Proactive re-authorization alerts for chronic patients",
    ],
    statsHighlight: "70% Faster Auth Turnaround",
    ctaText: "Streamline Approvals",
  },
  {
    id: "claims-scrubbing",
    title: "AI-Powered Claims Scrubbing",
    subtitle: "Triple-layer rules engine that eradicates billing discrepancies before transmission.",
    category: "Scrubbing",
    iconName: "Cpu",
    description:
      "Custom algorithmic rule sets customized to LCD/NCD guidelines, commercial payer nuances, CCI edit checks, and modifier discrepancies to guarantee first-pass acceptance rates.",
    features: [
      "Over 4.2M continuously updated national & local payer rules",
      "Automated CCI (Correct Coding Initiative) error interception",
      "Modifier appropriateness validation (-25, -59, -51, -76)",
      "Gender/age/diagnosis cross-matching algorithms",
    ],
    statsHighlight: "99.2% First-Pass Acceptance",
    ctaText: "Inspect Scrubbing Engine",
  },
  {
    id: "denial-management",
    title: "Aggressive Denial Mitigation & Appeals",
    subtitle: "Root-cause diagnostics and multi-tier appellate recovery for trapped revenue.",
    category: "Denials",
    iconName: "AlertTriangle",
    description:
      "We never write off legitimate clinical revenue. Our appellate attorneys and certified specialists dissect CARC/RARC codes, draft peer-reviewed appeal packets, and recover overturned claims.",
    features: [
      "72-hour turnaround on all payer rejections and zero-pays",
      "Custom medical necessity appeal letters backed by clinical precedents",
      "Automated payer behavioral profiling to prevent recurring rejections",
      "Executive recovery dashboards tracking dollars rescued",
    ],
    statsHighlight: "84% Denial Overturn Rate",
    ctaText: "Recover Denied Revenue",
  },
  {
    id: "medical-coding",
    title: "Certified ICD-10 & CPT Medical Coding",
    subtitle: "Dual-certified AHIMA/AAPC coders maximizing audit compliance and reimbursement.",
    category: "Coding",
    iconName: "FileSpreadsheet",
    description:
      "Prevent compliance penalties and revenue leakage. Our specialized coders handle E/M level optimization, surgical op-notes, HCPCS Level II, and complex multi-specialty encounters.",
    features: [
      "Strict AAPC CPC, COC & AHIMA CCS certified coding specialists",
      "100% internal QA peer-review on high-value surgical procedures",
      "E/M code distribution analysis to safeguard against audit triggers",
      "Regular provider documentation optimization workshops",
    ],
    statsHighlight: "99.8% Coding Accuracy",
    ctaText: "Review Coding Standards",
  },
  {
    id: "ar-recovery",
    title: "Aged A/R Recovery & Liquidation",
    subtitle: "Systematic pursuit and resolution of unresolved claims past 60, 90, and 120+ days.",
    category: "A/R Recovery",
    iconName: "ClockHistory",
    description:
      "Resurrect trapped capital locked in legacy accounts receivable. Our specialized recovery strike team analyzes aged inventory, re-files clean submissions, and conducts live payer follow-ups.",
    features: [
      "Deep forensic audit of receivables aged >60, 90, and 120 days",
      "Direct telephonic follow-ups with medical directors & payer adjudicators",
      "Timely filing deadline rescue protocols",
      "Zero contingency fees on uncollected legacy claims",
    ],
    statsHighlight: "<28 Days Average in A/R",
    ctaText: "Liquidate Old A/R",
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Patient Intake & Real-Time Eligibility",
    subtitle: "Upfront Verification & Co-Pay Certainty",
    description:
      "Seamless integration with your scheduling workflow to verify active coverage, deductibles, co-insurance, and prior auth requirements before the encounter occurs.",
    turnaround: "< 5 Minutes",
    keyDeliverable: "Zero eligibility rejections at check-in",
    iconName: "UserCheck",
  },
  {
    stepNumber: "02",
    title: "Charge Capture & Documentation Review",
    subtitle: "Clinical Encounter Validation",
    description:
      "Encounter data is extracted from your EHR within 24 hours. Certified billing analysts review medical records and operative notes for billable procedure completeness.",
    turnaround: "24 Hours Post-Visit",
    keyDeliverable: "Reconciled encounter logs & fee schedules",
    iconName: "ClipboardCheck",
  },
  {
    stepNumber: "03",
    title: "AI Scrubbing & Certified Coding",
    subtitle: "AAPC/AHIMA Precision Mapping",
    description:
      "Claims run through our triple-tiered rules engine to cross-reference ICD-10-CM, CPT, and HCPCS codes against payer medical necessity policies and LCD/NCD rules.",
    turnaround: "Same-Day Batching",
    keyDeliverable: "99.2% first-pass clean claim packaging",
    iconName: "FileCode",
  },
  {
    stepNumber: "04",
    title: "Rapid EDI 837 Electronic Transmission",
    subtitle: "Direct Clearinghouse Gateway",
    description:
      "High-speed encrypted transmission directly to clearinghouses and major commercial payers (Blue Cross, Aetna, Cigna, UnitedHealthcare, Medicare, Medicaid).",
    turnaround: "Twice Daily Transmission",
    keyDeliverable: "999/277 acceptance acknowledgments",
    iconName: "Send",
  },
  {
    stepNumber: "05",
    title: "ERA 835 Posting & Secondary Routing",
    subtitle: "Automated Ledger Reconciliation",
    description:
      "Electronic Remittance Advice (ERA) matching line-item payments, contractual adjustments, and copays directly into your practice management software.",
    turnaround: "Under 12 Hours",
    keyDeliverable: "Penny-accurate bank lockbox balancing",
    iconName: "Coins",
  },
  {
    stepNumber: "06",
    title: "Denial Mitigation & Immediate Appeals",
    subtitle: "Tenacious Zero-Loss Follow-Up",
    description:
      "Any unpaid claim or underpayment triggers an immediate CARC diagnostic review and structured appeal packet submitted within 72 hours.",
    turnaround: "72-Hour Max Escalation",
    keyDeliverable: "84% historic appellate overturn rate",
    iconName: "RefreshCcw",
  },
]

export const KEY_STATS: StatItem[] = [
  {
    id: "clean-claims",
    value: 99.2,
    suffix: "%",
    decimals: 1,
    label: "Clean Claim Acceptance",
    description: "Industry benchmark is 85%. Our triple-layer scrubbing minimizes rejections.",
    detailBadge: "Industry Top 1%",
  },
  {
    id: "revenue-uplift",
    value: 30,
    prefix: "+",
    suffix: "%",
    label: "Average Revenue Uplift",
    description: "Achieved within 90 days of onboarding through unbilled charge capture.",
    detailBadge: "Verified ROI",
  },
  {
    id: "ar-days",
    value: 28,
    prefix: "<",
    suffix: " Days",
    label: "Average Days in A/R",
    description: "Nearly half the national physician practice average of 45-55 days.",
    detailBadge: "Rapid Cash Flow",
  },
  {
    id: "claims-volume",
    value: 450,
    prefix: "$",
    suffix: "M+",
    label: "Annual Claims Managed",
    description: "Trusted by over 320+ medical practices and multi-specialty health groups.",
    detailBadge: "Enterprise Scale",
  },
]

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "100% HIPAA & HITECH Certified",
    description:
      "Zero compromises on patient privacy. Full Business Associate Agreement (BAA), end-to-end AES-256 encryption, and annual independent SOC 2 Type II audits.",
    iconName: "Lock",
    badge: "BAA Guaranteed",
  },
  {
    title: "AAPC & AHIMA Certified Specialists",
    description:
      "Every single chart is reviewed by certified professional coders (CPC, CPB, CCS) with minimum 5+ years of specialty-specific clinical billing experience.",
    iconName: "Award",
    badge: "Top 2% Talent",
  },
  {
    title: "Real-Time Direct EHR/PMS Sync",
    description:
      "No data silos and no cumbersome dual entry. We work directly inside your existing software via secure VPN/API tunnels with zero workflow disruption.",
    iconName: "Layers",
    badge: "Zero Platform Switch",
  },
  {
    title: "Dedicated US-Based Account Directors",
    description:
      "Direct line to an experienced senior billing executive and certified practice consultant who knows your clinicians, specialty, and payer contracts intimately.",
    iconName: "Users",
    badge: "24/7 Priority Support",
  },
]

export const EHR_INTEGRATIONS: EHRIntegration[] = [
  {
    name: "Epic Systems",
    category: "Hospital & Enterprise Health Systems",
    description: "Bi-directional Cadence, Resolute, and Hyperspace claims sync.",
    compatibility: "Full Native Integration",
  },
  {
    name: "Oracle Cerner",
    category: "Acute & Ambulatory EHR",
    description: "Direct Millennium and Soarian billing clearinghouse interfaces.",
    compatibility: "Full Native Integration",
  },
  {
    name: "AthenaHealth",
    category: "Cloud-Based Ambulatory",
    description: "Live athenaCollector API integration with automated claim scrubbing.",
    compatibility: "Certified Partner",
  },
  {
    name: "eClinicalWorks",
    category: "Multi-Specialty Practices",
    description: "Real-time bridge for eCW billing modules and encounter batching.",
    compatibility: "Full Native Integration",
  },
  {
    name: "Kareo / Tebra",
    category: "Independent Medical Practices",
    description: "Seamless clinical-to-billing ledger sync with zero data re-entry.",
    compatibility: "Direct API Access",
  },
  {
    name: "AdvancedMD",
    category: "Private Medical Clinics",
    description: "Complete claims lifecycle handling inside AdvancedMD Billing engine.",
    compatibility: "Full Native Integration",
  },
  {
    name: "NextGen Healthcare",
    category: "Ambulatory & Community Health",
    description: "Enterprise EHR/EPM claims management and remittance reconciliation.",
    compatibility: "Full Native Integration",
  },
  {
    name: "ModMed (Modernizing Medicine)",
    category: "Dermatology, Orthopedics, Ophthalmology",
    description: "EMA EHR specialty billing integration with automated modifier rules.",
    compatibility: "Specialty Partner",
  },
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote:
      "Switching to Prime Claim Solutions was the single best operational decision our cardiology practice made this decade. Our days in A/R plunged from 52 to 26 days within 90 days, and our first-pass clean claim rate holds steady at 99.4%.",
    author: "Dr. Marcus Vance, MD, FACC",
    role: "Managing Partner",
    organization: "Midwest Cardiovascular Specialists",
    specialty: "Cardiology",
    metricAchieved: "+34% Net Revenue in Year 1",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "As a high-volume surgical center, prior auth bottlenecks used to delay 15% of our procedures. Prime Claim Solutions' automated prior auth team reduced turnaround to 48 hours and eradicated our procedural denial backlog completely.",
    author: "Elena Rostova, MHA, FACMPE",
    role: "Executive Director",
    organization: "Pinnacle Orthopedic & Spine Institute",
    specialty: "Orthopedics & Spine",
    metricAchieved: "A/R Reduced to 24 Days",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "We were skeptical about external billing because of compliance fears. Prime Claim Solutions signed our BAA immediately, integrated directly into our Epic instance in under 7 days, and increased our collections by $380,000 in uncollected underpayments.",
    author: "Dr. Sarah Lin-Jennings, MD",
    role: "Medical Director",
    organization: "Beacon Hill Family Health Network",
    specialty: "Primary Care & Pediatrics",
    metricAchieved: "$380K Recovered from Aged A/R",
    rating: 5,
  },
]

export const FAQS = [
  {
    question: "Do we have to change our current EHR or Practice Management Software?",
    answer:
      "Absolutely not. Prime Claim Solutions integrates directly into your existing software—whether you use Epic, AthenaHealth, Cerner, Kareo, eClinicalWorks, or any other certified platform. Our team accesses your system via secure, encrypted VPN or authorized API credentials.",
  },
  {
    question: "How does Prime Claim Solutions ensure 100% HIPAA and HITECH compliance?",
    answer:
      "We execute a formal Business Associate Agreement (BAA) prior to touching any data. All data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Our facilities undergo recurring SOC 2 Type II and ISO 27001 third-party security audits.",
  },
  {
    question: "How long does onboarding take, and will our billing experience any downtime?",
    answer:
      "Our rapid onboarding blueprint ensures your practice experiences zero downtime. We shadow your workflows, configure payer clearinghouse connections in the background, and transition live claims processing in as few as 7 to 14 business days.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our model is 100% performance-aligned: we only get paid a transparent percentage of what we successfully collect for you. No hidden onboarding fees, no licensing costs, and no penalties. If you don't get paid, we don't get paid.",
  },
]
