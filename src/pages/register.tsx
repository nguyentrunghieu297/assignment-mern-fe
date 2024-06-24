import ConfigAntdTheme from '@/libs/antd/config-theme'
import Meta from 'antd/es/card/Meta'
import { ERROR_MESSAGES } from '@/constants'
import { DefaultButtonStyle } from '@/libs/antd/antd-styles'
import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Form, Input, Spin, Typography } from 'antd'
import { useAuth } from '@/hooks/use-auth'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/routers'

export default function Register() {
  const { signUpMutation } = useAuth()

  const onSubmitForm = (values: { username: string; password: string }) => {
    signUpMutation.mutate(values)
  }

  // TODO: Add error message
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-20">
        <ConfigProvider>
          <Card
            bordered={false}
            className=" w-[900px] shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 90px 0 rgba(0, 0, 0, 0.1)] px-8 py-12"
          >
            <Meta className="text-center mb-8 text-md" />
            <Typography.Title className="text-center p-2">Welcome to my WatchShop</Typography.Title>
            <Typography.Paragraph className="text-center">
              If you have the account, please{' '}
              <Link to={ROUTE_PATHS.LOGIN} style={{ textDecoration: 'underline' }}>
                sign in
              </Link>
            </Typography.Paragraph>
            <Form onFinish={(values) => onSubmitForm(values)} className="px-20 py-4">
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: ERROR_MESSAGES.EM01 },
                    { min: 6, message: ERROR_MESSAGES.EM01 }
                  ]}
                >
                  <Input size="large" prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
              </div>
              <div className="relative my-4 mt-7 mb-7">
                <Form.Item name="password" rules={[{ required: true, message: ERROR_MESSAGES.EM01 }]}>
                  <Input.Password size="large" prefix={<LockOutlined />} type="password" placeholder="Password" />
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
