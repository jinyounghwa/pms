/**
 * 로컬스토리지 기반 데이터 관리 유틸리티
 * Supabase 대신 로컬스토리지를 사용하여 데모 데이터를 관리합니다.
 */

// 데이터 타입 정의
export interface Room {
  id: string
  room_number: string
  room_type: string
  status: 'available' | 'occupied' | 'cleaning' | 'maintenance'
  price: number
  floor: number
}

export interface Guest {
  id: string
  name: string
  email: string
  phone: string
  vip_status: boolean
  created_at: string
}

export interface Reservation {
  id: string
  guest_id: string
  room_id: string
  check_in: string
  check_out: string
  status: 'confirmed' | 'checked_in' | 'checked_out' | 'cancelled'
  total_amount: number
  created_at: string
}

export interface Housekeeping {
  id: string
  room_id: string
  status: 'pending' | 'in_progress' | 'completed'
  assigned_to: string
  notes: string
  created_at: string
}

export interface Maintenance {
  id: string
  room_id: string
  issue: string
  status: 'pending' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  assigned_to: string
  created_at: string
}

// 로컬스토리지 키
const KEYS = {
  ROOMS: 'pms_rooms',
  GUESTS: 'pms_guests',
  RESERVATIONS: 'pms_reservations',
  HOUSEKEEPING: 'pms_housekeeping',
  MAINTENANCE: 'pms_maintenance'
}

// 초기 데모 데이터
const INITIAL_DATA = {
  rooms: [
    { id: '1', room_number: '101', room_type: 'Standard', status: 'available', price: 100000, floor: 1 },
    { id: '2', room_number: '102', room_type: 'Standard', status: 'occupied', price: 100000, floor: 1 },
    { id: '3', room_number: '201', room_type: 'Deluxe', status: 'available', price: 150000, floor: 2 },
    { id: '4', room_number: '202', room_type: 'Deluxe', status: 'cleaning', price: 150000, floor: 2 },
    { id: '5', room_number: '301', room_type: 'Suite', status: 'available', price: 250000, floor: 3 },
    { id: '6', room_number: '302', room_type: 'Suite', status: 'maintenance', price: 250000, floor: 3 }
  ] as Room[],

  guests: [
    { id: '1', name: '김철수', email: 'kim@example.com', phone: '010-1234-5678', vip_status: true, created_at: new Date().toISOString() },
    { id: '2', name: '이영희', email: 'lee@example.com', phone: '010-2345-6789', vip_status: false, created_at: new Date().toISOString() },
    { id: '3', name: '박민수', email: 'park@example.com', phone: '010-3456-7890', vip_status: true, created_at: new Date().toISOString() }
  ] as Guest[],

  reservations: [
    { id: '1', guest_id: '1', room_id: '2', check_in: '2024-12-09', check_out: '2024-12-11', status: 'checked_in', total_amount: 200000, created_at: new Date().toISOString() },
    { id: '2', guest_id: '2', room_id: '3', check_in: '2024-12-15', check_out: '2024-12-17', status: 'confirmed', total_amount: 300000, created_at: new Date().toISOString() }
  ] as Reservation[],

  housekeeping: [
    { id: '1', room_id: '4', status: 'in_progress', assigned_to: 'staff', notes: '정기 청소', created_at: new Date().toISOString() },
    { id: '2', room_id: '2', status: 'pending', assigned_to: '', notes: '체크아웃 후 청소 필요', created_at: new Date().toISOString() }
  ] as Housekeeping[],

  maintenance: [
    { id: '1', room_id: '6', issue: '에어컨 고장', status: 'in_progress', priority: 'high', assigned_to: 'staff', created_at: new Date().toISOString() },
    { id: '2', room_id: '1', issue: 'TV 리모컨 교체 필요', status: 'pending', priority: 'low', assigned_to: '', created_at: new Date().toISOString() }
  ] as Maintenance[]
}

// 초기 데이터 설정
export const initializeData = () => {
  if (typeof window === 'undefined') return

  Object.entries(KEYS).forEach(([key, storageKey]) => {
    if (!localStorage.getItem(storageKey)) {
      const dataKey = key.toLowerCase() as keyof typeof INITIAL_DATA
      localStorage.setItem(storageKey, JSON.stringify(INITIAL_DATA[dataKey]))
    }
  })
}

