import React from 'react';

import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import ErrorMessageModal from './components/ErrorMessageModal/ErrorMessageModal';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary errorPlaceholder={<ErrorMessageModal />} logErrors>
      <CssBaseline />
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
