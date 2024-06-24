import { ERROR_MESSAGES, queryClient } from '@/constants'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import brandListApi from '@/services/brand'

export const useDeleteBrand = (productId: string) => {
  return useMutation({
    mutationFn: () => brandListApi.deleteBrand(productId),
    onSuccess: () => {
      notification.success({
        message: ERROR_MESSAGES.EM06,
        description: ERROR_MESSAGES.EM06
      })
      queryClient.invalidateQueries({
        queryKey: ['viewBrandList']
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
