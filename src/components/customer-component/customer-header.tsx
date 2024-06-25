import { ROUTE_PATHS } from '@/routers'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CustomerHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const userAvatarUrl = 'https://via.placeholder.com/40'

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const goToProfile = () => {
    alert('/profile')
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={ROUTE_PATHS.ROOT}>
          <h1 className="text-2xl font-bold">My WatchShop</h1>
        </Link>
        <div>
          {!isLoggedIn ? (
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
              <img
                src={userAvatarUrl}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={goToProfile}
              />
              <button className="bg-white text-blue-600 px-4 py-2 rounded" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
