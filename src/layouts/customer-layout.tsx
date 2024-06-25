import CustomerFooter from '@/components/customer-component/customer-footer'
import CustomerHeader from '@/components/customer-component/customer-header'

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <CustomerHeader />
        {children}
        <CustomerFooter />
      </div>
    </div>
  )
}
