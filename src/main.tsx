import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ProviderSearch } from './context/Search';
import AppRouter from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderSearch>
      <AppRouter />
    </ProviderSearch>
  </React.StrictMode>,
);
