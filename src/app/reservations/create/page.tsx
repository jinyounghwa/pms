'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'

export default function CreateReservationPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // 실제로는 API 호출하여 예약 생성
    setTimeout(() => {
      setIsLoading(false)
      alert('예약이 성공적으로 생성되었습니다.')
      router.push('/reservations')
    }, 1500)
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">새 예약 생성</h1>
            <p className="text-muted-foreground">새로운 예약 정보를 입력하세요.</p>
          </div>
          <Button variant="outline" onClick={() => router.push('/reservations')}>
            예약 목록으로 돌아가기
          </Button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>고객 정보</CardTitle>
              <CardDescription>
                예약 고객의 기본 정보를 입력하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">고객 검색</label>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      className="flex-1 p-2 border rounded" 
                      placeholder="고객 이름 또는 ID 검색"
                    />
                    <Button type="button" variant="outline">검색</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">고객 등급</label>
                  <select className="w-full p-2 border rounded" disabled>
                    <option value="">자동으로 표시됩니다</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">이름 *</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="고객 이름"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">연락처 *</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded" 
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">이메일</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded" 
                    placeholder="example@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">고객 메모</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="특별 요청 사항 등"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>예약 정보</CardTitle>
                <CardDescription>
                  객실 및 예약 세부 정보를 입력하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">체크인 날짜 *</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border rounded" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">체크아웃 날짜 *</label>
                    <input 
                      type="date" 
                      className="w-full p-2 border rounded" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">객실 타입 *</label>
                    <select className="w-full p-2 border rounded" required>
                      <option value="">객실 타입 선택</option>
                      <option value="standard">스탠다드</option>
                      <option value="deluxe">디럭스</option>
                      <option value="suite">스위트</option>
                      <option value="family">패밀리</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">객실 수 *</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="1"
                      defaultValue="1"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">성인 *</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="1"
                      defaultValue="1"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">어린이</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="0"
                      defaultValue="0"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">특별 요청 사항</label>
                  <textarea 
                    className="w-full p-2 border rounded" 
                    rows={3}
                    placeholder="고객의 특별 요청 사항을 입력하세요."
                  ></textarea>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>결제 정보</CardTitle>
                <CardDescription>
                  결제 방법 및 금액 정보를 입력하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">결제 방법 *</label>
                    <select className="w-full p-2 border rounded" required>
                      <option value="">결제 방법 선택</option>
                      <option value="card">신용카드</option>
                      <option value="bank">계좌이체</option>
                      <option value="cash">현금</option>
                      <option value="later">후불 결제</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">예약 상태 *</label>
                    <select className="w-full p-2 border rounded" required>
                      <option value="confirmed">확정</option>
                      <option value="pending">대기중</option>
                      <option value="cancelled">취소됨</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">객실 요금 (1박) *</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="0"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">총 숙박 일수 *</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="1"
                      defaultValue="1"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">추가 요금</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="0"
                      defaultValue="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">할인</label>
                    <input 
                      type="number" 
                      className="w-full p-2 border rounded" 
                      min="0"
                      defaultValue="0"
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">총 결제 금액:</span>
                    <span className="text-xl font-bold">₩0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 pt-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => router.push('/reservations')}
                >
                  취소
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? '처리 중...' : '예약 생성'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
