import brandListApi from '@/services/brand'
import { useQuery } from '@tanstack/react-query'

export const useViewBrandList = () => {
  return useQuery({
    queryKey: ['viewBrandList'],
    queryFn: () => brandListApi.getBrandList()
  })
}
