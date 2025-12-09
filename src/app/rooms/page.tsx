'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Ban,
  Plus,
  Filter,
  Building2,
  Eye
} from 'lucide-react'
import { roomsAPI } from '@/lib/local-storage'

export default function RoomsPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [rooms, setRooms] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    setRooms(roomsAPI.getAll())
  }, [])

  if (!mounted) return null

  const statusCounts = {
    available: rooms.filter(r => r.status === 'available').length,
    occupied: rooms.filter(r => r.status === 'occupied').length,
    cleaning: rooms.filter(r => r.status === 'cleaning').length,
    maintenance: rooms.filter(r => r.status === 'maintenance').length,
  }

  const getStatusInfo = (status: string) => {
    const statusMap: any = {
      available: { label: '사용 가능', color: 'from-green-500/20 to-emerald-500/20', textColor: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' },
      occupied: { label: '사용 중', color: 'from-blue-500/20 to-cyan-500/20', textColor: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
      cleaning: { label: '청소 필요', color: 'from-amber-500/20 to-orange-500/20', textColor: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20' },
      maintenance: { label: '사용 불가', color: 'from-red-500/20 to-rose-500/20', textColor: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/20' }
    }
    return statusMap[status] || statusMap.available
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-0 animate-fade-in-up`}>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Building2 className="h-8 w-8 text-primary" />
              객실 관리
            </h1>
            <p className="text-muted-foreground mt-1">객실 상태 및 하우스키핑 관리</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="glass-hover" onClick={() => router.push('/housekeeping')}>
              <Sparkles className="h-4 w-4 mr-2" />
              하우스키핑
            </Button>
            <Button variant="outline" className="glass-hover" onClick={() => router.push('/maintenance')}>
              <AlertCircle className="h-4 w-4 mr-2" />
              유지보수
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => router.push('/rooms/add')}>
              <Plus className="h-4 w-4 mr-2" />
              객실 추가
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-0 animate-fade-in-up delay-100`}>
          <div className="glass glass-hover rounded-2xl p-6 border border-green-500/20 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20`}>
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-sm text-muted-foreground">사용률 {Math.round((statusCounts.available / rooms.length) * 100)}%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">사용 가능</p>
              <p className="text-3xl font-bold text-green-400">{statusCounts.available}</p>
              <p className="text-xs text-muted-foreground">청소 완료, 배정 가능</p>
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-6 border border-blue-500/20 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20`}>
                <Building2 className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-sm text-muted-foreground">점유율 {Math.round((statusCounts.occupied / rooms.length) * 100)}%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">사용 중</p>
              <p className="text-3xl font-bold text-blue-400">{statusCounts.occupied}</p>
              <p className="text-xs text-muted-foreground">현재 투숙객 있음</p>
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-6 border border-amber-500/20 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20`}>
                <Sparkles className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-sm text-muted-foreground">{statusCounts.cleaning}개 대기</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">청소 필요</p>
              <p className="text-3xl font-bold text-amber-400">{statusCounts.cleaning}</p>
              <p className="text-xs text-muted-foreground">체크아웃 후 청소 대기</p>
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-6 border border-red-500/20 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20`}>
                <Ban className="h-6 w-6 text-red-400" />
              </div>
              <span className="text-sm text-muted-foreground">{statusCounts.maintenance}개 작업중</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">사용 불가</p>
              <p className="text-3xl font-bold text-red-400">{statusCounts.maintenance}</p>
              <p className="text-xs text-muted-foreground">유지보수 또는 수리 중</p>
            </div>
          </div>
        </div>

        {/* Rooms List */}
        <div className={`glass rounded-2xl border border-white/10 overflow-hidden opacity-0 animate-fade-in-up delay-200`}>
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold">객실 목록</h2>
                <p className="text-sm text-muted-foreground mt-1">전체 {rooms.length}개 객실 현황 및 상태 관리</p>
              </div>
              <Button variant="outline" size="sm" className="glass-hover">
                <Filter className="h-4 w-4 mr-2" />
                필터
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">객실 번호</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">객실 타입</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">층</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">상태</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">가격</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">액션</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => {
                  const statusInfo = getStatusInfo(room.status)
                  return (
                    <tr key={room.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <span className="font-medium">{room.room_number}</span>
                      </td>
                      <td className="p-4 text-muted-foreground">{room.room_type}</td>
                      <td className="p-4 text-muted-foreground">{room.floor}층</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.textColor} border ${statusInfo.borderColor}`}>
                          {statusInfo.label}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">₩{room.price.toLocaleString()}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => alert('객실 상세 보기')}>
                          <Eye className="h-3 w-3 mr-1" />
                          상세
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
