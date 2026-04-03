'use client'

import { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, Send, ChevronDown } from 'lucide-react'

interface Message {
  role: 'bot' | 'user'
  text: string
}

const QA: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['price', 'cost', 'magkano', 'presyo', 'bayad', 'how much', 'quote'],
    answer:
      'The cost depends on your system size and electricity usage. A typical 5 kWp residential system in Cebu ranges from ₱250,000–₱380,000 before incentives. Fill out our Free Quote form and we\'ll give you an exact price within 24 hours! 🌞',
  },
  {
    keywords: ['financing', 'installment', 'utang', 'loan', 'bayad', '0%', 'zero interest', 'gcash'],
    answer:
      'Yes! We offer 0% interest in-house installment plans payable via GCash, bank transfer, or over-the-counter. We also partner with banks for solar loans. OFW customers can pay from abroad via GCash or bank wire. 💚',
  },
  {
    keywords: ['net metering', 'meralco', 'veco', 'grid', 'electric bill', 'kuryente', 'bill'],
    answer:
      'Net metering lets you sell excess solar power back to the grid — your bill only reflects net consumption. GT Solar handles the entire DOE and utility application (Meralco/VECO) for you. It typically takes 4–8 weeks for approval. 🔌',
  },
  {
    keywords: ['warranty', 'garantiya', 'guarantee', 'huawei', 'after sales', 'lifespan', 'life span'],
    answer:
      'Our panels come with a 25-year performance warranty. Huawei inverters carry a 10-year warranty — backed directly by Huawei Philippines. Even if GT Solar were to close, your manufacturer warranty stays valid. We also issue a full warranty certificate at installation. 📜',
  },
  {
    keywords: ['brownout', 'blackout', 'typhoon', 'bagyo', 'power outage', 'kulog', 'ulan', 'battery'],
    answer:
      'Standard grid-tie systems automatically shut off during outages for safety. With our Huawei LUNA2000 battery upgrade, your home seamlessly switches to stored solar power the moment the grid fails. Our panels are rated for 2,400 Pa wind load — built for Philippine typhoons. 🌀',
  },
  {
    keywords: ['roof', 'bubong', 'suitable', 'compatible', 'installation', 'install', 'concrete', 'metal', 'tile'],
    answer:
      'Most roofs in the Philippines are suitable — concrete, metal, and tile. Our team does a free structural and shading analysis before any commitment. A typical 3–8 kWp residential installation takes only 1–2 days! 🏠',
  },
  {
    keywords: ['monitor', 'app', 'fusionsolar', 'check', 'output', 'makita', 'gaano', 'savings', 'makatipid'],
    answer:
      'Every Huawei system includes the free FusionSolar app (iOS & Android). You can monitor real-time output, savings, and CO₂ avoided — even from abroad! 📱',
  },
  {
    keywords: ['location', 'address', 'saan', 'talisay', 'cebu', 'office', 'where', 'visit'],
    answer:
      'We\'re based at Corona Del Mar, Brgy. Pooc, Talisay, Cebu 6045 — and we serve all of Visayas! 📍 You can also reach us by email at gtsystemsph@gmail.com or message us on Viber/WhatsApp.',
  },
  {
    keywords: ['contact', 'viber', 'whatsapp', 'facebook', 'messenger', 'instagram', 'email', 'call', 'tawag'],
    answer:
      'You can reach GT Solar PH through:\n📧 gtsystemsph@gmail.com\n📸 Instagram: @gt_systems_solar_power_cebu\n💬 Facebook: GT Solar Power Installation Services Cebu\n\nOr fill out our Free Quote form on this page and we\'ll contact you within 24 hours! 🌞',
  },
  {
    keywords: ['doe', 'registered', 'certified', 'accredited', 'legit', 'license', 'lisensya'],
    answer:
      'Yes! GT Solar PH is DOE Registered and an Authorized Huawei FusionSolar Partner. We\'ve completed 500+ solar installations across the Visayas. You\'re in safe hands! 🏆',
  },
  {
    keywords: ['ofw', 'abroad', 'overseas', 'remittance', 'bayad', 'pay overseas'],
    answer:
      'OFW customers are very welcome! You can pay installments from abroad via GCash international or bank wire transfer. Your family here can coordinate the installation. We speak Tagalog, English, and Bisaya! 🇵🇭',
  },
  {
    keywords: ['how long', 'payback', 'roi', 'return', 'break even', 'mabawi'],
    answer:
      'Most GT Solar customers recover their investment in 4–6 years, then enjoy free electricity for 20+ more years. With rising electricity rates in Cebu, the payback period keeps getting shorter! 📈',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'kumusta', 'magandang', 'good morning', 'good afternoon', 'good evening', 'uy', 'kamusta'],
    answer:
      'Hello! 👋 I\'m the GT Solar PH assistant. I can answer questions about solar panels, pricing, net metering, financing, and more! Kumusta? Ask me anything. 🌞',
  },
]

const SUGGESTIONS = [
  'How much does solar cost?',
  'Is there 0% financing?',
  'How does net metering work?',
  'How long does installation take?',
]

function getBotReply(input: string): string {
  const lower = input.toLowerCase()
  for (const item of QA) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.answer
    }
  }
  return "I don't have a specific answer for that yet, but our team does! 😊 Please fill out the Free Quote form on this page or email us at gtsystemsph@gmail.com and we'll respond within 24 hours. Salamat!"
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi! 👋 I'm the GT Solar PH assistant. Ask me about solar pricing, financing, net metering, or anything else! 🌞",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send(text: string) {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', text: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const reply = getBotReply(text)
      setMessages((prev) => [...prev, { role: 'bot', text: reply }])
      setTyping(false)
    }, 700)
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-brand-green px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">
                GT
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">GT Solar PH</p>
                <p className="text-white/70 text-xs mt-0.5">Solar Assistant · Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-brand-green text-white rounded-br-sm'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs bg-white border border-brand-green/30 text-brand-green px-3 py-1.5 rounded-full hover:bg-brand-green hover:text-white transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(input)}
              placeholder="Type a question..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-brand-green transition-colors"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center disabled:opacity-40 hover:bg-green-600 transition-colors"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-green text-white rounded-full shadow-2xl shadow-brand-green/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </>
  )
}
