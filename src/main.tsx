import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Products/Products';
import { ProviderSearch } from './context/Search';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderSearch>
      <Home />
    </ProviderSearch>
  </React.StrictMode>,
);
