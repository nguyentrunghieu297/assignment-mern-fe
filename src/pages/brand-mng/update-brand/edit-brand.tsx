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
import { EDIT_BRAND } from '@/constants/form-fields'
import { BrandSchema } from '@/libs/zod/schema'
import { useEditBrand } from './use-edit-brand'

export type FormInputs = z.infer<typeof BrandSchema>

interface EditBrandProps {
  brandId: string
  initialData: Record<string, unknown>
}

export default function EditBrand({ brandId, initialData }: EditBrandProps) {
  const dispatch = useAppDispatch()

  const editBrandMutation = useEditBrand()

  const methods = useForm<FormInputs>({
    resolver: zodResolver(BrandSchema),
    defaultValues: initialData
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.UPDATE_BRAND))
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(brandId)
    editBrandMutation.mutate({ brandId: brandId, inputData: data })
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4">
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <EditMode fields={EDIT_BRAND} initialData={initialData ? { ...initialData } : {}} />
        </ConfigAntdTheme>
        <Actions
          onCancel={handleCancel}
          onOk={methods.handleSubmit(onSubmit)}
          okText="Save"
          isLoading={editBrandMutation.isPending}
        />
      </div>
    </FormProvider>
  )
}
