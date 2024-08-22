import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import MedicineList from './components/MedicineList';
import AddMedicine from './components/AddMedicine';
import EditMedicine from './components/EditMedicine';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicine-list" element={<MedicineList />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/edit-medicine/:id" element={<EditMedicine />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
