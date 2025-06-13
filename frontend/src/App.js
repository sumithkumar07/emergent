import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Play, ChevronRight, Bot, Code, Database, Zap, 
  Users, Shield, BarChart3, Lightbulb, Star, Check, 
  ArrowRight, Github, Twitter, Linkedin, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation Component
const Navigation = ({ isOpen, setIsOpen, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'features', label: 'Features', path: '/features' },
    { id: 'pricing', label: 'Pricing', path: '/pricing' },
    { id: 'community', label: 'Community', path: '/community' }
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
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Emergent</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 text-sm">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </button>
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
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-700 pt-4">
                <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">
                  Sign In
                </button>
                <button className="block w-full text-left px-3 py-2 mt-1 bg-blue-600 text-white rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1572025418633-489b46e62332"
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-20"
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
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Build the Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {' '}AI Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Emergent is the complete AI development platform that empowers teams to build, 
              deploy, and scale intelligent applications with unprecedented ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center group">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:mt-0 mt-12"
          >
            <img
              src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
              alt="AI Development Platform"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "No-Code AI Builder",
      description: "Build sophisticated AI models with our intuitive drag-and-drop interface. No coding required.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Data Management",
      description: "Seamlessly integrate, clean, and manage your datasets with our intelligent data pipeline.",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Deployment",
      description: "Deploy your AI models to production in seconds with our automated deployment pipeline.",
      image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Monitor your AI models with comprehensive analytics and performance insights.",
      image: "https://images.unsplash.com/photo-1648134859182-98df6e93ef58"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to build AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ideation to production, Emergent provides all the tools and infrastructure 
            you need to create world-class AI applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-32 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Dashboard Preview
const DashboardPreview = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Dashboard Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage your AI projects, monitor performance, and collaborate with your team 
            all from one comprehensive dashboard.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-xl p-8 shadow-2xl"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
                alt="Dashboard Interface"
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Active Models</h3>
                <div className="text-2xl font-bold text-blue-400">247</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">API Calls Today</h3>
                <div className="text-2xl font-bold text-green-400">1.2M</div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Success Rate</h3>
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Lead at TechCorp",
      content: "Emergent has revolutionized how we build and deploy AI models. What used to take weeks now takes hours.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at StartupAI",
      content: "The no-code approach made AI accessible to our entire team. We've shipped 10x faster since switching.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist at Scale",
      content: "Best AI platform I've used. The analytics and monitoring features are game-changing.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by AI Leaders
          </h2>
          <p className="text-xl text-gray-600">
            See what industry experts are saying about Emergent
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for individual developers and small projects",
      features: [
        "Up to 3 AI models",
        "1,000 API calls/month",
        "Basic analytics",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing teams and production applications",
      features: [
        "Unlimited AI models",
        "100,000 API calls/month",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "24/7 support",
        "Custom training",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-blue-600 to-purple-700 text-white' 
                  : 'bg-gray-800 text-white'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg">{plan.period}</span>
                </div>
                <p className={plan.popular ? 'text-blue-100' : 'text-gray-400'}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 mr-3 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold ${
                plan.popular 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Emergent</span>
            </div>
            <p className="text-gray-400 mb-4">
              The complete AI development platform for the modern world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400">
            © 2025 Emergent AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = [
    { label: 'Active Models', value: '247', change: '+12%', icon: <Bot className="w-6 h-6" /> },
    { label: 'API Calls Today', value: '1.2M', change: '+8%', icon: <Zap className="w-6 h-6" /> },
    { label: 'Success Rate', value: '99.9%', change: '+0.1%', icon: <BarChart3 className="w-6 h-6" /> },
    { label: 'Team Members', value: '12', change: '+2', icon: <Users className="w-6 h-6" /> }
  ];

  const recentModels = [
    { name: 'Customer Sentiment Analysis', status: 'Active', accuracy: '94.2%', lastTrained: '2 hours ago' },
    { name: 'Product Recommendation Engine', status: 'Training', accuracy: '91.8%', lastTrained: '1 day ago' },
    { name: 'Fraud Detection Model', status: 'Active', accuracy: '98.7%', lastTrained: '3 days ago' },
    { name: 'Image Classification API', status: 'Inactive', accuracy: '89.3%', lastTrained: '1 week ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your AI projects.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className="text-blue-600">{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Models */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Models</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentModels.map((model, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{model.name}</h3>
                        <p className="text-sm text-gray-500">Accuracy: {model.accuracy} • {model.lastTrained}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          model.status === 'Active' ? 'bg-green-100 text-green-800' :
                          model.status === 'Training' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {model.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                  Create New Model
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium">
                  Upload Dataset
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium">
                  View API Docs
                </button>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Performance</h2>
              </div>
              <div className="p-6">
                <img
                  src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58"
                  alt="Performance Analytics"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple pages for other routes
const FeaturesPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
      <FeaturesSection />
    </div>
  </div>
);

const PricingPage = () => (
  <div className="min-h-screen bg-gray-900 py-12">
    <PricingSection />
  </div>
);

const CommunityPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Community</h1>
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <img
          src="https://images.pexels.com/photos/7562452/pexels-photo-7562452.jpeg"
          alt="Community"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Join Our AI Community</h2>
        <p className="text-gray-600 mb-6">
          Connect with thousands of AI developers, share knowledge, and collaborate on cutting-edge projects.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">500+</div>
            <div className="text-gray-600">Projects Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Community Support</div>
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
      <BrowserRouter>
        <Navigation 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;