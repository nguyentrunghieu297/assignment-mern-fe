import brandListApi from '@/services/brand'
import { ERROR_MESSAGES, POPUP_TITLE, queryClient } from '@/constants'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'

export const useAddNewBrand = () => {
  const dispatch = useAppDispatch()
  return useMutation({
    mutationFn: brandListApi.createBrand,
    onSuccess: () => {
      notification.success({
        message: ERROR_MESSAGES.EM04,
        description: ERROR_MESSAGES.EM04
      })
      dispatch(closePopup(POPUP_TITLE.ADD_BRAND))
      queryClient.invalidateQueries({ queryKey: ['viewBrandList'] })
    },
    onError: (error) => {
      notification.error({
        message: ERROR_MESSAGES.EM07,
        description: error.message
      })
    }
  })
}
