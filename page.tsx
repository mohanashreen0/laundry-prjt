import { StatsCards } from "@/components/admin-dashboard/stats-cards";
import { ManagementTabs } from "@/components/admin-dashboard/management-tabs";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Oversee all platform activity.</p>
      </div>
      <StatsCards />
      <ManagementTabs />
    </div>
  );
}
