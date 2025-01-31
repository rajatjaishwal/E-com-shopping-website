import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AuthenticationPage from './AuthenticationPage';
import AdminAuthPage from './AdminAuthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/admin" element={<AdminAuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;







