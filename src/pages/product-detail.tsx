import { useState } from 'react'
import { Card, Rate, Input, Button, List, Avatar, notification } from 'antd'
import { ShoppingCartOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useViewProductDetail } from './product-mng/view-product/use-view-product-detail'
import { useParams } from 'react-router-dom'
import { useCreateFeedback } from '@/hooks/use-create-feedback'
import { useAuth } from '@/hooks/use-auth'

const { TextArea } = Input

export default function ProductDetail() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const productId = useParams()
  const { data } = useViewProductDetail(productId.id)
  const createFeedbackMutation = useCreateFeedback(productId.id)
  const { user } = useAuth()

  const product = {
    name: 'Luxury Watch',
    description: 'This is a luxurious watch with a sleek design and premium quality materials.',
    price: '$999.99',
    image: 'https://via.placeholder.com/400',
    ratings: 4.5,
    reviews: 120
  }

  const handleSubmitFeedback = () => {
    console.log('Rating:', rating)
    console.log('Feedback:', feedback)
    if (user?.data) {
      createFeedbackMutation.mutate({
        feedback: {
          rating: rating,
          content: feedback,
          author: user?.data.id
        }
      })
    } else {
      notification.error({
        message: 'Please login first'
      })
    }
    setRating(0)
    setFeedback('')
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-64 w-full object-cover md:h-full md:w-80" src={data?.image} alt={data?.name} />
          </div>
          <div className="p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-900">{data?.name}</h2>
            <p className="mt-2 text-gray-600">{data?.description}</p>
            <div className="mt-4 flex items-center">
              <Rate disabled defaultValue={product.ratings} className="text-yellow-500" />
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>
            <div className="mt-4">
              <span className="text-3xl font-bold text-gray-900">{data?.price}</span>
            </div>
            <div className="mt-6 space-x-4">
              <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
                Add to Cart
              </Button>
              <Button
                type="primary"
                icon={<ThunderboltOutlined />}
                size="large"
                className="bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-8 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        <List
          itemLayout="horizontal"
          dataSource={data?.comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{item.author.username[0]}</Avatar>}
                title={
                  <div>
                    {item.author.username}{' '}
                    <Rate count={3} disabled defaultValue={item.rating} className="text-yellow-500 text-sm ml-2" />
                  </div>
                }
                description={item.content}
              />
            </List.Item>
          )}
        />
      </Card>

      <Card className="mt-8 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold mb-4">Leave Your Feedback</h3>
        <Rate count={3} value={rating} onChange={setRating} className="text-yellow-500 text-2xl mb-4" />
        <TextArea
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here"
          className="mb-4"
        />
        <Button type="primary" onClick={handleSubmitFeedback}>
          Submit Feedback
        </Button>
      </Card>
    </div>
  )
}
