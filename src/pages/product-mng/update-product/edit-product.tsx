import EditMode from './edit-mode'
import ConfigAntdTheme from '@/libs/antd/config-theme'
import Actions from '@/components/actions'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EDIT_PRODUCT } from '@/constants/form-fields'
import { useEditWatch } from './use-edit-product'
import { editWatchSchema } from '@/libs/zod/schema'
import { useViewBrandList } from '@/pages/brand-mng/view-brand/use-view-brand-list'

export type FormInputs = z.infer<typeof editWatchSchema>

interface EditProductProps {
  productId: string
  initialData: Record<string, unknown>
}

export default function EditProduct({ productId, initialData }: EditProductProps) {
  const dispatch = useAppDispatch()

  const editWatchMutation = useEditWatch()

  const { data: brands } = useViewBrandList()

  const methods = useForm<FormInputs>({
    resolver: zodResolver(editWatchSchema),
    defaultValues: {
      ...initialData,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      brand: initialData.brand ? (initialData.brand as Record<string, any>)._id : undefined
    }
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.UPDATE_PRODUCT))
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    editWatchMutation.mutate({ productId: productId, inputData: data })
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4">
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <EditMode
            fields={EDIT_PRODUCT}
            initialData={initialData ? { ...initialData } : {}}
            allBrands={brands ? brands : []}
          />
        </ConfigAntdTheme>
        <Actions
          onCancel={handleCancel}
          onOk={methods.handleSubmit(onSubmit)}
          okText="Save"
          isLoading={editWatchMutation.isPending}
        />
      </div>
    </FormProvider>
  )
}
