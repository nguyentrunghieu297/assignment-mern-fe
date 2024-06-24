import Footer from '@/components/footer'
import Header from '@/components/header'
import Navigator from '@/components/navigator'
import IdleTimerWrapProvider from '@/context/idle-timer-provider'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <IdleTimerWrapProvider>
      <Layout className="min-h-screen">
        <Header isLoginPage={false} />
        <Layout>
          <div className="bg-foreground">
            <Navigator />
          </div>
          <Content className="flex flex-col">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    </IdleTimerWrapProvider>
  )
}
