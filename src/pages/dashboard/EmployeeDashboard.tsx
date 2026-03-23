import AppLayout from "../../components/layout/AppLayout";

export default function EmployeeDashboard() {
  return (
    <AppLayout>
    <div className="p-8">
      <h1 className="text-3xl font-bold">Employee Dashboard</h1>
      <p className="mt-4">Your profile, leaves, and personal info.</p>
    </div>
    </AppLayout>
  );
}