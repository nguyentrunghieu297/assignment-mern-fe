import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export type DecodedToken = {
  sub: string
  role: string
  iat: number
  exp: number
}

export type InputsType = {
  key: string
  label: string
  type: 'text' | 'input' | 'select' | 'date' | 'badge' | 'textarea'
  isAllowEdit?: boolean
  options?: { key: string; value: string | number }[]
}

export type InputsField = {
  view?: InputsType[]
  viewCertification?: InputsType[]
  edit?: InputsType[]
  editStatus?: InputsType[]
  editCertification?: InputsType[]
  add?: InputsType[]
}

export type GetCurrentUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: AuthUser
}

export type AuthUser = {
  id: number
  fullName: string
  dob: string
  username: string
  isAdmin: boolean
  profilePic: string
}

export type LoginUserAPIResponse = {
  message: string
  httpStatus: string
  timeStamp: Date
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type ProductTableData = {
  key: React.Key
  _id: string
  name: string
  description: string
  price: number
  brand: string
  image: string
}

export type AccountTableData = {
  key: React.Key
  _id: string
  name: string
  profilePic: string
  dob: string
  isAdmin: string
}

export type BrandTableData = {
  key: React.Key
  _id: string
  brandName: string
  createdAt: string
  updatedAt: string
}

// API Response
export type CustomErrorAPIResponse = {
  statusCode: number
  message: string
  timestamp: string
}

export type ViewProductListAPIResponse = {
  message: string
  httpStatus: string
  timestamp: string
  data: ProductDetail[]
}

export type ProductDetail = {
  _id: string
  name: string
  description: string
  price: number
  brand: string
  image: string
  comments: {
    _id: string
    rating: number
    content: string
    author: {
      _id: string
      username: string
    }
    createdAt: string
  }[]
}

export type ViewBrandListAPIResponse = {
  message: string
  httpStatus: string
  timestamp: string
  data: BrandDetail[]
}

export type BrandDetail = {
  key: React.Key
  _id: string
  brandName: string
  createdAt: string
  updatedAt: string
}

export type ViewAccountListAPIResponse = {
  message: string
  httpStatus: string
  timestamp: string
  data: AccountDetail[]
}

export type AccountDetail = {
  key: React.Key
  _id: string
  profilePic: string
  name: string
  dob: string
  isAdmin: string
}
