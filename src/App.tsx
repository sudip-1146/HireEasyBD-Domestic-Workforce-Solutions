import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmployerDashboard from './pages/EmployerDashboard';
import WorkerDashboard from './pages/WorkerDashboard';
import JobBoard from './pages/JobBoard';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/booking/:workerId" element={<BookingPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;