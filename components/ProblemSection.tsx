const problems = [
  {
    icon: '⚡',
    headline: "Your electric bill went up again — and you don't know when it'll stop.",
    body: 'Meralco and VECO rates have risen 22% in the last 3 years. For a typical Filipino household, that\'s ₱2,400 extra per year — just in rate increases. If your monthly bill is ₱10,000 today, it could hit ₱15,000 by 2028. You\'re not using more power. The price just keeps climbing.',
    stat: '₱11.57/kWh',
    statLabel: 'Highest electricity rate in all of Asia',
  },
  {
    icon: '🔴',
    headline: 'Every brownout means lost income, ruined groceries, or dead fish.',
    body: 'If you run a business, a 4-hour brownout can cost ₱20,000–₱80,000 in lost revenue. If you have a fish pond or cold storage, it\'s worse — one outage can wipe out weeks of work. And if you\'re an OFW whose family is home alone during a storm? You can\'t do anything about it from 3,000 kilometers away.',
    stat: '14 Days/yr',
    statLabel: 'Average brownout days in Visayas',
  },
  {
    icon: '❓',
    headline: 'Too many companies. Too many promises. Not enough proof.',
    body: 'You\'ve seen the Facebook ads. You\'ve asked around in community groups. But most solar companies can\'t show you real projects in your city, real customer savings numbers, or a maintenance plan that lasts past the sale. Buying solar is a ₱200,000–₱600,000 decision. You deserve a company you can verify — not just one that posts nice photos.',
    stat: '1 in 3',
    statLabel: 'Solar buyers regret their installer choice — PRSEA Survey 2024',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-20">
        <p className="section-label mb-4">Sound familiar?</p>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4">
          Ang mga problemang ito ay kilala mo.
        </h2>
        <div className="h-1.5 w-24 bg-brand-green mx-auto rounded-full" />
      </div>

      {/* Problem cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p) => (
          <div
            key={p.icon}
            className="group bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-6">{p.icon}</div>
            <h3 className="text-xl font-bold text-on-surface mb-4 leading-snug">
              {p.headline}
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm mb-8">
              {p.body}
            </p>
            <div className="pt-6 border-t border-outline-variant/20">
              <p className="text-3xl font-black text-brand-green leading-none">{p.stat}</p>
              <p className="text-[11px] font-bold uppercase text-on-surface-variant/60 mt-1.5 tracking-wider leading-snug">
                {p.statLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
