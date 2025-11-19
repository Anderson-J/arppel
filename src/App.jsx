import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Pillars } from "@/components/pillars"
import { Methodology } from "@/components/methodology"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/Faq"
{/*import { Contact } from "@/components/Contact"*/}
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Methodology />
        <Pricing />
        <Faq />
        {/*<Contact />*/}
      </main>
      <Footer />
    </div>
  )
}
