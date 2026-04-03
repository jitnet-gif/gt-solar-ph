import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { getAdminSession } from '@/lib/auth'

export async function GET() {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('quotes')
      .select('status')

    if (error) throw error

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows = (data ?? []) as any[]
    const total = rows.length
    const newCount = rows.filter((q) => q.status === 'new').length
    const contactedCount = rows.filter((q) => q.status === 'contacted').length
    const convertedCount = rows.filter((q) => q.status === 'converted').length
    const revenueEstimate = convertedCount * 180000

    return NextResponse.json({ total, newCount, contactedCount, convertedCount, revenueEstimate })
  } catch (err) {
    console.error('[GET /api/admin/stats]', err)
    return NextResponse.json({ error: 'Failed to fetch stats.' }, { status: 500 })
  }
}
