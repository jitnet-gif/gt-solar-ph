import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { getAdminSession } from '@/lib/auth'
import type { QuoteStatus } from '@/lib/types'

export async function GET(req: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  const status = searchParams.get('status')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query: any = supabaseAdmin
    .from('quotes')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * limit, page * limit - 1)

  if (status) query = query.eq('status', status)

  const { data: quotes, error, count } = await query

  if (error) {
    console.error('[GET /api/admin/quotes]', error)
    return NextResponse.json({ error: 'Failed to fetch quotes.' }, { status: 500 })
  }

  return NextResponse.json({ quotes, total: count, page, limit })
}

export async function PATCH(req: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body: { id: string; status?: QuoteStatus; notes?: string } = await req.json()

    const update: Record<string, unknown> = { updated_at: new Date().toISOString() }
    if (body.status) update.status = body.status
    if (body.notes !== undefined) update.notes = body.notes

    const { error } = await supabaseAdmin
      .from('quotes')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .update(update as any)
      .eq('id', body.id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[PATCH /api/admin/quotes]', err)
    return NextResponse.json({ error: 'Failed to update quote.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id } = await req.json()
    const { error } = await supabaseAdmin.from('quotes').delete().eq('id', id)
    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[DELETE /api/admin/quotes]', err)
    return NextResponse.json({ error: 'Failed to delete quote.' }, { status: 500 })
  }
}
