'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function AddRoomPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const [roomData, setRoomData] = useState({
    roomNumber: '',
    roomType: '스탠다드',
    floor: '1',
    capacity: '2',
    price: '100000',
    status: '사용 가능',
    amenities: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setRoomData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // 여기에 객실 추가 로직 구현
    setTimeout(() => {
      setIsLoading(false)
      alert('객실이 추가되었습니다.')
      router.push('/rooms')
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">객실 추가</h1>
            <p className="text-muted-foreground">새로운 객실 정보를 등록합니다</p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            뒤로 가기
          </Button>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>객실 정보</CardTitle>
              <CardDescription>
                객실의 기본 정보를 입력하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="roomNumber" className="text-sm font-medium">
                    객실 번호
                  </label>
                  <input
                    id="roomNumber"
                    name="roomNumber"
                    type="text"
                    value={roomData.roomNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="roomType" className="text-sm font-medium">
                    객실 타입
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={roomData.roomType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="스탠다드">스탠다드</option>
                    <option value="디럭스">디럭스</option>
                    <option value="스위트">스위트</option>
                    <option value="패밀리">패밀리</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="floor" className="text-sm font-medium">
                    층
                  </label>
                  <select
                    id="floor"
                    name="floor"
                    value={roomData.floor}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(floor => (
                      <option key={floor} value={floor.toString()}>{floor}층</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="capacity" className="text-sm font-medium">
                    수용 인원
                  </label>
                  <select
                    id="capacity"
                    name="capacity"
                    value={roomData.capacity}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map(cap => (
                      <option key={cap} value={cap.toString()}>{cap}명</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    1박 가격 (원)
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={roomData.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="text-sm font-medium">
                    상태
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={roomData.status}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="사용 가능">사용 가능</option>
                    <option value="사용 중">사용 중</option>
                    <option value="청소 필요">청소 필요</option>
                    <option value="유지보수 필요">유지보수 필요</option>
                    <option value="사용 불가">사용 불가</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="amenities" className="text-sm font-medium">
                  편의 시설 (쉼표로 구분)
                </label>
                <input
                  id="amenities"
                  name="amenities"
                  type="text"
                  value={roomData.amenities}
                  onChange={handleChange}
                  placeholder="TV, 미니바, 에어컨, 욕조 등"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  객실 설명
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={roomData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? '처리 중...' : '객실 추가'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  )
}
