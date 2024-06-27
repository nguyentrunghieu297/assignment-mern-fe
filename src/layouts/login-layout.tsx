import CustomerHeader from '@/components/customer-component/customer-header'
import Footer from '@/components/footer'
import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="min-h-screen">
        <CustomerHeader />
        <Layout className="mt-1">
          <Content className="bg-login-layout bg-contain">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}
