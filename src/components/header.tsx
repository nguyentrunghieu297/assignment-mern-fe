import Logo from '@/assets/logo.png'
import avatar from '@/assets/avatar.jpg'
import { Header as AntHeader } from 'antd/es/layout/layout'
import { Typography, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '@/routers'
import { useAuth } from '@/hooks/use-auth'

export default function ManagerHeader({ isLoginPage }: { isLoginPage: boolean }) {
  const navigate = useNavigate()
  const { logoutMutation, user } = useAuth()
  return (
    <AntHeader className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="WatchShop" className="logo__img top-bar__logo-img mr-3 w-12" />
        <h1 className="logo__title top-bar__logo-title mt-2 text-white">WatchShop</h1>
      </div>
      <div className="flex items-center gap-8">
        {!isLoginPage ? (
          <div className="flex items-center gap-2">
            <Avatar
              src={user?.data.profilePic ? user?.data.profilePic : avatar}
              size={46}
              className="border-white border-2 cursor-pointer"
              onClick={() => navigate(ROUTE_PATHS.PROFILE)}
            />
            <div className="flex flex-col">
              <Typography.Text className="text-white">{user?.data.fullName}</Typography.Text>
              <Typography.Text className="text-white cursor-pointer" onClick={() => logoutMutation.mutate()}>
                Log out
              </Typography.Text>
            </div>
          </div>
        ) : null}
      </div>
    </AntHeader>
  )
}
