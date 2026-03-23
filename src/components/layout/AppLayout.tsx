import { useAuth } from '../../contexts/AuthContext';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar user={user} onLogout={logout} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}