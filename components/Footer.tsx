import { Sun, Phone, Mail, MapPin } from 'lucide-react'

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
    'solar panel Mandaue',
    'solar panel Lapu-Lapu',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-darkest-green text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/30">
                <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-black tracking-tight">
                GT Solar<span className="text-brand-green">PH</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Sustainable energy for the Filipino home and business. Authorized Huawei FusionSolar
              Partner. DOE Registered. Serving all of Visayas and beyond since 2018.
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
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-brand-green transition-colors text-sm font-medium"
                  >
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
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-brand-green transition-colors text-sm font-medium"
                  >
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
                <span>GT Solar Power Building, Cebu City, Visayas, Philippines</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href="tel:+63917000000" className="hover:text-brand-green transition-colors">
                  +63 917 XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a
                  href="mailto:hello@gtsolarph.com"
                  className="hover:text-brand-green transition-colors"
                >
                  hello@gtsolarph.com
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              {[
                { label: 'Facebook', href: '#', icon: 'f' },
                { label: 'TikTok', href: '#', icon: '♪' },
                { label: 'YouTube', href: '#', icon: '▶' },
                { label: 'Viber', href: '#', icon: '💬' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center text-sm text-white/60 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
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
          <p>© {new Date().getFullYear()} GT Solar Power Installation Services. All rights reserved.</p>
          <p>📍 Based in Cebu City, Visayas · Serving all of the Philippines</p>
        </div>
      </div>
    </footer>
  )
}
