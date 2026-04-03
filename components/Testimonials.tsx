import Image from 'next/image'
import { TrendingDown } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Homeowner, Cebu City',
    system: '6 kWp Huawei Rooftop',
    installed: 'March 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5A81XahmQ0YFW_AyZr8igbkPuAav5FzeH7c2UH8BUHum9M7wVHRjd0VOjE0_6YuFlN2YIXrqR7CFVWlbWCgP_VB_mLlCXoNvkX-OwyhGpRbG50lYfma5b-5RSeb0UpOidPCE4SqCFU-P0O0zzjcgdHLVJJuddTKnDjXV0OmQIwBlh5ujThvUen2e7s8VMwy68Dy0xKtaXgJnjUmpjeiNc1h3TTGXcSOGIWeobIpZIZEMaktLLk8xNm3sJSkqbaIBf6JfysCEBB_6h',
    quoteFilipino:
      '"Noong una, nag-aatubili kami kasi akala namin mahal. Pero kinwenta namin — sa loob ng 4 na taon, mababawi na namin ang gastos. Ngayon ₱1,200 lang ang bill namin every month. Dati ₱9,800. Hindi ko pagsisisihan."',
    quoteEnglish:
      '"We hesitated at first because we thought it was expensive. But when we did the math — we\'ll recover the cost in 4 years. Now our bill is only ₱1,200 a month. Before it was ₱9,800. I have zero regrets."',
    before: '₱9,800',
    after: '₱1,200',
    savings: '₱8,600',
    addons: 'Includes: LUNA2000 5 kWh Battery',
  },
  {
    name: 'Ronaldo Dela Cruz',
    role: 'Owner, Dela Cruz Cold Storage & Distribution',
    system: '140 kWp Commercial Rooftop',
    installed: 'January 2024',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLprxYP5HBalq9MoBc9axxCbNxnhUjotIYy13V9rwDXvcBkFTUSSclqDstA2-BIAXfggRSS2l0hOheuTIon1PQhdN0qfdKHmW-PjlP3pDhlz5ixle4O__UmSwqcYsXu9k-OApfUoVxv8oCKcClgqqFmrxD0BL_vOTUBWRJDY3prziXNAKqLmGhG98DD2JmfS-BsPGG6ND0EVXt5Gj1eucPqqgvbSKC-xA5CJ4PNuRPReIUsst7Xhm5CmzHTGvymjuo9I_rqnOgjO2',
    quoteFilipino: null,
    quoteEnglish:
      '"I was spending ₱165,000 a month on electricity for our cold storage. I thought solar was only for houses. When GT Solar showed me the numbers for a commercial system — I signed within the week. We\'re now at ₱38,000 a month. That\'s ₱127,000 back in our pocket every month. The system paid for itself in less than 3 years."',
    before: '₱165,000',
    after: '₱38,000',
    savings: '₱127,000',
    addons: 'Annual savings: ₱1,524,000 · Payback: 2.9 years',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-darkest-green text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
            The Savings Proof
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold">
            Real customers. Real numbers.
          </h2>
          <p className="text-white/50 mt-4 font-medium">
            Hindi lang salita — actual bill comparisons mula sa aming mga customers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-10 md:p-12 bg-dark-green rounded-2xl border border-brand-green/10 hover:border-brand-green/30 transition-colors"
            >
              {/* Profile */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-green shadow-lg shadow-brand-green/20 shrink-0">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                  <p className="text-brand-green text-xs font-semibold mt-0.5">
                    System: {t.system}
                  </p>
                </div>
              </div>

              {/* Quote */}
              {t.quoteFilipino && (
                <p className="text-base italic leading-relaxed text-white/80 mb-3">
                  {t.quoteFilipino}
                </p>
              )}
              <p className="text-sm italic leading-relaxed text-white/60 mb-8">
                {t.quoteEnglish}
              </p>

              {/* Before / After metrics */}
              <div className="flex items-center justify-between bg-darkest-green rounded-xl p-6">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">
                    Before Solar
                  </p>
                  <p className="text-2xl font-bold line-through text-white/40">{t.before}</p>
                </div>
                <TrendingDown className="w-6 h-6 text-brand-green shrink-0" />
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-green mb-1">
                    After Solar
                  </p>
                  <p className="text-4xl font-black text-white">{t.after}</p>
                </div>
              </div>

              {/* Savings pill */}
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-bold">
                  💰 Monthly savings: {t.savings}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 text-white/50 px-4 py-2 rounded-full text-xs font-semibold">
                  📅 Installed: {t.installed}
                </span>
              </div>
              {t.addons && (
                <p className="mt-3 text-xs text-white/40 font-medium">{t.addons}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
