import React, { useState, useEffect } from 'react';
import {
  BookOpen, Users, GraduationCap, TrendingUp, BarChart3, Calendar, 
  FileText, Settings, Bell, Search, Filter, Award, Brain, Target,
  Clock, DollarSign, Building, MapPin, Wifi, Coffee, Car, Home,
  Laptop, Globe, Camera, Video, Mic, Headphones, ChevronDown,
  ArrowUp, ArrowDown, ArrowRight, Star, CheckCircle, AlertTriangle,
  Plus, Minus, RotateCw, Download, Share2, Eye, Edit, Trash2,
  MessageSquare, Phone, Mail, Zap, Shield, Activity, Briefcase
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';

const EducationDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alertCount, setAlertCount] = useState(12);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Academic Performance Data
  const enrollmentTrends = [
    { semester: 'Fall 2022', total: 15420, undergraduate: 12200, graduate: 2800, doctoral: 420 },
    { semester: 'Spring 2023', total: 15680, undergraduate: 12450, graduate: 2850, doctoral: 380 },
    { semester: 'Fall 2023', total: 16200, undergraduate: 12800, graduate: 3000, doctoral: 400 },
    { semester: 'Spring 2024', total: 16850, undergraduate: 13200, graduate: 3250, doctoral: 400 },
    { semester: 'Fall 2024', total: 17200, undergraduate: 13500, graduate: 3300, doctoral: 400 },
    { semester: 'Spring 2025', total: 17800, undergraduate: 13900, graduate: 3450, doctoral: 450 }
  ];

  const departmentDistribution = [
    { name: 'Engineering', value: 28, color: '#1e40af', students: 4984 },
    { name: 'Business', value: 22, color: '#3b82f6', students: 3916 },
    { name: 'Arts & Sciences', value: 18, color: '#60a5fa', students: 3204 },
    { name: 'Medicine', value: 12, color: '#93c5fd', students: 2136 },
    { name: 'Education', value: 10, color: '#dbeafe', students: 1780 },
    { name: 'Law', value: 6, color: '#1d4ed8', students: 1068 },
    { name: 'Other', value: 4, color: '#2563eb', students: 712 }
  ];

  const gradeDistribution = [
    { grade: 'A+', count: 2847, percentage: 16 },
    { grade: 'A', count: 4269, percentage: 24 },
    { grade: 'A-', count: 3558, percentage: 20 },
    { grade: 'B+', count: 2847, percentage: 16 },
    { grade: 'B', count: 2136, percentage: 12 },
    { grade: 'B-', count: 1424, percentage: 8 },
    { grade: 'Below B-', count: 712, percentage: 4 }
  ];

  const financialData = [
    { month: 'Sep', tuition: 12500000, expenses: 8900000, research: 3200000, facilities: 1800000 },
    { month: 'Oct', tuition: 13200000, expenses: 9200000, research: 3400000, facilities: 1900000 },
    { month: 'Nov', tuition: 12800000, expenses: 9100000, research: 3600000, facilities: 1850000 },
    { month: 'Dec', tuition: 11500000, expenses: 8800000, research: 3300000, facilities: 1750000 },
    { month: 'Jan', tuition: 14200000, expenses: 9500000, research: 3800000, facilities: 2100000 },
    { month: 'Feb', tuition: 13800000, expenses: 9300000, research: 3700000, facilities: 2000000 }
  ];

  const campusUtilization = [
    { facility: 'Lecture Halls', utilization: 85, capacity: 12000, current: 10200 },
    { facility: 'Labs', utilization: 72, capacity: 5000, current: 3600 },
    { facility: 'Library', utilization: 68, capacity: 3000, current: 2040 },
    { facility: 'Sports Complex', utilization: 45, capacity: 2000, current: 900 },
    { facility: 'Dormitories', utilization: 92, capacity: 8000, current: 7360 },
    { facility: 'Cafeterias', utilization: 78, capacity: 4000, current: 3120 }
  ];

  const recentStudents = [
    { id: 1, name: 'Emily Johnson', program: 'Computer Science', year: 'Junior', gpa: 3.8, status: 'Active', attendance: 95 },
    { id: 2, name: 'Marcus Rodriguez', program: 'Business Admin', year: 'Senior', gpa: 3.6, status: 'Active', attendance: 88 },
    { id: 3, name: 'Sarah Chen', program: 'Biomedical Engineering', year: 'Sophomore', gpa: 3.9, status: 'Active', attendance: 97 },
    { id: 4, name: 'David Thompson', program: 'Psychology', year: 'Graduate', gpa: 3.7, status: 'Research', attendance: 91 },
    { id: 5, name: 'Aisha Patel', program: 'Medicine', year: 'Doctoral', gpa: 3.95, status: 'Active', attendance: 99 }
  ];

  const facultyPerformance = [
    { department: 'Engineering', publications: 45, citations: 1250, satisfaction: 4.2 },
    { department: 'Medicine', publications: 62, citations: 1890, satisfaction: 4.5 },
    { department: 'Business', publications: 28, citations: 680, satisfaction: 4.1 },
    { department: 'Arts & Sciences', publications: 39, citations: 920, satisfaction: 4.3 },
    { department: 'Education', publications: 22, citations: 450, satisfaction: 4.4 },
    { department: 'Law', publications: 18, citations: 380, satisfaction: 4.0 }
  ];

  const courseCompletionRates = [
    { course: 'Data Structures', enrolled: 245, completed: 218, rate: 89 },
    { course: 'Organic Chemistry', enrolled: 189, completed: 156, rate: 83 },
    { course: 'Financial Accounting', enrolled: 298, completed: 276, rate: 93 },
    { course: 'Human Anatomy', enrolled: 156, completed: 142, rate: 91 },
    { course: 'Constitutional Law', enrolled: 78, completed: 71, rate: 91 },
    { course: 'Calculus III', enrolled: 134, completed: 118, rate: 88 }
  ];

  const academicAlerts = [
    { type: 'Academic', message: 'Student Emily Johnson at risk - GPA dropped below 3.0', time: '15 min ago', severity: 'high' },
    { type: 'Attendance', message: '23 students with attendance below 80% this week', time: '1 hour ago', severity: 'medium' },
    { type: 'Assignment', message: 'Data Structures midterm results require review', time: '3 hours ago', severity: 'medium' },
    { type: 'Faculty', message: 'Dr. Smith course evaluation scores below threshold', time: '1 day ago', severity: 'low' }
  ];

  const researchMetrics = [
    { area: 'AI & Machine Learning', projects: 15, funding: 2800000, publications: 28 },
    { area: 'Biotechnology', projects: 12, funding: 3200000, publications: 35 },
    { area: 'Sustainable Energy', projects: 8, funding: 1900000, publications: 18 },
    { area: 'Neuroscience', projects: 10, funding: 2400000, publications: 22 },
    { area: 'Quantum Computing', projects: 6, funding: 1500000, publications: 14 }
  ];

  const performanceMetrics = [
    { metric: 'Student Satisfaction', value: 92, target: 90, change: '+3%' },
    { metric: 'Faculty Retention', value: 94, target: 92, change: '+2%' },
    { metric: 'Graduation Rate', value: 87, target: 85, change: '+5%' },
    { metric: 'Research Output', value: 118, target: 100, change: '+12%' }
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getGpaColor = (gpa) => {
    if (gpa >= 3.7) return '#10b981';
    if (gpa >= 3.3) return '#3b82f6';
    if (gpa >= 3.0) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      marginTop: '-80px',
      paddingTop: '80px'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '80px',
        backgroundColor: '#1e40af',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 15px rgba(30, 64, 175, 0.2)',
        marginTop: '-80px'
      }}>
        {/* Logo */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <GraduationCap size={24} color="white" />
          </div>
        </div>

        {/* Navigation Icons */}
        <nav style={{ flex: 1, padding: '20px 0' }}>
          {[
            { icon: BarChart3, id: 'overview', active: activeView === 'overview' },
            { icon: Users, id: 'students', active: activeView === 'students' },
            { icon: BookOpen, id: 'courses', active: activeView === 'courses' },
            { icon: Brain, id: 'analytics', active: activeView === 'analytics' },
            { icon: Award, id: 'faculty', active: activeView === 'faculty' },
            { icon: DollarSign, id: 'finance', active: activeView === 'finance' },
            { icon: Building, id: 'facilities', active: activeView === 'facilities' },
            { icon: Calendar, id: 'schedule', active: activeView === 'schedule' }
          ].map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveView(item.id)}
              style={{
                padding: '12px',
                margin: '0 12px 8px 12px',
                borderRadius: '12px',
                backgroundColor: item.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                border: item.active ? '2px solid rgba(255, 255, 255, 0.3)' : '2px solid transparent'
              }}
            >
              <item.icon size={24} color="white" />
            </div>
          ))}
        </nav>

        {/* Bottom Settings */}
        <div style={{
          padding: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center'
        }}>
          <Settings size={24} color="white" style={{ cursor: 'pointer', opacity: 0.8 }} />
          <div style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'white'
          }}>
            AD
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: '80px' }}>
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
          zIndex: 100,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              EduFlow University Portal
            </h1>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
              marginTop: '4px'
            }}>
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • Academic Year 2024-2025 Spring Semester
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Quick Stats */}
            <div style={{
              display: 'flex',
              gap: '24px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1e40af'
                }}>
                  17,800
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  Total Students
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#3b82f6'
                }}>
                  1,247
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  Faculty Members
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                style={{
                  padding: '10px 16px',
                  background: isAnalyzing ? '#6b7280' : 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {isAnalyzing ? <RotateCw size={16} className="animate-spin" /> : <Brain size={16} />}
                {isAnalyzing ? 'Analyzing...' : 'AI Insights'}
              </button>

              <div style={{
                position: 'relative',
                padding: '10px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                <Bell size={20} color="#6b7280" />
                {alertCount > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '18px',
                    height: '18px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {alertCount}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ padding: '32px' }}>
          {/* Critical Alerts Banner */}
          {academicAlerts.filter(alert => alert.severity === 'high').length > 0 && (
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <AlertTriangle size={24} color="#ef4444" />
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#dc2626',
                  margin: '0 0 4px 0'
                }}>
                  Academic Alert
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#7f1d1d',
                  margin: 0
                }}>
                  {academicAlerts.find(alert => alert.severity === 'high')?.message}
                </p>
              </div>
              <button style={{
                marginLeft: 'auto',
                padding: '8px 16px',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                View Details
              </button>
            </div>
          )}

          {/* Main Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '2fr 1fr' : '1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Enrollment Trends */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0 0 4px 0'
                  }}>
                    Student Enrollment Trends
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Multi-year enrollment data across all programs
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <div style={{
                    padding: '6px 12px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <TrendingUp size={12} />
                    +8.2% Growth
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={enrollmentTrends}>
                  <defs>
                    <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e40af" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1e40af" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="undergradGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="gradGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
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
                  <Area type="monotone" dataKey="total" stroke="#1e40af" fillOpacity={1} fill="url(#totalGrad)" strokeWidth={3} name="Total" />
                  <Area type="monotone" dataKey="undergraduate" stroke="#3b82f6" fillOpacity={1} fill="url(#undergradGrad)" strokeWidth={2} name="Undergraduate" />
                  <Area type="monotone" dataKey="graduate" stroke="#60a5fa" fillOpacity={1} fill="url(#gradGrad)" strokeWidth={2} name="Graduate" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Key Performance Indicators */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Performance Metrics
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Key university performance indicators
                  </p>
                </div>
              </div>

              <div style={{ space: '16px' }}>
                {performanceMetrics.map((metric, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '12px',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {metric.metric}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: metric.value >= metric.target ? '#10b981' : '#f59e0b'
                      }}>
                        {metric.change}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: '#1f2937'
                      }}>
                        {metric.value}%
                      </span>
                      <div style={{
                        flex: 1,
                        height: '6px',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${Math.min((metric.value / 100) * 100, 100)}%`,
                          height: '100%',
                          backgroundColor: metric.value >= metric.target ? '#10b981' : '#f59e0b',
                          transition: 'width 1s ease'
                        }}></div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      marginTop: '4px'
                    }}>
                      Target: {metric.target}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '1fr 1fr 1fr' : window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Department Distribution */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0'
              }}>
                Department Distribution
              </h3>
              
              <div style={{ height: '200px', marginBottom: '20px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={departmentDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {departmentDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div style={{ space: '8px' }}>
                {departmentDistribution.slice(0, 4).map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 0',
                    borderBottom: index < 3 ? '1px solid #f3f4f6' : 'none'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{
                        fontSize: '12px',
                        color: '#1f2937'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>
                      {item.students}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Completion Rates */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: '0 0 20px 0'
              }}>
                Course Completion
              </h3>

              <div style={{ space: '12px' }}>
                {courseCompletionRates.map((course, index) => (
                  <div key={index} style={{
                    padding: '12px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {course.course}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: course.rate >= 90 ? '#10b981' : course.rate >= 80 ? '#3b82f6' : '#f59e0b'
                      }}>
                        {course.rate}%
                      </span>
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      marginBottom: '6px'
                    }}>
                      {course.completed}/{course.enrolled} students
                    </div>
                    <div style={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${course.rate}%`,
                        height: '100%',
                        backgroundColor: course.rate >= 90 ? '#10b981' : course.rate >= 80 ? '#3b82f6' : '#f59e0b',
                        transition: 'width 1s ease'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Utilization */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Campus Utilization
                  </h3>
                </div>
              </div>

              <div style={{ space: '12px' }}>
                {campusUtilization.map((facility, index) => (
                  <div key={index} style={{
                    padding: '12px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {facility.facility}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: facility.utilization >= 80 ? '#ef4444' : facility.utilization >= 60 ? '#f59e0b' : '#10b981'
                      }}>
                        {facility.utilization}%
                      </span>
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      marginBottom: '6px'
                    }}>
                      {facility.current.toLocaleString()}/{facility.capacity.toLocaleString()} capacity
                    </div>
                    <div style={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${facility.utilization}%`,
                        height: '100%',
                        backgroundColor: facility.utilization >= 80 ? '#ef4444' : facility.utilization >= 60 ? '#f59e0b' : '#10b981',
                        transition: 'width 1s ease'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid - Financial Overview & Research Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '2fr 1fr' : '1fr',
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* Financial Overview */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0 0 4px 0'
                  }}>
                    Financial Overview
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Revenue, expenses, and research funding trends
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#1e40af',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>Tuition</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#ef4444',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>Expenses</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>Research</span>
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} tickFormatter={(value) => `$${value/1000000}M`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    formatter={(value) => [`$${(value/1000000).toFixed(1)}M`, '']}
                  />
                  <Bar dataKey="tuition" fill="#1e40af" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="research" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Research Metrics */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Research Portfolio
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Active research areas and funding
                  </p>
                </div>
              </div>

              <div style={{ space: '12px' }}>
                {researchMetrics.map((area, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '12px',
                    marginBottom: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1f2937',
                        margin: 0
                      }}>
                        {area.area}
                      </h4>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#8b5cf6'
                      }}>
                        {area.projects} projects
                      </span>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                      fontSize: '11px',
                      color: '#6b7280'
                    }}>
                      <div>
                        Funding: ${(area.funding/1000000).toFixed(1)}M
                      </div>
                      <div>
                        Publications: {area.publications}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Table */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '24px',
              borderBottom: '1px solid #e5e7eb',
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
                Recent Student Activity
              </h3>
              <button style={{
                padding: '8px 16px',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Plus size={16} />
                Add Student
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    {['Student', 'Program', 'Year', 'GPA', 'Attendance', 'Status'].map((header) => (
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
                  {recentStudents.map((student) => (
                    <tr
                      key={student.id}
                      style={{
                        borderBottom: '1px solid #f3f4f6',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onClick={() => setSelectedStudent(student)}
                      onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = 'white'}
                    >
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: '#1e40af',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}>
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          {student.name}
                        </div>
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        {student.program}
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        {student.year}
                      </td>
                      <td style={{
                        padding: '16px'
                      }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          backgroundColor: `${getGpaColor(student.gpa)}20`,
                          color: getGpaColor(student.gpa)
                        }}>
                          {student.gpa}
                        </span>
                      </td>
                      <td style={{
                        padding: '16px',
                        fontSize: '14px',
                        color: '#1f2937'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${student.attendance}%`,
                              height: '100%',
                              backgroundColor: student.attendance >= 95 ? '#10b981' : student.attendance >= 85 ? '#3b82f6' : '#f59e0b'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '12px' }}>{student.attendance}%</span>
                        </div>
                      </td>
                      <td style={{
                        padding: '16px'
                      }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '600',
                          backgroundColor: student.status === 'Active' ? '#dcfce7' : student.status === 'Research' ? '#dbeafe' : '#f3f4f6',
                          color: student.status === 'Active' ? '#166534' : student.status === 'Research' ? '#1e40af' : '#6b7280'
                        }}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @media (max-width: 768px) {
          .responsive-hide {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default EducationDashboard;