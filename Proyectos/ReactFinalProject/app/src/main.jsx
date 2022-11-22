import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { TableContextProvider } from './context/TableContext';
import Academy from './pages/Academy/Academy';
import Courses from './pages/Courses/Courses';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TableContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TableContextProvider>
  </React.StrictMode>,
);
