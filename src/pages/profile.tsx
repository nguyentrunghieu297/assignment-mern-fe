import { useState } from 'react'
import { Card, Avatar, Typography, Divider, Button, Form, Input, DatePicker, Modal } from 'antd'
import { UserOutlined, EditOutlined, LockOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useAuth } from '@/hooks/use-auth'

const { Title, Text } = Typography

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
  const { user } = useAuth()

  const handleEdit = () => {
    form.setFieldsValue({
      name: user?.data.name,
      dob: moment(user?.data.dob, 'YYYY-MM-DD'),
      username: user?.data.username
    })
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = (values: any) => {
    console.log('Saved values:', values)
    setIsEditing(false)
  }

  return (
    <div className="h-[88vh] bg-gray-100 p-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="flex flex-col items-center mb-6">
          <Avatar size={120} src={user?.data.profilePic} icon={<UserOutlined />} className="mb-4" />
          <Title level={2}>{user?.data.name}</Title>
          <Text type="secondary">Tham gia từ {moment(user?.data.createdAt).format('DD/MM/YYYY')}</Text>
        </div>

        <Divider />

        <div className="mb-6">
          <Title level={4}>Thông tin cá nhân</Title>
          <Text strong>Tên:</Text> <Text>{user?.data.name}</Text>
          <br />
          <Text strong>Ngày sinh:</Text> <Text>{moment(user?.data.dob).format('DD/MM/YYYY')}</Text>
          <br />
          <Text strong>Tên đăng nhập:</Text> <Text>{user?.data.username}</Text>
          <br />
          <Text strong>Mật khẩu:</Text> <Text>••••••••</Text>
        </div>

        <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
          Chỉnh sửa thông tin
        </Button>

        <Modal title="Chỉnh sửa thông tin" visible={isEditing} onCancel={handleCancel} footer={null}>
          <Form form={form} onFinish={handleSave} layout="vertical">
            <Form.Item name="name" label="Tên" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="dob" label="Ngày sinh" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
            <Form.Item name="username" label="Tên đăng nhập" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Mật khẩu mới">
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  )
}