// Generic CRUD 함수
export const getData = <T>(key: string): T[] => {
  if (typeof window === 'undefined') return []

  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error(`Failed to get data from ${key}:`, error)
    return []
  }
}

export const setData = <T>(key: string, data: T[]): void => {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(`Failed to set data to ${key}:`, error)
  }
}

export const addItem = <T extends { id: string }>(key: string, item: T): T => {
  const data = getData<T>(key)
  const newItem = { ...item, id: item.id || Date.now().toString() }
  setData(key, [...data, newItem])
  return newItem
}

export const updateItem = <T extends { id: string }>(key: string, id: string, updates: Partial<T>): T | null => {
  const data = getData<T>(key)
  const index = data.findIndex(item => item.id === id)

  if (index === -1) return null

  const updatedItem = { ...data[index], ...updates }
  data[index] = updatedItem
  setData(key, data)
  return updatedItem
}

export const deleteItem = (key: string, id: string): boolean => {
  const data = getData(key)
  const filteredData = data.filter((item: any) => item.id !== id)

  if (filteredData.length === data.length) return false

  setData(key, filteredData)
  return true
}

// 특화 함수들
export const roomsAPI = {
  getAll: () => getData<Room>(KEYS.ROOMS),
  getById: (id: string) => getData<Room>(KEYS.ROOMS).find(r => r.id === id),
  add: (room: Omit<Room, 'id'>) => addItem(KEYS.ROOMS, { ...room, id: Date.now().toString() } as Room),
  update: (id: string, updates: Partial<Room>) => updateItem<Room>(KEYS.ROOMS, id, updates),
  delete: (id: string) => deleteItem(KEYS.ROOMS, id)
}

export const guestsAPI = {
  getAll: () => getData<Guest>(KEYS.GUESTS),
  getById: (id: string) => getData<Guest>(KEYS.GUESTS).find(g => g.id === id),
  add: (guest: Omit<Guest, 'id' | 'created_at'>) => addItem(KEYS.GUESTS, {
    ...guest,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  } as Guest),
  update: (id: string, updates: Partial<Guest>) => updateItem<Guest>(KEYS.GUESTS, id, updates),
  delete: (id: string) => deleteItem(KEYS.GUESTS, id)
}

export const reservationsAPI = {
  getAll: () => getData<Reservation>(KEYS.RESERVATIONS),
  getById: (id: string) => getData<Reservation>(KEYS.RESERVATIONS).find(r => r.id === id),
  add: (reservation: Omit<Reservation, 'id' | 'created_at'>) => addItem(KEYS.RESERVATIONS, {
    ...reservation,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  } as Reservation),
  update: (id: string, updates: Partial<Reservation>) => updateItem<Reservation>(KEYS.RESERVATIONS, id, updates),
  delete: (id: string) => deleteItem(KEYS.RESERVATIONS, id)
}

export const housekeepingAPI = {
  getAll: () => getData<Housekeeping>(KEYS.HOUSEKEEPING),
  getById: (id: string) => getData<Housekeeping>(KEYS.HOUSEKEEPING).find(h => h.id === id),
  add: (task: Omit<Housekeeping, 'id' | 'created_at'>) => addItem(KEYS.HOUSEKEEPING, {
    ...task,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  } as Housekeeping),
  update: (id: string, updates: Partial<Housekeeping>) => updateItem<Housekeeping>(KEYS.HOUSEKEEPING, id, updates),
  delete: (id: string) => deleteItem(KEYS.HOUSEKEEPING, id)
}

export const maintenanceAPI = {
  getAll: () => getData<Maintenance>(KEYS.MAINTENANCE),
  getById: (id: string) => getData<Maintenance>(KEYS.MAINTENANCE).find(m => m.id === id),
  add: (task: Omit<Maintenance, 'id' | 'created_at'>) => addItem(KEYS.MAINTENANCE, {
    ...task,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  } as Maintenance),
  update: (id: string, updates: Partial<Maintenance>) => updateItem<Maintenance>(KEYS.MAINTENANCE, id, updates),
  delete: (id: string) => deleteItem(KEYS.MAINTENANCE, id)
}

// 초기화 (페이지 로드 시 자동 실행)
if (typeof window !== 'undefined') {
  initializeData()
}
