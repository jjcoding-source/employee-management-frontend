import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AppLayout from '../../components/layout/AppLayout';
import { fakeEmployees } from '../../utils/constants';
import type { Employee } from '../../types';
import { useForm } from 'react-hook-form';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type FormData = Omit<Employee, 'id'> & { id?: number }; 

export default function EmployeeForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); 
  const isEdit = !!id;

  const canViewSalary = ['SuperAdmin', 'HRManager'].includes(user?.role || '');
  const canEdit = ['SuperAdmin', 'HRManager', 'Manager'].includes(user?.role || '');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  
  useEffect(() => {
    if (isEdit && id) {
      const employee = fakeEmployees.find(e => e.id === Number(id));
      if (employee) {
        reset(employee);
      } else {
        navigate('/employees');
      }
    } else {
      reset({
        status: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
      });
    }
  }, [id, isEdit, reset, navigate]);

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    
    alert(isEdit ? 'Employee updated!' : 'Employee added!');
    navigate('/employees');
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/employees')}
            className="mr-4 p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edit Employee' : 'Add New Employee'}
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow rounded-lg p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                {...register('firstName', { required: 'First name is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                {...register('lastName', { required: 'Last name is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department *
              </label>
              <select
                {...register('department', { required: 'Department is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
              </select>
              {errors.department && <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Position *
              </label>
              <input
                type="text"
                {...register('position', { required: 'Position is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Join Date *
              </label>
              <input
                type="date"
                {...register('joinDate', { required: 'Join date is required' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              {errors.joinDate && <p className="mt-1 text-sm text-red-600">{errors.joinDate.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status *
              </label>
              <select
                {...register('status', { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {canViewSalary && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salary (₹)
                </label>
                <input
                  type="number"
                  {...register('salary')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => navigate('/employees')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!canEdit}
              className={`px-6 py-2 rounded-md text-white font-medium ${
                canEdit 
                  ? 'bg-indigo-600 hover:bg-indigo-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isEdit ? 'Update Employee' : 'Add Employee'}
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}