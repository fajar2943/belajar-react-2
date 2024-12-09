import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardTotalBalance from "../components/Fragments/Dashboard/CardTotalBalance";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
import CardStatistics from "../components/Fragments/Dashboard/CardStatistics";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" desc={<CardTotalBalance/>}/>
        <Card
          title="Goals"
          desc={<CardGoal/>}
        />
        <CardBill/>
        <CardTransaction />
        <Card variant="md:col-span-2" title="Statistics" desc={<CardStatistics/>}/>
        <CardExpenseBreakdown/>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
