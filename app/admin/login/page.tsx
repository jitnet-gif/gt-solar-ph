'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      const json = await res.json()
      setError(json.error || 'Invalid password.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-darkest-green flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-brand-green/30 border-2 border-brand-green/40">
            <Image src="/SOLAR.jpg" alt="GT Solar Logo" width={48} height={48} className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="text-white font-black text-xl leading-none">
              GT Solar<span className="text-brand-green">PH</span>
            </p>
            <p className="text-white/40 text-xs font-semibold mt-0.5">Admin Portal</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-dark-green rounded-2xl p-8 border border-brand-green/10">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-brand-green" />
            <h1 className="text-white font-bold text-lg">Sign In</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-900/30 text-red-400 rounded-xl text-sm border border-red-800/30">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold mb-2 text-white/40 uppercase tracking-wider">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-darkest-green border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green hover:bg-primary text-white font-bold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-60"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          GT Solar Power — Internal Admin Only
        </p>
      </div>
    </div>
  )
}
