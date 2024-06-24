import { TOKEN_KEY } from '@/libs/axios'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types'
import { AUTHORITIES } from '@/constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasAuthority = (authority: string) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return false
  const decodedToken: DecodedToken = jwtDecode(token)
  return decodedToken.role === authority
}

export function getTagColor(tag: string | undefined, type: 'status' | 'attendingStatus' | 'role'): string | undefined {
  switch (type) {
    case 'role':
      switch (tag) {
        case AUTHORITIES.ADMIN:
          return 'blue'
        case AUTHORITIES.CUSTOMER:
          return 'cyan'
      }
  }
}
