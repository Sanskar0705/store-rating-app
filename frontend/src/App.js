import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import StoreList from './pages/StoreList';
import StoreRatings from './pages/StoreRatings';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/stores" element={<StoreList />} />
        <Route path="/store-ratings" element={<StoreRatings />} />
      </Routes>
    </Router>
  );
}

export default App;
