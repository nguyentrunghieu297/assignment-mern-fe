import ConfigAntdTheme from '@/libs/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteWatch } from './use-delete-watch'

interface DeleteProductProps {
  productName: string
  productId: string
}

export default function DeleteProduct({ productName, productId }: DeleteProductProps) {
  const dispatch = useAppDispatch()

  const deleteWatchMutation = useDeleteWatch(productId)

  const handleDelete = () => {
    console.log(productId)
    deleteWatchMutation.mutate()
    dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT))
  }

  return (
    <>
      <Typography.Text>Are you sure to delete {productName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_PRODUCT))}>
          Cancel
        </Button>
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </ConfigAntdTheme>
      </div>
    </>
  )
}
