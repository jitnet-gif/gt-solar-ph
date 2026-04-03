'use client'

import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'

const benefits = [
  'Free site visit within 5 business days',
  'Custom system design based on your actual consumption',
  'Full breakdown: upfront cost, monthly savings, payback period',
  'GCash and bank installment options available',
  'We handle DOE and VECO/Meralco net metering paperwork for you',
]

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      monthlyBill: (form.elements.namedItem('monthlyBill') as HTMLSelectElement).value,
      systemType: (form.elements.namedItem('systemType') as HTMLSelectElement).value,
    }

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Submission failed.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <div>
          <p className="section-label mb-4">Get Your Free Solar Assessment</p>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
            No pushy sales.
            <br />
            Just the numbers.
          </h2>
          <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
            Tell us your monthly bill and location. We'll tell you exactly how much you can save,
            what system size you need, and what it will cost — with zero obligation to proceed.
          </p>

          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="font-semibold text-on-surface text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 bg-brand-green/10 rounded-2xl border border-brand-green/20">
            <p className="text-sm font-bold text-on-surface">⚠️ Urgency note:</p>
            <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
              We accept a limited number of new site assessments per week to ensure every customer
              gets full attention from our team. Slots are filling up — book yours now.
            </p>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white p-10 rounded-2xl shadow-2xl border border-outline-variant/10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
              <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-brand-green" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-on-surface mb-2">
                  Assessment Booked!
                </h3>
                <p className="text-on-surface-variant">
                  Our team will contact you within 24 hours to confirm your free site visit.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl font-extrabold text-on-surface mb-6">
                Book My Free Assessment Now
              </h3>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-semibold border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold mb-1.5 text-on-surface-variant uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Juan Dela Cruz"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-brand-green transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5 text-on-surface-variant uppercase tracking-wider">
                    Phone / Viber
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="09XX XXX XXXX"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-brand-green transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 text-on-surface-variant uppercase tracking-wider">
                  Home / Business Address
                </label>
                <input
                  name="address"
                  type="text"
                  required
                  placeholder="Street, City, Province"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-brand-green transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 text-on-surface-variant uppercase tracking-wider">
                  Average Monthly Electric Bill
                </label>
                <select
                  name="monthlyBill"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3 px-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-brand-green transition"
                  defaultValue=""
                >
                  <option value="" disabled>Select your bill range</option>
                  <option>Below ₱5,000</option>
                  <option>₱5,000 – ₱10,000</option>
                  <option>₱10,001 – ₱20,000</option>
                  <option>₱20,001 – ₱50,000</option>
                  <option>₱50,001 – ₱100,000</option>
                  <option>Above ₱100,000 (Commercial)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 text-on-surface-variant uppercase tracking-wider">
                  I'm interested in
                </label>
                <select
                  name="systemType"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3 px-4 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-brand-green transition"
                  defaultValue=""
                >
                  <option value="" disabled>Select system type</option>
                  <option>Residential Solar + Net Metering</option>
                  <option>Commercial / Industrial Solar</option>
                  <option>Battery Storage + Monitoring</option>
                  <option>Agricultural / Farm Solar</option>
                  <option>Real Estate / Developer Bulk</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-green hover:bg-primary text-white font-bold py-4 rounded-full text-base flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:shadow-brand-green/25 active:scale-95 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    👉 Book My Free Assessment Now
                  </>
                )}
              </button>

              <p className="text-center text-xs text-on-surface-variant/60 mt-3">
                By submitting, you agree to be contacted by GT Solar Power via call, SMS, or Viber.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
