import React, { useState } from 'react';
import { 
  Search, Bell, Download, Plus, ArrowRight, 
  ShoppingBag, Users, DollarSign, TrendingUp,
  Package, ShoppingCart, Star, Eye, MoreVertical,
  ChevronDown, Settings, BarChart3, CreditCard,
  FileText, Home, User, LogOut, Menu, X
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import './style.css';

const CommerceFlowDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeFilter, setTimeFilter] = useState('Weekly');

  // Sample data for charts
  const salesData = [
    { name: 'Jan', sales: 4000, orders: 240, revenue: 2400 },
    { name: 'Feb', sales: 3000, orders: 139, revenue: 2210 },
    { name: 'Mar', sales: 2000, orders: 980, revenue: 2290 },
    { name: 'Apr', sales: 2780, orders: 390, revenue: 2000 },
    { name: 'May', sales: 1890, orders: 480, revenue: 2181 },
    { name: 'Jun', sales: 2390, orders: 380, revenue: 2500 },
    { name: 'Jul', sales: 3490, orders: 430, revenue: 2100 },
    { name: 'Aug', sales: 4000, orders: 240, revenue: 2400 },
    { name: 'Sep', sales: 3200, orders: 340, revenue: 2300 }
  ];

  const recentOrders = [
    { id: '#12345', customer: 'Sarah Johnson', amount: '$1,234', status: 'completed', time: 'Today, 2:30 PM' },
    { id: '#12346', customer: 'Mike Chen', amount: '$856', status: 'pending', time: 'Today, 1:15 PM' },
    { id: '#12347', customer: 'Emma Davis', amount: '$2,100', status: 'completed', time: 'Today, 11:45 AM' },
    { id: '#12348', customer: 'James Wilson', amount: '$679', status: 'processing', time: 'Yesterday, 4:20 PM' },
    { id: '#12349', customer: 'Lisa Brown', amount: '$1,520', status: 'completed', time: 'Yesterday, 2:10 PM' }
  ];

  const notifications = [
    { type: 'order', message: 'New order from Premium Customer', time: '2 min ago', status: 'new' },
    { type: 'product', message: 'Low stock alert: iPhone 14 Pro', time: '15 min ago', status: 'warning' },
    { type: 'payment', message: 'Payment received: $2,340', time: '1 hour ago', status: 'success' },
    { type: 'user', message: '5 new customer registrations', time: '2 hours ago', status: 'info' }
  ];

  const topProducts = [
    { name: 'iPhone 14 Pro', sales: 1234, revenue: '$987,600', trend: '+12%' },
    { name: 'MacBook Air M2', sales: 856, revenue: '$856,000', trend: '+8%' },
    { name: 'AirPods Pro', sales: 2341, revenue: '$468,200', trend: '+15%' },
    { name: 'iPad Pro', sales: 678, revenue: '$542,400', trend: '+5%' }
  ];

  // Card data for the new cards section
  const cardData = [
    {
      id: 1,
      cardNumber: '1234 5678 **** ****',
      cardHolder: 'Peter Crouch',
      expiryDate: '09/24',
      cardType: 'visa',
      color: 'orange'
    },
    {
      id: 2,
      cardNumber: '**** **** **** 9876',
      cardHolder: 'Peter Crouch',
      expiryDate: '09/24',
      cardType: 'mastercard',
      color: 'blue'
    }
  ];

  const cardInfo = {
    cardNumber: '1234 5678 **** ****',
    status: 'Active',
    currency: 'USD',
    balance: '$50,000.00'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'pending': return '#F59E0B';
      case 'processing': return '#6366F1';
      default: return '#6B7280';
    }
  };

  const sidebarItems = [
    { icon: Home, key: 'dashboard' },
    { icon: ShoppingBag, key: 'orders' },
    { icon: Package, key: 'products' },
    { icon: Users, key: 'customers' },
    { icon: BarChart3, key: 'analytics' },
    { icon: CreditCard, key: 'payments' },
    { icon: FileText, key: 'reports' },
    { icon: Settings, key: 'settings' }
  ];

  return (
    <div className="commerce-flow-saas__container">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="commerce-flow-saas__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`commerce-flow-saas__sidebar ${sidebarOpen ? 'commerce-flow-saas__sidebar--open' : ''}`}>
        <div className="commerce-flow-saas__logo">
          <ShoppingBag className="commerce-flow-saas__logo-icon" />
        </div>

        <nav className="commerce-flow-saas__nav">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              className={`commerce-flow-saas__nav-item ${activeTab === item.key ? 'commerce-flow-saas__nav-item--active' : ''}`}
              onClick={() => setActiveTab(item.key)}
              title={item.key}
            >
              <item.icon className="commerce-flow-saas__nav-icon" />
            </button>
          ))}
        </nav>

        <div className="commerce-flow-saas__profile">
          <div className="commerce-flow-saas__avatar">
            <User />
          </div>
          <button className="commerce-flow-saas__logout" title="Logout">
            <LogOut />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="commerce-flow-saas__main">
        {/* Header */}
        <header className="commerce-flow-saas__header">
          <div className="commerce-flow-saas__header-left">
            <button 
              className="commerce-flow-saas__menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="commerce-flow-saas__welcome">
              <h1 className="commerce-flow-saas__title">Welcome, Amanda</h1>
              <p className="commerce-flow-saas__date">Tue, 07 June 2022</p>
            </div>
          </div>

          <div className="commerce-flow-saas__header-right">
            <div className="commerce-flow-saas__search">
              <Search className="commerce-flow-saas__search-icon" />
              <input 
                type="text" 
                placeholder="Search products, orders..."
                className="commerce-flow-saas__search-input"
              />
            </div>
            <button className="commerce-flow-saas__notification-btn">
              <Bell />
              <span className="commerce-flow-saas__notification-badge">3</span>
            </button>
            <button className="commerce-flow-saas__export-btn">
              <Download />
              <span>Export to PDF</span>
            </button>
            <div className="commerce-flow-saas__avatar">
              <User />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="commerce-flow-saas__content">
          {/* Stats Cards */}
          <div className="commerce-flow-saas__stats">
            <div className="commerce-flow-saas__stat-card">
              <div className="commerce-flow-saas__stat-icon commerce-flow-saas__stat-icon--sales">
                <DollarSign />
              </div>
              <div className="commerce-flow-saas__stat-content">
                <h3 className="commerce-flow-saas__stat-title">Total Revenue</h3>
                <p className="commerce-flow-saas__stat-value">$124,563</p>
                <span className="commerce-flow-saas__stat-change commerce-flow-saas__stat-change--positive">
                  +12.5% vs last month
                </span>
              </div>
            </div>

            <div className="commerce-flow-saas__stat-card">
              <div className="commerce-flow-saas__stat-icon commerce-flow-saas__stat-icon--orders">
                <ShoppingCart />
              </div>
              <div className="commerce-flow-saas__stat-content">
                <h3 className="commerce-flow-saas__stat-title">Total Orders</h3>
                <p className="commerce-flow-saas__stat-value">2,847</p>
                <span className="commerce-flow-saas__stat-change commerce-flow-saas__stat-change--positive">
                  +8.2% vs last month
                </span>
              </div>
            </div>

            <div className="commerce-flow-saas__stat-card">
              <div className="commerce-flow-saas__stat-icon commerce-flow-saas__stat-icon--customers">
                <Users />
              </div>
              <div className="commerce-flow-saas__stat-content">
                <h3 className="commerce-flow-saas__stat-title">Active Customers</h3>
                <p className="commerce-flow-saas__stat-value">1,245</p>
                <span className="commerce-flow-saas__stat-change commerce-flow-saas__stat-change--positive">
                  +15.3% vs last month
                </span>
              </div>
            </div>

            <div className="commerce-flow-saas__stat-card">
              <div className="commerce-flow-saas__stat-icon commerce-flow-saas__stat-icon--conversion">
                <TrendingUp />
              </div>
              <div className="commerce-flow-saas__stat-content">
                <h3 className="commerce-flow-saas__stat-title">Conversion Rate</h3>
                <p className="commerce-flow-saas__stat-value">3.24%</p>
                <span className="commerce-flow-saas__stat-change commerce-flow-saas__stat-change--negative">
                  -2.1% vs last month
                </span>
              </div>
            </div>
          </div>

          <div className="commerce-flow-saas__main-grid">
            {/* Sales Chart */}
            <div className="commerce-flow-saas__chart-section">
              <div className="commerce-flow-saas__section-header">
                <h2 className="commerce-flow-saas__section-title">Your Transaction</h2>
                <div className="commerce-flow-saas__chart-controls">
                  <select 
                    className="commerce-flow-saas__time-filter"
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="commerce-flow-saas__chart-container">
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6B47" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF6B47" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#FF6B47" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Cards Section */}
            <div className="commerce-flow-saas__cards-section">
              <div className="commerce-flow-saas__section-header">
                <h2 className="commerce-flow-saas__section-title">Cards</h2>
                <button className="commerce-flow-saas__add-card-btn">
                  <Plus />
                  Add card
                </button>
              </div>
              
              <div className="commerce-flow-saas__cards-container">
                {cardData.map((card) => (
                  <div 
                    key={card.id} 
                    className={`commerce-flow-saas__credit-card commerce-flow-saas__credit-card--${card.color}`}
                  >
                    <div className="commerce-flow-saas__card-header">
                      <div className="commerce-flow-saas__card-logo">
                        <CreditCard />
                      </div>
                      <div className="commerce-flow-saas__card-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="commerce-flow-saas__card-number">
                      {card.cardNumber}
                    </div>
                    <div className="commerce-flow-saas__card-footer">
                      <div className="commerce-flow-saas__card-holder">
                        <span className="commerce-flow-saas__card-label">Card Holder</span>
                        <span className="commerce-flow-saas__card-name">{card.cardHolder}</span>
                      </div>
                      <div className="commerce-flow-saas__card-expiry">
                        <span className="commerce-flow-saas__card-label">Expires</span>
                        <span className="commerce-flow-saas__card-date">{card.expiryDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="commerce-flow-saas__card-navigation">
                <button className="commerce-flow-saas__nav-arrow commerce-flow-saas__nav-arrow--prev">
                  <ArrowRight style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button className="commerce-flow-saas__nav-arrow commerce-flow-saas__nav-arrow--next">
                  <ArrowRight />
                </button>
              </div>

              {/* Card Info */}
              <div className="commerce-flow-saas__card-info">
                <h3 className="commerce-flow-saas__card-info-title">Card Info</h3>
                <div className="commerce-flow-saas__card-details">
                  <div className="commerce-flow-saas__detail-row">
                    <span className="commerce-flow-saas__detail-label">Card Number</span>
                    <span className="commerce-flow-saas__detail-value">{cardInfo.cardNumber}</span>
                  </div>
                  <div className="commerce-flow-saas__detail-row">
                    <span className="commerce-flow-saas__detail-label">Status</span>
                    <span className="commerce-flow-saas__detail-value commerce-flow-saas__status-active">{cardInfo.status}</span>
                  </div>
                  <div className="commerce-flow-saas__detail-row">
                    <span className="commerce-flow-saas__detail-label">Currency</span>
                    <span className="commerce-flow-saas__detail-value">{cardInfo.currency}</span>
                  </div>
                  <div className="commerce-flow-saas__detail-row">
                    <span className="commerce-flow-saas__detail-label">Balance</span>
                    <span className="commerce-flow-saas__detail-value commerce-flow-saas__balance">{cardInfo.balance}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="commerce-flow-saas__bottom-grid">
            {/* Statistics */}
            <div className="commerce-flow-saas__statistics-section">
              <div className="commerce-flow-saas__section-header">
                <h2 className="commerce-flow-saas__section-title">Statistic</h2>
                <div className="commerce-flow-saas__chart-controls">
                  <select className="commerce-flow-saas__time-filter">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="commerce-flow-saas__statistic-chart">
                <div className="commerce-flow-saas__stat-highlight">
                  <div className="commerce-flow-saas__stat-amount">$2000</div>
                  <div className="commerce-flow-saas__stat-period">April</div>
                </div>
                <div className="commerce-flow-saas__mini-chart">
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={salesData.slice(0, 6)}>
                      <defs>
                        <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FF6B47" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#FF6B47" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#FF6B47" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#miniGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Latest Transactions */}
            <div className="commerce-flow-saas__transactions-section">
              <div className="commerce-flow-saas__section-header">
                <h2 className="commerce-flow-saas__section-title">Latest Transaction</h2>
                <button className="commerce-flow-saas__see-all">Show All</button>
              </div>
              <div className="commerce-flow-saas__transactions-list">
                <div className="commerce-flow-saas__transaction-item commerce-flow-saas__transaction--positive">
                  <div className="commerce-flow-saas__transaction-icon commerce-flow-saas__transaction-icon--positive">
                    $
                  </div>
                  <div className="commerce-flow-saas__transaction-info">
                    <h4 className="commerce-flow-saas__transaction-title">Payment from Andrew</h4>
                    <p className="commerce-flow-saas__transaction-time">Today, 29 Aug at 10:20</p>
                  </div>
                  <div className="commerce-flow-saas__transaction-amount commerce-flow-saas__amount--positive">
                    $8,400
                  </div>
                </div>

                <div className="commerce-flow-saas__transaction-item commerce-flow-saas__transaction--negative">
                  <div className="commerce-flow-saas__transaction-icon commerce-flow-saas__transaction-icon--negative">
                    🛍️
                  </div>
                  <div className="commerce-flow-saas__transaction-info">
                    <h4 className="commerce-flow-saas__transaction-title">T-shirt purchasing</h4>
                    <p className="commerce-flow-saas__transaction-time">Today, 29 Aug at 10:20</p>
                  </div>
                  <div className="commerce-flow-saas__transaction-amount commerce-flow-saas__amount--negative">
                    -$400
                  </div>
                </div>

                <div className="commerce-flow-saas__transaction-item commerce-flow-saas__transaction--positive">
                  <div className="commerce-flow-saas__transaction-icon commerce-flow-saas__transaction-icon--positive">
                    $
                  </div>
                  <div className="commerce-flow-saas__transaction-info">
                    <h4 className="commerce-flow-saas__transaction-title">Payment from Andrew</h4>
                    <p className="commerce-flow-saas__transaction-time">Today, 29 Aug at 10:20</p>
                  </div>
                  <div className="commerce-flow-saas__transaction-amount commerce-flow-saas__amount--positive">
                    $8,400
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommerceFlowDashboard;