import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 min-h-[calc(100vh-80px)]">
      {/* Left content */}
      <div className="flex-1 space-y-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-highest rounded-full text-sm font-bold text-primary shadow-sm">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
          HUAWEI FUSIANSOLAR CERTIFIED INSTALLER
        </div>

        {/* Headline */}
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-on-surface">
          Stop Paying{' '}
          <span className="text-brand-green italic">₱12,000</span>{' '}
          a Month to Veco.
          <br />
          <span className="text-on-surface/40 font-semibold text-4xl md:text-5xl lg:text-6xl">
            Start Owning Your Energy.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
          GT Solar installs Huawei-certified solar systems for Filipino homes and businesses.
          Most customers cut their bill by{' '}
          <strong className="text-on-surface font-bold">60–80%</strong> — and pay back
          their investment in under 5 years.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="#contact"
            className="btn-primary text-base px-8 py-4 rounded-full font-bold bg-brand-green text-white hover:shadow-xl hover:shadow-brand-green/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            👉 Get My Free Quote — Takes 2 Minutes
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/63917000000"
            className="btn-secondary text-base px-8 py-4 rounded-full font-bold bg-surface-container-highest text-on-surface border border-outline-variant/30 hover:bg-surface-container-high active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-brand-green" />
            Chat on Viber or WhatsApp
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 pt-4 border-t border-outline-variant/20">
          {[
            { value: '500+', label: 'Installations in Visayas' },
            { value: '60–80%', label: 'Average Bill Reduction' },
            { value: '25yr', label: 'Panel Warranty' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-black text-brand-green leading-none">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right image cluster */}
      <div className="flex-1 relative w-full max-w-md md:max-w-none">
        <div className="relative w-full aspect-square">
          {/* Main circular image */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-surface-container-low shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQOC_geBPjFUqvgh7H_rF5w6iXeDoWWbKsN7mRcIyjpNlJNzAE7EUX3Q4I29pDHOSV5yR4wOc7c4A6_LOWLGjpOQOZ9ILXOUC4SO8PVvRis72e1P6mrRIMTbIHshkRDBwHdtzZh9hEDYhthr35gy1tPNZhx_o79AJhaKOweUawOknw7x3oBkHQgm-yllHcYvDk_UaO68djVtmnN70tWBpMAKbVpopZ55xiR6UYrbiVTI6vt1tufwUQDGnkbHayXhlWGBAUKfdxkfSn"
              alt="Solar panel rooftop installation — GT Solar PH"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Floating warranty badge */}
          <div className="absolute top-8 -right-4 md:right-0 glass-card p-5 rounded-2xl shadow-xl border border-white/30 animate-[bounce_3s_ease-in-out_infinite]">
            <div className="flex items-center gap-3">
              <div className="bg-brand-green p-2.5 rounded-full shadow-lg shadow-brand-green/30">
                <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest">
                  Peace of Mind
                </p>
                <p className="text-base font-extrabold text-on-surface leading-tight">
                  25yr Panel Warranty
                </p>
              </div>
            </div>
          </div>

          {/* Floating savings badge */}
          <div className="absolute -bottom-4 -left-4 md:left-0 glass-card p-5 rounded-2xl shadow-xl border border-white/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
              Typical Monthly Savings
            </p>
            <p className="text-3xl font-black text-brand-green leading-none">₱5,200</p>
            <p className="text-xs font-semibold text-on-surface-variant mt-0.5">per household</p>
          </div>

          {/* Decorative blur */}
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-brand-green/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
