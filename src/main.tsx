import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from '@/components/ui/provider';

import routes from './utils/router.tsx';

import './index.css';

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);