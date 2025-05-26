'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function GuestsPage() {
  const router = useRouter()
  const [showVipDetailDialog, setShowVipDetailDialog] = useState(false)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [showRegisterDialog, setShowRegisterDialog] = useState(false)
  const [selectedGuest, setSelectedGuest] = useState<{
    id: string;
    name: string;
    level: string;
    preferences?: string;
    visits?: number;
    lastVisit?: string;
    totalSpent?: number;
  } | null>(null)
  const [selectedFeedback, setSelectedFeedback] = useState<{
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
    response?: string;
  } | null>(null)
  
  const handleShowVipDetail = (guest: any) => {
    setSelectedGuest(guest)
    setShowVipDetailDialog(true)
  }
  
  const handleShowFeedback = (feedback: any) => {
    setSelectedFeedback(feedback)
    setShowFeedbackDialog(true)
  }
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">고객 관리</h1>
            <p className="text-muted-foreground">고객 프로필 및 이용 이력 관리</p>
          </div>
          <Button onClick={() => setShowRegisterDialog(true)}>
            새 고객 등록
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>고객 목록</CardTitle>
            <CardDescription>
              등록된 모든 고객 정보
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">고객 ID</th>
                    <th className="text-left p-2">이름</th>
                    <th className="text-left p-2">연락처</th>
                    <th className="text-left p-2">이메일</th>
                    <th className="text-left p-2">방문 횟수</th>
                    <th className="text-left p-2">VIP 등급</th>
                    <th className="text-left p-2">액션</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">G-001</td>
                    <td className="p-2">홍길동</td>
                    <td className="p-2">010-1234-5678</td>
                    <td className="p-2">hong@example.com</td>
                    <td className="p-2">5</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-gold-100 text-gold-800 bg-yellow-100 text-yellow-800">
                        Gold
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('고객 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">G-002</td>
                    <td className="p-2">김철수</td>
                    <td className="p-2">010-2345-6789</td>
                    <td className="p-2">kim@example.com</td>
                    <td className="p-2">2</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-silver-100 text-silver-800 bg-gray-100 text-gray-800">
                        Silver
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('고객 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">G-003</td>
                    <td className="p-2">이영희</td>
                    <td className="p-2">010-3456-7890</td>
                    <td className="p-2">lee@example.com</td>
                    <td className="p-2">8</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-platinum-100 text-platinum-800 bg-blue-100 text-blue-800">
                        Platinum
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('고객 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">G-004</td>
                    <td className="p-2">박민수</td>
                    <td className="p-2">010-4567-8901</td>
                    <td className="p-2">park@example.com</td>
                    <td className="p-2">1</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-bronze-100 text-bronze-800 bg-orange-100 text-orange-800">
                        Bronze
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('고객 상세 보기')}>
                        상세
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-2">G-005</td>
                    <td className="p-2">최지은</td>
                    <td className="p-2">010-5678-9012</td>
                    <td className="p-2">choi@example.com</td>
                    <td className="p-2">3</td>
                    <td className="p-2">
                      <span className="px-2 py-1 rounded-full text-xs bg-silver-100 text-silver-800 bg-gray-100 text-gray-800">
                        Silver
                      </span>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm" onClick={() => alert('고객 상세 보기')}>
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
              <CardTitle>VIP 고객</CardTitle>
              <CardDescription>
                특별 관리가 필요한 VIP 고객 목록
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">홍길동 (G-001)</div>
                    <div className="text-sm text-muted-foreground">Gold 등급, 선호: 조용한 객실, 추가 베개</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShowVipDetail({
                    id: 'G-001',
                    name: '홍길동',
                    level: 'Gold',
                    preferences: '조용한 객실, 추가 베개',
                    visits: 5,
                    lastVisit: '2025-05-20',
                    totalSpent: 1250000
                  })}>
                    상세
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">이영희 (G-003)</div>
                    <div className="text-sm text-muted-foreground">Platinum 등급, 선호: 고층 객실, 조식 포함</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShowVipDetail({
                    id: 'G-001',
                    name: '홍길동',
                    level: 'Gold',
                    preferences: '조용한 객실, 추가 베개',
                    visits: 5,
                    lastVisit: '2025-05-20',
                    totalSpent: 1250000
                  })}>
                    상세
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>최근 피드백</CardTitle>
              <CardDescription>
                고객으로부터 받은 최근 피드백
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">김철수 (G-002)</div>
                    <div className="text-sm text-muted-foreground">평점: 4.5/5, "서비스가 매우 좋았습니다."</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShowFeedback({
                    id: 'F-001',
                    name: '김철수',
                    rating: 4.5,
                    comment: '서비스가 매우 좋았습니다. 특히 체크인 시 직원들의 친절한 대응이 인상적이었습니다.',
                    date: '2025-05-22',
                    response: '소중한 피드백 감사합니다. 다음 방문에도 좋은 서비스를 제공하겠습니다.'
                  })}>
                    상세
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">박민수 (G-004)</div>
                    <div className="text-sm text-muted-foreground">평점: 3.5/5, "객실은 좋았으나 소음이 있었습니다."</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShowFeedback({
                    id: 'F-001',
                    name: '김철수',
                    rating: 4.5,
                    comment: '서비스가 매우 좋았습니다. 특히 체크인 시 직원들의 친절한 대응이 인상적이었습니다.',
                    date: '2025-05-22',
                    response: '소중한 피드백 감사합니다. 다음 방문에도 좋은 서비스를 제공하겠습니다.'
                  })}>
                    상세
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">최지은 (G-005)</div>
                    <div className="text-sm text-muted-foreground">평점: 5/5, "완벽한 숙박 경험이었습니다."</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => handleShowFeedback({
                    id: 'F-001',
                    name: '김철수',
                    rating: 4.5,
                    comment: '서비스가 매우 좋았습니다. 특히 체크인 시 직원들의 친절한 대응이 인상적이었습니다.',
                    date: '2025-05-22',
                    response: '소중한 피드백 감사합니다. 다음 방문에도 좋은 서비스를 제공하겠습니다.'
                  })}>
                    상세
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VIP 고객 상세 다이얼로그 */}
        <Dialog open={showVipDetailDialog} onOpenChange={setShowVipDetailDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>VIP 고객 상세 정보</DialogTitle>
              <DialogDescription>
                VIP 고객의 상세 정보와 선호도를 확인합니다.
              </DialogDescription>
            </DialogHeader>
            {selectedGuest && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">고객 ID</h3>
                    <p className="text-sm">{selectedGuest.id}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">고객 등급</h3>
                    <p className="text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        selectedGuest.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        selectedGuest.level === 'Silver' ? 'bg-gray-100 text-gray-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedGuest.level}
                      </span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">고객 이름</h3>
                  <p className="text-sm">{selectedGuest.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">선호사항</h3>
                  <p className="text-sm">{selectedGuest.preferences || '없음'}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">방문 횟수</h3>
                    <p className="text-sm">{selectedGuest.visits || 0}회</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">마지막 방문일</h3>
                    <p className="text-sm">{selectedGuest.lastVisit || '-'}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">총 지출 금액</h3>
                  <p className="text-sm">₩{selectedGuest.totalSpent?.toLocaleString() || '0'}</p>
                </div>
                
                <div className="bg-muted p-3 rounded-lg">
                  <h3 className="text-sm font-medium">추천 서비스</h3>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• 무료 업그레이드 제공 (가능한 경우)</li>
                    <li>• 선호사항에 맞는 객실 준비</li>
                    <li>• 원활한 체크인/체크아웃 지원</li>
                  </ul>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => setShowVipDetailDialog(false)}>닫기</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 최근 피드백 다이얼로그 */}
        <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>고객 피드백 상세</DialogTitle>
              <DialogDescription>
                고객이 남긴 피드백과 답변 내용을 확인합니다.
              </DialogDescription>
            </DialogHeader>
            {selectedFeedback && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">고객 이름</h3>
                    <p className="text-sm">{selectedFeedback.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">피드백 날짜</h3>
                    <p className="text-sm">{selectedFeedback.date}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">평점</h3>
                  <div className="flex items-center mt-1">
                    <div className="text-yellow-500 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className={`w-4 h-4 ${star <= selectedFeedback.rating ? 'fill-current' : 'stroke-current fill-none'}`} 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm">{selectedFeedback.rating}/5</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium">피드백 내용</h3>
                  <p className="text-sm p-3 bg-muted rounded-lg mt-1">{selectedFeedback.comment}</p>
                </div>
                
                {selectedFeedback.response && (
                  <div>
                    <h3 className="text-sm font-medium">호텔 답변</h3>
                    <p className="text-sm p-3 bg-blue-50 rounded-lg mt-1">{selectedFeedback.response}</p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">답변 작성</h3>
                  <textarea 
                    className="w-full p-2 border rounded" 
                    rows={3}
                    placeholder="고객의 피드백에 대한 답변을 작성하세요."
                  ></textarea>
                </div>
              </div>
            )}
            <DialogFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowFeedbackDialog(false)}>취소</Button>
              <Button onClick={() => {
                alert('답변이 저장되었습니다.')
                setShowFeedbackDialog(false)
              }}>답변 저장</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 새 고객 등록 다이얼로그 */}
        <Dialog open={showRegisterDialog} onOpenChange={setShowRegisterDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>새 고객 등록</DialogTitle>
              <DialogDescription>
                새로운 고객 정보를 등록합니다.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">이름 *</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="고객 이름"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">연락처 *</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded" 
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">이메일</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded" 
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">생년월일</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">고객 등급</label>
                  <select className="w-full p-2 border rounded">
                    <option value="Regular">일반</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">주소</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="주소 입력"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">선호사항</label>
                <textarea 
                  className="w-full p-2 border rounded" 
                  rows={3}
                  placeholder="고객의 선호사항을 입력하세요. (예: 조용한 객실, 추가 베개 등)"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">메모</label>
                <textarea 
                  className="w-full p-2 border rounded" 
                  rows={3}
                  placeholder="고객에 대한 추가 메모를 입력하세요."
                ></textarea>
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setShowRegisterDialog(false)}>취소</Button>
              <Button onClick={() => {
                alert('고객이 성공적으로 등록되었습니다.')
                setShowRegisterDialog(false)
              }}>등록하기</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  )
}
