import Label from '@/components/label'
import dayjs from 'dayjs'
import { dateFormatList } from '@/constants'
import { InputsField, InputsType } from '@/types'
import { DatePicker, Input, Select, Typography } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import { useViewBrandList } from '@/pages/brand-mng/view-brand/use-view-brand-list'

interface AddModeProps {
  fields: InputsField
}

export default function AddMode({ fields }: AddModeProps) {
  const fieldsList: InputsType[] = fields['add'] ?? []
  const {
    control,
    formState: { errors },
    watch
  } = useFormContext()
  const defaultValues = watch()

  const { data: brands, isLoading: isBrandsLoading } = useViewBrandList()

  return (
    <div className="flex flex-col gap-4">
      {fieldsList.map((item) => {
        const errorMessage = errors[item.key]?.message
        switch (item.type) {
          case 'input':
            return (
              <Controller
                control={control}
                name={item.key}
                key={item.key}
                render={({ field: { onChange, ref } }) => (
                  <Label label={item.label}>
                    <Input
                      key={item.key}
                      disabled={!item.isAllowEdit}
                      defaultValue={defaultValues[item.key]}
                      onChange={onChange}
                      ref={ref}
                    />
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
                render={({ field }) => (
                  <Label label={item.label}>
                    <Select
                      {...field}
                      className="w-full"
                      disabled={!item.isAllowEdit || (item.key === 'brand' && isBrandsLoading)}
                      loading={item.key === 'brand' && isBrandsLoading}
                    >
                      {item.key === 'brand'
                        ? brands?.map((brand) => (
                            <Select.Option key={brand._id} value={brand._id}>
                              {brand.brandName}
                            </Select.Option>
                          ))
                        : item.options?.map((option) => (
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
          case 'date':
            return (
              <Controller
                control={control}
                name={item.key}
                key={item.key}
                render={({ field: { onChange, ref } }) => (
                  <Label label={item.label}>
                    <DatePicker
                      defaultValue={dayjs()}
                      format={dateFormatList[1]}
                      className="w-full"
                      disabled={!item.isAllowEdit}
                      onChange={(day) => onChange(day?.format(dateFormatList[0]))}
                      ref={ref}
                    />
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
