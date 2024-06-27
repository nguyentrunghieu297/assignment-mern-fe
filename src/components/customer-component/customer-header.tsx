import { useAuth } from '@/hooks/use-auth'
import { ROUTE_PATHS } from '@/routers'
import { Link } from 'react-router-dom'

export default function CustomerHeader() {
  const { logoutMutation, user } = useAuth()

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={user ? ROUTE_PATHS.HOME : ROUTE_PATHS.ROOT}>
          <h1 className="text-2xl font-bold">My WatchShop</h1>
        </Link>
        <div>
          {!user ? (
            <div className="flex space-x-4">
              <Link to={ROUTE_PATHS.LOGIN} className="bg-white text-blue-600 px-4 py-2 rounded">
                Login
              </Link>
              <Link to={ROUTE_PATHS.REGISTER} className="bg-white text-blue-600 px-4 py-2 rounded">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to={ROUTE_PATHS.PROFILE}>
                <img src={user?.data.profilePic} alt="avatar" className="w-10 h-10 rounded-full cursor-pointer" />
              </Link>
              <button className="bg-white text-blue-600 px-4 py-2 rounded" onClick={() => logoutMutation.mutate()}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
