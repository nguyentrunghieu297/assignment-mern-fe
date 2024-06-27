import { useAuth } from '@/hooks/use-auth'
import { TOKEN_KEY } from '@/libs/axios'
import { ROUTE_PATHS } from '@/routers'
import { Navigate } from 'react-router-dom'

export default function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  console.log(user?.data)
  if (user?.data) {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) return <Navigate to={ROUTE_PATHS.ROOT} replace />
  }
  return <>{children}</>
}
