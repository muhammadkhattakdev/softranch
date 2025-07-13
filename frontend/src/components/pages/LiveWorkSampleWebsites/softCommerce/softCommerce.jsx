import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  DollarSign,
  Star,
  Search,
  Bell,
  Settings,
  User,
  TrendingDown,
  Eye,
  ShoppingBag,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Filter,
  MoreHorizontal,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  X,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  Legend
} from 'recharts';

const SoftCommerceDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Products');
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 450, customers: 320 },
    { month: 'Feb', sales: 52000, orders: 520, customers: 380 },
    { month: 'Mar', sales: 48000, orders: 480, customers: 350 },
    { month: 'Apr', sales: 61000, orders: 610, customers: 420 },
    { month: 'May', sales: 55000, orders: 550, customers: 390 },
    { month: 'Jun', sales: 67000, orders: 670, customers: 480 },
    { month: 'Jul', sales: 71000, orders: 710, customers: 520 },
    { month: 'Aug', sales: 69000, orders: 690, customers: 500 },
    { month: 'Sep', sales: 78000, orders: 780, customers: 560 },
    { month: 'Oct', sales: 82000, orders: 820, customers: 600 },
    { month: 'Nov', sales: 88000, orders: 880, customers: 650 },
    { month: 'Dec', sales: 95000, orders: 950, customers: 720 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3b82f6', amount: 25000 },
    { name: 'Clothing', value: 25, color: '#1d4ed8', amount: 18000 },
    { name: 'Home & Garden', value: 20, color: '#10b981', amount: 14000 },
    { name: 'Sports', value: 12, color: '#06b6d4', amount: 8500 },
    { name: 'Books', value: 8, color: '#8b5cf6', amount: 5500 }
  ];

  const trafficData = [
    { source: 'Organic Search', visitors: 12500, conversion: 3.2 },
    { source: 'Social Media', visitors: 8200, conversion: 2.8 },
    { source: 'Direct', visitors: 6700, conversion: 4.1 },
    { source: 'Email Campaign', visitors: 4200, conversion: 5.2 },
    { source: 'Paid Ads', visitors: 3800, conversion: 2.9 },
    { source: 'Referral', visitors: 2100, conversion: 3.7 }
  ];

  const performanceData = [
    { week: 'Week 1', revenue: 18000, profit: 7200, visitors: 2100 },
    { week: 'Week 2', revenue: 22000, profit: 8800, visitors: 2400 },
    { week: 'Week 3', revenue: 19500, profit: 7800, visitors: 2200 },
    { week: 'Week 4', revenue: 25000, profit: 10000, visitors: 2800 }
  ];

  // Sample products data
  const productsData = [
    { 
      id: 'PRD001', 
      name: 'Wireless Bluetooth Headphones', 
      category: 'Electronics', 
      price: 89.99, 
      stock: 45, 
      sold: 238, 
      revenue: 21422.62,
      status: 'In Stock',
      rating: 4.5
    },
    { 
      id: 'PRD002', 
      name: 'Premium Cotton T-Shirt', 
      category: 'Clothing', 
      price: 24.99, 
      stock: 120, 
      sold: 456, 
      revenue: 11395.44,
      status: 'In Stock',
      rating: 4.2
    },
    { 
      id: 'PRD003', 
      name: 'Smart Fitness Watch', 
      category: 'Electronics', 
      price: 199.99, 
      stock: 8, 
      sold: 89, 
      revenue: 17799.11,
      status: 'Low Stock',
      rating: 4.7
    },
    { 
      id: 'PRD004', 
      name: 'Ergonomic Office Chair', 
      category: 'Home & Garden', 
      price: 299.99, 
      stock: 0, 
      sold: 67, 
      revenue: 20099.33,
      status: 'Out of Stock',
      rating: 4.4
    },
    { 
      id: 'PRD005', 
      name: 'Yoga Mat Premium', 
      category: 'Sports', 
      price: 45.99, 
      stock: 78, 
      sold: 145, 
      revenue: 6668.55,
      status: 'In Stock',
      rating: 4.3
    },
    { 
      id: 'PRD006', 
      name: 'Smartphone Camera Lens Kit', 
      category: 'Electronics', 
      price: 129.99, 
      stock: 23, 
      sold: 156, 
      revenue: 20278.44,
      status: 'In Stock',
      rating: 4.6
    },
    { 
      id: 'PRD007', 
      name: 'Designer Sunglasses', 
      category: 'Fashion', 
      price: 149.99, 
      stock: 15, 
      sold: 92, 
      revenue: 13799.08,
      status: 'Low Stock',
      rating: 4.1
    },
    { 
      id: 'PRD008', 
      name: 'Portable Bluetooth Speaker', 
      category: 'Electronics', 
      price: 79.99, 
      stock: 67, 
      sold: 203, 
      revenue: 16237.97,
      status: 'In Stock',
      rating: 4.4
    }
  ];

  // Sample orders data
  const ordersData = [
    { id: 'ORD2024001', customer: 'John Smith', date: '2024-12-15', items: 3, total: 245.97, status: 'Delivered' },
    { id: 'ORD2024002', customer: 'Emma Johnson', date: '2024-12-15', items: 1, total: 89.99, status: 'Processing' },
    { id: 'ORD2024003', customer: 'Michael Brown', date: '2024-12-14', items: 2, total: 459.98, status: 'Shipped' },
    { id: 'ORD2024004', customer: 'Sarah Davis', date: '2024-12-14', items: 4, total: 156.96, status: 'Delivered' },
    { id: 'ORD2024005', customer: 'David Wilson', date: '2024-12-13', items: 1, total: 299.99, status: 'Cancelled' },
    { id: 'ORD2024006', customer: 'Lisa Anderson', date: '2024-12-13', items: 2, total: 319.98, status: 'Processing' },
    { id: 'ORD2024007', customer: 'Chris Martinez', date: '2024-12-12', items: 3, total: 189.97, status: 'Delivered' },
    { id: 'ORD2024008', customer: 'Anna Taylor', date: '2024-12-12', items: 1, total: 149.99, status: 'Shipped' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#10b981';
      case 'Processing':
        return '#3b82f6';
      case 'Shipped':
        return '#06b6d4';
      case 'Cancelled':
        return '#ef4444';
      case 'In Stock':
        return '#10b981';
      case 'Low Stock':
        return '#f59e0b';
      case 'Out of Stock':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
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
        backgroundColor: '#3b82f6',
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
              <ShoppingBag size={20} />
            </div>
            <span style={{
              fontSize: '20px',
              fontWeight: 'bold'
            }}>SoftCommerce</span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '24px 0' }}>
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: ShoppingCart, label: 'Orders', badge: '12' },
            { icon: Package, label: 'Products' },
            { icon: Users, label: 'Customers' },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Star, label: 'Reviews' },
            { icon: Settings, label: 'Settings' }
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
                  backgroundColor: '#10b981',
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

        {/* Bottom Profile */}
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
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Alex Morrison</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>Store Manager</div>
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
            }}>Dashboard Overview</h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '4px'
            }}>
              <span>Welcome back, Alex!</span>
              <span>•</span>
              <span>December 15, 2024</span>
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
                placeholder="Search products, orders..."
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
          {/* Quick Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {[
              { 
                title: 'Total Revenue', 
                value: '$89,247', 
                change: '+12.5%', 
                icon: DollarSign, 
                color: '#3b82f6',
                isPositive: true 
              },
              { 
                title: 'Orders Today', 
                value: '147', 
                change: '+8.2%', 
                icon: ShoppingCart, 
                color: '#10b981',
                isPositive: true 
              },
              { 
                title: 'Active Products', 
                value: '1,234', 
                change: '+3.1%', 
                icon: Package, 
                color: '#06b6d4',
                isPositive: true 
              },
              { 
                title: 'Total Customers', 
                value: '8,549', 
                change: '-2.4%', 
                icon: Users, 
                color: '#8b5cf6',
                isPositive: false 
              }
            ].map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: stat.isPositive ? '#10b981' : '#ef4444'
                  }}>
                    {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {stat.change}
                  </div>
                </div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {stat.title}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section - Responsive Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '2fr 1fr' : '1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Revenue & Sales Chart */}
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
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0 0 4px 0'
                  }}>
                    Revenue & Sales Trends
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Monthly performance overview
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>{selectedPeriod}</span>
                  <ChevronDown size={16} color="#6b7280" />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={salesData}>
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
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    fill="#3b82f620"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Revenue ($)"
                  />
                  <Bar dataKey="orders" fill="#10b981" name="Orders" />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                    name="New Customers"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Category Distribution */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 24px 0'
              }}>
                Sales by Category
              </h3>
              
              <div style={{ height: '250px', marginBottom: '24px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>

              <div style={{ space: '12px' }}>
                {categoryData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                    padding: '8px',
                    borderRadius: '6px',
                    backgroundColor: '#f9fafb'
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
                        color: '#1f2937',
                        fontWeight: '500'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#1f2937'
                      }}>
                        {formatCurrency(item.amount)}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        {item.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Charts Row - Horizontal on Large Screens */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '1fr 1fr 1fr' : '1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Traffic Sources */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0'
              }}>
                Traffic Sources
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={trafficData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
                  <YAxis dataKey="source" type="category" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} width={80} />
                  <Tooltip />
                  <Bar dataKey="visitors" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Weekly Performance */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0'
              }}>
                Weekly Performance
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b98120"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stackId="2"
                    stroke="#3b82f6"
                    fill="#3b82f620"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Metrics */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0'
              }}>
                Key Metrics
              </h3>
              <div style={{ space: '16px' }}>
                {[
                  { label: 'Conversion Rate', value: '3.4%', color: '#10b981', trend: '+0.2%' },
                  { label: 'Avg Order Value', value: '$67.50', color: '#3b82f6', trend: '+$4.20' },
                  { label: 'Cart Abandonment', value: '68.2%', color: '#ef4444', trend: '-2.1%' },
                  { label: 'Customer Satisfaction', value: '4.7/5', color: '#f59e0b', trend: '+0.1' }
                ].map((metric, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: index < 3 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        marginBottom: '2px'
                      }}>
                        {metric.label}
                      </div>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: metric.color
                      }}>
                        {metric.value}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#10b981',
                      fontWeight: '600'
                    }}>
                      {metric.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            marginBottom: '32px'
          }}>
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
                  Product Performance
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    <Plus size={16} />
                    Add Product
                  </button>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}>
                    <Filter size={16} />
                    Filter
                  </button>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '16px'
              }}>
                {['All Products', 'Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: activeTab === tab ? '#3b82f6' : '#f3f4f6',
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

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    {['Product', 'Category', 'Price', 'Stock', 'Sold', 'Revenue', 'Rating', 'Status', 'Actions'].map((header) => (
                      <th key={header} style={{
                        padding: '12px 16px',
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
                  {productsData.map((product, index) => (
                    <tr key={product.id} style={{
                      borderBottom: '1px solid #f3f4f6'
                    }}>
                      <td style={{
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <img
                          src="/api/placeholder/48/48"
                          alt={product.name}
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            backgroundColor: '#f3f4f6'
                          }}
                        />
                        <div>
                          <div style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '2px'
                          }}>
                            {product.name}
                          </div>
                          <div style={{
                            fontSize: '12px',
                            color: '#6b7280'
                          }}>
                            ID: {product.id}
                          </div>
                        </div>
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        {product.category}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {formatCurrency(product.price)}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: product.stock <= 10 ? '#ef4444' : '#1f2937',
                        fontWeight: product.stock <= 10 ? '600' : '400'
                      }}>
                        {product.stock}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        {product.sold}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10b981'
                      }}>
                        {formatCurrency(product.revenue)}
                      </td>
                      <td style={{
                        padding: '16px'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginBottom: '2px'
                        }}>
                          {renderStars(product.rating)}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          {product.rating}
                        </div>
                      </td>
                      <td style={{
                        padding: '16px'
                      }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          backgroundColor: `${getStatusColor(product.status)}20`,
                          color: getStatusColor(product.status)
                        }}>
                          {product.status}
                        </span>
                      </td>
                      <td style={{
                        padding: '16px'
                      }}>
                        <div style={{
                          display: 'flex',
                          gap: '8px'
                        }}>
                          <button style={{
                            padding: '6px',
                            backgroundColor: '#f3f4f6',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <Eye size={14} color="#6b7280" />
                          </button>
                          <button style={{
                            padding: '6px',
                            backgroundColor: '#f3f4f6',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <Edit size={14} color="#6b7280" />
                          </button>
                          <button style={{
                            padding: '6px',
                            backgroundColor: '#fef2f2',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <Trash2 size={14} color="#ef4444" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Orders & Top Customers Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '2fr 1fr' : '1fr',
            gap: '24px'
          }}>
            {/* Recent Orders */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '24px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Recent Orders
                  </h3>
                  <button style={{
                    fontSize: '14px',
                    color: '#3b82f6',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}>
                    View All
                  </button>
                </div>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      {['Order ID', 'Customer', 'Date', 'Items', 'Total', 'Status'].map((header) => (
                        <th key={header} style={{
                          padding: '12px 16px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#6b7280',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order, index) => (
                      <tr key={order.id} style={{
                        borderBottom: index < ordersData.length - 1 ? '1px solid #f3f4f6' : 'none'
                      }}>
                        <td style={{
                          padding: '12px 16px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937'
                        }}>
                          {order.id}
                        </td>
                        <td style={{
                          padding: '12px 16px',
                          fontSize: '14px',
                          color: '#1f2937'
                        }}>
                          {order.customer}
                        </td>
                        <td style={{
                          padding: '12px 16px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          {order.date}
                        </td>
                        <td style={{
                          padding: '12px 16px',
                          fontSize: '14px',
                          color: '#1f2937'
                        }}>
                          {order.items}
                        </td>
                        <td style={{
                          padding: '12px 16px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937'
                        }}>
                          {formatCurrency(order.total)}
                        </td>
                        <td style={{
                          padding: '12px 16px'
                        }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '12px',
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
            </div>

            {/* Top Customers & Inventory Alerts */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Top Customers */}
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: '0 0 20px 0'
                }}>
                  Top Customers
                </h3>
                <div style={{ space: '12px' }}>
                  {[
                    { name: 'Sarah Johnson', orders: 24, spent: 1847.50 },
                    { name: 'Michael Chen', orders: 18, spent: 1432.80 },
                    { name: 'Emma Wilson', orders: 16, spent: 1298.60 },
                    { name: 'David Brown', orders: 14, spent: 1156.40 }
                  ].map((customer, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 0',
                      borderBottom: index < 3 ? '1px solid #f3f4f6' : 'none'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#3b82f620',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <User size={18} color="#3b82f6" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937',
                          marginBottom: '2px'
                        }}>
                          {customer.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          {customer.orders} orders • {formatCurrency(customer.spent)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory Alerts */}
              <div style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: '0 0 20px 0'
                }}>
                  Inventory Alerts
                </h3>
                <div style={{ space: '12px' }}>
                  {[
                    { product: 'Smart Fitness Watch', stock: 8, status: 'Low Stock' },
                    { product: 'Designer Sunglasses', stock: 15, status: 'Low Stock' },
                    { product: 'Ergonomic Office Chair', stock: 0, status: 'Out of Stock' }
                  ].map((alert, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      backgroundColor: alert.stock === 0 ? '#fef2f2' : '#fefbeb',
                      borderRadius: '8px',
                      marginBottom: index < 2 ? '8px' : '0'
                    }}>
                      <div style={{
                        padding: '6px',
                        backgroundColor: alert.stock === 0 ? '#ef4444' : '#f59e0b',
                        borderRadius: '6px'
                      }}>
                        <AlertTriangle size={16} color="white" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937',
                          marginBottom: '2px'
                        }}>
                          {alert.product}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: alert.stock === 0 ? '#ef4444' : '#f59e0b'
                        }}>
                          {alert.stock} items left • {alert.status}
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
    </div>
  );
};

export default SoftCommerceDashboard;