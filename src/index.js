import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/Context/AuthContext'
import { UserContextProvider } from './components/Context/UserContext'
import { CompanyContextProvider } from './components/Context/CompanyContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <CompanyContextProvider>
          <App />
        </CompanyContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

