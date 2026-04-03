import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-brand-green rounded-2xl overflow-hidden px-8 py-20 md:px-20 md:py-24 text-center text-white">
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Large decorative blur circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/70 font-bold uppercase tracking-[0.2em] text-sm mb-6">
              Ready to stop renting your electricity?
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Invest in your own power plant today.
            </h2>
            <p className="text-xl md:text-2xl text-white/85 font-medium mb-12 leading-relaxed">
              0% Interest Financing available · Net Metering handled · GCash payment accepted
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-brand-green px-10 py-4 rounded-full font-black text-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                GET YOUR FREE QUOTE NOW
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="viber://chat"
                className="bg-white/15 text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/25 transition-colors flex items-center justify-center gap-2"
              >
                💬 Message Us on Viber
              </a>
            </div>

            {/* Trust footer */}
            <div className="mt-14 flex flex-wrap justify-center gap-6 text-white/60 text-sm font-semibold">
              <span>🏆 Huawei FusionSolar Certified</span>
              <span>·</span>
              <span>📋 DOE Registered</span>
              <span>·</span>
              <span>500+ Projects Completed</span>
              <span>·</span>
              <span>📍 Based in Cebu — Serving All of Visayas and Beyond</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
