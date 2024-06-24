import apiInstance from '@/libs/axios'
import { AxiosError } from 'axios'
import { BrandDetail, CustomErrorAPIResponse } from '@/types'

const getBrandList = async () => {
  try {
    const { data } = await apiInstance.get<BrandDetail[]>(import.meta.env.VITE_VIEW_BRAND_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const createBrand = async (inputData: BrandDetail['brandName']) => {
  try {
    await apiInstance.post(import.meta.env.VITE_CREATE_BRAND_API, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const updateBrand = async (brandId: string, inputData: BrandDetail['brandName']) => {
  try {
    await apiInstance.put(import.meta.env.VITE_UPDATE_BRAND_API + brandId, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const deleteBrand = async (brandId: string) => {
  try {
    await apiInstance.delete(import.meta.env.VITE_DELETE_BRAND_API + brandId)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const brandListApi = {
  getBrandList,
  createBrand,
  updateBrand,
  deleteBrand
}

export default brandListApi
