import React, { useState } from 'react';
import { 
  Search, Bell, Download, Plus, ArrowRight, MoreVertical,
  ChefHat, Users, DollarSign, TrendingUp, Clock, Star,
  Package, AlertTriangle, CheckCircle, XCircle, Eye,
  Settings, BarChart3, Calendar, Filter, Menu, X, User,
  Utensils, Coffee, Pizza, Wine, ShoppingCart, MapPin
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import './style.css';

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeFilter, setTimeFilter] = useState('Today');

  // Sample data for charts
  const revenueData = [
    { time: '6AM', revenue: 0, orders: 0 },
    { time: '8AM', revenue: 1200, orders: 45 },
    { time: '10AM', revenue: 800, orders: 32 },
    { time: '12PM', revenue: 3400, orders: 125 },
    { time: '2PM', revenue: 2800, orders: 98 },
    { time: '4PM', revenue: 900, orders: 34 },
    { time: '6PM', revenue: 4200, orders: 156 },
    { time: '8PM', revenue: 5100, orders: 189 },
    { time: '10PM', revenue: 3800, orders: 142 },
    { time: '12AM', revenue: 1200, orders: 45 }
  ];

  const weeklyData = [
    { day: 'Mon', revenue: 12400, orders: 445 },
    { day: 'Tue', revenue: 13200, orders: 478 },
    { day: 'Wed', revenue: 11800, orders: 423 },
    { day: 'Thu', revenue: 14500, orders: 521 },
    { day: 'Fri', revenue: 18900, orders: 678 },
    { day: 'Sat', revenue: 21200, orders: 756 },
    { day: 'Sun', revenue: 19800, orders: 698 }
  ];

  const popularDishes = [
    { name: 'Margherita Pizza', orders: 89, revenue: '$1,780', trend: '+12%', category: 'Pizza' },
    { name: 'Caesar Salad', orders: 76, revenue: '$912', trend: '+8%', category: 'Salads' },
    { name: 'Chicken Alfredo', orders: 65, revenue: '$1,430', trend: '+15%', category: 'Pasta' },
    { name: 'Beef Burger', orders: 58, revenue: '$1,160', trend: '+5%', category: 'Burgers' },
    { name: 'Fish & Chips', orders: 42, revenue: '$756', trend: '-3%', category: 'Seafood' }
  ];

  const recentOrders = [
    { id: '#1001', customer: 'Table 5', items: 'Pizza Margherita, Coke', amount: '$28.50', status: 'preparing', time: '2 min ago' },
    { id: '#1002', customer: 'Sarah Johnson', items: 'Caesar Salad, Iced Tea', amount: '$16.90', status: 'ready', time: '5 min ago' },
    { id: '#1003', customer: 'Table 12', items: 'Pasta Alfredo, Wine', amount: '$35.20', status: 'delivered', time: '8 min ago' },
    { id: '#1004', customer: 'Mike Chen', items: 'Beef Burger, Fries', amount: '$24.80', status: 'preparing', time: '10 min ago' },
    { id: '#1005', customer: 'Table 3', items: 'Fish & Chips, Beer', amount: '$22.40', status: 'cancelled', time: '12 min ago' }
  ];

  const tableStatus = [
    { id: 'T01', seats: 4, status: 'occupied', customer: 'Johnson Family', duration: '1h 15m', amount: '$89.50' },
    { id: 'T02', seats: 2, status: 'available', customer: null, duration: null, amount: null },
    { id: 'T03', seats: 6, status: 'reserved', customer: 'Smith Party', duration: '7:30 PM', amount: null },
    { id: 'T04', seats: 4, status: 'occupied', customer: 'Date Night', duration: '45m', amount: '$67.20' },
    { id: 'T05', seats: 8, status: 'cleaning', customer: null, duration: '5m', amount: null },
    { id: 'T06', seats: 2, status: 'occupied', customer: 'Business Lunch', duration: '2h 5m', amount: '$124.80' }
  ];

  const staffPerformance = [
    { name: 'Maria Garcia', role: 'Head Chef', orders: 45, rating: 4.9, status: 'active' },
    { name: 'John Smith', role: 'Waiter', tables: 8, rating: 4.7, status: 'active' },
    { name: 'Emma Wilson', role: 'Sous Chef', orders: 32, rating: 4.8, status: 'break' },
    { name: 'Carlos Rodriguez', role: 'Waiter', tables: 6, rating: 4.6, status: 'active' }
  ];

  const inventoryAlerts = [
    { item: 'Tomatoes', current: 12, minimum: 20, status: 'low', unit: 'kg' },
    { item: 'Mozzarella', current: 5, minimum: 10, status: 'critical', unit: 'kg' },
    { item: 'Olive Oil', current: 3, minimum: 5, status: 'critical', unit: 'bottles' },
    { item: 'Basil', current: 8, minimum: 15, status: 'low', unit: 'bunches' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'preparing': return '#F59E0B';
      case 'ready': return '#10B981';
      case 'delivered': return '#6366F1';
      case 'cancelled': return '#EF4444';
      case 'occupied': return '#F59E0B';
      case 'available': return '#10B981';
      case 'reserved': return '#6366F1';
      case 'cleaning': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getTableStatusIcon = (status) => {
    switch (status) {
      case 'occupied': return '🍽️';
      case 'available': return '✅';
      case 'reserved': return '📅';
      case 'cleaning': return '🧹';
      default: return '❓';
    }
  };

  const COLORS = ['#FF6B47', '#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

  const categoryData = [
    { name: 'Pizza', value: 35, color: '#FF6B47' },
    { name: 'Pasta', value: 25, color: '#4F46E5' },
    { name: 'Salads', value: 20, color: '#10B981' },
    { name: 'Burgers', value: 15, color: '#F59E0B' },
    { name: 'Desserts', value: 5, color: '#EF4444' }
  ];

  return (
    <div className="restaurant-dashboard__container">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="restaurant-dashboard__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`restaurant-dashboard__sidebar ${sidebarOpen ? 'restaurant-dashboard__sidebar--open' : ''}`}>
        <div className="restaurant-dashboard__logo">
          <ChefHat className="restaurant-dashboard__logo-icon" />
          <span className="restaurant-dashboard__logo-text">RestaurantOS</span>
        </div>

        <nav className="restaurant-dashboard__nav">
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'overview' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart3 className="restaurant-dashboard__nav-icon" />
            <span>Overview</span>
          </button>
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'orders' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingCart className="restaurant-dashboard__nav-icon" />
            <span>Orders</span>
          </button>
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'menu' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('menu')}
          >
            <Utensils className="restaurant-dashboard__nav-icon" />
            <span>Menu</span>
          </button>
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'tables' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('tables')}
          >
            <MapPin className="restaurant-dashboard__nav-icon" />
            <span>Tables</span>
          </button>
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'staff' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('staff')}
          >
            <Users className="restaurant-dashboard__nav-icon" />
            <span>Staff</span>
          </button>
          <button
            className={`restaurant-dashboard__nav-item ${activeTab === 'inventory' ? 'restaurant-dashboard__nav-item--active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            <Package className="restaurant-dashboard__nav-icon" />
            <span>Inventory</span>
          </button>
        </nav>

        <div className="restaurant-dashboard__nav-bottom">
          <button className="restaurant-dashboard__nav-item">
            <Settings className="restaurant-dashboard__nav-icon" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="restaurant-dashboard__main">
        {/* Header */}
        <header className="restaurant-dashboard__header">
          <div className="restaurant-dashboard__header-left">
            <button 
              className="restaurant-dashboard__menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="restaurant-dashboard__welcome">
              <h1 className="restaurant-dashboard__title">Good Morning, Chef Mario!</h1>
              <p className="restaurant-dashboard__date">Friday, December 15, 2024 • Peak Hours</p>
            </div>
          </div>

          <div className="restaurant-dashboard__header-right">
            <div className="restaurant-dashboard__search">
              <Search className="restaurant-dashboard__search-icon" />
              <input 
                type="text" 
                placeholder="Search orders, menu items..."
                className="restaurant-dashboard__search-input"
              />
            </div>
            
            <div className="restaurant-dashboard__time-filter">
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="restaurant-dashboard__filter-select"
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>

            <button className="restaurant-dashboard__notification-btn">
              <Bell />
              <span className="restaurant-dashboard__notification-badge">12</span>
            </button>

            <button className="restaurant-dashboard__export-btn">
              <Download />
              <span>Export</span>
            </button>

            <div className="restaurant-dashboard__profile">
              <div className="restaurant-dashboard__avatar">
                <User />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="restaurant-dashboard__content">
          {/* Stats Cards */}
          <div className="restaurant-dashboard__stats">
            <div className="restaurant-dashboard__stat-card">
              <div className="restaurant-dashboard__stat-icon restaurant-dashboard__stat-icon--revenue">
                <DollarSign />
              </div>
              <div className="restaurant-dashboard__stat-content">
                <h3 className="restaurant-dashboard__stat-title">Today's Revenue</h3>
                <p className="restaurant-dashboard__stat-value">$18,945</p>
                <span className="restaurant-dashboard__stat-change restaurant-dashboard__stat-change--positive">
                  +15.3% vs yesterday
                </span>
              </div>
            </div>

            <div className="restaurant-dashboard__stat-card">
              <div className="restaurant-dashboard__stat-icon restaurant-dashboard__stat-icon--orders">
                <ShoppingCart />
              </div>
              <div className="restaurant-dashboard__stat-content">
                <h3 className="restaurant-dashboard__stat-title">Total Orders</h3>
                <p className="restaurant-dashboard__stat-value">342</p>
                <span className="restaurant-dashboard__stat-change restaurant-dashboard__stat-change--positive">
                  +8.7% vs yesterday
                </span>
              </div>
            </div>

            <div className="restaurant-dashboard__stat-card">
              <div className="restaurant-dashboard__stat-icon restaurant-dashboard__stat-icon--customers">
                <Users />
              </div>
              <div className="restaurant-dashboard__stat-content">
                <h3 className="restaurant-dashboard__stat-title">Customers Served</h3>
                <p className="restaurant-dashboard__stat-value">298</p>
                <span className="restaurant-dashboard__stat-change restaurant-dashboard__stat-change--positive">
                  +12.1% vs yesterday
                </span>
              </div>
            </div>

            <div className="restaurant-dashboard__stat-card">
              <div className="restaurant-dashboard__stat-icon restaurant-dashboard__stat-icon--rating">
                <Star />
              </div>
              <div className="restaurant-dashboard__stat-content">
                <h3 className="restaurant-dashboard__stat-title">Avg Rating</h3>
                <p className="restaurant-dashboard__stat-value">4.8</p>
                <span className="restaurant-dashboard__stat-change restaurant-dashboard__stat-change--positive">
                  +0.2 vs last week
                </span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="restaurant-dashboard__main-grid">
            {/* Revenue Chart */}
            <div className="restaurant-dashboard__chart-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Revenue & Orders</h2>
                <div className="restaurant-dashboard__chart-controls">
                  <button className="restaurant-dashboard__chart-btn restaurant-dashboard__chart-btn--active">Hourly</button>
                  <button className="restaurant-dashboard__chart-btn">Daily</button>
                  <button className="restaurant-dashboard__chart-btn">Weekly</button>
                </div>
              </div>
              <div className="restaurant-dashboard__chart-container">
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6B47" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF6B47" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" stroke="#6B7280" />
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
                      fill="url(#revenueGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Popular Dishes */}
            <div className="restaurant-dashboard__popular-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Popular Dishes</h2>
                <button className="restaurant-dashboard__see-all">View All</button>
              </div>
              <div className="restaurant-dashboard__popular-list">
                {popularDishes.map((dish, index) => (
                  <div key={index} className="restaurant-dashboard__popular-item">
                    <div className="restaurant-dashboard__dish-info">
                      <h4 className="restaurant-dashboard__dish-name">{dish.name}</h4>
                      <p className="restaurant-dashboard__dish-category">{dish.category}</p>
                    </div>
                    <div className="restaurant-dashboard__dish-stats">
                      <span className="restaurant-dashboard__dish-orders">{dish.orders} orders</span>
                      <span className="restaurant-dashboard__dish-revenue">{dish.revenue}</span>
                      <span className={`restaurant-dashboard__dish-trend ${dish.trend.startsWith('+') ? 'restaurant-dashboard__trend--positive' : 'restaurant-dashboard__trend--negative'}`}>
                        {dish.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="restaurant-dashboard__bottom-grid">
            {/* Recent Orders */}
            <div className="restaurant-dashboard__orders-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Recent Orders</h2>
                <button className="restaurant-dashboard__add-btn">
                  <Plus />
                  New Order
                </button>
              </div>
              <div className="restaurant-dashboard__orders-list">
                {recentOrders.map((order, index) => (
                  <div key={index} className="restaurant-dashboard__order-item">
                    <div className="restaurant-dashboard__order-info">
                      <h4 className="restaurant-dashboard__order-id">{order.id}</h4>
                      <p className="restaurant-dashboard__order-customer">{order.customer}</p>
                      <p className="restaurant-dashboard__order-items">{order.items}</p>
                    </div>
                    <div className="restaurant-dashboard__order-details">
                      <span className="restaurant-dashboard__order-amount">{order.amount}</span>
                      <span 
                        className="restaurant-dashboard__order-status"
                        style={{ backgroundColor: getStatusColor(order.status) }}
                      >
                        {order.status}
                      </span>
                      <span className="restaurant-dashboard__order-time">{order.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table Status */}
            <div className="restaurant-dashboard__tables-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Table Status</h2>
                <div className="restaurant-dashboard__table-summary">
                  <span className="restaurant-dashboard__table-occupied">4 Occupied</span>
                  <span className="restaurant-dashboard__table-available">2 Available</span>
                </div>
              </div>
              <div className="restaurant-dashboard__tables-grid">
                {tableStatus.map((table, index) => (
                  <div key={index} className={`restaurant-dashboard__table-card restaurant-dashboard__table-card--${table.status}`}>
                    <div className="restaurant-dashboard__table-header">
                      <span className="restaurant-dashboard__table-id">{table.id}</span>
                      <span className="restaurant-dashboard__table-icon">{getTableStatusIcon(table.status)}</span>
                    </div>
                    <div className="restaurant-dashboard__table-info">
                      <span className="restaurant-dashboard__table-seats">{table.seats} seats</span>
                      {table.customer && (
                        <>
                          <span className="restaurant-dashboard__table-customer">{table.customer}</span>
                          <span className="restaurant-dashboard__table-duration">{table.duration}</span>
                          {table.amount && <span className="restaurant-dashboard__table-amount">{table.amount}</span>}
                        </>
                      )}
                      {table.status === 'reserved' && (
                        <span className="restaurant-dashboard__table-reservation">{table.duration}</span>
                      )}
                      {table.status === 'cleaning' && (
                        <span className="restaurant-dashboard__table-cleaning">Ready in {table.duration}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Distribution */}
            <div className="restaurant-dashboard__category-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Order Categories</h2>
              </div>
              <div className="restaurant-dashboard__category-chart">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="restaurant-dashboard__category-legend">
                {categoryData.map((category, index) => (
                  <div key={index} className="restaurant-dashboard__legend-item">
                    <div 
                      className="restaurant-dashboard__legend-color"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="restaurant-dashboard__legend-name">{category.name}</span>
                    <span className="restaurant-dashboard__legend-value">{category.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Performance */}
            <div className="restaurant-dashboard__staff-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Staff Performance</h2>
                <button className="restaurant-dashboard__see-all">View All</button>
              </div>
              <div className="restaurant-dashboard__staff-list">
                {staffPerformance.map((staff, index) => (
                  <div key={index} className="restaurant-dashboard__staff-item">
                    <div className="restaurant-dashboard__staff-avatar">
                      <User />
                    </div>
                    <div className="restaurant-dashboard__staff-info">
                      <h4 className="restaurant-dashboard__staff-name">{staff.name}</h4>
                      <p className="restaurant-dashboard__staff-role">{staff.role}</p>
                    </div>
                    <div className="restaurant-dashboard__staff-stats">
                      <div className="restaurant-dashboard__staff-rating">
                        <Star size={14} />
                        <span>{staff.rating}</span>
                      </div>
                      <span className={`restaurant-dashboard__staff-status restaurant-dashboard__staff-status--${staff.status}`}>
                        {staff.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Alerts */}
            <div className="restaurant-dashboard__inventory-section">
              <div className="restaurant-dashboard__section-header">
                <h2 className="restaurant-dashboard__section-title">Inventory Alerts</h2>
                <button className="restaurant-dashboard__see-all">Manage</button>
              </div>
              <div className="restaurant-dashboard__inventory-list">
                {inventoryAlerts.map((item, index) => (
                  <div key={index} className={`restaurant-dashboard__inventory-item restaurant-dashboard__inventory-item--${item.status}`}>
                    <div className="restaurant-dashboard__inventory-icon">
                      <AlertTriangle size={20} />
                    </div>
                    <div className="restaurant-dashboard__inventory-info">
                      <h4 className="restaurant-dashboard__inventory-name">{item.item}</h4>
                      <p className="restaurant-dashboard__inventory-level">
                        {item.current} {item.unit} remaining
                      </p>
                    </div>
                    <div className="restaurant-dashboard__inventory-status">
                      <span className={`restaurant-dashboard__inventory-badge restaurant-dashboard__inventory-badge--${item.status}`}>
                        {item.status}
                      </span>
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

export default RestaurantDashboard;