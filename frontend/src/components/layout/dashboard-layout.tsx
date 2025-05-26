'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { useAuth } from '@/contexts/auth-context'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // 클라이언트 사이드 렌더링 확인
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 인증 상태 확인
  useEffect(() => {
    // 클라이언트 사이드에서만 인증 상태 확인
    if (isClient && !isLoading && !user?.isLoggedIn) {
      console.log('인증되지 않은 사용자, 로그인 페이지로 이동')
      router.push('/login')
    }
  }, [user, isLoading, router, isClient])

  // 서버 사이드 렌더링 또는 로딩 중이거나 인증되지 않은 경우 로딩 표시
  if (!isClient || isLoading || !user?.isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
