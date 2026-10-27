import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
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
      <Team />
      <CommonQuestions />
      <ContactBanner />
    </>
  )
}
