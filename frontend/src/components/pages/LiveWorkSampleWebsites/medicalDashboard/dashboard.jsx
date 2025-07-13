import React, { useState, useEffect } from 'react';
import {
  Stethoscope, Heart, Brain, Eye, Microscope, Pill, Activity, Users,
  Calendar, MessageSquare, FileText, Settings, Bell, Search, Filter,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, Zap,
  BarChart3, PieChart, Target, Shield, Thermometer, Droplets, Waves,
  Cpu, Sparkles, Play, Pause, RotateCw, Download, Share2, Plus, Minus,
  ArrowUp, ArrowDown, ArrowRight, Star, Award, Globe, Camera, Smartphone
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart as RechartsPieChart, Pie, Cell, BarChart, Bar, AreaChart, Area,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';

const MedicalDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alertCount, setAlertCount] = useState(7);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // Advanced medical data
  const patientVitals = [
    { time: '00:00', heartRate: 72, bloodPressure: 120, temperature: 98.6, oxygenSat: 98 },
    { time: '04:00', heartRate: 68, bloodPressure: 118, temperature: 98.4, oxygenSat: 99 },
    { time: '08:00', heartRate: 75, bloodPressure: 125, temperature: 98.8, oxygenSat: 97 },
    { time: '12:00', heartRate: 80, bloodPressure: 130, temperature: 99.2, oxygenSat: 96 },
    { time: '16:00', heartRate: 78, bloodPressure: 128, temperature: 99.0, oxygenSat: 98 },
    { time: '20:00', heartRate: 74, bloodPressure: 122, temperature: 98.7, oxygenSat: 99 }
  ];

  const diagnosisDistribution = [
    { name: 'Hypertension', value: 25, color: '#10b981' },
    { name: 'Diabetes', value: 20, color: '#3b82f6' },
    { name: 'Respiratory', value: 18, color: '#8b5cf6' },
    { name: 'Cardiac', value: 15, color: '#f59e0b' },
    { name: 'Neurological', value: 12, color: '#ef4444' },
    { name: 'Other', value: 10, color: '#6b7280' }
  ];

  const drugInteractions = [
    { drug1: 'Warfarin', drug2: 'Aspirin', severity: 'High', effect: 'Increased bleeding risk' },
    { drug1: 'Metformin', drug2: 'Alcohol', severity: 'Medium', effect: 'Lactic acidosis risk' },
    { drug1: 'Lisinopril', drug2: 'Potassium', severity: 'Medium', effect: 'Hyperkalemia risk' },
    { drug1: 'Digoxin', drug2: 'Furosemide', severity: 'High', effect: 'Digoxin toxicity' }
  ];

  const patientFlow = [
    { hour: '6:00', waiting: 0, inTreatment: 0, completed: 0 },
    { hour: '8:00', waiting: 5, inTreatment: 2, completed: 1 },
    { hour: '10:00', waiting: 8, inTreatment: 4, completed: 6 },
    { hour: '12:00', waiting: 12, inTreatment: 6, completed: 15 },
    { hour: '14:00', waiting: 6, inTreatment: 8, completed: 25 },
    { hour: '16:00', waiting: 4, inTreatment: 5, completed: 32 },
    { hour: '18:00', waiting: 2, inTreatment: 2, completed: 38 }
  ];

  const aiPredictions = [
    { condition: 'Diabetes Risk', probability: 85, timeframe: '6 months', confidence: 'High' },
    { condition: 'Cardiac Event', probability: 23, timeframe: '1 year', confidence: 'Medium' },
    { condition: 'Medication Non-compliance', probability: 67, timeframe: '30 days', confidence: 'High' },
    { condition: 'Hospital Readmission', probability: 34, timeframe: '90 days', confidence: 'Medium' }
  ];

  const recentPatients = [
    { id: 1, name: 'Sarah Chen', age: 45, condition: 'Hypertension', status: 'Stable', lastVisit: '2 hours ago', risk: 'Low' },
    { id: 2, name: 'Robert Martinez', age: 62, condition: 'Diabetes T2', status: 'Monitoring', lastVisit: '1 day ago', risk: 'Medium' },
    { id: 3, name: 'Emily Johnson', age: 28, condition: 'Pregnancy', status: 'Routine', lastVisit: '3 hours ago', risk: 'Low' },
    { id: 4, name: 'David Wilson', age: 71, condition: 'COPD', status: 'Critical', lastVisit: '30 minutes ago', risk: 'High' },
    { id: 5, name: 'Lisa Thompson', age: 39, condition: 'Migraine', status: 'Improving', lastVisit: '5 hours ago', risk: 'Low' }
  ];

  const medicalAlerts = [
    { type: 'Critical', message: 'Patient David Wilson - Oxygen saturation below 90%', time: '2 min ago', severity: 'high' },
    { type: 'Drug Alert', message: 'Potential interaction: Warfarin + Aspirin for Sarah Chen', time: '15 min ago', severity: 'medium' },
    { type: 'Lab Result', message: 'Abnormal HbA1c results ready for Robert Martinez', time: '1 hour ago', severity: 'medium' },
    { type: 'Appointment', message: 'Emily Johnson early arrival - Room 3 available', time: '2 hours ago', severity: 'low' }
  ];

  const biomarkers = [
    { name: 'HbA1c', value: 6.8, range: '4.0-5.6', status: 'elevated', trend: 'up' },
    { name: 'Cholesterol', value: 185, range: '<200', status: 'normal', trend: 'down' },
    { name: 'Creatinine', value: 1.2, range: '0.6-1.2', status: 'normal', trend: 'stable' },
    { name: 'Vitamin D', value: 25, range: '30-100', status: 'low', trend: 'down' }
  ];

  const performanceMetrics = [
    { metric: 'Patient Satisfaction', value: 94, target: 90, change: '+2%' },
    { metric: 'Average Wait Time', value: 12, target: 15, change: '-15%' },
    { metric: 'Diagnosis Accuracy', value: 97, target: 95, change: '+1%' },
    { metric: 'Treatment Efficiency', value: 89, target: 85, change: '+8%' }
  ];

  const runAIAnalysis = () => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Critical': return '#ef4444';
      case 'Monitoring': return '#f59e0b';
      case 'Stable': case 'Routine': case 'Improving': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Sidebar with Icons Only */}
      <div style={{
        width: '80px',
        backgroundColor: '#10b981',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 0 15px rgba(16, 185, 129, 0.2)'
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
            <Stethoscope size={24} color="white" />
          </div>
        </div>

        {/* Navigation Icons */}
        <nav style={{ flex: 1, padding: '20px 0' }}>
          {[
            { icon: BarChart3, id: 'overview', active: activeView === 'overview' },
            { icon: Users, id: 'patients', active: activeView === 'patients' },
            { icon: Heart, id: 'vitals', active: activeView === 'vitals' },
            { icon: Brain, id: 'ai', active: activeView === 'ai' },
            { icon: Pill, id: 'drugs', active: activeView === 'drugs' },
            { icon: Microscope, id: 'labs', active: activeView === 'labs' },
            { icon: Activity, id: 'monitoring', active: activeView === 'monitoring' },
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
            cursor: 'pointer'
          }}>
            <Stethoscope size={18} color="white" />
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
              background: 'linear-gradient(135deg, #10b981, #059669)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              MedIQ Pro Dashboard
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
              })} • {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
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
                  color: '#10b981'
                }}>
                  24
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  Patients Today
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#3b82f6'
                }}>
                  3
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  Pending Results
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
                onClick={runAIAnalysis}
                disabled={isAnalyzing}
                style={{
                  padding: '10px 16px',
                  background: isAnalyzing ? '#6b7280' : 'linear-gradient(135deg, #10b981, #059669)',
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
                {isAnalyzing ? 'Analyzing...' : 'AI Analysis'}
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
          {medicalAlerts.filter(alert => alert.severity === 'high').length > 0 && (
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
                  Critical Alert
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#7f1d1d',
                  margin: 0
                }}>
                  {medicalAlerts.find(alert => alert.severity === 'high')?.message}
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
            {/* Patient Vitals Monitoring */}
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
                    Real-Time Patient Vitals
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Live monitoring of critical parameters
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <div style={{
                    padding: '6px 12px',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    Live
                  </div>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={patientVitals}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
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
                  <Line
                    type="monotone"
                    dataKey="heartRate"
                    stroke="#ef4444"
                    strokeWidth={3}
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                    name="Heart Rate (BPM)"
                  />
                  <Line
                    type="monotone"
                    dataKey="bloodPressure"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    name="Blood Pressure"
                  />
                  <Line
                    type="monotone"
                    dataKey="oxygenSat"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    name="Oxygen Saturation (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* AI Predictions Panel */}
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
                    AI Health Predictions
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Predictive analytics for patient outcomes
                  </p>
                </div>
              </div>

              <div style={{ space: '16px' }}>
                {aiPredictions.map((prediction, index) => (
                  <div key={index} style={{
                    padding: '16px',
                    backgroundColor: prediction.probability > 70 ? '#fef2f2' : prediction.probability > 40 ? '#fffbeb' : '#f0fdf4',
                    borderRadius: '12px',
                    border: `1px solid ${prediction.probability > 70 ? '#fecaca' : prediction.probability > 40 ? '#fed7aa' : '#bbf7d0'}`,
                    marginBottom: '12px'
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
                        {prediction.condition}
                      </h4>
                      <span style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: prediction.probability > 70 ? '#dc2626' : prediction.probability > 40 ? '#d97706' : '#059669'
                      }}>
                        {prediction.probability}%
                      </span>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      marginBottom: '8px'
                    }}>
                      Timeframe: {prediction.timeframe}
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${prediction.probability}%`,
                        height: '100%',
                        backgroundColor: prediction.probability > 70 ? '#dc2626' : prediction.probability > 40 ? '#d97706' : '#059669',
                        transition: 'width 1s ease'
                      }}></div>
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
            {/* Drug Interaction Checker */}
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
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Pill size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Drug Interactions
                  </h3>
                </div>
              </div>

              <div style={{ space: '12px' }}>
                {drugInteractions.map((interaction, index) => (
                  <div key={index} style={{
                    padding: '12px',
                    backgroundColor: interaction.severity === 'High' ? '#fef2f2' : '#fffbeb',
                    borderRadius: '8px',
                    border: `1px solid ${interaction.severity === 'High' ? '#fecaca' : '#fed7aa'}`,
                    marginBottom: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {interaction.drug1} + {interaction.drug2}
                      </span>
                      <span style={{
                        fontSize: '10px',
                        padding: '2px 6px',
                        backgroundColor: interaction.severity === 'High' ? '#dc2626' : '#d97706',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: '600'
                      }}>
                        {interaction.severity}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      margin: 0
                    }}>
                      {interaction.effect}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biomarker Tracking */}
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
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Droplets size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Biomarkers
                  </h3>
                </div>
              </div>

              <div style={{ space: '12px' }}>
                {biomarkers.map((marker, index) => (
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
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1f2937'
                      }}>
                        {marker.name}
                      </span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: 'bold',
                          color: marker.status === 'normal' ? '#10b981' : marker.status === 'elevated' ? '#f59e0b' : '#ef4444'
                        }}>
                          {marker.value}
                        </span>
                        {marker.trend === 'up' && <ArrowUp size={12} color="#ef4444" />}
                        {marker.trend === 'down' && <ArrowDown size={12} color="#10b981" />}
                        {marker.trend === 'stable' && <div style={{ width: '8px', height: '2px', backgroundColor: '#6b7280' }}></div>}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: '#6b7280'
                    }}>
                      Normal: {marker.range}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
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
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Target size={20} color="white" />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Performance
                  </h3>
                </div>
              </div>

              <div style={{ space: '12px' }}>
                {performanceMetrics.map((metric, index) => (
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
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#1f2937'
                      }}>
                        {metric.value}{metric.metric.includes('Time') ? 'min' : '%'}
                      </span>
                      <div style={{
                        flex: 1,
                        height: '4px',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '2px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${Math.min((metric.value / metric.target) * 100, 100)}%`,
                          height: '100%',
                          backgroundColor: metric.value >= metric.target ? '#10b981' : '#f59e0b',
                          transition: 'width 1s ease'
                        }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient List & Diagnosis Distribution */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 1440 ? '2fr 1fr' : '1fr',
            gap: '24px'
          }}>
            {/* Recent Patients */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '24px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  Recent Patients
                </h3>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      {['Patient', 'Age', 'Condition', 'Status', 'Risk', 'Last Visit'].map((header) => (
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
                    {recentPatients.map((patient) => (
                      <tr
                        key={patient.id}
                        style={{
                          borderBottom: '1px solid #f3f4f6',
                          cursor: 'pointer'
                        }}
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <td style={{
                          padding: '16px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937'
                        }}>
                          {patient.name}
                        </td>
                        <td style={{
                          padding: '16px',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          {patient.age}
                        </td>
                        <td style={{
                          padding: '16px',
                          fontSize: '14px',
                          color: '#1f2937'
                        }}>
                          {patient.condition}
                        </td>
                        <td style={{
                          padding: '16px'
                        }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600',
                            backgroundColor: `${getStatusColor(patient.status)}20`,
                            color: getStatusColor(patient.status)
                          }}>
                            {patient.status}
                          </span>
                        </td>
                        <td style={{
                          padding: '16px'
                        }}>
                          <span style={{
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '600',
                            backgroundColor: `${getRiskColor(patient.risk)}20`,
                            color: getRiskColor(patient.risk)
                          }}>
                            {patient.risk}
                          </span>
                        </td>
                        <td style={{
                          padding: '16px',
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          {patient.lastVisit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Diagnosis Distribution */}
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
                margin: '0 0 24px 0'
              }}>
                Diagnosis Distribution
              </h3>
              
              <div style={{ height: '250px', marginBottom: '20px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={diagnosisDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {diagnosisDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>

              <div style={{ space: '8px' }}>
                {diagnosisDistribution.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: index < diagnosisDistribution.length - 1 ? '1px solid #f3f4f6' : 'none'
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
                      {item.value}%
                    </span>
                  </div>
                ))}
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
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MedicalDashboard;