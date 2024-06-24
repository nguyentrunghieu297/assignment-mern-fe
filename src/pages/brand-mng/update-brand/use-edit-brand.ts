import { useMutation } from '@tanstack/react-query'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { notification } from 'antd'
import { ERROR_MESSAGES, POPUP_TITLE, queryClient } from '@/constants'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import brandListApi from '@/services/brand'

export const useEditBrand = () => {
  const dispath = useAppDispatch()

  return useMutation({
    mutationFn: ({ brandId, inputData }: { brandId: string; inputData: string }) =>
      brandListApi.updateBrand(brandId, inputData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewBrandList'] })
      notification.success({
        message: ERROR_MESSAGES.EM05,
        description: ERROR_MESSAGES.EM05
      })
      dispath(closePopup(POPUP_TITLE.UPDATE_BRAND))
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM08,
        description: error.message
      })
    }
  })
}
