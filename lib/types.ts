export type { QuoteStatus, QuoteRow } from './database.types'

export const STATUS_LABELS: Record<string, string> = {
  new: 'New Lead',
  contacted: 'Contacted',
  site_visit: 'Site Visit Scheduled',
  quoted: 'Quote Sent',
  converted: 'Converted ✓',
  lost: 'Lost',
}

export const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  site_visit: 'bg-purple-100 text-purple-700',
  quoted: 'bg-orange-100 text-orange-700',
  converted: 'bg-green-100 text-green-700',
  lost: 'bg-red-100 text-red-600',
}
