export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  position: string;
  joinDate: string; 
  status: 'Active' | 'On Leave' | 'Inactive';
  salary?: number; 
}