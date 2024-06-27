import { ERROR_MESSAGES, queryClient } from '@/constants'
import accountListApi from '@/services/member'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useUpdateInfo = (id: string) => {
  return useMutation({
    mutationFn: ({ name, dob }: { name: string; dob: string }) => accountListApi.updateAccount(id, { name, dob }),
    onSuccess: () => {
      notification.success({
        message: 'Update success'
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
