import React, { useState, useEffect } from 'react';
import {
  Brain, Zap, Eye, MessageSquare, TrendingUp, Activity, Cpu, Database,
  BarChart3, PieChart, Target, AlertTriangle, CheckCircle, Clock,
  Users, DollarSign, Globe, Search, Filter, Bell, Settings, Plus,
  Play, Pause, RotateCw, Download, Upload, Layers, Network, Sparkles,
  Bot, Workflow, Shield, Gauge, ArrowUp, ArrowDown,
  Calendar, MapPin, Camera, Mic, FileText, Image, Video, Headphones,
  ChevronRight, Star, Lightbulb, Rocket, Beaker, CircuitBoard,
  Home, MoreHorizontal, RefreshCw, Power, WifiOff, Wifi
} from 'lucide-react';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell,
  RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart, Legend
} from 'recharts';

const AIIntelligenceDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiModelsRunning, setAiModelsRunning] = useState(12);
  const [realTimeData, setRealTimeData] = useState([]);

  // Generate real-time data
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setRealTimeData(prev => [
        ...prev.slice(-29),
        {
          time: new Date().toLocaleTimeString(),
          accuracy: 85 + Math.random() * 15,
          throughput: 1200 + Math.random() * 300,
          latency: 10 + Math.random() * 20
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // AI Model Performance Data
  const aiModelMetrics = [
    { hour: '00:00', accuracy: 94.2, latency: 12, throughput: 1450 },
    { hour: '04:00', accuracy: 95.8, latency: 8, throughput: 1650 },
    { hour: '08:00', accuracy: 97.1, latency: 6, throughput: 1820 },
    { hour: '12:00', accuracy: 96.3, latency: 9, throughput: 1720 },
    { hour: '16:00', accuracy: 98.2, latency: 5, throughput: 1950 },
    { hour: '20:00', accuracy: 97.8, latency: 7, throughput: 1880 }
  ];

  // ML Pipeline Data
  const mlPipelineData = [
    { stage: 'Data Ingestion', progress: 100, status: 'completed', time: '2.3s' },
    { stage: 'Data Preprocessing', progress: 100, status: 'completed', time: '5.7s' },
    { stage: 'Feature Engineering', progress: 100, status: 'completed', time: '8.2s' },
    { stage: 'Model Training', progress: 87, status: 'running', time: '45.2s' },
    { stage: 'Model Validation', progress: 0, status: 'pending', time: '--' },
    { stage: 'Deployment', progress: 0, status: 'pending', time: '--' }
  ];

  // AI Service Distribution
  const aiServicesData = [
    { name: 'Computer Vision', value: 32, color: '#6366f1', models: 5 },
    { name: 'Natural Language', value: 28, color: '#8b5cf6', models: 4 },
    { name: 'Predictive Analytics', value: 22, color: '#ec4899', models: 3 },
    { name: 'Recommendation Engine', value: 18, color: '#06b6d4', models: 3 }
  ];

  // Prediction Accuracy Over Time
  const predictionData = [
    { month: 'Jan', vision: 92, nlp: 89, prediction: 87, recommendation: 85 },
    { month: 'Feb', vision: 94, nlp: 91, prediction: 89, recommendation: 87 },
    { month: 'Mar', vision: 95, nlp: 93, prediction: 91, recommendation: 89 },
    { month: 'Apr', vision: 97, nlp: 94, prediction: 93, recommendation: 91 },
    { month: 'May', vision: 98, nlp: 96, prediction: 95, recommendation: 93 },
    { month: 'Jun', vision: 99, nlp: 97, prediction: 96, recommendation: 95 }
  ];

  // AI Insights and Anomalies
  const aiInsights = [
    {
      id: 1,
      type: 'anomaly',
      title: 'Unusual Traffic Pattern Detected',
      description: 'AI detected 300% increase in API calls from region APAC',
      confidence: 94,
      timestamp: '2 minutes ago',
      severity: 'high',
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'optimization',
      title: 'Model Performance Improvement',
      description: 'Computer Vision model accuracy improved by 2.3% after retraining',
      confidence: 98,
      timestamp: '15 minutes ago',
      severity: 'medium',
      icon: TrendingUp
    },
    {
      id: 3,
      type: 'prediction',
      title: 'Resource Scaling Recommendation',
      description: 'AI predicts 40% increase in demand within next 2 hours',
      confidence: 87,
      timestamp: '32 minutes ago',
      severity: 'medium',
      icon: Lightbulb
    },
    {
      id: 4,
      type: 'success',
      title: 'Automated Deployment Complete',
      description: 'NLP model v2.4.1 successfully deployed to production',
      confidence: 100,
      timestamp: '1 hour ago',
      severity: 'low',
      icon: CheckCircle
    }
  ];

  // Active AI Models
  const activeModels = [
    {
      id: 1,
      name: 'Vision-Transformer-v3',
      type: 'Computer Vision',
      status: 'active',
      accuracy: 98.7,
      requests: 15420,
      latency: 45,
      gpu: 'RTX 4090',
      version: 'v3.2.1'
    },
    {
      id: 2,
      name: 'BERT-Financial-NLP',
      type: 'Natural Language',
      status: 'active',
      accuracy: 96.2,
      requests: 8930,
      latency: 120,
      gpu: 'A100',
      version: 'v2.1.0'
    },
    {
      id: 3,
      name: 'Time-Series-Prophet',
      type: 'Predictive Analytics',
      status: 'training',
      accuracy: 94.8,
      requests: 0,
      latency: 0,
      gpu: 'V100',
      version: 'v1.8.3'
    },
    {
      id: 4,
      name: 'Recommendation-Matrix',
      type: 'Recommendation',
      status: 'active',
      accuracy: 92.1,
      requests: 12650,
      latency: 35,
      gpu: 'RTX 3090',
      version: 'v4.0.2'
    }
  ];

  // Revenue and Cost Data
  const revenueData = [
    { month: 'Jan', revenue: 125000, cost: 45000, profit: 80000, apiCalls: 2.4 },
    { month: 'Feb', revenue: 142000, cost: 48000, profit: 94000, apiCalls: 2.8 },
    { month: 'Mar', revenue: 168000, cost: 52000, profit: 116000, apiCalls: 3.2 },
    { month: 'Apr', revenue: 195000, cost: 58000, profit: 137000, apiCalls: 3.8 },
    { month: 'May', revenue: 224000, cost: 65000, profit: 159000, apiCalls: 4.5 },
    { month: 'Jun', revenue: 267000, cost: 72000, profit: 195000, apiCalls: 5.2 }
  ];

  const kpis = [
    {
      title: 'Total API Calls',
      value: '15.7M',
      change: '+23.4%',
      trend: 'up',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Model Accuracy',
      value: '97.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Monthly Revenue',
      value: '$267K',
      change: '+19.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Active Models',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const menuItems = [
    { id: 'overview', icon: BarChart3, label: 'Overview', active: true },
    { id: 'models', icon: Brain, label: 'AI Models' },
    { id: 'analytics', icon: Gauge, label: 'Analytics' },
    { id: 'insights', icon: Lightbulb, label: 'AI Insights' },
    { id: 'pipelines', icon: Workflow, label: 'ML Pipelines' },
    { id: 'datasets', icon: Database, label: 'Datasets' },
    { id: 'monitoring', icon: Activity, label: 'Monitoring' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const runAIAnalysis = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#0a0b1e',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      marginTop: '-80px',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%)',
        zIndex: -1
      }}>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#6366f1',
              borderRadius: '50%',
              opacity: 0.3,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Sidebar */}
      <div style={{
        width: '80px',
        background: 'linear-gradient(180deg, rgba(10, 11, 30, 0.95) 0%, rgba(30, 31, 59, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(99, 102, 241, 0.1)',
        borderRadius: '0 20px 20px 0',
        position: 'fixed',
        height: '100vh',
        zIndex: 1000,
        overflow: 'hidden',
        marginTop: '-80px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Logo */}
        <div style={{
          padding: '1.5rem',
          borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
            position: 'relative'
          }}>
            <Brain size={24} color="white" />
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              background: '#10b981',
              borderRadius: '50%',
              border: '2px solid #0a0b1e',
              animation: 'pulse 2s infinite'
            }}></div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '1rem 0' }}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                padding: '0.75rem',
                margin: '0.5rem 1rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === item.id ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.2))' : 'transparent',
                border: activeTab === item.id ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== item.id) {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'transparent';
                }
              }}
              title={item.label}
            >
              <item.icon size={20} color={activeTab === item.id ? '#6366f1' : '#94a3b8'} />
              {activeTab === item.id && (
                <div style={{
                  position: 'absolute',
                  right: '-3px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: '24px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                }}></div>
              )}
            </div>
          ))}
        </nav>

        {/* AI Status Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
            animation: 'pulse 2s infinite'
          }}>
            <Zap size={18} color="white" />
          </div>
          <div style={{
            fontSize: '0.7rem',
            color: '#10b981',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            AI Active
          </div>
        </div>

        {/* User Profile */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.1rem',
            border: '2px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 25px rgba(245, 158, 11, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 20px rgba(245, 158, 11, 0.3)';
          }}
          title="Dr. Sarah Chen - AI Research Director"
          >
            SC
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        marginLeft: '80px',
        background: 'linear-gradient(135deg, #0a0b1e 0%, #1e1b4b 100%)',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <header style={{
          padding: '1.5rem 2rem',
          background: 'rgba(10, 11, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div>
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              margin: 0,
              background: 'linear-gradient(135deg, #ffffff, #6366f1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Neural Intelligence Platform
            </h1>
            <p style={{
              margin: 0,
              color: '#94a3b8',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#10b981',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
              {aiModelsRunning} AI models running • {currentTime.toLocaleTimeString()}
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Quick Stats */}
            <div style={{
              display: window.innerWidth >= 768 ? 'flex' : 'none',
              gap: '2rem',
              marginRight: '1rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  97.2%
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#64748b'
                }}>
                  Accuracy
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  1.8K/s
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#64748b'
                }}>
                  Throughput
                </div>
              </div>
            </div>

            {/* Search */}
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
                placeholder="Search models, datasets..."
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '50px',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  width: '250px',
                  outline: 'none',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>

            {/* AI Analysis Button */}
            <button
              onClick={runAIAnalysis}
              disabled={isProcessing}
              style={{
                background: isProcessing ? 'linear-gradient(135deg, #64748b, #475569)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isProcessing) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isProcessing) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.3)';
                }
              }}
            >
              {isProcessing ? (
                <>
                  <RotateCw size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  AI Insights
                </>
              )}
            </button>

            {/* Notifications */}
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '12px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }}>
              <Bell size={18} color="#94a3b8" />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                width: '8px',
                height: '8px',
                background: '#ef4444',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
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
            {kpis.map((kpi, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.target.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${kpi.color.split(' ')[1]}, ${kpi.color.split(' ')[3]})`,
                  borderRadius: '50%',
                  opacity: 0.1,
                  transform: 'translate(30px, -30px)'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: `linear-gradient(135deg, ${kpi.color.split(' ')[1]}, ${kpi.color.split(' ')[3]})`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${kpi.color.split(' ')[1]}40`
                  }}>
                    <kpi.icon size={24} color="white" />
                  </div>
                  <MoreHorizontal size={20} color="#64748b" />
                </div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}>
                    {kpi.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    marginBottom: '0.5rem'
                  }}>
                    {kpi.title}
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
                      {kpi.change}
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

          {/* Main Charts Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '2fr 1fr' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* AI Model Performance */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)'
              }}></div>

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
                    AI Model Performance
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                  }}>
                    Real-time accuracy, latency, and throughput metrics
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {[
                    { label: 'Accuracy', color: '#6366f1' },
                    { label: 'Latency', color: '#8b5cf6' },
                    { label: 'Throughput', color: '#06b6d4' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={aiModelMetrics}>
                  <defs>
                    <linearGradient id="accuracyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[90, 100]} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 11, 30, 0.95)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(20px)'
                    }}
                  />
                  <Area yAxisId="left" type="monotone" dataKey="accuracy" stroke="#6366f1" fillOpacity={1} fill="url(#accuracyGrad)" strokeWidth={3} />
                  <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
                  <Bar yAxisId="right" dataKey="throughput" fill="#06b6d4" fillOpacity={0.6} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* AI Services Distribution */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <PieChart size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    margin: 0,
                    color: '#ffffff'
                  }}>
                    AI Services
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '0.8rem'
                  }}>
                    Model distribution by category
                  </p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={aiServicesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {aiServicesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 11, 30, 0.95)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '8px'
                    }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>

              <div style={{ marginTop: '1rem' }}>
                {aiServicesData.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{
                        fontSize: '0.85rem',
                        color: '#e2e8f0'
                      }}>
                        {item.name}
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8'
                      }}>
                        {item.models} models
                      </span>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#ffffff'
                      }}>
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ML Pipeline & Revenue Analytics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 2fr' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* ML Pipeline Status */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Workflow size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    margin: 0,
                    color: '#ffffff'
                  }}>
                    ML Pipeline
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '0.8rem'
                  }}>
                    Current training pipeline status
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {mlPipelineData.map((stage, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: stage.status === 'completed' ? 'linear-gradient(135deg, #10b981, #059669)' : 
                                  stage.status === 'running' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 
                                  'rgba(100, 116, 139, 0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {stage.status === 'completed' ? (
                        <CheckCircle size={16} color="white" />
                      ) : stage.status === 'running' ? (
                        <RotateCw size={16} color="white" style={{ animation: 'spin 2s linear infinite' }} />
                      ) : (
                        <Clock size={16} color="#64748b" />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#ffffff',
                        marginBottom: '0.25rem'
                      }}>
                        {stage.stage}
                      </div>
                      <div style={{
                        width: '100%',
                        height: '4px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${stage.progress}%`,
                          height: '100%',
                          background: stage.status === 'completed' ? 'linear-gradient(90deg, #10b981, #059669)' : 
                                     stage.status === 'running' ? 'linear-gradient(90deg, #f59e0b, #d97706)' : 
                                     '#64748b',
                          transition: 'width 1s ease'
                        }}></div>
                      </div>
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#94a3b8',
                      fontWeight: '600'
                    }}>
                      {stage.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Analytics */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
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
                    Revenue Analytics
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                  }}>
                    AI-driven revenue insights and API monetization
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {[
                    { label: 'Revenue', color: '#10b981' },
                    { label: 'Cost', color: '#ef4444' },
                    { label: 'API Calls', color: '#06b6d4' }
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: item.color,
                        borderRadius: '50%'
                      }}></div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                <ComposedChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(value) => `$${value/1000}k`} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(value) => `${value}M`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(10, 11, 30, 0.95)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(20px)'
                    }}
                    formatter={(value, name) => [
                      name === 'apiCalls' ? `${value}M calls` : `$${value.toLocaleString()}`,
                      name === 'apiCalls' ? 'API Calls' : name.charAt(0).toUpperCase() + name.slice(1)
                    ]}
                  />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#revenueGrad)" strokeWidth={3} />
                  <Bar yAxisId="left" dataKey="cost" fill="#ef4444" fillOpacity={0.6} />
                  <Line yAxisId="right" type="monotone" dataKey="apiCalls" stroke="#06b6d4" strokeWidth={2} dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Insights & Active Models */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 2fr' : '1fr',
            gap: '2rem'
          }}>
            {/* AI Insights */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #ec4899, #be185d)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Lightbulb size={20} color="white" />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      margin: 0,
                      color: '#ffffff'
                    }}>
                      AI Insights
                    </h3>
                    <p style={{
                      margin: 0,
                      color: '#94a3b8',
                      fontSize: '0.8rem'
                    }}>
                      Automated analysis & alerts
                    </p>
                  </div>
                </div>
                <RefreshCw size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                {aiInsights.map((insight) => (
                  <div key={insight.id} style={{
                    display: 'flex',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: insight.severity === 'high' ? 'rgba(239, 68, 68, 0.1)' : 
                               insight.severity === 'medium' ? 'rgba(245, 158, 11, 0.1)' : 
                               'rgba(34, 197, 94, 0.1)',
                    borderRadius: '12px',
                    border: `1px solid ${insight.severity === 'high' ? 'rgba(239, 68, 68, 0.2)' : 
                                                    insight.severity === 'medium' ? 'rgba(245, 158, 11, 0.2)' : 
                                                    'rgba(34, 197, 94, 0.2)'}`
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: insight.severity === 'high' ? 'rgba(239, 68, 68, 0.2)' : 
                                 insight.severity === 'medium' ? 'rgba(245, 158, 11, 0.2)' : 
                                 'rgba(34, 197, 94, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <insight.icon size={18} color={
                        insight.severity === 'high' ? '#ef4444' : 
                        insight.severity === 'medium' ? '#f59e0b' : 
                        '#22c55e'
                      } />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#ffffff'
                        }}>
                          {insight.title}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: '#94a3b8',
                          padding: '0.25rem 0.5rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '8px'
                        }}>
                          {insight.confidence}% confidence
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        color: '#e2e8f0',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4'
                      }}>
                        {insight.description}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#94a3b8'
                      }}>
                        {insight.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Models Table */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.1)',
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
                  Active AI Models
                </h3>
                <button style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Plus size={14} />
                  Deploy Model
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
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Model</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Status</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Performance</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Load</th>
                      <th style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeModels.map((model) => (
                      <tr key={model.id}>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                              width: '36px',
                              height: '36px',
                              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Brain size={18} color="white" />
                            </div>
                            <div>
                              <div style={{
                                fontWeight: '600',
                                color: '#ffffff',
                                marginBottom: '0.25rem'
                              }}>
                                {model.name}
                              </div>
                              <div style={{
                                fontSize: '0.75rem',
                                color: '#94a3b8',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}>
                                {model.type} • {model.version}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <div style={{
                              width: '8px',
                              height: '8px',
                              background: model.status === 'active' ? '#10b981' : 
                                         model.status === 'training' ? '#f59e0b' : '#64748b',
                              borderRadius: '50%',
                              animation: model.status === 'active' ? 'pulse 2s infinite' : 'none'
                            }}></div>
                            <span style={{
                              fontSize: '0.85rem',
                              color: model.status === 'active' ? '#10b981' : 
                                    model.status === 'training' ? '#f59e0b' : '#64748b',
                              fontWeight: '600',
                              textTransform: 'capitalize'
                            }}>
                              {model.status}
                            </span>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <div style={{
                              fontSize: '0.9rem',
                              color: '#ffffff',
                              fontWeight: '600'
                            }}>
                              {model.accuracy}%
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: '#94a3b8'
                            }}>
                              {model.latency}ms latency
                            </div>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <div style={{
                              fontSize: '0.85rem',
                              color: '#e2e8f0'
                            }}>
                              {model.requests.toLocaleString()} req/hr
                            </div>
                            <div style={{
                              fontSize: '0.75rem',
                              color: '#94a3b8'
                            }}>
                              {model.gpu}
                            </div>
                          </div>
                        </td>
                        <td style={{
                          padding: '1rem 0.75rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{
                              background: 'rgba(99, 102, 241, 0.2)',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '0.375rem',
                              cursor: 'pointer',
                              color: '#6366f1'
                            }}>
                              <Eye size={14} />
                            </button>
                            <button style={{
                              background: model.status === 'active' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '0.375rem',
                              cursor: 'pointer',
                              color: model.status === 'active' ? '#ef4444' : '#22c55e'
                            }}>
                              {model.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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

export default AIIntelligenceDashboard;