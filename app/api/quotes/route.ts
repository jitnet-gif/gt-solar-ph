import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, address, monthlyBill, systemType } = body

    if (!name || !phone || !address) {
      return NextResponse.json(
        { error: 'Name, phone, and address are required.' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('quotes')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .insert({
        name: String(name).trim(),
        phone: String(phone).trim(),
        address: String(address).trim(),
        monthly_bill: monthlyBill || 'Not specified',
        system_type: systemType || 'Not specified',
        status: 'new',
      } as any)
      .select('id')
      .single()

    if (error) throw error

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NextResponse.json({ success: true, id: (data as any).id }, { status: 201 })
  } catch (err) {
    console.error('[POST /api/quotes]', err)
    return NextResponse.json({ error: 'Failed to submit quote.' }, { status: 500 })
  }
}
