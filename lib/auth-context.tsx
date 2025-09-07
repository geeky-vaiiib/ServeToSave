"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { authAPI, User, getStoredUser, setStoredUser, handleApiError } from './api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  updateUser: (userData: any) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const initializeAuth = async () => {
      try {
        const storedUser = getStoredUser();
        const token = localStorage.getItem('token');
        
        if (storedUser && token) {
          // Verify token is still valid by fetching current user
          const response = await authAPI.getCurrentUser();
          setUser(response.user);
          setStoredUser(response.user);
        }
      } catch (error) {
        // Token is invalid, clear stored data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await authAPI.login(email, password);
      
      // Store token and user data
      localStorage.setItem('token', response.token);
      setUser(response.user);
      setStoredUser(response.user);
    } catch (error) {
      throw new Error(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: any) => {
    try {
      setLoading(true);
      const response = await authAPI.signup(userData);
      
      // Store token and user data
      localStorage.setItem('token', response.token);
      setUser(response.user);
      setStoredUser(response.user);
    } catch (error) {
      throw new Error(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const updateUser = async (userData: any) => {
    try {
      const response = await authAPI.updateProfile(userData);
      setUser(response.user);
      setStoredUser(response.user);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
