import React, { useState } from 'react';
import { Bell, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const adminInfo = JSON.parse(localStorage.getItem('adminInfo'));

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <h2>PROSKID <span className="accent">Admin</span></h2>
      </div>

      <div className="header-right">
        <div className="notification-bell" onClick={() => setShowNotifications(!showNotifications)}>
          <Bell size={20} />
          <span className="notification-count">3</span>
          
          {showNotifications && (
            <div className="dropdown-panel notifications-dropdown">
              <div className="dropdown-header">Notifications</div>
              <div className="dropdown-item">
                <p><strong>New Application</strong></p>
                <span>John Doe applied for Mech. Engineer</span>
              </div>
              <div className="dropdown-item">
                <p><strong>New Inquiry</strong></p>
                <span>Urgent quote request from Shell Oil</span>
              </div>
            </div>
          )}
        </div>

        <div className="admin-user-menu" onClick={() => setShowUserMenu(!showUserMenu)}>
          <img src="https://ui-avatars.com/api/?name=Admin&background=f39c12&color=fff" alt="Admin" />
          <div className="user-info-text">
            <strong>{adminInfo?.name || 'Admin'}</strong>
            <span>Master Admin</span>
          </div>
          <ChevronDown size={16} />

          {showUserMenu && (
            <div className="dropdown-panel user-dropdown">
              <div className="dropdown-item" onClick={() => navigate('/admin/settings')}>
                <Settings size={16} /> Settings
              </div>
              <div className="dropdown-item logout" onClick={handleLogout}>
                <LogOut size={16} /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
