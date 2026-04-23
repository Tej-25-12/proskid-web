import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock, Mail, AlertCircle, Loader } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('adminInfo', JSON.stringify(data));
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-admin">
            <span className="logo-text">PRO<span className="accent">SKID</span></span>
            <span className="logo-sub">ADMIN PORTAL</span>
          </div>
          <h2>Sign In</h2>
          <p>Enter your credentials to access the dashboard</p>
        </div>

        {error && (
          <div className="login-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} />
              <input 
                type="email" 
                placeholder="admin@proskid.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? <Loader className="spin" size={20} /> : 'Login to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
