import React, { useState } from 'react';
import { User, HeartPulse, Bell, Smartphone, Shield, Camera, Save, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

// Toggle Switch Component
const Toggle = ({ enabled, onChange }) => (
  <button 
    type="button"
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-primary' : 'bg-gray-300'}`}
  >
    <span 
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
    />
  </button>
);

const Section = ({ title, icon: Icon, children }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card flex flex-col gap-6"
  >
    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
      <div className="bg-primary/10 p-2 rounded-lg text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="flex flex-col gap-5">
      {children}
    </div>
  </motion.section>
);

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    meals: true,
    water: true,
    weekly: false
  });
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto pb-24 relative">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-textMuted">Manage your preferences, profile, and account security.</p>
        
        {/* Profile Completion Indicator */}
        <div className="mt-4 glass-card bg-gradient-to-r from-primary-light/20 to-secondary-light/20 p-4 border border-primary/20 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary-dark">Profile Completion: 70%</h3>
            <p className="text-sm text-textMuted">Add your age and weight to get personalized AI insights.</p>
          </div>
          <div className="w-1/3 bg-white rounded-full h-2 overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 1, delay: 0.2 }}
              className="bg-primary h-full rounded-full"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8">
        {/* 1. Profile Settings */}
        <Section title="Profile Settings" icon={User}>
          <div className="flex items-center gap-6 mb-2">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl font-bold text-primary overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Vishnu+Kiccha&background=random" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <div>
              <button className="btn-secondary text-sm">Upload New Photo</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Full Name</label>
              <input type="text" defaultValue="Vishnu Kiccha" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Email Address</label>
              <input type="email" defaultValue="vishnu@example.com" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
          </div>
        </Section>

        {/* 2. Health Preferences */}
        <Section title="Health Preferences" icon={HeartPulse}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Age</label>
              <input type="number" placeholder="28" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Weight (kg)</label>
              <input type="number" placeholder="72" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Height (cm)</label>
              <input type="number" placeholder="178" className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Diet Type</label>
              <select className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="non-veg">Non-Vegetarian</option>
                <option value="veg">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="keto">Keto</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-textMuted">Fitness Goal</label>
              <select className="px-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                <option value="maintenance">Maintenance</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
              </select>
            </div>
          </div>
        </Section>

        {/* 3. Notification Settings */}
        <Section title="Notification Settings" icon={Bell}>
          <div className="flex items-center justify-between p-3 hover:bg-white/40 rounded-xl transition-colors">
            <div>
              <p className="font-medium text-textMain">Meal Reminders</p>
              <p className="text-sm text-textMuted">Get notified to log your breakfast, lunch, and dinner.</p>
            </div>
            <Toggle enabled={notifications.meals} onChange={(val) => setNotifications({...notifications, meals: val})} />
          </div>
          <div className="flex items-center justify-between p-3 hover:bg-white/40 rounded-xl transition-colors">
            <div>
              <p className="font-medium text-textMain">Water Intake Alerts</p>
              <p className="text-sm text-textMuted">Hourly reminders to stay hydrated.</p>
            </div>
            <Toggle enabled={notifications.water} onChange={(val) => setNotifications({...notifications, water: val})} />
          </div>
          <div className="flex items-center justify-between p-3 hover:bg-white/40 rounded-xl transition-colors">
            <div>
              <p className="font-medium text-textMain">Weekly Reports</p>
              <p className="text-sm text-textMuted">Receive a summary of your health trends every Sunday.</p>
            </div>
            <Toggle enabled={notifications.weekly} onChange={(val) => setNotifications({...notifications, weekly: val})} />
          </div>
        </Section>

        {/* 4. App Preferences */}
        <Section title="App Preferences" icon={Smartphone}>
          <div className="flex items-center justify-between p-3 hover:bg-white/40 rounded-xl transition-colors">
            <div>
              <p className="font-medium text-textMain">Dark Mode</p>
              <p className="text-sm text-textMuted">Switch to a darker theme for easier reading at night.</p>
            </div>
            <Toggle enabled={darkMode} onChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between p-3 hover:bg-white/40 rounded-xl transition-colors">
            <div>
              <p className="font-medium text-textMain">Language</p>
              <p className="text-sm text-textMuted">Select your preferred app language.</p>
            </div>
            <select className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none cursor-pointer">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </Section>

        {/* 5. Security */}
        <Section title="Security" icon={Shield}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white/30">
              <div>
                <p className="font-medium text-textMain">Password</p>
                <p className="text-sm text-textMuted">Last changed 3 months ago</p>
              </div>
              <button className="btn-secondary text-sm">Change Password</button>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-colors mt-2">
              <LogOut size={18} /> Logout from all devices
            </button>
          </div>
        </Section>
      </div>

      {/* Sticky Save Button */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="btn-primary shadow-xl shadow-primary/40 px-8 py-3 text-lg rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
          <Save size={20} />
          Save Changes
        </button>
      </motion.div>
    </div>
  );
}
