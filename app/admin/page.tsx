import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const session = await getAdminSession()
  if (!session) redirect('/admin/login')

  const { data } = await supabaseAdmin
    .from('quotes')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allQuotes = ((data ?? []) as any[])

  const stats = {
    total: allQuotes.length,
    newCount: allQuotes.filter((q) => q.status === 'new').length,
    contactedCount: allQuotes.filter((q) => q.status === 'contacted').length,
    convertedCount: allQuotes.filter((q) => q.status === 'converted').length,
  }

  const serialized = allQuotes.map((q) => ({
    id: q.id,
    name: q.name,
    phone: q.phone,
    address: q.address,
    monthlyBill: q.monthly_bill,
    systemType: q.system_type,
    status: q.status,
    notes: q.notes ?? '',
    createdAt: q.created_at,
    updatedAt: q.updated_at,
  }))

  return <AdminDashboard quotes={serialized} stats={stats} />
}
