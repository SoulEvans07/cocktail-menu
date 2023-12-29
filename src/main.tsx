import '~/styles/reset.css';
import '~/styles/globals.css';
import '~/polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { CollectionPage } from '~/screens/collection-page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CollectionPage active />
  </React.StrictMode>
);
