import apiInstance from '@/libs/axios'
import { AxiosError } from 'axios'
import { CustomErrorAPIResponse, ViewAccountListAPIResponse } from '@/types'

const getAccountList = async () => {
  try {
    const { data } = await apiInstance.get<ViewAccountListAPIResponse>(import.meta.env.VITE_VIEW_MEMBER_API)
    return data
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const accountListApi = {
  getAccountList
}

export default accountListApi
