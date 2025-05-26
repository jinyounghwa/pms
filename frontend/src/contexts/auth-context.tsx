'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

// 사용자 타입 정의
type User = {
  username: string
  role: string
  isLoggedIn: boolean
} | null

// 인증 컨텍스트 타입 정의
type AuthContextType = {
  user: User
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

// 기본 컨텍스트 값
const defaultContext: AuthContextType = {
  user: null,
  login: async () => false,
  logout: () => {},
  isLoading: true
}

// 인증 컨텍스트 생성
const AuthContext = createContext<AuthContextType>(defaultContext)

// 인증 컨텍스트 프로바이더 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // 임의의 사용자 정보 (실제로는 서버에서 관리해야 함)
  const validUsers = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'staff', password: 'staff123', role: 'staff' },
    { username: 'manager', password: 'manager123', role: 'manager' }
  ]

  // 페이지 로드 시 세션 스토리지에서 사용자 정보 가져오기
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // 로그인 함수
  const login = async (username: string, password: string): Promise<boolean> => {
    // 사용자 인증 확인
    const foundUser = validUsers.find(
      user => user.username === username && user.password === password
    )
    
    if (foundUser) {
      const userData = {
        username: foundUser.username,
        role: foundUser.role,
        isLoggedIn: true
      }
      
      // 세션 스토리지에 사용자 정보 저장
      sessionStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      return true
    }
    
    return false
  }

  // 로그아웃 함수
  const logout = () => {
    sessionStorage.removeItem('user')
    setUser(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

// 인증 컨텍스트 사용을 위한 훅
export const useAuth = () => useContext(AuthContext)
