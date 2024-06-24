import Label from '@/components/label'
import { InputsField, InputsType } from '@/types'
import { Input, Select, Typography } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

interface EditModeProps {
  fields: InputsField
  initialData: Record<string, unknown>
}

export default function EditMode({ fields, initialData }: EditModeProps) {
  const fieldsList: InputsType[] = fields['edit'] ?? []
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      {fieldsList.map((item) => {
        const errorMessage = errors[item.key]?.message
        const initialValue = initialData[item.key]
        switch (item.type) {
          case 'input':
            return (
              <Controller
                control={control}
                name={item.key}
                key={item.key}
                defaultValue={initialValue}
                render={({ field }) => (
                  <Label label={item.label}>
                    <Input {...field} disabled={!item.isAllowEdit} />
                    {errorMessage && <Typography.Text className="text-red-500">{`${errorMessage}`}</Typography.Text>}
                  </Label>
                )}
              />
            )
          case 'select':
            return (
              <Controller
                control={control}
                name={item.key}
                key={item.key}
                defaultValue={initialValue}
                render={({ field }) => (
                  <Label label={item.label}>
                    <Select {...field} className="w-full" disabled={!item.isAllowEdit}>
                      {item.options?.map((option) => (
                        <Select.Option key={option.key} value={option.value}>
                          {option.value}
                        </Select.Option>
                      ))}
                    </Select>
                    {errorMessage && <Typography.Text className="text-red-500">{`${errorMessage}`}</Typography.Text>}
                  </Label>
                )}
              />
            )
        }
      })}
    </div>
  )
}
