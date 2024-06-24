import productListApi from '@/services/watch'
import { ERROR_MESSAGES, queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useDeleteWatch = (productId: string) => {
  return useMutation({
    mutationFn: () => productListApi.deleteWatch(productId),
    onSuccess: () => {
      notification.success({
        message: ERROR_MESSAGES.EM06,
        description: ERROR_MESSAGES.EM06
      })
      queryClient.invalidateQueries({
        queryKey: ['viewProductList']
      })
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM09,
        description: error.message
      })
    }
  })
}
