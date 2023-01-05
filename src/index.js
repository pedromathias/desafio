import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import AuthProvider from './context/auth';
import { GlobalStyle } from './style/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
    <App />
    </AuthProvider>
  </React.StrictMode>
);

