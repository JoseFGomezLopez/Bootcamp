import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Courses from './pages/Courses/Courses';
import Login from './pages/Login/Login';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
