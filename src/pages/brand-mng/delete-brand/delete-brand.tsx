import ConfigAntdTheme from '@/libs/antd/config-theme'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { Button, Typography } from 'antd'
import { useDeleteBrand } from './use-delete-brand'

interface DeleteBrandProps {
  brandName: string
  brandId: string
}

export default function DeleteBrand({ brandName, brandId }: DeleteBrandProps) {
  const dispatch = useAppDispatch()

  const deleteBrandMutation = useDeleteBrand(brandId)

  const handleDelete = () => {
    console.log(brandId)
    deleteBrandMutation.mutate()
    dispatch(closePopup(POPUP_TITLE.DELETE_BRAND))
  }

  return (
    <>
      <Typography.Text>Are you sure to delete {brandName}?</Typography.Text>
      <div className="flex items-center justify-end mt-4">
        <Button danger type="text" className="mr-2" onClick={() => dispatch(closePopup(POPUP_TITLE.DELETE_BRAND))}>
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
