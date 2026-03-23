import AppLayout from "../../components/layout/AppLayout";

export default function SuperAdminDashboard() {
  return (
    <AppLayout>
    <div className="p-8">
      <h1 className="text-3xl font-bold">SuperAdmin Dashboard</h1>
      <p className="mt-4">Welcome, SuperAdmin! You have full access.</p>
    </div>
    </AppLayout>
  );
}