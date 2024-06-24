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
import { ADD_PRODUCT } from '@/constants/form-fields'
import { useAddNewWatch } from './use-add-new-product'
import { addNewWatchSchema } from '@/libs/zod/schema'

export type FormInputs = z.infer<typeof addNewWatchSchema>

export default function AddProduct() {
  const dispatch = useAppDispatch()

  const addNewWatchMutation = useAddNewWatch()

  const methods = useForm<FormInputs>({
    resolver: zodResolver(addNewWatchSchema)
  })

  const handleCancel = () => {
    dispatch(closePopup(POPUP_TITLE.ADD_PRODUCT))
  }

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
    addNewWatchMutation.mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-4">
        <ConfigAntdTheme theme={DefaultButtonStyle}>
          <AddMode fields={ADD_PRODUCT} />
        </ConfigAntdTheme>
        <Actions
          onCancel={handleCancel}
          onOk={methods.handleSubmit(onSubmit)}
          okText="Add"
          isLoading={addNewWatchMutation.isPending}
        />
      </div>
    </FormProvider>
  )
}
