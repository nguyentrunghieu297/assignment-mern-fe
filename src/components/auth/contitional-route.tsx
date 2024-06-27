import { useAuth } from '@/hooks/use-auth'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

export default function ConditionalRoute({ children, roles }: { children: React.ReactNode; roles?: string[] }) {
  const { user } = useAuth()
  console.log('conditional', user?.data)
  if (user?.data) {
    return <PrivateRoute roles={roles}>{children}</PrivateRoute>
  }
  return <PublicRoute>{children}</PublicRoute>
}
