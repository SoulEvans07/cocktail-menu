import '~/styles/reset.css';
import '~/styles/globals.css';
import '~/polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '~/screens';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
