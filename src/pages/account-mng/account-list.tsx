import SearchBar from '@/components/search'
import SectionHeader from '@/components/section-header'
import ViewListAccount from './view-account/view-list-account'

export default function AccountList() {
  return (
    <>
      <SectionHeader title="Product List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
        </div>
        <ViewListAccount />
      </div>
    </>
  )
}
