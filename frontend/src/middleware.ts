import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 보호된 경로 목록
export const protectedRoutes = ['/dashboard', '/reservations', '/rooms', '/guests']
export const authRoutes = ['/login']

// 미들웨어 함수 - Next.js에서 반드시 필요
// 클라이언트 측 인증을 사용하지만 미들웨어 함수는 반드시 있어야 함
export function middleware(request: NextRequest) {
  // 클라이언트 측에서 인증을 처리하민로 미들웨어에서는 아무것도 하지 않음
  return NextResponse.next()
}

// 미들웨어가 적용되지 않도록 비어있는 matcher 설정
export const config = {
  matcher: []
}
