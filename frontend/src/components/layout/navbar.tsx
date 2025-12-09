'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import { LogoutButton } from './logout-button'
import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b glass backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-3">
          {user?.isLoggedIn && (
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:inline">Prestige PMS</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <nav className="hidden md:flex items-center gap-2">
            {user?.isLoggedIn && (
              <>
                <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/5">
                  대시보드
                </Link>
                <Link href="/reservations" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/5 hidden lg:inline-flex">
                  예약
                </Link>
                <Link href="/rooms" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/5 hidden lg:inline-flex">
                  객실
                </Link>
                <Link href="/guests" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-white/5 hidden lg:inline-flex">
                  고객
                </Link>
              </>
            )}
          </nav>
          {user?.isLoggedIn ? (
            <div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">{user.username}</span>
              <LogoutButton />
            </div>
          ) : (
            <Link href="/login">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                로그인
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
