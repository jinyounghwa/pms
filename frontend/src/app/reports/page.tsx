'use client'

import { useState, useEffect } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Download,
  Calendar
} from 'lucide-react'

export default function ReportsPage() {
  const [reportType, setReportType] = useState('occupancy')
  const [dateRange, setDateRange] = useState('이번 달')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // 데모 데이터
  const occupancyData = [
    { day: '월', value: 65 },
    { day: '화', value: 72 },
    { day: '수', value: 68 },
    { day: '목', value: 78 },
    { day: '금', value: 85 },
    { day: '토', value: 92 },
    { day: '일', value: 88 }
  ]

  const revenueData = [
    { month: '1월', value: 18500000 },
    { month: '2월', value: 19200000 },
    { month: '3월', value: 21800000 },
    { month: '4월', value: 20100000 },
    { month: '5월', value: 23400000 },
    { month: '6월', value: 24560000 }
  ]

  const adrData = [
    { month: '1월', value: 142000 },
    { month: '2월', value: 145000 },
    { month: '3월', value: 148000 },
    { month: '4월', value: 151000 },
    { month: '5월', value: 154000 },
    { month: '6월', value: 157000 }
  ]

  const guestData = [
    { category: '신규', value: 87, color: 'bg-blue-400' },
    { category: '재방문', value: 225, color: 'bg-green-400' }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-0 animate-fade-in-up`}>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-primary" />
              리포트 및 분석
            </h1>
            <p className="text-muted-foreground mt-1">호텔 운영 데이터 분석 및 리포트</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            >
              <option value="오늘">오늘</option>
              <option value="이번 주">이번 주</option>
              <option value="이번 달">이번 달</option>
              <option value="지난 달">지난 달</option>
              <option value="올해">올해</option>
            </select>
            <Button className="bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              내보내기
            </Button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-fade-in-up delay-100`}>
          <div
            className={`glass glass-hover rounded-2xl p-6 cursor-pointer border ${
              reportType === 'occupancy' ? 'border-primary ring-2 ring-primary/50' : 'border-white/10'
            }`}
            onClick={() => setReportType('occupancy')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-xs text-green-400">+5%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">객실 점유율</p>
              <p className="text-3xl font-bold">78%</p>
              <p className="text-xs text-muted-foreground">전월 대비</p>
            </div>
          </div>

          <div
            className={`glass glass-hover rounded-2xl p-6 cursor-pointer border ${
              reportType === 'revenue' ? 'border-primary ring-2 ring-primary/50' : 'border-white/10'
            }`}
            onClick={() => setReportType('revenue')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-xs text-green-400">+12%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">매출</p>
              <p className="text-3xl font-bold">₩24.5M</p>
              <p className="text-xs text-muted-foreground">전월 대비</p>
            </div>
          </div>

          <div
            className={`glass glass-hover rounded-2xl p-6 cursor-pointer border ${
              reportType === 'adr' ? 'border-primary ring-2 ring-primary/50' : 'border-white/10'
            }`}
            onClick={() => setReportType('adr')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <TrendingUp className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-xs text-green-400">+3%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">평균 객실 요금</p>
              <p className="text-3xl font-bold">₩157K</p>
              <p className="text-xs text-muted-foreground">전월 대비</p>
            </div>
          </div>

          <div
            className={`glass glass-hover rounded-2xl p-6 cursor-pointer border ${
              reportType === 'guests' ? 'border-primary ring-2 ring-primary/50' : 'border-white/10'
            }`}
            onClick={() => setReportType('guests')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-xs text-green-400">+8%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">고객 수</p>
              <p className="text-3xl font-bold">312명</p>
              <p className="text-xs text-muted-foreground">전월 대비</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className={`glass rounded-2xl border border-white/10 overflow-hidden opacity-0 animate-fade-in-up delay-200`}>
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold">
              {reportType === 'occupancy' ? '객실 점유율 분석' :
               reportType === 'revenue' ? '매출 분석' :
               reportType === 'adr' ? '평균 객실 요금 분석' : '고객 분석'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{dateRange} 기준 데이터</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Occupancy Chart - Bar Chart */}
            {reportType === 'occupancy' && (
              <>
                <div className="h-80 flex items-end justify-between gap-4 p-4">
                  {occupancyData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end justify-center" style={{ height: '100%' }}>
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-cyan-400 relative group hover:from-blue-400 hover:to-cyan-300 transition-all duration-300"
                          style={{
                            height: `${item.value}%`,
                            animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                            {item.value}%
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.day}</span>
                    </div>
                  ))}
                </div>
                <style jsx>{`
                  @keyframes slideUp {
                    from {
                      height: 0;
                      opacity: 0;
                    }
                    to {
                      height: var(--final-height);
                      opacity: 1;
                    }
                  }
                `}</style>
              </>
            )}

            {/* Revenue Chart - Line Chart */}
            {reportType === 'revenue' && (
              <div className="h-80 relative p-4">
                <svg className="w-full h-full" viewBox="0 0 600 300">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={60 * i + 20}
                      x2="580"
                      y2={60 * i + 20}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Line path */}
                  <path
                    d={revenueData.map((item, i) => {
                      const x = 40 + (i * 540) / (revenueData.length - 1)
                      const y = 280 - ((item.value - 17000000) / 8000000) * 240
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
                    }).join(' ')}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Area under line */}
                  <path
                    d={`${revenueData.map((item, i) => {
                      const x = 40 + (i * 540) / (revenueData.length - 1)
                      const y = 280 - ((item.value - 17000000) / 8000000) * 240
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
                    }).join(' ')} L 580 280 L 40 280 Z`}
                    fill="url(#areaGradient)"
                    opacity="0.3"
                  />

                  {/* Data points */}
                  {revenueData.map((item, i) => {
                    const x = 40 + (i * 540) / (revenueData.length - 1)
                    const y = 280 - ((item.value - 17000000) / 8000000) * 240
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="5" fill="#10b981" />
                        <circle cx={x} cy={y} r="8" fill="#10b981" opacity="0.3" />
                      </g>
                    )
                  })}

                  {/* X-axis labels */}
                  {revenueData.map((item, i) => {
                    const x = 40 + (i * 540) / (revenueData.length - 1)
                    return (
                      <text key={i} x={x} y="295" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">
                        {item.month}
                      </text>
                    )
                  })}

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

            {/* ADR Chart - Area Chart */}
            {reportType === 'adr' && (
              <div className="h-80 relative p-4">
                <svg className="w-full h-full" viewBox="0 0 600 300">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={60 * i + 20}
                      x2="580"
                      y2={60 * i + 20}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Area path */}
                  <path
                    d={`${adrData.map((item, i) => {
                      const x = 40 + (i * 540) / (adrData.length - 1)
                      const y = 280 - ((item.value - 140000) / 20000) * 240
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
                    }).join(' ')} L 580 280 L 40 280 Z`}
                    fill="url(#adrGradient)"
                  />

                  {/* Line */}
                  <path
                    d={adrData.map((item, i) => {
                      const x = 40 + (i * 540) / (adrData.length - 1)
                      const y = 280 - ((item.value - 140000) / 20000) * 240
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
                    }).join(' ')}
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Data points */}
                  {adrData.map((item, i) => {
                    const x = 40 + (i * 540) / (adrData.length - 1)
                    const y = 280 - ((item.value - 140000) / 20000) * 240
                    return (
                      <circle key={i} cx={x} cy={y} r="4" fill="#f59e0b" />
                    )
                  })}

                  {/* X-axis labels */}
                  {adrData.map((item, i) => {
                    const x = 40 + (i * 540) / (adrData.length - 1)
                    return (
                      <text key={i} x={x} y="295" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">
                        {item.month}
                      </text>
                    )
                  })}

                  <defs>
                    <linearGradient id="adrGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" opacity="0.4" />
                      <stop offset="100%" stopColor="rgba(245,158,11,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

            {/* Guest Chart - Donut Chart */}
            {reportType === 'guests' && (
              <div className="h-80 flex items-center justify-center gap-8">
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="30" />

                    {/* 재방문 segment */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="30"
                      strokeDasharray={`${(225 / 312) * 502} 502`}
                      strokeLinecap="round"
                    />

                    {/* 신규 segment */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="30"
                      strokeDasharray={`${(87 / 312) * 502} 502`}
                      strokeDashoffset={`-${(225 / 312) * 502}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-4xl font-bold">312</p>
                    <p className="text-sm text-muted-foreground">총 고객</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-400"></div>
                    <div>
                      <p className="font-medium">재방문 고객</p>
                      <p className="text-sm text-muted-foreground">225명 (72%)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                    <div>
                      <p className="font-medium">신규 고객</p>
                      <p className="text-sm text-muted-foreground">87명 (28%)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Statistics */}
            <div>
              <h3 className="text-lg font-semibold mb-4">주요 통계</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {reportType === 'occupancy' && (
                  <>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">평균 점유율</p>
                      <p className="text-2xl font-bold mt-2">78%</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">최고 점유율</p>
                      <p className="text-2xl font-bold mt-2">92%</p>
                      <p className="text-xs text-muted-foreground">주말</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">최저 점유율</p>
                      <p className="text-2xl font-bold mt-2">65%</p>
                      <p className="text-xs text-muted-foreground">평일</p>
                    </div>
                  </>
                )}

                {reportType === 'revenue' && (
                  <>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">총 매출</p>
                      <p className="text-2xl font-bold mt-2">₩24.5M</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">객실 매출</p>
                      <p className="text-2xl font-bold mt-2">₩18.4M</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">부대시설</p>
                      <p className="text-2xl font-bold mt-2">₩6.1M</p>
                    </div>
                  </>
                )}

                {reportType === 'adr' && (
                  <>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">평균 요금</p>
                      <p className="text-2xl font-bold mt-2">₩157K</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">최고 요금</p>
                      <p className="text-2xl font-bold mt-2">₩320K</p>
                      <p className="text-xs text-muted-foreground">스위트</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">최저 요금</p>
                      <p className="text-2xl font-bold mt-2">₩95K</p>
                      <p className="text-xs text-muted-foreground">스탠다드</p>
                    </div>
                  </>
                )}

                {reportType === 'guests' && (
                  <>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">총 고객 수</p>
                      <p className="text-2xl font-bold mt-2">312명</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">신규 고객</p>
                      <p className="text-2xl font-bold mt-2">87명</p>
                      <p className="text-xs text-muted-foreground">28%</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-sm text-muted-foreground">재방문</p>
                      <p className="text-2xl font-bold mt-2">225명</p>
                      <p className="text-xs text-muted-foreground">72%</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
