import Header from "./components/Header"
import SearchAndActions from "./components/SearchAndActions"
import QuickAccess from "./components/QuickAccess"
import SalesOverview from "./components/SalesOverview"
import TodayEarning from "./components/TodayEarning"
import OverviewChart from "./components/OverviewChart"
import BestSellers from "./components/BestSellers"

export default function DashboardPage() {
  return (
    <>
      <Header />
      <SearchAndActions />
      <QuickAccess />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sales Overview Section */}
          <div className="lg:col-span-3">
            <SalesOverview />
          </div>

          {/* Today's Earning Widget */}
          <div>
            <TodayEarning />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <OverviewChart />
          <BestSellers />
        </div>
      </div>
    </>
  )
}

