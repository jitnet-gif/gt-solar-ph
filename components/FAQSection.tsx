'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is my roof suitable for solar?',
    a: 'Most roofs in the Philippines are suitable. Our team conducts a free structural and shading analysis to ensure maximum system efficiency before any commitment. We work with concrete, metal, and tile roofs.',
  },
  {
    q: 'How long does installation take?',
    a: 'Typical residential installations (3–8 kWp) take 1–2 days. Net Metering approval with Meralco or VECO typically takes 4–8 weeks — we handle the entire application for you.',
  },
  {
    q: 'What happens during a brownout or typhoon?',
    a: 'Standard grid-tie systems automatically shut off for safety during an outage. With our Huawei LUNA2000 battery upgrade, your home seamlessly switches to stored power the moment the grid fails. Our panels are rated to withstand 2,400 Pa wind load — engineered for Philippine typhoon conditions.',
  },
  {
    q: 'How does net metering work with Meralco / VECO?',
    a: 'Net metering allows you to sell excess solar power back to the grid. Your bill reflects only your net consumption. GT Solar manages the entire DOE and distribution utility application process — you just approve the paperwork.',
  },
  {
    q: 'What financing options are available?',
    a: 'We offer in-house installment plans payable via GCash, bank transfer, or over-the-counter. We also work with partner banks for 0% interest solar loans. OFW customers can pay from abroad via GCash or bank wire.',
  },
  {
    q: 'What if your company closes down and my warranty is void?',
    a: 'Our panels and inverters carry manufacturer warranties directly from Huawei — a global company with a presence in the Philippines. Even if GT Solar were ever to close, your Huawei hardware warranty remains valid. We also provide a full warranty certificate at installation.',
  },
  {
    q: 'Paano ko malalaman kung gumagana ang solar ko?',
    a: 'Kasama sa bawat Huawei system ang FusionSolar app — libre, available sa iOS at Android. Real-time mo makikita ang output ng iyong sistema, magkano ang naitipid mo, at CO₂ na naiiwasan. Works kahit nasa abroad ka.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
            Mga Madalas na Tanong
          </h2>
          <p className="text-on-surface-variant mt-4 font-medium">
            Frequently Asked Questions
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-bold text-on-surface leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-250 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-on-surface-variant leading-relaxed text-sm border-t border-outline-variant/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
