import TableData from '@/components/table'
import { VIEW_BRAND_COLS } from '@/constants/table-columns'
import { BrandTableData } from '@/types'
import { useViewBrandList } from './use-view-brand-list'

export default function ViewListBrand() {
  const { data, isLoading } = useViewBrandList()
  const addKeyToData = (dataArray: BrandTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: BrandTableData) => {
      return {
        ...item,
        key: item._id
      }
    })
  }
  const dataWithKeys: BrandTableData[] = (data && addKeyToData(data)) || []

  return (
    <div>
      <TableData<BrandTableData>
        columns={VIEW_BRAND_COLS}
        data={dataWithKeys}
        total={data?.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
        isLoading={isLoading}
      />
    </div>
  )
}
