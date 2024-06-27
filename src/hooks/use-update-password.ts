import accountListApi from '@/services/member'
import { ERROR_MESSAGES, queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useUpdatePassword = (id: string) => {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
      accountListApi.changePassword(id, { currentPassword, newPassword }),
    onSuccess: () => {
      notification.success({
        message: 'Update password success'
      })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM08,
        description: error.message
      })
    }
  })
}
