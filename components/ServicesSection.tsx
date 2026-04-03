import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'residential',
    tag: 'Residential',
    name: 'Home Solar + Net Metering',
    headline: 'Cut your monthly bill by ₱4,000–₱9,000. Every month. For 25 years.',
    body: 'We design, supply, and install a Huawei-certified rooftop solar system sized exactly for your household\'s actual consumption. After installation, we handle your VECO or Meralco net metering application — so excess power you generate gets credited back to your account automatically.',
    details: [
      'System size: 3 kWp to 10 kWp',
      'Typical installation time: 1–2 days',
      'Average monthly savings: ₱4,200 – ₱9,500',
      'Payback period: 3.5 to 5 years',
      'Panel lifespan: 25 years (Huawei warranty included)',
    ],
    proof: 'Our average residential customer saves ₱5,200/month — that\'s ₱62,400 in the first year alone.',
    cta: 'See Residential Packages',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ohwxpErrirVlFduICiu7HclMCRJUY25Z6c44KiUR7tiBjBOnu9YbfEb4xg6GkfMY0h6nVceO8G1j9wu1_cUp-FMRX_ejokKnIiceohFy6GRzrIwRYpL7CmtYpx8YF2cdBplrRX3jfv2caPhb7nl61NfVUE8KeOKeV7CaIIBIB3wJdrWfCRhVEsSPMy1qO453eBvpCDm4sGszELH4Juhd1n4wNTAZqnW6iCCDOQ1UUHb3HpEoSkacNWd3cYoQYibn9J_nPMa9dJj5',
    imgAlt: 'Residential solar panel installation on Filipino home rooftop',
  },
  {
    id: 'commercial',
    tag: 'Commercial & Industrial',
    name: 'Commercial Solar System (50–500 kWp)',
    headline: 'Businesses that switch to solar cut operating costs by ₱80,000–₱400,000 per year.',
    body: 'For restaurants, BPO offices, warehouses, cold storage, schools, and factories — electricity is your second-biggest expense after salaries. We install large-scale Huawei FusionSolar systems designed for continuous commercial use, with Tier-1 panels that maintain 80% output after 25 years. We also manage all DOE and LGU permits, so you don\'t have to.',
    details: [
      'System size: 50 kWp to 500 kWp',
      'Typical ROI: 3–4 years for high-consumption businesses',
      'Monthly savings: ₱80,000 to ₱380,000',
      'Includes: Full design, procurement, installation, DOE permit',
      'After-sales: 12-month on-site maintenance contract available',
    ],
    proof: 'A 120 kWp system we installed for a Cebu warehouse in 2024 reduced their monthly electricity cost from ₱195,000 to ₱41,000.',
    cta: 'Request a Commercial Site Assessment',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3P2mKBjno4sjEtXYuSOJVi_EvYwHxW9yPGIBZD78HyP0wYJLuzgu7NyAK7nCjLTefjOESH6VkvjlIkooXBI8iUw2IrjJPNKb6FUEdv8hsqTJNLWZUcNwadV66XJYvVXh3IZQ5L5edu6Qdjv2dzFDygk3ImjYlzlg5XTKId7VbMQwHlEj8wu4LTzYKOyrVsUqX5D6YSusM05O7iEkMPZeefcza-wjhPA3Of6Zo1PWRIU28vkOMFOQZbl0UgWWpGTV3SwDrB7xlI_qA',
    imgAlt: 'Large commercial solar panel array on warehouse rooftop in Philippines',
  },
  {
    id: 'battery',
    tag: 'Battery & Monitoring',
    name: 'Huawei LUNA2000 Battery + FusionSolar Monitoring',
    headline: 'Power through every brownout. Check your system from your phone — even from abroad.',
    body: 'Add a Huawei LUNA2000 battery to your solar system and you\'ll keep the lights on even when the grid goes down. The FusionSolar app gives you real-time data on how much power you\'re generating, how much you\'re saving, and your system\'s health — 24/7, from anywhere in the world. This is the one feature our OFW customers ask for by name.',
    details: [
      'Battery capacity options: 5 kWh to 30 kWh',
      'Backup duration: 4–18 hours depending on load',
      'App: Huawei FusionSolar (iOS & Android)',
      'Monitoring: Real-time generation, savings, CO₂ reduced',
      'Remote access: Works with any SIM, anywhere',
    ],
    proof: '87% of our customers with battery storage say the FusionSolar app is the feature they use and recommend most.',
    cta: 'Add Battery Storage to My Quote',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBU3LXIdwme1ptm0IPjGAx0WIpBWJIcWrdDqVefZe1_h6pxnh0JxO6sUwjoK40as8KxZHnt_FGl3iq2mei-y-AAKIHELteb5JYYYTwWOTn_a0OBWZx7Kl60dM_d--g5Rzm95hEYl-2KKUYxTAFBDZP8Q0cWZ8KGi_LDZg9IimBPZZ9_603zQpdySMmIJJ25dgda4q12MEWrq-6uYDfRqz9G6yJRjOJLm-VEgg95IlJLScTx12CbP4ye8iPO43tIKXiCqyB3R2Vb6-Cg',
    imgAlt: 'Huawei LUNA2000 battery storage unit with smart monitoring display',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Our Expertise</p>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
              What we install.{' '}
              <span className="text-on-surface/30 font-normal italic">What you get.</span>
            </h2>
          </div>
          <p className="max-w-sm text-on-surface-variant font-medium text-sm leading-relaxed">
            From residential rooftops to large industrial plants, we deliver
            high-efficiency energy systems engineered for the tropical climate.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imgAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-1">
                    {s.tag}
                  </p>
                  <h4 className="text-lg font-bold leading-tight">{s.name}</h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                <h3 className="text-lg font-bold text-on-surface leading-snug">
                  {s.headline}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.body}</p>

                {/* Details list */}
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span className="text-brand-green font-bold mt-0.5 shrink-0">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof stat */}
                <div className="bg-surface-container rounded-xl p-4 border-l-4 border-brand-green">
                  <p className="text-xs font-semibold text-on-surface-variant italic leading-relaxed">
                    "{s.proof}"
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 font-bold text-brand-green group-hover:gap-3 transition-all text-sm"
                >
                  → {s.cta}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
