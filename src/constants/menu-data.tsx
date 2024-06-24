import Popup from '@/components/popup'
import DeleteProduct from '@/pages/product-mng/delete-product/delete-product'
import DeleteBrand from '@/pages/brand-mng/delete-brand/delete-brand'
import EditProduct from '@/pages/product-mng/update-product/edit-product'
import { MenuItem, ProductDetail } from '@/types'
import { CloseCircleOutlined, EditOutlined, ReadOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { POPUP_TITLE } from '.'
import { Link } from 'react-router-dom'
import EditBrand from '@/pages/brand-mng/update-brand/edit-brand'

// Navigation Sider
// eslint-disable-next-line react-refresh/only-export-components
export const NavigatorItems: MenuItem[] = [
  {
    label: 'Watches',
    key: '/watches',
    icon: <UserOutlined />
  },
  {
    label: 'Brands',
    key: '/brands',
    icon: <ReadOutlined />
  },
  {
    label: 'Members',
    key: '/members',
    icon: <SettingOutlined />
  }
]

// TODO: Add more items and use it in the future
// Dropdown
export const ViewProductDropdown = (record: ProductDetail): MenuItem[] => [
  {
    label: (
      <Popup
        width={500}
        type="form"
        title={POPUP_TITLE.UPDATE_PRODUCT}
        content={<EditProduct productId={record._id} initialData={record} />}
      >
        Edit product
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_PRODUCT}
        content={<DeleteProduct productName={record.name} productId={record._id} />}
      >
        Delete Product
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />
  }
]

export const ViewBrandDropdown = (record: { brandName: string; _id: string }): MenuItem[] => [
  {
    label: (
      <Popup
        width={500}
        type="form"
        title={POPUP_TITLE.UPDATE_BRAND}
        content={<EditBrand brandId={record._id} initialData={record} />}
      >
        Edit brand
      </Popup>
    ),
    key: 'edit',
    icon: <EditOutlined />
  },
  {
    label: (
      <Popup
        width={430}
        type="confirm"
        title={POPUP_TITLE.DELETE_BRAND}
        content={<DeleteBrand brandName={record.brandName} brandId={record._id} />}
      >
        Delete Brand
      </Popup>
    ),
    key: 'delete',
    icon: <CloseCircleOutlined />
  }
]

export const ViewOrderDropdown = (orderId: string): MenuItem[] => [
  {
    label: <Link to={orderId}>View Order</Link>,
    key: 'edit',
    icon: <EditOutlined />
  }
]
