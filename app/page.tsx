import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import QuoteForm from '@/components/QuoteForm'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 overflow-x-hidden">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <ServicesSection />
        <Testimonials />
        <FAQSection />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
