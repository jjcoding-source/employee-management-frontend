import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
interface User {
  id: string;
  email: string;
  role: 'SuperAdmin' | 'HRManager' | 'Manager' | 'Employee';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, role: User['role']) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: User['role']) => {
    setUser({ id: 'fake-' + Date.now(), email, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};