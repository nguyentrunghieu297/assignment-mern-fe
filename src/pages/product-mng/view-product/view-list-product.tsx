import TableData from '@/components/table'
import { VIEW_PRODUCT_COLS } from '@/constants/table-columns'
import { ProductDetail, ProductTableData } from '@/types'
import { useViewProductList } from './use-view-product'

export default function ViewListProduct() {
  const { data, isLoading } = useViewProductList()

  const addKeyToData = (dataArray: ProductDetail[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: ProductDetail) => {
      return {
        ...item,
        key: item._id
      }
    })
  }
  const dataWithKeys: ProductTableData[] = (data && addKeyToData(data.data)) || []

  return (
    <div>
      <TableData<ProductTableData>
        columns={VIEW_PRODUCT_COLS}
        data={dataWithKeys}
        total={data?.data.length}
        scrollX={1400}
        scrollY={620}
        hasRowSelection
        isLoading={isLoading}
      />
    </div>
  )
}
