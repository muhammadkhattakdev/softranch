'use client'

import React from 'react'
import { useAuth } from '@/context/AuthContext'
import './dashboard.css'

export default function DashboardHome() {
  const { user } = useAuth()

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
          <p>Your dashboard content will appear here. This includes analytics, recent activity, and quick actions.</p>
          <div className="dash-placeholder-features">
            <div className="dash-feature-item">✨ Analytics Dashboard</div>
            <div className="dash-feature-item">📈 Performance Metrics</div>
            <div className="dash-feature-item">🔔 Recent Activity</div>
            <div className="dash-feature-item">⚡ Quick Actions</div>
          </div>
        </div>
      </div>
    </div>
  )
}