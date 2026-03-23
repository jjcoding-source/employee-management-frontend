import type { Employee } from '../types';

export const fakeEmployees: Employee[] = [
  {
    id: 1,
    firstName: 'Aisha',
    lastName: 'Khan',
    email: 'aisha.khan@company.com',
    phone: '+91 98765 43210',
    department: 'Engineering',
    position: 'Senior Developer',
    joinDate: '2022-03-15',
    status: 'Active',
    salary: 1200000,
  },
  {
    id: 2,
    firstName: 'Rahul',
    lastName: 'Menon',
    email: 'rahul.menon@company.com',
    department: 'Marketing',
    position: 'Content Strategist',
    joinDate: '2023-01-10',
    status: 'Active',
  },

  {
    id: 3,
    firstName: 'Priya',
    lastName: 'Nair',
    email: 'priya.nair@company.com',
    department: 'HR',
    position: 'HR Coordinator',
    joinDate: '2021-11-05',
    status: 'Active',
    salary: 850000,
  },

];