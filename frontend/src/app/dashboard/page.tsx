import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground">호텔 운영 현황을 한눈에 확인하세요.</p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 예약</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                오늘 기준 +2건
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">객실 점유율</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                전주 대비 +5%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">금일 체크인</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                예정된 체크인 건수
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">금일 체크아웃</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                예정된 체크아웃 건수
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>객실 상태</CardTitle>
              <CardDescription>
                현재 객실 상태 현황
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-green-500 rounded mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">사용 가능 (Clean)</div>
                    <div className="text-xs text-muted-foreground">22 객실</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-red-500 rounded mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">사용 중 (Occupied)</div>
                    <div className="text-xs text-muted-foreground">78 객실</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-yellow-500 rounded mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">청소 필요 (Dirty)</div>
                    <div className="text-xs text-muted-foreground">12 객실</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gray-500 rounded mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">사용 불가 (Out of Order)</div>
                    <div className="text-xs text-muted-foreground">3 객실</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>오늘의 할 일</CardTitle>
              <CardDescription>
                중요 업무 및 알림
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">VIP 고객 체크인 (홍길동님)</div>
                    <div className="text-xs text-muted-foreground">오후 2시, 스위트 룸</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">하우스키핑 일정 확인</div>
                    <div className="text-xs text-muted-foreground">12개 객실 청소 필요</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">재고 확인</div>
                    <div className="text-xs text-muted-foreground">객실 어메니티 재고 부족</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-primary mr-2"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">단체 예약 확인</div>
                    <div className="text-xs text-muted-foreground">내일 20객실 단체 예약 확인</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
