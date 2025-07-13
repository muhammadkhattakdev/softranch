import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  MessageSquare,
  Calendar,
  ChefHat,
  Package,
  Star,
  Search,
  Bell,
  Settings,
  User,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  X,
  MoreHorizontal,
  ChevronDown,
  UtensilsCrossed,
  BarChart3,
  Users,
  DollarSign
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const SoftFoodDashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedWeek, setSelectedWeek] = useState('This Week');

  // Sample data for charts
  const ordersData = [
    { name: 'Sun', orders: 120 },
    { name: 'Mon', orders: 180 },
    { name: 'Tue', orders: 250 },
    { name: 'Wed', orders: 300 },
    { name: 'Thu', orders: 280 },
    { name: 'Fri', orders: 350 },
    { name: 'Sat', orders: 301 }
  ];

  const orderTypesData = [
    { name: 'Dine In', value: 75, color: '#f97316' },
    { name: 'Takeaway', value: 60, color: '#ea580c' },
    { name: 'Online', value: 65, color: '#dc2626' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 }
  ];

  // Sample orders data
  const ordersTableData = [
    { id: 'ORD1023', date: '2035-10-20', time: '02:47 PM', customer: 'Alice Johnson', type: 'Dine-In', address: '-', qty: 1, amount: 18.00, status: 'Completed' },
    { id: 'ORD1024', date: '2035-10-26', time: '12:47 AM', customer: 'Bob Smith', type: 'Takeaway', address: '-', qty: 2, amount: 24.00, status: 'Cancelled' },
    { id: 'ORD1025', date: '2035-10-23', time: '10:47 PM', customer: 'Charlie Brown', type: 'Dine-In', address: '-', qty: 1, amount: 10.00, status: 'Completed' },
    { id: 'ORD1026', date: '2035-10-23', time: '01:47 PM', customer: 'Dana White', type: 'Dine-In', address: '-', qty: 3, amount: 30.00, status: 'On Process' },
    { id: 'ORD1027', date: '2035-10-26', time: '03:47 PM', customer: 'Eve Carter', type: 'Online', address: '123 Elm Street', qty: 1, amount: 15.00, status: 'Completed' },
    { id: 'ORD1028', date: '2035-10-22', time: '11:47 AM', customer: 'Frank Miller', type: 'Online', address: '456 Pine Avenue', qty: 4, amount: 35.00, status: 'Completed' },
    { id: 'ORD1029', date: '2035-10-27', time: '09:47 AM', customer: 'Grace Lee', type: 'Takeaway', address: '-', qty: 2, amount: 22.00, status: 'Cancelled' },
    { id: 'ORD1030', date: '2035-10-26', time: '06:47 AM', customer: 'Hannah Gold', type: 'Dine-In', address: '-', qty: 3, amount: 36.00, status: 'On Process' }
  ];

  // Sample menu items
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: 12.99, category: 'Pizza', orders: 45 },
    { id: 2, name: 'Caesar Salad', price: 8.99, category: 'Salads', orders: 32 },
    { id: 3, name: 'Beef Burger', price: 15.99, category: 'Burgers', orders: 28 },
    { id: 4, name: 'Chicken Wings', price: 11.99, category: 'Appetizers', orders: 41 },
    { id: 5, name: 'Pasta Carbonara', price: 14.99, category: 'Pasta', orders: 35 },
    { id: 6, name: 'Fish & Chips', price: 16.99, category: 'Seafood', orders: 23 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'On Process':
        return '#f97316';
      case 'Cancelled':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Dine-In':
        return '#f97316';
      case 'Takeaway':
        return '#ea580c';
      case 'Online':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: '#f97316',
        color: 'white',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <UtensilsCrossed size={20} />
            </div>
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold'
            }}>SoftFood</span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '24px 0' }}>
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: ShoppingCart, label: 'Orders', badge: '9' },
            { icon: MessageSquare, label: 'Messages' },
            { icon: Calendar, label: 'Calendar' },
            { icon: ChefHat, label: 'Menu' },
            { icon: Package, label: 'Inventory' },
            { icon: Star, label: 'Reviews' }
          ].map((item, index) => (
            <div key={index} style={{
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: item.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              borderRight: item.active ? '3px solid white' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              <item.icon size={20} />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div style={{
          padding: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px'
            }}>
              <User size={24} />
            </div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Orlando Laurentius</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>Admin</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '280px' }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          padding: '16px 32px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: 0
            }}>Orders</h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '4px'
            }}>
              <span>Dashboard</span>
              <span>/</span>
              <span>Customer Orders</span>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '12px',
                color: '#6b7280'
              }} />
              <input
                type="text"
                placeholder="Search anything"
                style={{
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  width: '300px',
                  fontSize: '14px'
                }}
              />
            </div>
            
            <div style={{
              position: 'relative',
              padding: '8px',
              backgroundColor: '#f3f4f6',
              borderRadius: '50%',
              cursor: 'pointer'
            }}>
              <Bell size={20} color="#6b7280" />
              <div style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                backgroundColor: '#ef4444',
                borderRadius: '50%'
              }}></div>
            </div>
            
            <Settings size={20} color="#6b7280" style={{ cursor: 'pointer' }} />
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ padding: '32px' }}>
          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { title: 'Total Orders', value: '200', icon: ShoppingCart, color: '#f97316', trend: '+12%' },
              { title: 'On Process', value: '45', icon: Clock, color: '#ea580c', trend: '+8%' },
              { title: 'Completed', value: '140', icon: CheckCircle, color: '#10b981', trend: '+15%' },
              { title: 'Cancelled', value: '15', icon: X, color: '#ef4444', trend: '-3%' }
            ].map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: `${stat.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <stat.icon size={24} color={stat.color} />
                  </div>
                  <MoreHorizontal size={20} color="#6b7280" style={{ cursor: 'pointer' }} />
                </div>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    {stat.title}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: stat.trend.startsWith('+') ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                  }}>
                    {stat.trend.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {stat.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Orders Overview Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  Orders Overview
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>{selectedWeek}</span>
                  <ChevronDown size={16} color="#6b7280" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ordersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#f97316"
                    strokeWidth={3}
                    dot={{ fill: '#f97316', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, fill: '#f97316' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Order Types Pie Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  Order Types
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Today</span>
                  <ChevronDown size={16} color="#6b7280" />
                </div>
              </div>
              
              <div style={{ position: 'relative', height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={orderTypesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {orderTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>
                    200
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6b7280'
                  }}>
                    Total Orders
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                {orderTypesData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            marginBottom: '32px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 24px 0'
            }}>
              Revenue Trends
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="revenue" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Orders Table */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            {/* Table Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  Recent Orders
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Search size={16} style={{
                      position: 'absolute',
                      left: '12px',
                      color: '#6b7280'
                    }} />
                    <input
                      type="text"
                      placeholder="Search order ID, customer, etc"
                      style={{
                        paddingLeft: '36px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        width: '250px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}>
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>{selectedWeek}</span>
                    <ChevronDown size={16} color="#6b7280" />
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                {['All', 'On Process', 'Completed', 'Cancelled'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: activeTab === tab ? '#f97316' : '#f3f4f6',
                      color: activeTab === tab ? 'white' : '#6b7280',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Content */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    {['Order ID', 'Date', 'Customer', 'Order Type', 'Address', 'Qty', 'Amount', 'Status'].map((header) => (
                      <th key={header} style={{
                        padding: '12px 24px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6b7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        borderBottom: '1px solid #e5e7eb'
                      }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ordersTableData.map((order, index) => (
                    <tr key={order.id} style={{
                      borderBottom: '1px solid #f3f4f6',
                      '&:hover': { backgroundColor: '#f9fafb' }
                    }}>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#1f2937',
                        fontWeight: '500'
                      }}>
                        {order.id}
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        <div>{order.date}</div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>{order.time}</div>
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        {order.customer}
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: getTypeColor(order.type)
                          }}></div>
                          <span style={{ color: '#1f2937' }}>{order.type}</span>
                        </div>
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        {order.address}
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        {order.qty}
                      </td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#1f2937',
                        fontWeight: '600'
                      }}>
                        ${order.amount.toFixed(2)}
                      </td>
                      <td style={{
                        padding: '16px 24px'
                      }}>
                        <span style={{
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600',
                          backgroundColor: `${getStatusColor(order.status)}20`,
                          color: getStatusColor(order.status)
                        }}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                Showing 10 out of 312
              </div>
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                {[1, 2, 3, '...', 16].map((page, index) => (
                  <button
                    key={index}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: page === 1 ? '#f97316' : '#f3f4f6',
                      color: page === 1 ? 'white' : '#6b7280',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Menu Items */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            marginTop: '32px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              margin: '0 0 24px 0'
            }}>
              Popular Menu Items
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px'
            }}>
              {menuItems.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease'
                }}>
                  <img
                    src="/api/placeholder/60/60"
                    alt={item.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      backgroundColor: '#f3f4f6'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 4px 0'
                    }}>
                      {item.name}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      margin: '0 0 8px 0'
                    }}>
                      {item.category}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#f97316'
                      }}>
                        ${item.price}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        {item.orders} orders
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftFoodDashboard;