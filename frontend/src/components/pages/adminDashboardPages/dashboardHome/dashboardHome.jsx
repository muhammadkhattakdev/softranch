import React from 'react';
import { useAuth } from '../../../../context/authContext';
import './style.css';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="dash-home">
      <div className="dash-home-header">
        <h1 className="dash-home-title">
          Welcome back, {user?.name}!
        </h1>
        <p className="dash-home-subtitle">
          Here's what's happening with your website today.
        </p>
      </div>

      {/* Content will be added later */}
      <div className="dash-home-placeholder">
        <div className="dash-placeholder-card">
          <div className="dash-placeholder-icon">📊</div>
          <h2>Dashboard Overview</h2>
          <p>Your dashboard content will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;