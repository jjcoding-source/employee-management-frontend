export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'SuperAdmin' | 'HRManager' | 'Manager' | 'Employee';
  };
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: string;
  exp: number;

}