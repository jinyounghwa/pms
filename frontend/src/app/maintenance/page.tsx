'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import {
  Wrench,
  Clock,
  Loader,
  CheckCircle2,
  AlertCircle,
  Home,
  Plus,
  TrendingUp,
  AlertTriangle
} from 'lucide-react'
import { maintenanceAPI } from '@/lib/local-storage'

export default function MaintenancePage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState('전체')
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    setTasks(maintenanceAPI.getAll())
  }, [])

  if (!mounted) return null

  const filteredTasks = filter === '전체'
    ? tasks
    : tasks.filter(task => task.status === filter)

  const statusCounts = {
    pending: tasks.filter(t => t.status === 'pending').length,
    in_progress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  }

  const priorityCounts = {
    high: tasks.filter(t => t.priority === 'high').length,
    medium: tasks.filter(t => t.priority === 'medium').length,
    low: tasks.filter(t => t.priority === 'low').length,
  }

  const getStatusInfo = (status: string) => {
    const statusMap: any = {
      pending: { label: '대기 중', icon: Clock, color: 'text-amber-400', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/20' },
      in_progress: { label: '진행 중', icon: Loader, color: 'text-blue-400', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
      completed: { label: '완료', icon: CheckCircle2, color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' }
    }
    return statusMap[status] || statusMap.pending
  }

  const getPriorityInfo = (priority: string) => {
    const priorityMap: any = {
      high: { label: '높음', color: 'text-red-400', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/20' },
      medium: { label: '중간', color: 'text-orange-400', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/20' },
      low: { label: '낮음', color: 'text-green-400', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/20' }
    }
    return priorityMap[priority] || priorityMap.medium
  }

  const handleStatusChange = (taskId: string, newStatus: string) => {
    maintenanceAPI.update(taskId, { status: newStatus as any })
    setTasks(maintenanceAPI.getAll())
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-0 animate-fade-in-up`}>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Wrench className="h-8 w-8 text-primary" />
              유지보수 관리
            </h1>
            <p className="text-muted-foreground mt-1">객실 유지보수 상태 및 일정 관리</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="glass-hover" onClick={() => router.push('/rooms')}>
              <Home className="h-4 w-4 mr-2" />
              객실 관리
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" />
              유지보수 추가
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-0 animate-fade-in-up delay-100`}>
          <div
            className="glass glass-hover rounded-2xl p-6 border border-amber-500/20 cursor-pointer group"
            onClick={() => setFilter(filter === 'pending' ? '전체' : 'pending')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20`}>
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-xs text-muted-foreground">작업 대기</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">대기 중</p>
              <p className="text-3xl font-bold text-amber-400">{statusCounts.pending}</p>
              <p className="text-xs text-muted-foreground">유지보수 대기 중인 객실</p>
            </div>
          </div>

          <div
            className="glass glass-hover rounded-2xl p-6 border border-blue-500/20 cursor-pointer group"
            onClick={() => setFilter(filter === 'in_progress' ? '전체' : 'in_progress')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20`}>
                <Loader className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-xs text-muted-foreground">작업 중</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">진행 중</p>
              <p className="text-3xl font-bold text-blue-400">{statusCounts.in_progress}</p>
              <p className="text-xs text-muted-foreground">현재 유지보수 진행 중</p>
            </div>
          </div>

          <div
            className="glass glass-hover rounded-2xl p-6 border border-green-500/20 cursor-pointer group"
            onClick={() => setFilter(filter === 'completed' ? '전체' : 'completed')}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20`}>
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-xs text-muted-foreground">완료됨</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">완료</p>
              <p className="text-3xl font-bold text-green-400">{statusCounts.completed}</p>
              <p className="text-xs text-muted-foreground">유지보수가 완료된 객실</p>
            </div>
          </div>
        </div>

        {/* Priority Stats */}
        <div className={`glass rounded-2xl p-6 border border-white/10 opacity-0 animate-fade-in-up delay-200`}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            우선순위 현황
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/20">
              <AlertCircle className="h-8 w-8 text-red-400" />
              <div>
                <p className="text-sm text-muted-foreground">긴급</p>
                <p className="text-2xl font-bold text-red-400">{priorityCounts.high}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <AlertTriangle className="h-8 w-8 text-orange-400" />
              <div>
                <p className="text-sm text-muted-foreground">보통</p>
                <p className="text-2xl font-bold text-orange-400">{priorityCounts.medium}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
              <CheckCircle2 className="h-8 w-8 text-green-400" />
              <div>
                <p className="text-sm text-muted-foreground">낮음</p>
                <p className="text-2xl font-bold text-green-400">{priorityCounts.low}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className={`glass rounded-2xl border border-white/10 overflow-hidden opacity-0 animate-fade-in-up delay-300`}>
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold">유지보수 작업 목록</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {filter === '전체' ? '모든 작업' : `${getStatusInfo(filter).label} 상태인 작업`} 목록 ({filteredTasks.length}개)
                </p>
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 bg-background/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              >
                <option value="전체">전체 보기</option>
                <option value="pending">대기 중</option>
                <option value="in_progress">진행 중</option>
                <option value="completed">완료</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">객실</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">문제</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">상태</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">우선순위</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">담당자</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">생성일</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">액션</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => {
                  const statusInfo = getStatusInfo(task.status)
                  const priorityInfo = getPriorityInfo(task.priority)
                  const StatusIcon = statusInfo.icon
                  return (
                    <tr key={task.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <span className="font-medium">객실 #{task.room_id}</span>
                      </td>
                      <td className="p-4 text-muted-foreground max-w-xs truncate">
                        {task.issue}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.color} border ${statusInfo.borderColor}`}>
                          <StatusIcon className="h-3 w-3" />
                          {statusInfo.label}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${priorityInfo.bgColor} ${priorityInfo.color} border ${priorityInfo.borderColor}`}>
                          {priorityInfo.label}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`${task.assigned_to === '' ? 'text-muted-foreground italic' : ''}`}>
                          {task.assigned_to || '미배정'}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground text-sm">
                        {new Date(task.created_at).toLocaleDateString('ko-KR')}
                      </td>
                      <td className="p-4">
                        <select
                          className="px-2 py-1 bg-background/50 border border-white/10 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/50"
                          onChange={(e) => handleStatusChange(task.id, e.target.value)}
                          value=""
                        >
                          <option value="" disabled>상태 변경</option>
                          <option value="pending">대기 중</option>
                          <option value="in_progress">진행 중</option>
                          <option value="completed">완료</option>
                        </select>
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
