import Dropdown from '@/components/dropdown'
import { AccountTableData, BrandTableData, ProductTableData } from '@/types'
import { Image, TableColumnsType, Tooltip } from 'antd'
import { ViewBrandDropdown, ViewProductDropdown } from './menu-data'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/routers'

export const VIEW_PRODUCT_COLS: TableColumnsType<ProductTableData> = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: 160,
    align: 'center',
    sorter: {
      compare: (a, b) => a._id.localeCompare(b._id)
    },
    defaultSortOrder: 'ascend'
  },
  {
    title: 'IMAGE',
    dataIndex: 'image',
    key: 'image',
    width: 200,
    align: 'center',
    render: (image: string) => {
      return <Image src={image} width={100} height={100} />
    }
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: (name: string, record: ProductTableData) => <Link to={`${ROUTE_PATHS.M_WATCH}/${record._id}`}>{name}</Link>
  },
  {
    title: 'BRAND',
    dataIndex: 'brand',
    key: 'brand',
    width: 200,
    align: 'center',
    render: (brand: { brandName: string }) => brand.brandName
  },
  {
    title: 'DESCRIPTION',
    dataIndex: 'description',
    key: 'description',
    align: 'center'
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: 'price',
    width: 140,
    align: 'center'
  },
  {
    title: 'Action',
    key: 'operation',
    width: 90,
    align: 'center',

    render: (record) => {
      return <Dropdown items={ViewProductDropdown(record)} />
    }
  }
]

export const VIEW_BRAND_COLS: TableColumnsType<BrandTableData> = [
  {
    title: 'BRAND ID',
    dataIndex: '_id',
    key: '_id',
    width: 160,
    align: 'center',
    sorter: {
      compare: (a, b) => a._id.localeCompare(b._id)
    },
    defaultSortOrder: 'ascend'
  },
  {
    title: 'BRAND NAME',
    dataIndex: 'brandName',
    key: 'brandName',
    align: 'center',
    render: (name: string, record: BrandTableData) => <Link to={`${ROUTE_PATHS.M_BRAND}/${record._id}`}>{name}</Link>
  },
  {
    title: 'CREATED AT',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center'
  },
  {
    title: 'UPDATED AT',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center'
  },
  {
    title: 'Action',
    key: 'operation',
    width: 100,
    align: 'center',
    render: (record) => {
      return <Dropdown items={ViewBrandDropdown(record)} />
    }
  }
]

export const VIEW_ACCOUNT_COLS: TableColumnsType<AccountTableData> = [
  {
    title: 'ID',
    dataIndex: '_id',
    width: 100,
    key: '_id',
    align: 'center',
    sorter: {
      compare: (a, b) => a._id.localeCompare(b._id)
    },
    defaultSortOrder: 'ascend'
  },
  {
    title: 'AVATAR',
    dataIndex: 'profilePic',
    width: 100,
    key: 'profilePic',
    align: 'center',
    render: (avatar: string) => {
      return <Image src={avatar} width={50} height={50} />
    }
  },
  {
    title: 'USER NAME',
    dataIndex: 'username',
    width: 180,
    key: 'username',
    align: 'center',
    render: (username) => (
      <Tooltip title={username}>
        <span>{username}</span>
      </Tooltip>
    )
  },
  {
    title: 'FULL NAME',
    dataIndex: 'name',
    width: 180,
    key: 'name',
    align: 'center',
    render: (name) => (
      <Tooltip title={name}>
        <span>{name}</span>
      </Tooltip>
    )
  },
  {
    title: 'DATE OF BIRTH',
    dataIndex: 'dob',
    width: 140,
    key: 'dob',
    align: 'center'
  },
  {
    title: 'ADMIN',
    dataIndex: 'isAdmin',
    key: 'isAdmin',
    width: 90,
    align: 'center',
    render: (record) => {
      return record ? <span className="text-red-500">Yes</span> : <span className="text-green-500">No</span>
    }
  }
]
