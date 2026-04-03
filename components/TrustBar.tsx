const badges = [
  { icon: '✅', text: 'Huawei FusionSolar Certified' },
  { icon: '✅', text: 'DOE Registered' },
  { icon: '✅', text: '25-Year Panel Warranty' },
  { icon: '✅', text: '500+ Installations in Visayas' },
]

export default function TrustBar() {
  return (
    <section className="bg-surface-container-low py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Partner logos row */}
        <p className="text-center text-xs font-bold text-on-surface-variant/50 uppercase tracking-[0.2em] mb-8">
          Trusted &amp; Certified By
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-10 opacity-60">
          <span className="text-xl font-black text-secondary font-headline">HUAWEI FusionSolar</span>
          <span className="w-px h-6 bg-outline-variant hidden md:block" />
          <span className="text-base font-bold text-secondary font-headline">DOE Registered</span>
          <span className="w-px h-6 bg-outline-variant hidden md:block" />
          <span className="text-xl font-black text-secondary font-headline italic">Meralco</span>
          <span className="w-px h-6 bg-outline-variant hidden md:block" />
          <span className="text-xl font-bold text-secondary font-headline tracking-tighter">VECO</span>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-outline-variant/10 text-sm font-semibold text-on-surface"
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
