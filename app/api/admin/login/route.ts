import { NextRequest, NextResponse } from 'next/server'
import { checkPassword, signAdminToken, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    if (!checkPassword(password)) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
    }

    const token = await signAdminToken()

    const res = NextResponse.json({ success: true })
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    })

    return res
  } catch {
    return NextResponse.json({ error: 'Login failed.' }, { status: 500 })
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true })
  res.cookies.delete(COOKIE_NAME)
  return res
}
