import { ERROR_MESSAGES, queryClient } from '@/constants'
import productListApi from '@/services/watch'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

type Feedback = { rating: number; content: string; author: string }

export const useCreateFeedback = (productId: string) => {
  return useMutation({
    mutationFn: ({ feedback }: { feedback: Feedback }) => productListApi.sendFeedback(productId, feedback),
    onSuccess: () => {
      notification.success({
        message: 'Feedback sent successfully'
      })
      queryClient.invalidateQueries({ queryKey: ['viewProductDetail', productId] })
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM07,
        description: error.message
      })
    }
  })
}
