import apiInstance from '@/libs/axios'
import { AxiosError } from 'axios'
import { FormInputs as AddNewWatch } from '@/pages/product-mng/add-product/add-product'
import { FormInputs as UpdateWatch } from '@/pages/product-mng/update-product/edit-product'
import { CustomErrorAPIResponse, ProductDetail, ViewProductListAPIResponse } from '@/types'

const getProductList = async () => {
  try {
    const { data } = await apiInstance.get<ViewProductListAPIResponse>(import.meta.env.VITE_VIEW_WATCH_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const getProductDetail = async (productId: string) => {
  try {
    const { data } = await apiInstance.get<ProductDetail>(import.meta.env.VITE_VIEW_DETAIL_WATCH_API + productId)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const addNewWatch = async (inputData: AddNewWatch) => {
  try {
    await apiInstance.post(import.meta.env.VITE_CREATE_WATCH_API, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updateWatch = async (productId: string, inputData: UpdateWatch) => {
  try {
    await apiInstance.put(import.meta.env.VITE_UPDATE_WATCH_API + productId, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const deleteWatch = async (productId: string) => {
  try {
    await apiInstance.delete(import.meta.env.VITE_DELETE_WATCH_API + productId)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const productListApi = {
  getProductList,
  addNewWatch,
  deleteWatch,
  updateWatch,
  getProductDetail
}

export default productListApi
