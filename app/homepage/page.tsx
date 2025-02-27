import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { TotalSalesChart } from "@/components/dashboard/total-sales-chart"
import { ActiveAdvertisements } from "@/components/dashboard/active-advertisements"
import { RealtorEfficiency } from "@/components/dashboard/realtor-efficiency"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <DashboardStats />
      <TotalSalesChart/>
      <ActiveAdvertisements/>
      <RealtorEfficiency/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <TotalSalesChart />
        <div className="space-y-8">
          <ActiveAdvertisements />
          <RealtorEfficiency />
        </div>
      </div>
    </div>
  )
}

