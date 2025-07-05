import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import PublicHeader from './components/layout/PublicHeader';
import AdminHeader from './components/layout/AdminHeader';
import AdminSidebar from './components/layout/AdminSidebar';
import AdminFooter from './components/layout/AdminFooter';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Master from './pages/public/Master';
import Gallery from './pages/public/Gallery';
import Details from './pages/public/Details';
import JoinNow from './pages/public/JoinNow';
import Login from './pages/public/Login';
import NotFound from './pages/public/NotFound';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import JoinRequests from './pages/admin/JoinRequests';
import Students from './pages/admin/Students';
import Movements from './pages/admin/Movements';
import LessonPlans from './pages/admin/LessonPlans';
import MarkAttendance from './pages/admin/MarkAttendance';
import AttendanceRecords from './pages/admin/AttendanceRecords';
import Measurements from './pages/admin/Measurements';
import PortionTracker from './pages/admin/PortionTracker';

const queryClient = new QueryClient();

// Public Layout Component
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />
      <main>{children}</main>
    </div>
  );
};

// Admin Layout Component
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
              <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
              <Route path="/master" element={<PublicLayout><Master /></PublicLayout>} />
              <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
              <Route path="/details" element={<PublicLayout><Details /></PublicLayout>} />
              <Route path="/join" element={<PublicLayout><JoinNow /></PublicLayout>} />
              <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout><Dashboard /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/join-requests" element={
                <ProtectedRoute>
                  <AdminLayout><JoinRequests /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/students" element={
                <ProtectedRoute>
                  <AdminLayout><Students /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/movements" element={
                <ProtectedRoute>
                  <AdminLayout><Movements /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/lesson-plans" element={
                <ProtectedRoute>
                  <AdminLayout><LessonPlans /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/mark-attendance" element={
                <ProtectedRoute>
                  <AdminLayout><MarkAttendance /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/attendance-records" element={
                <ProtectedRoute>
                  <AdminLayout><AttendanceRecords /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/measurements" element={
                <ProtectedRoute>
                  <AdminLayout><Measurements /></AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/portion-tracker" element={
                <ProtectedRoute>
                  <AdminLayout><PortionTracker /></AdminLayout>
                </ProtectedRoute>
              } />
              
              {/* 404 Route */}
              <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
            </Routes>
            
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#fff',
                  color: '#000',
                  border: '1px solid #e5e7eb',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;