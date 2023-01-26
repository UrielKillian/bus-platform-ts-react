import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import IndexView from './views/index.view';
import LoginView from './views/auth/login.view';
import PlatformIndex from './views/platform/index.view';
import PlatformTicketsIndex from './views/platform/tickets.view';
import AdminIndex from './views/admin/index.view';
import RegisterViewindex from './views/auth/register.view';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexView/>} />
          <Route path="/login" element={<LoginView />} />
          {/* Platform Routes */}
          <Route path="/platform" element={<PlatformIndex/>} />
          <Route path="/platform/tickets" element={<PlatformTicketsIndex />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminIndex />} />
          {/* Auth Routes */}
          <Route path="/register" element={<RegisterViewindex />}/>
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
