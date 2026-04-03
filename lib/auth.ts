import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_JWT_SECRET || 'gt-solar-fallback-secret-change-in-production'
)

const COOKIE_NAME = 'gt_admin_token'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'gtsolar2025'

export async function signAdminToken() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(SECRET)
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET)
    return payload.role === 'admin'
  } catch {
    return false
  }
}

export async function getAdminSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return false
  return verifyAdminToken(token)
}

export function checkPassword(password: string) {
  return password === ADMIN_PASSWORD
}

export { COOKIE_NAME }
