'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ReportsPage() {
  const [reportType, setReportType] = useState('occupancy')
  const [dateRange, setDateRange] = useState('이번 달')
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">리포트 및 분석</h1>
            <p className="text-muted-foreground">호텔 운영 데이터 분석 및 리포트</p>
          </div>
          <div className="flex space-x-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="오늘">오늘</option>
              <option value="이번 주">이번 주</option>
              <option value="이번 달">이번 달</option>
              <option value="지난 달">지난 달</option>
              <option value="올해">올해</option>
            </select>
            <Button onClick={() => alert('리포트 내보내기')}>
              리포트 내보내기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card 
            className={`cursor-pointer ${reportType === 'occupancy' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setReportType('occupancy')}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">객실 점유율</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">전월 대비 +5%</p>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer ${reportType === 'revenue' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setReportType('revenue')}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">매출</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₩24,560,000</div>
              <p className="text-xs text-muted-foreground">전월 대비 +12%</p>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer ${reportType === 'adr' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setReportType('adr')}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">평균 객실 요금</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₩157,000</div>
              <p className="text-xs text-muted-foreground">전월 대비 +3%</p>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer ${reportType === 'guests' ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setReportType('guests')}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">고객 수</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">312명</div>
              <p className="text-xs text-muted-foreground">전월 대비 +8%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {reportType === 'occupancy' ? '객실 점유율 분석' : 
               reportType === 'revenue' ? '매출 분석' :
               reportType === 'adr' ? '평균 객실 요금 분석' : '고객 분석'}
            </CardTitle>
            <CardDescription>
              {dateRange} 기준 데이터
            </CardDescription>
          </CardHeader>
          <CardContent>
            {reportType === 'occupancy' && (
              <div className="space-y-6">
                <div className="h-80 w-full bg-muted rounded flex items-center justify-center">
                  <p className="text-muted-foreground">객실 점유율 차트가 이곳에 표시됩니다.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">주요 통계</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">평균 점유율</p>
                      <p className="text-xl font-bold">78%</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">최고 점유율</p>
                      <p className="text-xl font-bold">92% (주말)</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">최저 점유율</p>
                      <p className="text-xl font-bold">65% (평일)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'revenue' && (
              <div className="space-y-6">
                <div className="h-80 w-full bg-muted rounded flex items-center justify-center">
                  <p className="text-muted-foreground">매출 차트가 이곳에 표시됩니다.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">주요 통계</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">총 매출</p>
                      <p className="text-xl font-bold">₩24,560,000</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">객실 매출</p>
                      <p className="text-xl font-bold">₩18,420,000</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">부대시설 매출</p>
                      <p className="text-xl font-bold">₩6,140,000</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'adr' && (
              <div className="space-y-6">
                <div className="h-80 w-full bg-muted rounded flex items-center justify-center">
                  <p className="text-muted-foreground">평균 객실 요금 차트가 이곳에 표시됩니다.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">주요 통계</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">평균 객실 요금</p>
                      <p className="text-xl font-bold">₩157,000</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">최고 객실 요금</p>
                      <p className="text-xl font-bold">₩320,000 (스위트)</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">최저 객실 요금</p>
                      <p className="text-xl font-bold">₩95,000 (스탠다드)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'guests' && (
              <div className="space-y-6">
                <div className="h-80 w-full bg-muted rounded flex items-center justify-center">
                  <p className="text-muted-foreground">고객 분석 차트가 이곳에 표시됩니다.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">주요 통계</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">총 고객 수</p>
                      <p className="text-xl font-bold">312명</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">신규 고객</p>
                      <p className="text-xl font-bold">87명 (28%)</p>
                    </div>
                    <div className="p-4 border rounded">
                      <p className="text-sm text-muted-foreground">재방문 고객</p>
                      <p className="text-xl font-bold">225명 (72%)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
