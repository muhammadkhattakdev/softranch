import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar
} from 'recharts';
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  Truck,
  HardHat,
  Wrench,
  Shield,
  Target,
  Zap,
  Bell,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Home,
  Settings,
  LogOut,
  ChevronDown,
  Award,
  FileText,
  BarChart3,

  Activity,
  Briefcase,
  CreditCard,
  Archive
} from 'lucide-react';

const ConstructionDashboard = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('This Month');

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 850000, expenses: 620000, profit: 230000 },
    { month: 'Feb', revenue: 920000, expenses: 680000, profit: 240000 },
    { month: 'Mar', revenue: 1050000, expenses: 750000, profit: 300000 },
    { month: 'Apr', revenue: 1180000, expenses: 820000, profit: 360000 },
    { month: 'May', revenue: 1350000, expenses: 950000, profit: 400000 },
    { month: 'Jun', revenue: 1420000, expenses: 980000, profit: 440000 }
  ];

  const projectStatusData = [
    { name: 'Completed', value: 35, color: '#10b981' },
    { name: 'In Progress', value: 28, color: '#f97316' },
    { name: 'Planning', value: 15, color: '#3b82f6' },
    { name: 'On Hold', value: 8, color: '#ef4444' }
  ];

  const teamProductivityData = [
    { day: 'Mon', productivity: 85, efficiency: 78 },
    { day: 'Tue', productivity: 92, efficiency: 85 },
    { day: 'Wed', productivity: 78, efficiency: 82 },
    { day: 'Thu', productivity: 88, efficiency: 90 },
    { day: 'Fri', productivity: 95, efficiency: 88 },
    { day: 'Sat', productivity: 82, efficiency: 75 }
  ];

  const equipmentUtilizationData = [
    { equipment: 'Excavators', utilization: 85 },
    { equipment: 'Cranes', utilization: 92 },
    { equipment: 'Bulldozers', utilization: 78 },
    { equipment: 'Loaders', utilization: 88 },
    { equipment: 'Trucks', utilization: 95 }
  ];

  const safetyMetricsData = [
    { month: 'Jan', incidents: 2, nearMisses: 8, trainingHours: 450 },
    { month: 'Feb', incidents: 1, nearMisses: 5, trainingHours: 520 },
    { month: 'Mar', incidents: 0, nearMisses: 3, trainingHours: 680 },
    { month: 'Apr', incidents: 1, nearMisses: 4, trainingHours: 590 },
    { month: 'May', incidents: 0, nearMisses: 2, trainingHours: 720 },
    { month: 'Jun', incidents: 0, nearMisses: 1, trainingHours: 850 }
  ];

  const projects = [
    {
      id: 1,
      name: 'Downtown Office Complex',
      client: 'Metro Properties',
      progress: 75,
      budget: '$2.5M',
      deadline: '2024-08-15',
      status: 'On Track',
      team: 12,
      location: 'Downtown District'
    },
    {
      id: 2,
      name: 'Residential Villa Project',
      client: 'Luxury Homes Inc.',
      progress: 45,
      budget: '$1.8M',
      deadline: '2024-10-30',
      status: 'Delayed',
      team: 8,
      location: 'Suburban Hills'
    },
    {
      id: 3,
      name: 'Industrial Warehouse',
      client: 'LogiCorp Solutions',
      progress: 90,
      budget: '$3.2M',
      deadline: '2024-07-20',
      status: 'Ahead',
      team: 15,
      location: 'Industrial Zone'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'project', message: 'Downtown Office Complex reached 75% completion', time: '2 hours ago', icon: Building2 },
    { id: 2, type: 'safety', message: 'Monthly safety training completed for Site A', time: '4 hours ago', icon: Shield },
    { id: 3, type: 'equipment', message: 'New excavator delivered to Warehouse project', time: '6 hours ago', icon: Truck },
    { id: 4, type: 'team', message: 'John Smith assigned to Villa project as site manager', time: '8 hours ago', icon: Users },
    { id: 5, type: 'financial', message: 'Invoice #2024-156 approved for $85,000', time: '12 hours ago', icon: DollarSign }
  ];

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: '$8.42M',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald',
      bgColor: 'bg-emerald-500'
    },
    {
      title: 'Active Projects',
      value: '86',
      change: '+5',
      trend: 'up',
      icon: Building2,
      color: 'orange',
      bgColor: 'bg-orange-500'
    },
    {
      title: 'Team Members',
      value: '234',
      change: '+12',
      trend: 'up',
      icon: Users,
      color: 'blue',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Safety Score',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: Shield,
      color: 'purple',
      bgColor: 'bg-purple-500'
    }
  ];

  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Building2, label: 'Projects' },
    { icon: Users, label: 'Team' },
    { icon: Truck, label: 'Equipment' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: DollarSign, label: 'Finance' },
    { icon: Shield, label: 'Safety' },
    { icon: FileText, label: 'Reports' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      marginTop: "-80px",
      paddingTop: "80px"
    }}>
      {/* Sidebar */}
      <div style={{
        width: '80px',
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(249, 115, 22, 0.1)',
        transition: 'all 0.3s ease',
        position: 'fixed',
        height: '100vh',
        zIndex: 1000,
        overflow: 'hidden',
        marginTop: "-80px"
      }}>
        {/* Logo */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(249, 115, 22, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)'
          }}>
            <Building2 size={24} color="white" />
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '1rem 0' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '0.75rem',
                margin: '0.5rem 1rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: item.active ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(234, 88, 12, 0.1))' : 'transparent',
                border: item.active ? '1px solid rgba(249, 115, 22, 0.3)' : '1px solid transparent',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.target.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.target.style.borderColor = 'rgba(249, 115, 22, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'transparent';
                }
              }}
              title={item.label}
            >
              <item.icon size={20} color={item.active ? '#f97316' : '#94a3b8'} />
              {item.active && (
                <div style={{
                  position: 'absolute',
                  right: '-3px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: '20px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  borderRadius: '2px'
                }}></div>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.1rem',
            border: '2px solid rgba(249, 115, 22, 0.3)',
            boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
          }}
          title="John Doe - Project Manager"
          >
            JD
          </div>
          <button style={{
            width: '40px',
            height: '40px',
            background: 'rgba(249, 115, 22, 0.1)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '50%',
            color: '#f97316',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(249, 115, 22, 0.2)';
            e.target.style.borderColor = 'rgba(249, 115, 22, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(249, 115, 22, 0.1)';
            e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
          }}
          title="Sign Out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        marginLeft: '80px',
        transition: 'margin-left 0.3s ease',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <header style={{
          padding: '1.5rem 2rem',
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(249, 115, 22, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: 0,
                background: 'linear-gradient(135deg, #ffffff, #f97316)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Construction Dashboard
              </h1>
              <p style={{
                margin: 0,
                color: '#94a3b8',
                fontSize: '0.9rem'
              }}>
                Welcome back, John! Here's what's happening with your projects.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {            /* Search */}
            <div style={{
              position: 'relative',
              display: window.innerWidth >= 768 ? 'block' : 'none'
            }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8'
                }}
              />
              <input
                type="text"
                placeholder="Search projects, teams..."
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  width: window.innerWidth >= 1024 ? '300px' : '200px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Mobile Search Button */}
            <div style={{
              display: window.innerWidth < 768 ? 'block' : 'none'
            }}>
              <button style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94a3b8'
              }}>
                <Search size={18} />
              </button>
            </div>

            {/* Timeframe Selector */}
            <div style={{
              position: 'relative',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}>
              <Calendar size={16} color="#f97316" />
              <span style={{ color: '#f97316', fontWeight: '600', fontSize: '0.9rem' }}>
                {activeTimeframe}
              </span>
              <ChevronDown size={16} color="#f97316" />
            </div>

            {/* Notifications */}
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Bell size={18} color="#94a3b8" />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                background: '#ef4444',
                borderRadius: '50%'
              }}></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ padding: '2rem' }}>
          {/* KPI Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {kpiCards.map((card, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
                  e.target.style.boxShadow = '0 20px 40px rgba(249, 115, 22, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: `linear-gradient(135deg, ${card.color === 'emerald' ? '#10b981' : card.color === 'orange' ? '#f97316' : card.color === 'blue' ? '#3b82f6' : '#8b5cf6'}, ${card.color === 'emerald' ? '#059669' : card.color === 'orange' ? '#ea580c' : card.color === 'blue' ? '#2563eb' : '#7c3aed'})`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${card.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : card.color === 'orange' ? 'rgba(249, 115, 22, 0.3)' : card.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`
                  }}>
                    <card.icon size={24} color="white" />
                  </div>
                  <MoreHorizontal size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
                </div>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}>
                    {card.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    marginBottom: '0.5rem'
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <TrendingUp size={14} color="#10b981" />
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#10b981',
                      fontWeight: '600'
                    }}>
                      {card.change}
                    </span>
                    <span style={{
                      fontSize: '0.8rem',
                      color: '#64748b'
                    }}>
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Revenue Chart */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: 0,
                    color: '#ffffff'
                  }}>
                    Financial Overview
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                  }}>
                    Revenue, expenses and profit trends
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: '#f97316',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Revenue</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: '#3b82f6',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Expenses</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: '#10b981',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Profit</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(20px)'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#f97316" fillOpacity={1} fill="url(#revenueGrad)" strokeWidth={3} />
                  <Area type="monotone" dataKey="expenses" stroke="#3b82f6" fillOpacity={1} fill="url(#expenseGrad)" strokeWidth={3} />
                  <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#profitGrad)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Project Status */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: '#ffffff'
              }}>
                Project Status
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={projectStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {projectStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ marginTop: '1rem' }}>
                {projectStatusData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{
                        fontSize: '0.9rem',
                        color: '#e2e8f0'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#ffffff'
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Productivity & Equipment Utilization */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Team Productivity */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: '#ffffff'
              }}>
                Team Productivity
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={teamProductivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="productivity" fill="#f97316" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="efficiency" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Equipment Utilization */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem',
              position: 'relative'
            }}>
              {/* Background Construction Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '50%',
                opacity: 0.05,
                background: 'url("/construction-equipment-bg.jpg") center/cover',
                borderRadius: '0 20px 20px 0'
              }}></div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: '#ffffff',
                position: 'relative'
              }}>
                Equipment Utilization
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" data={equipmentUtilizationData}>
                  <RadialBar
                    dataKey="utilization"
                    cornerRadius={10}
                    fill="#f97316"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Projects & Activities */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr',
            gap: '2rem'
          }}>
            {/* Projects Table */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  margin: 0,
                  color: '#ffffff'
                }}>
                  Active Projects
                </h3>
                <button style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Plus size={16} />
                  New Project
                </button>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Project</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Progress</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Status</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Team</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img 
                              src={`/project-thumbnail-${project.id}.jpg`}
                              alt={`${project.name} construction site`}
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                background: 'linear-gradient(135deg, #f97316, #ea580c)'
                              }}
                            />
                            <div>
                              <div style={{
                                fontWeight: '600',
                                color: '#ffffff',
                                marginBottom: '0.25rem'
                              }}>
                                {project.name}
                              </div>
                              <div style={{
                                fontSize: '0.8rem',
                                color: '#94a3b8'
                              }}>
                                {project.client}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            height: '8px',
                            position: 'relative',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              background: 'linear-gradient(90deg, #f97316, #ea580c)',
                              height: '100%',
                              width: `${project.progress}%`,
                              borderRadius: '8px'
                            }}></div>
                          </div>
                          <span style={{
                            fontSize: '0.8rem',
                            color: '#94a3b8',
                            marginTop: '0.25rem',
                            display: 'block'
                          }}>
                            {project.progress}%
                          </span>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            background: project.status === 'On Track' ? 'rgba(16, 185, 129, 0.2)' : project.status === 'Delayed' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                            color: project.status === 'On Track' ? '#10b981' : project.status === 'Delayed' ? '#ef4444' : '#3b82f6'
                          }}>
                            {project.status}
                          </span>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          color: '#e2e8f0',
                          fontSize: '0.9rem'
                        }}>
                          {project.team} members
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{
                              background: 'rgba(59, 130, 246, 0.2)',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '0.375rem',
                              cursor: 'pointer',
                              color: '#3b82f6'
                            }}>
                              <Eye size={14} />
                            </button>
                            <button style={{
                              background: 'rgba(249, 115, 22, 0.2)',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '0.375rem',
                              cursor: 'pointer',
                              color: '#f97316'
                            }}>
                              <Edit size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: '0 0 1.5rem 0',
                color: '#ffffff'
              }}>
                Recent Activities
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {recentActivities.map((activity) => (
                  <div key={activity.id} style={{
                    display: 'flex',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: `${activity.type === 'project' ? 'rgba(249, 115, 22, 0.2)' : activity.type === 'safety' ? 'rgba(139, 92, 246, 0.2)' : activity.type === 'equipment' ? 'rgba(59, 130, 246, 0.2)' : activity.type === 'team' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(34, 197, 94, 0.2)'}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <activity.icon size={18} color={
                        activity.type === 'project' ? '#f97316' : 
                        activity.type === 'safety' ? '#8b5cf6' : 
                        activity.type === 'equipment' ? '#3b82f6' : 
                        activity.type === 'team' ? '#10b981' : '#22c55e'
                      } />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#e2e8f0',
                        marginBottom: '0.25rem',
                        lineHeight: '1.4'
                      }}>
                        {activity.message}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8'
                      }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionDashboard;