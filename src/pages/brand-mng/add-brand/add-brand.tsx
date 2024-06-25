import AddMode from './add-mode'
import ConfigAntdTheme from '@/libs/antd/config-theme'
import Actions from '@/components/actions'
import { POPUP_TITLE } from '@/constants'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { closePopup } from '@/libs/redux-toolkit/slices/popup-slice'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ADD_BRAND } from '@/constants/form-fields'
import { BrandSchema } from '@/libs/zod/schema'
import { useAddNewBrand } from './use-add-new-brand'

export type FormInputs = z.infer<typeof BrandSchema>

export default function AddBrand() {
  const dispatch = useAppDispatch()

  const addNewBrandMutation = useAddNewBrand()

  const methods = useForm<FormInputs>({
    resolver: zodResolver(BrandSchema)
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_BRAND))
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    addNewBrandMutation.mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4">
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <AddMode fields={ADD_BRAND} />
        </ConfigAntdTheme>
        <Actions
          onCancel={handleCancel}
          onOk={methods.handleSubmit(onSubmit)}
          okText="Add"
          isLoading={addNewBrandMutation.isPending}
        />
      </div>
    </FormProvider>
  )
}
