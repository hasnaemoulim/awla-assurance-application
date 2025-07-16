import { User, LoginCredentials } from '@/types/auth';

// Données de test pour les utilisateurs
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@awla-assurances.ma',
    firstName: 'Admin',
    lastName: 'Awla',
    role: 'admin',
    company: 'Awla Assurances',
    phone: '+212 5XX XX XX XX',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    email: 'client@test.ma',
    firstName: 'Mohammed',
    lastName: 'Alami',
    role: 'client',
    phone: '+212 6XX XX XX XX',
    createdAt: '2024-02-20'
  }
];

export const authenticateUser = async (credentials: LoginCredentials): Promise<User | null> => {
  // Simulation d'une API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(u => u.email === credentials.email);
  
  // Pour les tests, accepter n'importe quel mot de passe
  if (user) {
    return user;
  }
  
  return null;
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('awla_user');
  return userData ? JSON.parse(userData) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem('awla_user', JSON.stringify(user));
};

export const logout = (): void => {
  localStorage.removeItem('awla_user');
  window.location.href = '/auth/login';
};

export const redirectAfterLogin = (user: User): void => {
  if (user.role === 'admin') {
    window.location.href = '/admin/dashboard';
  } else {
    window.location.href = '/client/dashboard';
  }
};
