import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import IndexView from './views/index.view';
import LoginView from './views/auth/login.view';
import PlatformIndex from './views/platform/index.view';
import PlatformTicketsIndex from './views/platform/tickets.view';
import AdminIndex from './views/admin/index.view';
import RegisterViewindex from './views/auth/register.view';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const isLoged = localStorage.getItem('user');
  let location = useLocation();

  if (!isLoged) {
      return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexView/>} />
          <Route path="/login" element={<LoginView />} />
          {/* Platform Routes */}
          <Route path="/platform" element={<ProtectedRoute><PlatformIndex/></ProtectedRoute>} />
          <Route path="/platform/tickets" element={<ProtectedRoute><PlatformTicketsIndex /></ProtectedRoute>} />
          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminIndex /></ProtectedRoute>} />
          {/* Auth Routes */}
          <Route path="/register" element={<RegisterViewindex />}/> 
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
