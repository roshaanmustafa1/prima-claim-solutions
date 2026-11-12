import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { PracticeSupport } from "@/components/sections/PracticeSupport"
import { CommonQuestions } from "@/components/sections/CommonQuestions"
import { ContactBanner } from "@/components/shared/ContactBanner"
import { Team } from "@/components/sections/Team"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PracticeSupport />
      <FeaturedProjects />
      <Team />
      <CommonQuestions />
      <ContactBanner />
    </>
  )
}
