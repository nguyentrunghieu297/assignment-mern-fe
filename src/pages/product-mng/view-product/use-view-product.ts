import productListApi from '@/services/watch'
import { useQuery } from '@tanstack/react-query'

export const useViewProductList = () => {
  return useQuery({
    queryKey: ['viewProductList'],
    queryFn: () => productListApi.getProductList()
  })
}
