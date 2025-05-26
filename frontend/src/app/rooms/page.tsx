'use client'

import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RoomsPage() {
  const router = useRouter()
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">객실 관리</h1>
            <p className="text-muted-foreground">객실 상태 및 하우스키핑 관리</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => router.push('/housekeeping')}>
              하우스키핑 관리
            </Button>
            <Button variant="outline" onClick={() => router.push('/maintenance')}>
              유지보수 관리
            </Button>
            <Button onClick={() => router.push('/rooms/add')}>
              객실 추가
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">사용 가능</CardTitle>
              <CardDescription>
                청소 완료, 배정 가능
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
            </CardContent>
          </Card>
          <Card className="bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">사용 중</CardTitle>
              <CardDescription>
                현재 투숙객 있음
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">청소 필요</CardTitle>
              <CardDescription>
                체크아웃 후 청소 대기
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">사용 불가</CardTitle>
              <CardDescription>
                유지보수 또는 수리 중
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>객실 목록</CardTitle>
            <CardDescription>
              전체 객실 현황 및 상태 관리
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">객실 번호</th>
                    <th className="text-left p-2">객실 타입</th>
                    <th className="text-left p-2">층</th>
                    <th className="text-left p-2">상태</th>
                    <th className="text-left p-2">청소 상태</th>
                    <th className="text-left p-2">현재 투숙객</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">101</td>
                    <td className="p-2">디럭스 더블</td>
                    <td className="p-2">1층</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        사용 중
                      </span>
                    </td>
                    <td className="p-2">Clean</td>
                    <td className="p-2">홍길동</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('객실 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">102</td>
                    <td className="p-2">스탠다드 트윈</td>
                    <td className="p-2">1층</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        사용 가능
                      </span>
                    </td>
                    <td className="p-2">Clean</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('객실 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">201</td>
                    <td className="p-2">스위트</td>
                    <td className="p-2">2층</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        사용 중
                      </span>
                    </td>
                    <td className="p-2">Clean</td>
                    <td className="p-2">이영희</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('객실 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">202</td>
                    <td className="p-2">디럭스 트윈</td>
                    <td className="p-2">2층</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        청소 필요
                      </span>
                    </td>
                    <td className="p-2">Dirty</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('객실 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">301</td>
                    <td className="p-2">패밀리 스위트</td>
                    <td className="p-2">3층</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                        사용 불가
                      </span>
                    </td>
                    <td className="p-2">Out of Order</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('객실 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>하우스키핑 일정</CardTitle>
              <CardDescription>
                오늘의 청소 일정
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 202</div>
                    <div className="text-sm text-muted-foreground">디럭스 트윈, 우선순위: 높음</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('청소 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 205</div>
                    <div className="text-sm text-muted-foreground">스탠다드 더블, 우선순위: 중간</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('청소 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 303</div>
                    <div className="text-sm text-muted-foreground">스위트, 우선순위: 낮음</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('청소 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>유지보수 현황</CardTitle>
              <CardDescription>
                현재 유지보수 중인 객실
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 301</div>
                    <div className="text-sm text-muted-foreground">에어컨 수리, 예상 완료: 2025-05-28</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('유지보수 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 405</div>
                    <div className="text-sm text-muted-foreground">욕실 리모델링, 예상 완료: 2025-06-10</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('유지보수 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">객실 502</div>
                    <div className="text-sm text-muted-foreground">TV 교체, 예상 완료: 2025-05-27</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('유지보수 완료 처리')}>
                    완료 처리
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
