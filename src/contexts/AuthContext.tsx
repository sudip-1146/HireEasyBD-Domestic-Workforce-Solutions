import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'employer' | 'worker';
  avatar?: string;
  verified?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: 'employer' | 'worker') => Promise<void>;
  signup: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: 'employer' | 'worker') => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: role === 'employer' ? 'Rashida Ahmed' : 'Fatima Khan',
      email,
      role,
      avatar: `https://images.pexels.com/photos/${role === 'employer' ? '3763188' : '3778966'}/pexels-photo-${role === 'employer' ? '3763188' : '3778966'}.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`,
      verified: true
    };
    setUser(mockUser);
  };

  const signup = async (userData: Omit<User, 'id'> & { password: string }) => {
    // Mock signup - in real app, this would call an API
    const { password, ...userInfo } = userData;
    const newUser: User = {
      ...userInfo,
      id: Date.now().toString(),
      verified: false
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};