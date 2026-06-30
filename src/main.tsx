import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';
import './styles/index.css';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div className="grid min-h-screen place-items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-white">Loading...</div>}>
      <App />
      <Toaster position="top-right" richColors closeButton />
    </Suspense>
  </React.StrictMode>,
);
