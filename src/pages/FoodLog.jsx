import React, { useState } from 'react';
import { Search, Plus, Apple, Clock, MoreVertical, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const mockFoodLog = [
  { id: 1, name: 'Oatmeal with Berries', calories: 320, protein: 12, time: '08:30 AM', type: 'Breakfast', icon: '🥣' },
  { id: 2, name: 'Grilled Chicken Salad', calories: 450, protein: 35, time: '01:15 PM', type: 'Lunch', icon: '🥗' },
  { id: 3, name: 'Almonds (Handful)', calories: 160, protein: 6, time: '04:00 PM', type: 'Snack', icon: '🥜' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FoodLog() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col gap-8 w-full pb-10 max-w-4xl mx-auto">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Food Diary</h1>
          <p className="text-textMuted flex items-center gap-2 mt-1">
            <Calendar size={16} /> Today, {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <button className="btn-primary">
          <Plus size={20} /> Log New Meal
        </button>
      </header>

      {/* Intelligent Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-textMuted group-focus-within:text-primary transition-colors" size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search foods, scan barcodes, or use voice input..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full glass-card pl-12 pr-12 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none text-lg transition-all placeholder:text-textMuted/70"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
          <button className="p-2 hover:bg-black/5 rounded-full text-textMuted hover:text-primary transition-colors" title="Voice Input">
            🎤
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full text-textMuted hover:text-primary transition-colors" title="Scan Barcode">
            📸
          </button>
        </div>
      </div>

      {/* Today's Log Timeline */}
      <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-glass">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl">Today's Intake</h2>
          <div className="text-right">
            <p className="text-sm text-textMuted font-semibold uppercase tracking-wide">Total</p>
            <p className="font-bold text-lg">930 <span className="text-sm font-normal text-textMuted">/ 2000 kcal</span></p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 relative"
        >
          {/* Vertical line connecting timeline items */}
          <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-full hidden sm:block"></div>

          {mockFoodLog.map((meal) => (
            <motion.div variants={itemVariants} key={meal.id} className="relative flex items-center gap-4 group">
              {/* Timeline Dot */}
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-2xl z-10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300 hidden sm:flex">
                {meal.icon}
              </div>
              
              {/* Meal Card */}
              <div className="flex-1 glass-card p-4 flex items-center justify-between group-hover:shadow-md group-hover:border-white/80 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="sm:hidden text-3xl">{meal.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{meal.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-textMuted mt-0.5">
                      <Clock size={14} />
                      <span>{meal.time}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                      <span className="text-primary font-medium">{meal.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden md:block text-right">
                    <div className="text-sm text-textMuted font-medium">Protein</div>
                    <div className="font-bold">{meal.protein}g</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-textMuted font-medium">Calories</div>
                    <div className="font-bold text-accent">{meal.calories}</div>
                  </div>
                  <button className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="relative flex items-center gap-4 mt-2">
            <div className="w-14 h-14 bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center z-10 hidden sm:flex">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <button className="flex-1 py-4 border-2 border-dashed border-gray-300/80 rounded-2xl text-textMuted font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2">
              <Plus size={20} /> Add Next Meal
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
