import { EllipsisOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card

type Product = {
  _id: string
  name: string
  description: string
  price: number
  brand: { brandName: string }
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Card
        cover={<img alt={product.name} src={product.image} className="w-full h-48 object-cover" />}
        actions={[<EllipsisOutlined key="ellipsis" title="View" />]}
        className="border-none"
      >
        <Link to={`/watch/${product._id}`}>
          <Meta
            title={
              <div>
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <div className="flex justify-between">
                  <p className="text-gray-600">{product.brand.brandName}</p>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            }
            description={<p className="text-gray-600">{product.description}</p>}
          />
        </Link>
      </Card>
    </div>
  )
}
