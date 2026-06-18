import DashboardCard
from "@/components/admin/DashboardCard";

export default function
AdminDashboardPage() {

  return (

    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-6"
      >

        Dashboard

      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-6"
      >

        <DashboardCard
          title="Revenue"
          value="PKR 250,000"
        />

        <DashboardCard
          title="Orders"
          value="325"
        />

        <DashboardCard
          title="Customers"
          value="120"
        />

        <DashboardCard
          title="Products"
          value="20"
        />

      </div>

    </div>
  );
}
