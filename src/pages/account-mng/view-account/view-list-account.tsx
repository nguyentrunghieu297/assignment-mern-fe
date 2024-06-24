import TableData from '@/components/table'
import { VIEW_ACCOUNT_COLS } from '@/constants/table-columns'
import { AccountTableData } from '@/types'
import { useViewAccountList } from './use-view-account-list'

export default function ViewListAccount() {
  const { data, isLoading } = useViewAccountList()

  const addKeyToData = (dataArray: AccountTableData[] | null) => {
    if (!dataArray) return []
    return dataArray.map((item: AccountTableData) => {
      return {
        ...item,
        key: item._id
      }
    })
  }
  const dataWithKeys: AccountTableData[] = (data && addKeyToData(data.data)) || []

  return (
    <div>
      <TableData<AccountTableData>
        columns={VIEW_ACCOUNT_COLS}
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
