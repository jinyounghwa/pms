'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function MaintenancePage() {
  const router = useRouter()
  const [filter, setFilter] = useState('전체')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  
  // 유지보수 데이터 타입 정의
  type Maintenance = {
    id: number;
    roomNumber: string;
    roomType: string;
    floor: number;
    issue: string;
    status: string;
    startDate: string;
    expectedEndDate: string;
    assignedTo: string;
    priority: string;
  }
  
  // 유지보수 상태 데이터 (실제로는 API에서 가져올 것)
  const [maintenances, setMaintenances] = useState<Maintenance[]>([
    { id: 1, roomNumber: '301', roomType: '디럭스', floor: 3, issue: '에어컨 수리', status: '진행 중', startDate: '2025-05-24', expectedEndDate: '2025-05-28', assignedTo: '김기술', priority: '높음' },
    { id: 2, roomNumber: '405', roomType: '스위트', floor: 4, issue: '욕실 리모델링', status: '진행 중', startDate: '2025-05-20', expectedEndDate: '2025-06-10', assignedTo: '이기술', priority: '중간' },
    { id: 3, roomNumber: '502', roomType: '스탠다드', floor: 5, issue: 'TV 교체', status: '진행 중', startDate: '2025-05-25', expectedEndDate: '2025-05-27', assignedTo: '박기술', priority: '낮음' },
    { id: 4, roomNumber: '203', roomType: '디럭스', floor: 2, issue: '침대 교체', status: '완료', startDate: '2025-05-15', expectedEndDate: '2025-05-18', assignedTo: '최기술', priority: '중간' },
    { id: 5, roomNumber: '107', roomType: '스탠다드', floor: 1, issue: '전기 콘센트 수리', status: '대기 중', startDate: '2025-05-26', expectedEndDate: '2025-05-27', assignedTo: '미배정', priority: '높음' },
    { id: 6, roomNumber: '401', roomType: '패밀리', floor: 4, issue: '샤워 수압 문제', status: '대기 중', startDate: '2025-05-26', expectedEndDate: '2025-05-29', assignedTo: '미배정', priority: '중간' },
  ])

  // 필터링된 유지보수 목록
  const filteredMaintenances = filter === '전체' 
    ? maintenances 
    : maintenances.filter(maintenance => maintenance.status === filter)

  // 상태별 유지보수 수
  const statusCounts = {
    '대기 중': maintenances.filter(maintenance => maintenance.status === '대기 중').length,
    '진행 중': maintenances.filter(maintenance => maintenance.status === '진행 중').length,
    '완료': maintenances.filter(maintenance => maintenance.status === '완료').length,
  }

  const handleStatusChange = (maintenanceId: number, newStatus: string) => {
    // 실제로는 API 호출하여 상태 변경
    setMaintenances(prevMaintenances => 
      prevMaintenances.map(maintenance => 
        maintenance.id === maintenanceId ? { ...maintenance, status: newStatus } : maintenance
      )
    )
    alert(`유지보수 ID ${maintenanceId}의 상태를 ${newStatus}로 변경했습니다.`)
  }

  const handleAssign = (maintenanceId: number) => {
    setSelectedRoom(maintenanceId)
    setShowAddDialog(true)
  }
  
  const handleComplete = (maintenanceId: number) => {
    setMaintenances(prevMaintenances => 
      prevMaintenances.map(maintenance => 
        maintenance.id === maintenanceId ? { ...maintenance, status: '완료' } : maintenance
      )
    )
    alert(`유지보수 ID ${maintenanceId}의 작업이 완료되었습니다.`)
  }

  const handleAddMaintenance = (data: any) => {
    // 실제로는 API 호출하여 유지보수 추가
    const newMaintenance: Maintenance = {
      id: maintenances.length + 1,
      roomNumber: data.roomNumber,
      roomType: data.roomType,
      floor: parseInt(data.floor),
      issue: data.issue,
      status: '대기 중',
      startDate: new Date().toISOString().split('T')[0],
      expectedEndDate: data.expectedEndDate,
      assignedTo: data.assignedTo || '미배정',
      priority: data.priority,
    }
    
    setMaintenances([...maintenances, newMaintenance])
    alert(`객실 ${data.roomNumber}의 유지보수 요청이 등록되었습니다.`)
    setShowAddDialog(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">유지보수 관리</h1>
            <p className="text-muted-foreground">객실 유지보수 상태 및 일정 관리</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => router.push('/rooms')}>
              객실 관리로 돌아가기
            </Button>
            <Button onClick={() => setShowAddDialog(true)}>
              유지보수 요청 추가
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-yellow-50 cursor-pointer" onClick={() => setFilter('대기 중')}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">대기 중</CardTitle>
              <CardDescription>
                유지보수 대기 중인 객실
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statusCounts['대기 중']}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 cursor-pointer" onClick={() => setFilter('진행 중')}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">진행 중</CardTitle>
              <CardDescription>
                현재 유지보수 진행 중인 객실
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statusCounts['진행 중']}</div>
            </CardContent>
          </Card>
          <Card className="bg-green-50 cursor-pointer" onClick={() => setFilter('완료')}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">완료</CardTitle>
              <CardDescription>
                유지보수가 완료된 객실
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statusCounts['완료']}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>유지보수 현황</CardTitle>
              <CardDescription>
                {filter === '전체' ? '모든 유지보수' : `${filter} 상태인 유지보수`} 목록
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">필터:</span>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-1 border rounded text-sm"
              >
                <option value="전체">전체 보기</option>
                <option value="대기 중">대기 중</option>
                <option value="진행 중">진행 중</option>
                <option value="완료">완료</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">객실 번호</th>
                    <th className="text-left p-2">타입</th>
                    <th className="text-left p-2">층</th>
                    <th className="text-left p-2">문제</th>
                    <th className="text-left p-2">상태</th>
                    <th className="text-left p-2">시작일</th>
                    <th className="text-left p-2">예상 완료일</th>
                    <th className="text-left p-2">담당자</th>
                    <th className="text-left p-2">우선순위</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMaintenances.map(maintenance => (
                    <tr key={maintenance.id} className="border-b hover:bg-muted/50">
                      <td className="p-2">{maintenance.roomNumber}</td>
                      <td className="p-2">{maintenance.roomType}</td>
                      <td className="p-2">{maintenance.floor}층</td>
                      <td className="p-2">{maintenance.issue}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          maintenance.status === '대기 중' ? 'bg-yellow-100 text-yellow-800' :
                          maintenance.status === '진행 중' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {maintenance.status}
                        </span>
                      </td>
                      <td className="p-2">{maintenance.startDate}</td>
                      <td className="p-2">{maintenance.expectedEndDate}</td>
                      <td className="p-2">{maintenance.assignedTo}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          maintenance.priority === '높음' ? 'bg-red-100 text-red-800' :
                          maintenance.priority === '중간' ? 'bg-orange-100 text-orange-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {maintenance.priority}
                        </span>
                      </td>
                      <td className="p-2 space-x-1">
                        <div className="flex space-x-1">
                          <select
                            className="p-1 border rounded text-xs"
                            onChange={(e) => handleStatusChange(maintenance.id, e.target.value)}
                            value=""
                            defaultValue=""
                          >
                            <option value="" disabled>상태 변경</option>
                            <option value="대기 중">대기 중</option>
                            <option value="진행 중">진행 중</option>
                            <option value="완료">완료</option>
                          </select>
                          {maintenance.assignedTo === '미배정' && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleAssign(maintenance.id)}
                              className="text-xs"
                            >
                              담당자 배정
                            </Button>
                          )}
                          {maintenance.status !== '완료' && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleComplete(maintenance.id)}
                              className="text-xs"
                            >
                              완료처리
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 유지보수 요청 추가 다이얼로그 */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>유지보수 요청 추가</DialogTitle>
            <DialogDescription>
              새로운 유지보수 요청을 등록합니다.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">객실 번호</label>
                <input 
                  id="room-number"
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="예: 301"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">객실 타입</label>
                <select id="room-type" className="w-full p-2 border rounded">
                  <option value="스탠다드">스탠다드</option>
                  <option value="디럭스">디럭스</option>
                  <option value="스위트">스위트</option>
                  <option value="패밀리">패밀리</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">층</label>
                <input 
                  id="floor"
                  type="number" 
                  className="w-full p-2 border rounded" 
                  placeholder="예: 3"
                  min="1"
                  max="10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">우선순위</label>
                <select id="priority" className="w-full p-2 border rounded">
                  <option value="높음">높음</option>
                  <option value="중간">중간</option>
                  <option value="낮음">낮음</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">문제 내용</label>
              <textarea 
                id="issue"
                className="w-full p-2 border rounded" 
                rows={3} 
                placeholder="유지보수가 필요한 문제 내용을 입력하세요."
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">예상 완료일</label>
                <input 
                  id="expected-end-date"
                  type="date" 
                  className="w-full p-2 border rounded" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">담당자 (선택사항)</label>
                <select id="assigned-to" className="w-full p-2 border rounded">
                  <option value="">미배정</option>
                  <option value="김기술">김기술</option>
                  <option value="이기술">이기술</option>
                  <option value="박기술">박기술</option>
                  <option value="최기술">최기술</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => {
              const roomNumber = (document.getElementById('room-number') as HTMLInputElement).value
              const roomType = (document.getElementById('room-type') as HTMLSelectElement).value
              const floor = (document.getElementById('floor') as HTMLInputElement).value
              const issue = (document.getElementById('issue') as HTMLTextAreaElement).value
              const expectedEndDate = (document.getElementById('expected-end-date') as HTMLInputElement).value
              const assignedTo = (document.getElementById('assigned-to') as HTMLSelectElement).value
              const priority = (document.getElementById('priority') as HTMLSelectElement).value
              
              if (!roomNumber || !floor || !issue || !expectedEndDate) {
                alert('필수 항목을 모두 입력해주세요.')
                return
              }
              
              handleAddMaintenance({
                roomNumber,
                roomType,
                floor,
                issue,
                expectedEndDate,
                assignedTo,
                priority
              })
            }}>등록하기</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
