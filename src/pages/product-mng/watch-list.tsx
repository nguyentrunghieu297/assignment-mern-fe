import Popup from '@/components/popup'
import SearchBar from '@/components/search'
import SectionHeader from '@/components/section-header'
import ViewListProduct from './view-product/view-list-product'
import ConfigAntdTheme from '@/libs/antd/config-theme'
import AddProduct from './add-product/add-product'
import { GreenButtonStyle } from '@/libs/antd/antd-styles'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { POPUP_TITLE } from '@/constants'

export default function WatchList() {
  return (
    <>
      <SectionHeader title="Product List" className="" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <SearchBar />
          <div className="flex flex-col gap-4 ml-auto">
            <div className="flex items-center gap-2">
              <ConfigAntdTheme theme={GreenButtonStyle}>
                <Popup width={500} type="form" title={POPUP_TITLE.ADD_PRODUCT} content={<AddProduct />}>
                  <Button type="primary" icon={<PlusCircleOutlined />}>
                    Add new
                  </Button>
                </Popup>
              </ConfigAntdTheme>
            </div>
          </div>
        </div>
        <ViewListProduct />
      </div>
    </>
  )
}
