/* eslint-disable @typescript-eslint/no-explicit-any */
import ConfigAntdTheme from '@/libs/antd/config-theme'
import Meta from 'antd/es/card/Meta'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Form, Input, Spin, Typography } from 'antd'
import { useAuth } from '@/hooks/use-auth'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/routers'

export default function Register() {
  const { signUpMutation } = useAuth()
  const [form] = Form.useForm()

  const onFinish = (values: { name: string; username: string; password: string; confirmPassword: string }) => {
    if (values.password !== values.confirmPassword) {
      form.setFields([
        {
          name: 'confirmPassword',
          errors: ['Passwords do not match']
        }
      ])
      return
    }

    const { name, username, password } = values
    signUpMutation.mutate({ name, username, password })
  }

  const validateName = (_: any, value: string) => {
    if (!value) {
      return Promise.reject('Full name is required')
    }
    if (value.length < 2 || value.length > 50) {
      return Promise.reject('Full name must be between 2 and 50 characters')
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return Promise.reject('Full name can only contain letters and spaces')
    }
    return Promise.resolve()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateUsername = (_: any, value: string) => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/
    if (!value) {
      return Promise.reject('Username is required')
    }
    if (value.length < 6 || value.length > 20) {
      return Promise.reject('Username must be between 6 and 20 characters')
    }
    if (!usernameRegex.test(value)) {
      return Promise.reject('Username can only contain letters, numbers, underscores, and hyphens')
    }
    return Promise.resolve()
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
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-20">
        <ConfigProvider>
          <Card
            bordered={false}
            className="w-[900px] shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 90px 0 rgba(0, 0, 0, 0.1)] px-8 py-12"
          >
            <Meta className="text-center mb-8 text-md" />
            <Typography.Title className="text-center p-2">Welcome to my WatchShop</Typography.Title>
            <Typography.Paragraph className="text-center">
              If you have an account, please{' '}
              <Link to={ROUTE_PATHS.LOGIN} style={{ textDecoration: 'underline' }}>
                sign in
              </Link>
            </Typography.Paragraph>
            <Form form={form} onFinish={onFinish} className="px-20 py-4">
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item name="name" rules={[{ validator: validateName }]}>
                  <Input size="large" prefix={<UserOutlined />} placeholder="Fullname" />
                </Form.Item>
              </div>
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item name="username" rules={[{ validator: validateUsername }]}>
                  <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
              </div>
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item name="password" rules={[{ validator: validatePassword }]}>
                  <Input.Password size="large" prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
              </div>
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm your password' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                        }
                        return Promise.reject('The two passwords do not match')
                      }
                    })
                  ]}
                >
                  <Input.Password size="large" prefix={<LockOutlined />} placeholder="Confirm Password" />
                </Form.Item>
              </div>
              <ConfigAntdTheme theme={DefaultButtonStyle}>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full"
                  disabled={signUpMutation.isPending}
                >
                  {signUpMutation.isPending ? (
                    <Spin indicator={<LoadingOutlined className="text-white" spin />} />
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </ConfigAntdTheme>
            </Form>
          </Card>
        </ConfigProvider>
      </div>
    </div>
  )
}
