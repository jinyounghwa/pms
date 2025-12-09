'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { Sparkles, User, Lock, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const success = await login(username, password)

      if (success) {
        console.log('로그인 성공!')
        router.push('/dashboard')
      } else {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.')
      }
    } catch (err) {
      console.error('로그인 오류:', err)
      setError('로그인 중 오류가 발생했습니다.')
    } finally {
      setIsLoading(false)
    }
  }

  const fillDemoAccount = (role: 'admin' | 'manager' | 'staff') => {
    const accounts = {
      admin: { username: 'admin', password: 'admin123' },
      manager: { username: 'manager', password: 'manager123' },
      staff: { username: 'staff', password: 'staff123' }
    }
    setUsername(accounts[role].username)
    setPassword(accounts[role].password)
    setError('')
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Logo - Top Left */}
      <Link href="/" className="absolute top-6 left-6 flex items-center space-x-3 group">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-background" />
        </div>
        <span className="text-xl font-bold gradient-text hidden sm:inline">Prestige PMS</span>
      </Link>

      <div className={`w-full max-w-md transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="glass rounded-3xl p-8 space-y-6 border border-white/10">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">환영합니다</h1>
            <p className="text-muted-foreground">
              Prestige PMS에 로그인하여 시작하세요
            </p>
          </div>

          {/* Demo Accounts */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 space-y-3">
            <p className="text-sm font-medium text-primary">데모 계정으로 빠르게 시작하기</p>
            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="glass-hover text-xs"
                onClick={() => fillDemoAccount('admin')}
              >
                Admin
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="glass-hover text-xs"
                onClick={() => fillDemoAccount('manager')}
              >
                Manager
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="glass-hover text-xs"
                onClick={() => fillDemoAccount('staff')}
              >
                Staff
              </Button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive rounded-xl animate-fade-in">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium flex items-center space-x-2">
                <User className="h-4 w-4 text-primary" />
                <span>아이디</span>
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium flex items-center space-x-2">
                <Lock className="h-4 w-4 text-primary" />
                <span>비밀번호</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
                autoComplete="current-password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-background font-semibold py-6 rounded-xl group"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <div className="h-5 w-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2"></div>
                  로그인 중...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  로그인
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer Links */}
          <div className="text-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              홈으로 돌아가기
            </Link>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground space-y-2">
          <p>데모 버전 - 자동으로 Admin 계정이 입력되어 있습니다</p>
          <p className="text-xs">admin/admin123, manager/manager123, staff/staff123</p>
        </div>
      </div>
    </div>
  )
}
