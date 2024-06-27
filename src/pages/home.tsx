import ProductCard from '@/components/customer-component/product-card'
import { useViewProductList } from './product-mng/view-product/use-view-product'
import { Skeleton } from 'antd'

export default function Home() {
  const { data: products, isLoading } = useViewProductList()
  console.log(products?.data)

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      </div>
      <Skeleton active loading={isLoading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  )
}
