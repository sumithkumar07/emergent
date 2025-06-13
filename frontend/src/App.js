import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Play, ChevronRight, Bot, Code, Database, Zap, 
  Users, Shield, BarChart3, Lightbulb, Star, Check, 
  ArrowRight, Github, Twitter, Linkedin, Mail, Settings,
  Terminal, Cpu, Brain, Layers, Activity, Rocket, Globe,
  PlusCircle, Download, Share, Eye, Copy, Maximize
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';

// Advanced Navigation Component
const Navigation = ({ isOpen, setIsOpen, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: <Globe className="w-4 h-4" /> },
    { id: 'studio', label: 'AI Studio', path: '/studio', icon: <Brain className="w-4 h-4" /> },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'playground', label: 'Playground', path: '/playground', icon: <Terminal className="w-4 h-4" /> },
    { id: 'models', label: 'Models', path: '/models', icon: <Cpu className="w-4 h-4" /> },
    { id: 'community', label: 'Community', path: '/community', icon: <Users className="w-4 h-4" /> }
  ];

  const handleNavigation = (item) => {
    setCurrentPage(item.id);
    navigate(item.path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bot className="w-5 h-5 text-white" />
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white">Emergent</span>
              <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Pro</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm"
            >
              Sign In
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg"
            >
              Get Started
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
        
        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};

// Enhanced Hero Section
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Build AI Models',
    'Deploy in Seconds',
    'Scale Globally',
    'Code Intelligently'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 overflow-hidden min-h-screen flex items-center">
      <ParticleBackground />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9"
          alt="Advanced AI Coding"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30"
            >
              <span className="text-blue-400 text-sm font-medium">🚀 Next-Gen AI Development</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-7xl font-bold text-white mb-6">
              <span className="block">Code. Train.</span>
              <motion.span 
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              >
                {texts[currentText]}
              </motion.span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              The most advanced AI development platform. Build, train, and deploy machine learning models 
              with our revolutionary no-code interface and powerful developer tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center group shadow-2xl"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass border border-gray-600 text-white hover:bg-gray-800/50 px-8 py-4 rounded-lg font-semibold flex items-center"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm">247 Models Active</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm">1.2M API Calls Today</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:mt-0 mt-12 relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1597733336794-12d05021d510"
                alt="Neural Network Visualization"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium">Neural Network Training</span>
                    <span className="text-blue-400">97.3% Accuracy</span>
                  </div>
                  <div className="mt-2 bg-gray-800 rounded-full h-2">
                    <motion.div 
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '97.3%' }}
                      transition={{ duration: 2, delay: 1 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// AI Studio Component
const AIStudio = () => {
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [code, setCode] = useState(`# AI Model Training Pipeline
import emergent as em

# Initialize your AI model
model = em.create_model('neural_network', {
    'layers': [128, 64, 32],
    'activation': 'relu',
    'optimizer': 'adam'
})

# Load and preprocess data
data = em.load_dataset('your_data.csv')
X_train, X_test, y_train, y_test = em.prepare_data(data)

# Train the model
model.train(X_train, y_train, epochs=100)

# Evaluate performance
accuracy = model.evaluate(X_test, y_test)
print(f"Model accuracy: {accuracy:.2%}")

# Deploy to production
model.deploy('production', auto_scale=True)`);

  const models = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Advanced language model', status: 'active' },
    { id: 'claude', name: 'Claude', description: 'Constitutional AI assistant', status: 'training' },
    { id: 'custom', name: 'Custom CNN', description: 'Image classification model', status: 'inactive' }
  ];

  const handleRunCode = () => {
    toast.success('Code executed successfully!', {
      icon: '🚀',
      style: {
        background: '#1f2937',
        color: '#fff',
        border: '1px solid #374151'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            AI Studio
          </h1>
          <p className="text-gray-400">Build, train, and deploy AI models with advanced tools</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Model Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Models
              </h3>
              <div className="space-y-3">
                {models.map((model) => (
                  <motion.div
                    key={model.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedModel === model.id ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{model.name}</div>
                        <div className="text-xs text-gray-400">{model.description}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        model.status === 'active' ? 'bg-green-400' :
                        model.status === 'training' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium flex items-center justify-center"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                New Model
              </motion.button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm">model_training.py</span>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleRunCode}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Run
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg"
                  >
                    <Share className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              <div className="h-96">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  value={code}
                  onChange={(value) => setCode(value)}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    fontFamily: 'Fira Code, Monaco, Consolas, monospace'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-green-400" />
              Training Progress
            </h3>
            <img
              src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25"
              alt="Training Progress"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="text-2xl font-bold text-green-400 mb-2">97.3%</div>
            <div className="text-gray-400 text-sm">Current Accuracy</div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Layers className="w-5 h-5 mr-2 text-blue-400" />
              Model Architecture
            </h3>
            <img
              src="https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0"
              alt="Model Architecture"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="text-2xl font-bold text-blue-400 mb-2">128→64→32</div>
            <div className="text-gray-400 text-sm">Layer Configuration</div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Performance
            </h3>
            <img
              src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
              alt="Performance Metrics"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className="text-2xl font-bold text-yellow-400 mb-2">847ms</div>
            <div className="text-gray-400 text-sm">Inference Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Advanced Dashboard
const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  
  const performanceData = [
    { name: 'Mon', accuracy: 92, throughput: 1200, latency: 45 },
    { name: 'Tue', accuracy: 94, throughput: 1350, latency: 42 },
    { name: 'Wed', accuracy: 91, throughput: 1180, latency: 48 },
    { name: 'Thu', accuracy: 96, throughput: 1420, latency: 38 },
    { name: 'Fri', accuracy: 97, throughput: 1580, latency: 35 },
    { name: 'Sat', accuracy: 95, throughput: 1340, latency: 40 },
    { name: 'Sun', accuracy: 98, throughput: 1680, latency: 32 }
  ];

  const apiCallsData = [
    { name: '00:00', calls: 400 },
    { name: '04:00', calls: 300 },
    { name: '08:00', calls: 800 },
    { name: '12:00', calls: 1200 },
    { name: '16:00', calls: 1000 },
    { name: '20:00', calls: 600 },
    { name: '24:00', calls: 450 }
  ];

  const stats = [
    { 
      label: 'Active Models', 
      value: '347', 
      change: '+23%', 
      trend: 'up',
      icon: <Bot className="w-6 h-6" />,
      color: 'blue'
    },
    { 
      label: 'API Calls', 
      value: '2.4M', 
      change: '+12%', 
      trend: 'up',
      icon: <Zap className="w-6 h-6" />,
      color: 'green'
    },
    { 
      label: 'Success Rate', 
      value: '99.97%', 
      change: '+0.03%', 
      trend: 'up',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'purple'
    },
    { 
      label: 'Avg Response', 
      value: '42ms', 
      change: '-8ms', 
      trend: 'down',
      icon: <Activity className="w-6 h-6" />,
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Dashboard</h1>
            <p className="text-gray-600">Real-time insights and analytics for your AI infrastructure</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Export Data
            </motion.button>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <div className={`text-${stat.color}-600`}>{stat.icon}</div>
                </div>
                <div className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                } flex items-center`}>
                  {stat.change}
                  <motion.div
                    animate={{ y: stat.trend === 'up' ? -2 : 2 }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}
                  >
                    {stat.trend === 'up' ? '↗' : '↘'}
                  </motion.div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Analytics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Model Performance</h2>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Accuracy
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Throughput
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="throughput" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Live Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Model deployed</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Training started</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">API threshold reached</p>
                  <p className="text-xs text-gray-500">12 minutes ago</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58"
                alt="Live Dashboard"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* API Usage Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">API Usage (24h)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={apiCallsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="calls" 
                stroke="#8b5cf6" 
                fill="url(#colorGradient)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Playground Component
const Playground = () => {
  const [activeTab, setActiveTab] = useState('python');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const codeExamples = {
    python: `# AI Model Training Example
import emergent as em

# Create a neural network
model = em.NeuralNetwork([
    em.Dense(128, activation='relu'),
    em.Dense(64, activation='relu'),
    em.Dense(10, activation='softmax')
])

# Compile the model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train the model
history = model.fit(X_train, y_train, 
                   epochs=50, 
                   validation_data=(X_val, y_val))`,
    javascript: `// AI API Integration Example
const emergent = require('emergent-ai');

// Initialize the client
const client = new emergent.Client({
    apiKey: 'your-api-key',
    endpoint: 'https://api.emergent.ai'
});

// Generate text with AI
async function generateText(prompt) {
    try {
        const response = await client.complete({
            model: 'gpt-4',
            prompt: prompt,
            max_tokens: 100
        });
        
        return response.choices[0].text;
    } catch (error) {
        console.error('Error:', error);
    }
}`,
    curl: `# API Usage Example
curl -X POST https://api.emergent.ai/v1/models/gpt-4/completions \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain machine learning in simple terms",
    "max_tokens": 100,
    "temperature": 0.7
  }'`
  };

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse(`AI Response: Based on your prompt "${prompt}", here's a comprehensive analysis with actionable insights and recommendations for your AI project implementation.`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            AI Playground
          </motion.h1>
          <p className="text-gray-400">Experiment with AI models and APIs in real-time</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Examples */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="flex border-b border-gray-700">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === lang 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Code Example</span>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                    onClick={() => {
                      navigator.clipboard.writeText(codeExamples[activeTab]);
                      toast.success('Code copied to clipboard!');
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded"
                  >
                    <Maximize className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 h-80 overflow-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {codeExamples[activeTab]}
                </pre>
              </div>
            </div>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-gray-800 rounded-xl border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-green-400" />
                AI Assistant
              </h3>
            </div>
            
            <div className="p-4 h-80 overflow-auto">
              {response && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-gray-700 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300">{response}</p>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {isLoading && (
                <div className="flex items-center p-4 bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
                  placeholder="Ask the AI anything..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePromptSubmit}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Example Models */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1576272531110-2a342fe22342"
              alt="Collaborative Workspace"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">GPT-4 Turbo</h3>
            <p className="text-gray-400 text-sm mb-4">Most capable model for complex reasoning tasks</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
            >
              Try Model
            </motion.button>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <img
              src="https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg"
              alt="AI Collaboration"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Claude 3</h3>
            <p className="text-gray-400 text-sm mb-4">Constitutional AI for safe and helpful responses</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium"
            >
              Try Model
            </motion.button>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1597733336794-12d05021d510"
              alt="Neural Network"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Custom Models</h3>
            <p className="text-gray-400 text-sm mb-4">Build and deploy your own AI models</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
            >
              Create Model
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Models Page
const ModelsPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">AI Models</h1>
      <div className="text-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0"
          alt="AI Models"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="text-xl text-gray-600 text-center">
        Discover and deploy state-of-the-art AI models for your applications
      </p>
    </div>
  </div>
);

// Community Page
const CommunityPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">AI Community</h1>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <img
          src="https://images.pexels.com/photos/3889053/pexels-photo-3889053.jpeg"
          alt="AI Community"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Join the Future of AI Development</h2>
        <p className="text-gray-600 mb-6">
          Connect with AI researchers, developers, and innovators from around the world.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-600">Active Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">1000+</div>
            <div className="text-gray-600">AI Models Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Toaster position="top-right" />
      <BrowserRouter>
        <Navigation 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/studio" element={<AIStudio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;