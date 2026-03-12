import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import './styles/main.scss';
import { AppShellProvider } from './app/AppShellContext';
import { createAppRouter } from './router';

const queryClient = new QueryClient();
const router = createAppRouter(queryClient);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppShellProvider>
        <RouterProvider router={router} />
      </AppShellProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
