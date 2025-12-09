'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import {
  Calendar,
  Building2,
  Users,
  ClipboardList,
  BarChart3,
  Settings,
  Sparkles,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const { user, isLoading } = useAuth()
  const [isClient, setIsClient] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTimeout(() => setMounted(true), 100)
  }, [])

  if (!isClient || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const features = [
    {
      icon: Calendar,
      title: '예약 관리',
      description: '실시간 예약 시스템으로 채널 관리부터 체크인까지 완벽하게 자동화합니다.',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      icon: Building2,
      title: '객실 관리',
      description: '객실 상태를 실시간으로 추적하고 하우스키핑 업무를 효율적으로 관리합니다.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Users,
      title: '고객 관리',
      description: 'VIP 고객 프로필부터 선호도 분석까지, 개인화된 서비스를 제공합니다.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: ClipboardList,
      title: '하우스키핑',
      description: '청소 작업 배정과 진행 상황을 실시간으로 모니터링하고 관리합니다.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: BarChart3,
      title: '분석 리포트',
      description: '매출, 점유율, 고객 만족도 등 핵심 지표를 한눈에 파악합니다.',
      color: 'from-red-500/20 to-rose-500/20'
    },
    {
      icon: Settings,
      title: '시스템 설정',
      description: '호텔 운영에 맞춰 시스템을 유연하게 커스터마이징할 수 있습니다.',
      color: 'from-slate-500/20 to-zinc-500/20'
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '500+', label: 'Hotels' },
    { value: '< 100ms', label: 'Response' },
    { value: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-background" />
              </div>
              <span className="text-xl font-bold gradient-text">Prestige PMS</span>
            </div>

            <div className="flex items-center space-x-4">
              {user?.isLoggedIn ? (
                <>
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    {user.username}
                  </span>
                  <Button onClick={() => window.location.href = '/dashboard'} size="sm">
                    대시보드
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                    로그인
                  </Link>
                  <Button onClick={() => window.location.href = '/login'} size="sm" className="bg-primary hover:bg-primary/90">
                    시작하기
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass text-sm border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span>Enterprise-Grade Cloud PMS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight px-4">
              <span className="block">호텔 경영의 새로운 기준,</span>
              <span className="block gradient-text mt-2">Prestige PMS</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              예약부터 체크아웃까지, 모든 호텔 운영을 하나의 플랫폼에서.<br className="hidden sm:block" />
              클라우드 기반 통합 관리 시스템으로 운영 효율을 극대화하세요.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 group w-full sm:w-auto"
                onClick={() => window.location.href = user?.isLoggedIn ? '/dashboard' : '/login'}
              >
                {user?.isLoggedIn ? '대시보드 열기' : '무료로 시작하기'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-hover border-white/20 w-full sm:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                기능 둘러보기
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              호텔 운영의 모든 것을<br className="sm:hidden" /> 한 곳에서
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              통합 관리 시스템으로 업무 시간을 절반으로 줄이고, 수익은 두 배로 늘리세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`glass glass-hover rounded-2xl p-8 space-y-4 opacity-0 animate-fade-in-up delay-${(index + 1) * 100}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <Icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <Link
                    href="/login"
                    className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group"
                  >
                    자세히 보기
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center space-y-6 border-2 border-primary/20">
            <Zap className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              30일 무료 체험으로 Prestige PMS의 모든 기능을 경험해보세요.<br className="hidden sm:block" />
              신용카드 등록 없이, 언제든 취소 가능합니다.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold px-8"
              onClick={() => window.location.href = '/login'}
            >
              무료로 시작하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Prestige PMS. Premium Hotel Management System.</p>
        </div>
      </footer>
    </div>
  )
}
