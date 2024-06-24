import productListApi from '@/services/watch'
import { useQuery } from '@tanstack/react-query'

export const useProductDetail = (productId: string) => {
  return useQuery({
    queryKey: ['viewProductDetail'],
    queryFn: () => productListApi.getProductDetail(productId)
  })
}
