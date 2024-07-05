import React from 'react';
import { PublicLayout } from '@/components';
import { useAuth } from '@/store';
import { Navigate } from 'react-router-dom';

export const PublicRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" replace /> : <PublicLayout />;
};
