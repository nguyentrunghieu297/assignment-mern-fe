import authApi from '@/services/auth'
import { queryClient } from '@/constants'
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '@/libs/axios'
import { ROUTE_PATHS } from '@/routers'
import { useMutation, useQuery } from '@tanstack/react-query'
import { notification } from 'antd'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()

  const {
    data: user,
    isLoading: loadingInitial,
    error: error
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await authApi.getCurrentUser()
      if (!response) {
        localStorage.clear()
        navigate(ROUTE_PATHS.LOGIN)
        return null
      } else return response
    }
  })

  const signInMutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => authApi.signIn(username, password),
    onSuccess: (data) => {
      localStorage.setItem(TOKEN_KEY, data.data.accessToken)
      localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken)
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/watches')
      notification.success({
        message: data.message,
        description: 'You have successfully logged in'
      })
    },
    onError: (error) => {
      notification.error({
        message: error.message,
        description: 'Your username or password is incorrect.'
      })
    }
  })

  const signUpMutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => authApi.signUp(username, password),
    onError: (error) => {
      notification.error({
        message: error.message,
        description: 'Your username or password is incorrect.'
      })
    }
  })

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logOut(),
    onSuccess: () => {
      localStorage.clear()
      navigate('/login')
    },
    onError: (error) => {
      notification.error({
        message: error.message,
        description: 'Logout Failed!'
      })
    }
  })

  return { user, loadingInitial, error, signInMutation, logoutMutation, signUpMutation }
}
