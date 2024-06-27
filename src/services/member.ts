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

const updateAccount = async (userId: string, inputData: { name: string; dob: string }) => {
  try {
    await apiInstance.put(import.meta.env.VITE_UPDATE_MEMBER_API + userId, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const changePassword = async (userId: string, inputData: { currentPassword: string; newPassword: string }) => {
  try {
    await apiInstance.put(import.meta.env.VITE_UPDATE_PASSWORD + userId, inputData)
  } catch (error) {
    const errorResponse = error as AxiosError<CustomErrorAPIResponse>
    throw new Error(errorResponse.response?.data.message)
  }
}

const accountListApi = {
  getAccountList,
  updateAccount,
  changePassword
}

export default accountListApi
