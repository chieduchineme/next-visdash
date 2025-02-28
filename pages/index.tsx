// pages/Dashboard.tsx
import MyCards from "../components/MyCards";
import RecentTransactions from "../components/RecentTransactions";
import WeeklyActivity from "../components/WeeklyActivity";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";
import styles from "../styles/dashboard.module.css";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left: My Cards */}
          <div className="md:col-span-2">
            <MyCards />
          </div>
          {/* Center: Recent Transactions */}
          <div className="md:col-span-1">
            <RecentTransactions />
          </div>
          {/* Center: Weekly Activity */}
          <div className="md:col-span-2">
            <WeeklyActivity />
          </div>
          {/* Center: Expense Statistics */}
          <div className="md:col-span-1">
            <ExpenseStatistics />
          </div>
          {/* Bottom left: Quick Transfer */}
          <div className="md:col-span-1">
            <QuickTransfer />
          </div>
          {/* Bottom center and right: Balance History */}
          <div className="md:col-span-2">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </Layout>
  );
}
