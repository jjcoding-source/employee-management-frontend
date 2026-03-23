import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  HomeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const { user } = useAuth();

  // Role-based menu items
  const menuItems = [
    {
      name: 'Dashboard',
      icon: HomeIcon,
      href: `/dashboard/${user?.role.toLowerCase()}`,
      allowedRoles: ['SuperAdmin', 'HRManager', 'Manager', 'Employee'],
    },
    {
      name: 'Employees',
      icon: UsersIcon,
      href: '/employees',
      allowedRoles: ['SuperAdmin', 'HRManager', 'Manager'],
    },
    {
      name: 'Departments',
      icon: BuildingOfficeIcon,
      href: '/departments',
      allowedRoles: ['SuperAdmin', 'HRManager'],
    },
    {
      name: 'My Profile',
      icon: UserIcon,
      href: '/profile',
      allowedRoles: ['Employee', 'Manager', 'HRManager', 'SuperAdmin'],
    },
    {
      name: 'Settings',
      icon: Cog6ToothIcon,
      href: '/settings',
      allowedRoles: ['SuperAdmin'],
    },
  ];

  return (
    <div className="flex flex-col w-64 bg-indigo-800 text-white">
      <div className="p-6 text-xl font-bold border-b border-indigo-700">
        EMS Portal
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems
          .filter((item) => item.allowedRoles.includes(user?.role || ''))
          .map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-indigo-700 text-white'
                    : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
                }`
              }
            >
              <item.icon className="mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
      </nav>

      {/* Logout at bottom */}
      <div className="p-4 border-t border-indigo-700">
        <button
          onClick={() => {/* we'll hook logout later */}}
          className="group flex w-full items-center px-4 py-3 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-700 hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="mr-3 h-6 w-6 flex-shrink-0" />
          Logout
        </button>
      </div>
    </div>
  );
}