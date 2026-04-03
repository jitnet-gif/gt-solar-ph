'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Sun, LogOut, Users, Zap, CheckCircle, TrendingUp,
  Search, RefreshCw, ChevronDown, Trash2, FileText
} from 'lucide-react'
import { STATUS_LABELS, STATUS_COLORS } from '@/lib/types'
import type { QuoteStatus } from '@/lib/types'

interface SerializedQuote {
  id: string
  name: string
  phone: string
  address: string
  monthlyBill: string
  systemType: string
  status: QuoteStatus
  notes?: string
  createdAt: string
  updatedAt: string
}

interface Stats {
  total: number
  newCount: number
  contactedCount: number
  convertedCount: number
}

export default function AdminDashboard({
  quotes: initialQuotes,
  stats,
}: {
  quotes: SerializedQuote[]
  stats: Stats
}) {
  const router = useRouter()
  const [quotes, setQuotes] = useState(initialQuotes)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState<QuoteStatus | 'all'>('all')
  const [selectedQuote, setSelectedQuote] = useState<SerializedQuote | null>(null)
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleLogout() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/admin/login')
  }

  async function updateStatus(id: string, status: QuoteStatus) {
    setSaving(true)
    await fetch('/api/admin/quotes', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)))
    if (selectedQuote?.id === id) setSelectedQuote((q) => q && { ...q, status })
    setSaving(false)
  }

  async function saveNotes(id: string) {
    setSaving(true)
    await fetch('/api/admin/quotes', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, notes }),
    })
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, notes } : q)))
    setSaving(false)
  }

  async function deleteQuote(id: string) {
    if (!confirm('Delete this lead? This cannot be undone.')) return
    await fetch('/api/admin/quotes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setQuotes((prev) => prev.filter((q) => q.id !== id))
    if (selectedQuote?.id === id) setSelectedQuote(null)
  }

  const filtered = quotes.filter((q) => {
    const matchSearch =
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.phone.includes(search) ||
      q.address.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filterStatus === 'all' || q.status === filterStatus
    return matchSearch && matchStatus
  })

  const revenueEstimate = stats.convertedCount * 180000

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top nav */}
      <header className="bg-darkest-green text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center">
            <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-black text-base leading-none">
              GT Solar<span className="text-brand-green">PH</span>
            </p>
            <p className="text-white/40 text-[10px] font-semibold">Admin Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.refresh()}
            className="p-2 text-white/60 hover:text-white transition-colors"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Leads', value: stats.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'New Leads', value: stats.newCount, icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
            { label: 'Converted', value: stats.convertedCount, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
            {
              label: 'Est. Revenue',
              value: `₱${(revenueEstimate / 1000).toFixed(0)}k`,
              icon: TrendingUp,
              color: 'text-brand-green',
              bg: 'bg-green-50',
            },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-black text-gray-900">{s.value}</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Table */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <h2 className="font-bold text-gray-900 text-lg">Quote Submissions</h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-52">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search name, phone…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as QuoteStatus | 'all')}
                    className="appearance-none pl-3 pr-8 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green bg-white"
                  >
                    <option value="all">All Status</option>
                    {Object.entries(STATUS_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">Bill</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">System</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-gray-400">
                        No leads found.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((q) => (
                      <tr
                        key={q.id}
                        onClick={() => { setSelectedQuote(q); setNotes(q.notes || '') }}
                        className={`cursor-pointer hover:bg-green-50/50 transition-colors ${selectedQuote?.id === q.id ? 'bg-green-50' : ''}`}
                      >
                        <td className="px-5 py-4 font-semibold text-gray-900">{q.name}</td>
                        <td className="px-5 py-4 text-gray-600">{q.phone}</td>
                        <td className="px-5 py-4 text-gray-500 hidden md:table-cell text-xs">{q.monthlyBill}</td>
                        <td className="px-5 py-4 text-gray-500 hidden lg:table-cell text-xs max-w-[140px] truncate">{q.systemType}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${STATUS_COLORS[q.status]}`}>
                            {STATUS_LABELS[q.status]}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">
                          {new Date(q.createdAt).toLocaleDateString('en-PH', {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Detail panel */}
          {selectedQuote ? (
            <div className="w-full lg:w-80 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5 self-start">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{selectedQuote.name}</h3>
                  <a href={`tel:${selectedQuote.phone}`} className="text-brand-green font-semibold text-sm hover:underline">
                    {selectedQuote.phone}
                  </a>
                </div>
                <button
                  onClick={() => deleteQuote(selectedQuote.id)}
                  className="text-red-400 hover:text-red-600 transition-colors p-1"
                  title="Delete lead"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                {[
                  { label: 'Address', value: selectedQuote.address },
                  { label: 'Bill', value: selectedQuote.monthlyBill },
                  { label: 'System', value: selectedQuote.systemType },
                  { label: 'Submitted', value: new Date(selectedQuote.createdAt).toLocaleString('en-PH') },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-2 text-gray-600">
                    <span className="font-semibold text-gray-400 w-20 shrink-0">{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Status buttons */}
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-400 uppercase tracking-wider">
                  Update Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(STATUS_LABELS) as QuoteStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selectedQuote.id, s)}
                      disabled={saving}
                      className={`text-xs font-bold px-3 py-2 rounded-xl border transition-all ${
                        selectedQuote.status === s
                          ? 'border-brand-green bg-brand-green text-white'
                          : 'border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green'
                      }`}
                    >
                      {STATUS_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold mb-2 text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Site visit scheduled for…"
                  className="w-full text-sm border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
                />
                <button
                  onClick={() => saveNotes(selectedQuote.id)}
                  disabled={saving}
                  className="mt-2 w-full bg-brand-green text-white text-sm font-bold py-2.5 rounded-xl hover:bg-primary transition-colors disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Save Notes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex w-80 bg-white rounded-2xl border border-gray-100 border-dashed items-center justify-center p-8 text-center self-start">
              <div>
                <Users className="w-8 h-8 text-gray-200 mx-auto mb-3" />
                <p className="text-sm text-gray-400 font-medium">Select a lead to view details</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
