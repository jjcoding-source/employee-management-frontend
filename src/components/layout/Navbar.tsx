import { UserCircleIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  user: { email: string; role: string };
  onLogout: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              {user.role} Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <UserCircleIcon className="h-8 w-8 text-indigo-600" />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{user.email}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}