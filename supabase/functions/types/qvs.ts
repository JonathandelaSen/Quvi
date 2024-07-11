import { type Database } from '@/app/types/database.ts'

type QvEntity = Database['public']['Tables']['quvis']['Row']
type UserEntity = Database['public']['Tables']['users']['Row']

export type Qv = QvEntity & { users: UserEntity | null }
