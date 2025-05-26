'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [isLoading, setIsLoading] = useState(false)
  
  const [generalSettings, setGeneralSettings] = useState({
    hotelName: '샘플 호텔',
    address: '서울시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    email: 'info@samplehotel.com',
    checkInTime: '15:00',
    checkOutTime: '11:00',
    currency: 'KRW',
    language: 'ko'
  })

  const [userSettings, setUserSettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setGeneralSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // 여기에 설정 저장 로직 구현
    setTimeout(() => {
      setIsLoading(false)
      alert('일반 설정이 저장되었습니다.')
    }, 1000)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (userSettings.newPassword !== userSettings.confirmPassword) {
      alert('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.')
      return
    }
    
    setIsLoading(true)
    
    // 여기에 비밀번호 변경 로직 구현
    setTimeout(() => {
      setIsLoading(false)
      alert('비밀번호가 변경되었습니다.')
      setUserSettings({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">설정</h1>
          <p className="text-muted-foreground">시스템 설정 및 사용자 환경 설정</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Card className="md:w-64 h-fit">
            <CardHeader>
              <CardTitle>설정 메뉴</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <button
                  className={`p-3 text-left ${activeTab === 'general' ? 'bg-muted font-medium' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  일반 설정
                </button>
                <button
                  className={`p-3 text-left ${activeTab === 'user' ? 'bg-muted font-medium' : ''}`}
                  onClick={() => setActiveTab('user')}
                >
                  사용자 설정
                </button>
                <button
                  className={`p-3 text-left ${activeTab === 'notifications' ? 'bg-muted font-medium' : ''}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  알림 설정
                </button>
                <button
                  className={`p-3 text-left ${activeTab === 'system' ? 'bg-muted font-medium' : ''}`}
                  onClick={() => setActiveTab('system')}
                >
                  시스템 설정
                </button>
                <button
                  className={`p-3 text-left ${activeTab === 'backup' ? 'bg-muted font-medium' : ''}`}
                  onClick={() => setActiveTab('backup')}
                >
                  백업 및 복원
                </button>
              </nav>
            </CardContent>
          </Card>

          <div className="flex-1">
            {activeTab === 'general' && (
              <Card>
                <form onSubmit={handleGeneralSubmit}>
                  <CardHeader>
                    <CardTitle>일반 설정</CardTitle>
                    <CardDescription>
                      호텔의 기본 정보 및 운영 설정
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="hotelName" className="text-sm font-medium">
                          호텔 이름
                        </label>
                        <input
                          id="hotelName"
                          name="hotelName"
                          type="text"
                          value={generalSettings.hotelName}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-medium">
                          주소
                        </label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={generalSettings.address}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          전화번호
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={generalSettings.phone}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          이메일
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={generalSettings.email}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="checkInTime" className="text-sm font-medium">
                          체크인 시간
                        </label>
                        <input
                          id="checkInTime"
                          name="checkInTime"
                          type="time"
                          value={generalSettings.checkInTime}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="checkOutTime" className="text-sm font-medium">
                          체크아웃 시간
                        </label>
                        <input
                          id="checkOutTime"
                          name="checkOutTime"
                          type="time"
                          value={generalSettings.checkOutTime}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="currency" className="text-sm font-medium">
                          통화
                        </label>
                        <select
                          id="currency"
                          name="currency"
                          value={generalSettings.currency}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="KRW">한국 원 (₩)</option>
                          <option value="USD">미국 달러 ($)</option>
                          <option value="EUR">유로 (€)</option>
                          <option value="JPY">일본 엔 (¥)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="language" className="text-sm font-medium">
                          언어
                        </label>
                        <select
                          id="language"
                          name="language"
                          value={generalSettings.language}
                          onChange={handleGeneralChange}
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="ko">한국어</option>
                          <option value="en">영어</option>
                          <option value="ja">일본어</option>
                          <option value="zh">중국어</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? '저장 중...' : '설정 저장'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            )}

            {activeTab === 'user' && (
              <Card>
                <form onSubmit={handlePasswordSubmit}>
                  <CardHeader>
                    <CardTitle>사용자 설정</CardTitle>
                    <CardDescription>
                      계정 및 비밀번호 설정
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="text-sm font-medium">
                        현재 비밀번호
                      </label>
                      <input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={userSettings.currentPassword}
                        onChange={handleUserChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="newPassword" className="text-sm font-medium">
                        새 비밀번호
                      </label>
                      <input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={userSettings.newPassword}
                        onChange={handleUserChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium">
                        비밀번호 확인
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={userSettings.confirmPassword}
                        onChange={handleUserChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? '변경 중...' : '비밀번호 변경'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            )}

            {activeTab === 'notifications' && (
              <Card>
                <CardHeader>
                  <CardTitle>알림 설정</CardTitle>
                  <CardDescription>
                    시스템 알림 및 이메일 설정
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">이 기능은 아직 개발 중입니다.</p>
                </CardContent>
              </Card>
            )}

            {activeTab === 'system' && (
              <Card>
                <CardHeader>
                  <CardTitle>시스템 설정</CardTitle>
                  <CardDescription>
                    시스템 환경 및 성능 설정
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">이 기능은 아직 개발 중입니다.</p>
                </CardContent>
              </Card>
            )}

            {activeTab === 'backup' && (
              <Card>
                <CardHeader>
                  <CardTitle>백업 및 복원</CardTitle>
                  <CardDescription>
                    데이터 백업 및 복원 관리
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">데이터 백업</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      현재 시스템의 모든 데이터를 백업합니다.
                    </p>
                    <Button onClick={() => alert('백업이 시작되었습니다.')}>
                      지금 백업하기
                    </Button>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-medium mb-2">백업 복원</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      이전에 백업한 데이터를 시스템에 복원합니다.
                    </p>
                    <div className="space-y-2">
                      <input
                        type="file"
                        className="w-full p-2 border rounded"
                      />
                      <Button variant="outline" onClick={() => alert('복원이 시작되었습니다.')}>
                        백업 파일에서 복원
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
