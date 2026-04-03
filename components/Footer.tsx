import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const links = {
  services: [
    { label: 'Residential Solar', href: '#services' },
    { label: 'Commercial & Industrial', href: '#services' },
    { label: 'Battery Storage', href: '#services' },
    { label: 'Agricultural Solar', href: '#services' },
    { label: 'Real Estate / Developer', href: '#services' },
  ],
  company: [
    { label: 'About GT Solar', href: '#' },
    { label: 'Our Projects', href: '#' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  keywords: [
    'solar panel Cebu',
    'solar panel Philippines',
    'net metering Philippines',
    'Huawei solar Philippines',
    'solar panel Talisay Cebu',
    'solar panel Visayas',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-darkest-green text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-green/40 shrink-0">
                <Image src="/SOLAR.jpg" alt="GT Solar Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="text-base font-black tracking-tight leading-none">
                  GT Solar<span className="text-brand-green">PH</span>
                </p>
                <p className="text-white/30 text-[10px] font-semibold mt-0.5">
                  GT Systems Solar Power Cebu
                </p>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-3">
              Sustainable solar energy for Filipino homes and businesses.
              Authorized Huawei FusionSolar Partner. DOE Registered.
            </p>
            <p className="text-brand-green/70 text-xs font-semibold mb-5">
              🇵🇭 Nagsasalita kami ng Tagalog, English, ug Bisaya.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {['Huawei Certified', 'DOE Reg.', '500+ Projects'].map((c) => (
                <span
                  key={c}
                  className="text-xs font-bold bg-brand-green/10 text-brand-green px-3 py-1 rounded-full border border-brand-green/20"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {links.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 hover:text-brand-green transition-colors text-sm font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 hover:text-brand-green transition-colors text-sm font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Corona Del Mar, Brgy. Pooc, Talisay, Cebu, Philippines 6045</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href="mailto:gtsystemsph@gmail.com" className="hover:text-brand-green transition-colors break-all">
                  gtsystemsph@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Instagram className="w-4 h-4 text-brand-green shrink-0" />
                <a
                  href="https://instagram.com/gt_systems_solar_power_cebu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  @gt_systems_solar_power_cebu
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MessageCircle className="w-4 h-4 text-brand-green shrink-0" />
                <a
                  href="https://m.me/GT-Solar-Power-Installation-Services-Cebu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors"
                >
                  GT Solar Power Installation Services Cebu
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com/GT-Solar-Power-Installation-Services-Cebu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center text-sm text-white/60 hover:text-white transition-all duration-200 font-bold"
              >
                f
              </a>
              <a
                href="https://instagram.com/gt_systems_solar_power_cebu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:gtsystemsph@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* SEO keyword row */}
        <div className="py-6 border-t border-white/5 border-b border-white/5 mb-8">
          <p className="text-xs text-white/20 text-center leading-loose">
            {links.keywords.join(' · ')}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p suppressHydrationWarning>© {new Date().getFullYear()} GT Systems Solar Power Cebu. All rights reserved.</p>
          <p>📍 Corona Del Mar, Brgy. Pooc, Talisay, Cebu 6045</p>
        </div>
      </div>
    </footer>
  )
}
