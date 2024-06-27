/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment'
import { useState } from 'react'
import { Card, Avatar, Typography, Divider, Button, Form, Input, DatePicker, Modal } from 'antd'
import { UserOutlined, EditOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '@/hooks/use-auth'
import { useUpdateInfo } from '@/hooks/use-update-info'
import { useUpdatePassword } from '@/hooks/use-update-password'

const { Title, Text } = Typography

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [form] = Form.useForm()
  const [passwordForm] = Form.useForm()
  const { user } = useAuth()
  const updateMutation = useUpdateInfo(user?.data.id)
  const updatePasswordMutation = useUpdatePassword(user?.data.id)

  const handleEdit = () => {
    form.setFieldsValue({
      name: user?.data.name,
      dob: moment(user?.data.dob, 'DD-MM-YYYY')
    })
    setIsEditing(true)
  }

  const handleChangePassword = () => {
    setIsChangingPassword(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setIsChangingPassword(false)
  }

  const handleSave = (values: any) => {
    console.log('Saved values:', values)
    updateMutation.mutate(values)
    setIsEditing(false)
  }

  const handleSavePassword = (values: any) => {
    console.log('New password:', values)
    updatePasswordMutation.mutate(values)
    setIsChangingPassword(false)
  }

  const validatePassword = (_: any, value: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!value) {
      return Promise.reject('Password is required')
    }
    if (!passwordRegex.test(value)) {
      return Promise.reject(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
    }
    return Promise.resolve()
  }

  return (
    <div className="h-[88vh] bg-gray-100 p-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="flex flex-col items-center mb-6">
          <Avatar size={120} src={user?.data.profilePic} icon={<UserOutlined />} className="mb-4" />
          <Title level={2}>{user?.data.name}</Title>
          <Text type="warning">Tham gia từ {moment(user?.data.createdAt).format('YYYY')}</Text>
        </div>
        <Divider />
        <div className="mb-6">
          <Title level={4}>Information</Title>
          <Text strong>Name: </Text>
          <Text>{user?.data.name}</Text>
          <br />
          <Text strong>Year of birth: </Text> <Text>{moment(user?.data.dob).format('YYYY')}</Text>
          <br />
          <Text strong>Username: </Text> <Text>{user?.data.username}</Text>
        </div>
        <div className="flex justify-between space-x-4">
          <Button type="dashed" icon={<LockOutlined />} onClick={handleChangePassword}>
            Change password
          </Button>
          <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
            Update info
          </Button>
        </div>

        <Modal title="Update info" visible={isEditing} onCancel={handleCancel} footer={null}>
          <Form form={form} onFinish={handleSave} layout="vertical">
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="dob" label="Year of birth" rules={[{ required: true }]}>
              <DatePicker picker="year" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal title="Change password" visible={isChangingPassword} onCancel={handleCancel} footer={null}>
          <Form form={passwordForm} onFinish={handleSavePassword} layout="vertical">
            <Form.Item name="currentPassword" label="Current password" rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New password"
              rules={[{ validator: validatePassword }, { required: true }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              label="Verify password"
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Passwords do not match!'))
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Change password
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  )
}
