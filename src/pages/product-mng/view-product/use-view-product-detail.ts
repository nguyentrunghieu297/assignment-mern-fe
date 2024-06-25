import productListApi from '@/services/watch'
import { useQuery } from '@tanstack/react-query'

export const useViewProductDetail = (productId: string) => {
  return useQuery({
    queryKey: ['viewProductDetail', productId],
    queryFn: () => productListApi.getProductDetail(productId)
  })
}
