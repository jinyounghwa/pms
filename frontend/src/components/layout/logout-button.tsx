'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'

export function LogoutButton() {
  const { logout } = useAuth()
  
  return (
    <Button variant="outline" size="sm" onClick={logout}>
      로그아웃
    </Button>
  )
}
