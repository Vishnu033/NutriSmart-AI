import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Activity, Apple, LayoutDashboard, Settings as SettingsIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Dashboard from './pages/Dashboard';
import FoodLog from './pages/FoodLog';
import SettingsPage from './pages/Settings';

// Animated Route Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Dashboard />
          </motion.div>
        } />
        <Route path="/log" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <FoodLog />
          </motion.div>
        } />
        <Route path="/settings" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <SettingsPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 sticky top-0 h-screen p-6 flex flex-col gap-8 border-r border-white/20 bg-white/30 backdrop-blur-lg z-50">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="flex items-center gap-3 px-2"
          >
            <div className="p-2 bg-primary/20 rounded-xl">
              <Apple size={28} className="text-primary" />
            </div>
            <h2 className="font-bold text-2xl bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">NutriSmart</h2>
          </motion.div>
          
          <nav className="flex flex-col gap-3">
            {[
              { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
              { path: '/log', icon: Activity, label: 'Food Log' },
              { path: '/settings', icon: SettingsIcon, label: 'Settings' }
            ].map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'text-textMuted hover:bg-white/50 hover:text-textMain'}`}
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="mt-auto">
            <div className="glass-card p-4 text-center border border-white/50 bg-gradient-to-b from-white/40 to-white/10">
              <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-2">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-bold text-sm">Go Premium</h4>
              <p className="text-xs text-textMuted mt-1 mb-3">Unlock personalized DNA insights.</p>
              <button className="btn-primary w-full py-1.5 text-sm">Upgrade</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 max-w-7xl mx-auto">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
