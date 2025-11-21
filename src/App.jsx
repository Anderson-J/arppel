import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Pillars } from "@/components/Pillars"
import { Methodology } from "@/components/Methodology"
import { Pricing } from "@/components/Pricing"
import { Faq } from "@/components/Faq"
// import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { useAnalyticsPageView } from "@/hooks/useAnalytics"

export default function Home() {
  useAnalyticsPageView("/")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Methodology />
        <Pricing />
        <Faq />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}
