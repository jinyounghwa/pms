'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/contexts/auth-context'
import { Navbar } from '@/components/layout/navbar'

export default function Home() {
  const { user, isLoading } = useAuth()
  const [isClient, setIsClient] = useState(false)
  
  // 클라이언트 사이드 렌더링 확인
  useEffect(() => {
    setIsClient(true)
  }, [])

  // 서버 사이드 렌더링 또는 로딩 중일 때 로딩 표시
  if (!isClient || isLoading) {
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <div className="w-full max-w-5xl space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">호텔 PMS (Property Management System)</h1>
            <p className="text-xl text-muted-foreground">
              호텔 운영의 모든 핵심 업무를 통합 관리하는 클라우드 기반 시스템
            </p>
          </div>

          {user?.isLoggedIn ? (
            <div className="text-center mt-8">
              <p className="mb-4">환영합니다, {user.username}! 대시보드에서 호텔 운영 현황을 확인하세요.</p>
              <Button size="lg" onClick={() => window.location.href = '/dashboard'}>
                대시보드로 이동
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>예약 관리</CardTitle>
                    <CardDescription>온라인 예약 접수 및 관리</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>실시간 예약 현황 모니터링, 예약 수정/취소, 대기 목록 관리 등 예약 관련 모든 기능을 제공합니다.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/login" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      로그인하기
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>객실 관리</CardTitle>
                    <CardDescription>객실 상태 및 하우스키핑 관리</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>객실 상태 관리, 실시간 객실 현황, 하우스키핑 관리, 유지보수 관리 등 객실 관련 기능을 제공합니다.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/login" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      로그인하기
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>고객 관리</CardTitle>
                    <CardDescription>고객 프로필 및 이용 이력 관리</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>고객 프로필, VIP 관리, 고객 선호도, 피드백 관리 등 고객 관련 모든 기능을 제공합니다.</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/login" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      로그인하기
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="flex justify-center mt-8">
                <Button size="lg" onClick={() => window.location.href = '/login'}>
                  로그인하기
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
