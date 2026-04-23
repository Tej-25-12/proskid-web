import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import AdminDashboard from './admin/AdminDashboard';
import AdminJobs from './admin/AdminJobs';
import AdminApplications from './admin/AdminApplications';
import AdminInquiries from './admin/AdminInquiries';
import AnimatedPage from '../components/AnimatedPage';
import './AdminPanel.css';

const AdminPanel = () => {
  const location = useLocation();
  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));

  return (
    <div className="admin-panel">
      <AdminSidebar />
      
      <div className="admin-main">
        <AdminHeader />

        <main className="admin-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<AnimatedPage><AdminDashboard /></AnimatedPage>} />
              <Route path="jobs" element={<AnimatedPage><AdminJobs /></AnimatedPage>} />
              <Route path="applications" element={<AnimatedPage><AdminApplications /></AnimatedPage>} />
              <Route path="inquiries" element={<AnimatedPage><AdminInquiries /></AnimatedPage>} />
              <Route path="services" element={<AnimatedPage><div className="admin-placeholder">Services Management Coming Soon</div></AnimatedPage>} />
              <Route path="projects" element={<AnimatedPage><div className="admin-placeholder">Projects Management Coming Soon</div></AnimatedPage>} />
              <Route path="sister-company" element={<AnimatedPage><div className="admin-placeholder">Sister Company Management Coming Soon</div></AnimatedPage>} />
              <Route path="testimonials" element={<AnimatedPage><div className="admin-placeholder">Testimonials Management Coming Soon</div></AnimatedPage>} />
              <Route path="settings" element={<AnimatedPage><div className="admin-placeholder">Settings Management Coming Soon</div></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
