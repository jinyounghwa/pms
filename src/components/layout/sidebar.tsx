'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Calendar,
  Building2,
  Users,
  BarChart3,
  Settings,
  Sparkles,
  Wrench,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onClose?: () => void
}

const menuItems = [
  {
    title: '메인 메뉴',
    items: [
      { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
      { href: '/reservations', label: '예약 관리', icon: Calendar },
      { href: '/rooms', label: '객실 관리', icon: Building2 },
      { href: '/guests', label: '고객 관리', icon: Users },
    ]
  },
  {
    title: '운영 관리',
    items: [
      { href: '/housekeeping', label: '하우스키핑', icon: Sparkles },
      { href: '/maintenance', label: '유지보수', icon: Wrench },
    ]
  },
  {
    title: '추가 기능',
    items: [
      { href: '/reports', label: '리포트 및 분석', icon: BarChart3 },
      { href: '/settings', label: '설정', icon: Settings },
    ]
  }
]

export function Sidebar({ className, isOpen = false, onClose, ...props }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen w-64 border-r glass backdrop-blur transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 lg:hidden">
            <span className="text-lg font-bold gradient-text">메뉴</span>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 space-y-6">
            {menuItems.map((section, index) => (
              <div key={index} className="px-4">
                <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground uppercase">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-white/5",
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
