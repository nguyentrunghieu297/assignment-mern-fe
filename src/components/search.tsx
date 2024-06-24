import debounce from 'debounce'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/libs/redux-toolkit/hooks'
import { setSearch } from '@/libs/redux-toolkit/slices/filter'

export default function SearchBar() {
  const dispatch = useAppDispatch()
  const handleSearch = debounce((searchValue: string) => {
    dispatch(setSearch(searchValue))
  }, 250)

  return (
    <div className="flex items-center space-x-3 w-[350px] flex-col">
      <div className="flex gap-3 w-full">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  )
}
