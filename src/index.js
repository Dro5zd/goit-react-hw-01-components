import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Global } from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <Global />
      <App />
    </React.Fragment>

  </React.StrictMode>,
);
