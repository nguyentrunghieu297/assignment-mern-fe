import accountListApi from '@/services/member'
import { useQuery } from '@tanstack/react-query'

export const useViewAccountList = () => {
  return useQuery({
    queryKey: ['viewAccountList'],
    queryFn: () => accountListApi.getAccountList()
  })
}
