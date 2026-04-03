import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'gt-solar-fallback-secret-change-in-production'
)

const COOKIE_NAME = 'gt_admin_token'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect /admin/* except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = req.cookies.get(COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    try {
      const { payload } = await jwtVerify(token, SECRET)
      if (payload.role !== 'admin') throw new Error('Not admin')
    } catch {
      const res = NextResponse.redirect(new URL('/admin/login', req.url))
      res.cookies.delete(COOKIE_NAME)
      return res
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
