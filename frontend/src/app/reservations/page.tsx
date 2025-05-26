'use client'

import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReservationsPage() {
  const router = useRouter()
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">예약 관리</h1>
            <p className="text-muted-foreground">모든 예약을 관리하고 새로운 예약을 생성하세요.</p>
          </div>
          <Button onClick={() => router.push('/reservations/create')}>
            새 예약 생성
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>예약 목록</CardTitle>
            <CardDescription>
              현재 모든 예약 현황을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">예약 번호</th>
                    <th className="text-left p-2">고객명</th>
                    <th className="text-left p-2">객실 타입</th>
                    <th className="text-left p-2">체크인</th>
                    <th className="text-left p-2">체크아웃</th>
                    <th className="text-left p-2">상태</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">RES-001</td>
                    <td className="p-2">홍길동</td>
                    <td className="p-2">디럭스 더블</td>
                    <td className="p-2">2025-05-26</td>
                    <td className="p-2">2025-05-28</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        확정
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('예약 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">RES-002</td>
                    <td className="p-2">김철수</td>
                    <td className="p-2">스탠다드 트윈</td>
                    <td className="p-2">2025-05-27</td>
                    <td className="p-2">2025-05-29</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        대기중
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('예약 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">RES-003</td>
                    <td className="p-2">이영희</td>
                    <td className="p-2">스위트</td>
                    <td className="p-2">2025-05-28</td>
                    <td className="p-2">2025-05-30</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        체크인 완료
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('예약 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">RES-004</td>
                    <td className="p-2">박민수</td>
                    <td className="p-2">디럭스 트윈</td>
                    <td className="p-2">2025-05-29</td>
                    <td className="p-2">2025-06-01</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        확정
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('예약 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">RES-005</td>
                    <td className="p-2">최지은</td>
                    <td className="p-2">패밀리 스위트</td>
                    <td className="p-2">2025-05-30</td>
                    <td className="p-2">2025-06-02</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        취소됨
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('예약 상세 보기')}>
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
              <CardTitle>금일 체크인</CardTitle>
              <CardDescription>
                오늘 체크인 예정인 고객 목록
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">홍길동 (RES-001)</div>
                    <div className="text-sm text-muted-foreground">디럭스 더블, 2박</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('체크인 처리')}>
                    체크인
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">김영수 (RES-006)</div>
                    <div className="text-sm text-muted-foreground">스탠다드 싱글, 1박</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('체크인 처리')}>
                    체크인
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>금일 체크아웃</CardTitle>
              <CardDescription>
                오늘 체크아웃 예정인 고객 목록
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">이민지 (RES-007)</div>
                    <div className="text-sm text-muted-foreground">디럭스 트윈, 3박</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('체크아웃 처리')}>
                    체크아웃
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">정현우 (RES-008)</div>
                    <div className="text-sm text-muted-foreground">스위트, 2박</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => alert('체크아웃 처리')}>
                    체크아웃
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
