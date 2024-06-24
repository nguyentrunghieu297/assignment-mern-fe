import productListApi from '@/services/watch'
import { useMutation } from '@tanstack/react-query'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { notification } from 'antd'
import { ERROR_MESSAGES, POPUP_TITLE, queryClient } from '@/constants'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { FormInputs as UpdateWatch } from './edit-product'

export const useEditWatch = () => {
  const dispath = useAppDispatch()

  return useMutation({
    mutationFn: ({ productId, inputData }: { productId: string; inputData: UpdateWatch }) =>
      productListApi.updateWatch(productId, inputData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewProductList'] })
      notification.success({
        message: ERROR_MESSAGES.EM05,
        description: ERROR_MESSAGES.EM05
      })
      dispath(closePopup(POPUP_TITLE.UPDATE_PRODUCT))
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM08,
        description: error.message
      })
    }
  })
}
