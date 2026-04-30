import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Flame, Droplets, Dumbbell, Sparkles, Trophy, ChevronRight, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const mockChartData = [
  { name: 'Mon', calories: 1800, goal: 2000 },
  { name: 'Tue', calories: 2100, goal: 2000 },
  { name: 'Wed', calories: 1950, goal: 2000 },
  { name: 'Thu', calories: 2200, goal: 2000 },
  { name: 'Fri', calories: 1850, goal: 2000 },
  { name: 'Sat', calories: 2400, goal: 2000 },
  { name: 'Sun', calories: 1900, goal: 2000 },
];

const mockMeals = [
  { id: 1, name: 'Avocado Toast', cals: 320, img: '🥑' },
  { id: 2, name: 'Grilled Salmon', cals: 450, img: '🐟' },
  { id: 3, name: 'Berry Smoothie', cals: 210, img: '🍓' },
  { id: 4, name: 'Quinoa Bowl', cals: 380, img: '🥗' }
];

const ProgressRing = ({ value, max, color, icon: Icon, label, unit }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="transform -rotate-90 w-full h-full">
          <circle cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
          <motion.circle
            cx="48" cy="48" r={radius}
            stroke={color} strokeWidth="8" fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <Icon size={20} color={color} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-textMuted">{label}</h3>
        <p className="text-2xl font-bold">{value} <span className="text-sm font-normal text-textMuted">{unit}</span></p>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 w-full pb-10">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-2xl font-bold text-primary">A</div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Good Morning, Vishnu Kiccha!</h1>
            <p className="text-textMuted flex items-center gap-2">
              <Trophy size={16} className="text-accent" />
              You're doing better than 85% of users this week.
            </p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4 py-2 px-6">
          <div className="text-right">
            <p className="text-sm text-textMuted font-semibold uppercase tracking-wider">Health Score</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">85<span className="text-lg">/100</span></p>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">🔥</span>
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white">4</span>
          </div>
        </div>
      </motion.header>

      {/* Smart Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -5 }} className="glass-card glass-card-hover">
          <ProgressRing value={1850} max={2000} color="#f59e0b" icon={Flame} label="Calories" unit="kcal" />
          <div className="mt-4 text-sm text-green-600 flex items-center gap-1 font-medium bg-green-50 w-fit px-2 py-1 rounded-md">
            ↑ 12% vs last week
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="glass-card glass-card-hover">
          <ProgressRing value={95} max={120} color="#10b981" icon={Dumbbell} label="Protein" unit="g" />
          <div className="mt-4 text-sm text-green-600 flex items-center gap-1 font-medium bg-green-50 w-fit px-2 py-1 rounded-md">
            On track
          </div>
        </motion.div>
        <motion.div whileHover={{ y: -5 }} className="glass-card glass-card-hover">
          <ProgressRing value={5} max={8} color="#0ea5e9" icon={Droplets} label="Hydration" unit="glasses" />
          <div className="mt-4 text-sm text-red-500 flex items-center gap-1 font-medium bg-red-50 w-fit px-2 py-1 rounded-md">
            ↓ Drink more water
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Data Visualization */}
        <motion.div className="glass-card lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-xl">Caloric Intake Trend</h2>
            <div className="flex bg-white/50 p-1 rounded-lg backdrop-blur-sm">
              <button className="px-3 py-1 bg-white shadow-sm rounded-md text-sm font-medium">Weekly</button>
              <button className="px-3 py-1 text-textMuted hover:text-textMain text-sm font-medium transition-colors">Monthly</button>
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
                />
                <Area type="monotone" dataKey="calories" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCalories)" activeDot={{ r: 8, strokeWidth: 0 }} />
                <Area type="monotone" dataKey="goal" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* AI Insight Panel */}
        <motion.div className="glass-card flex flex-col bg-gradient-to-b from-primary-light/20 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-xl text-white shadow-glow">
              <Sparkles size={20} />
            </div>
            <h2 className="font-bold text-xl">NutriSmart AI</h2>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white/70 p-4 rounded-2xl rounded-tl-sm shadow-sm backdrop-blur-md border border-white/50 relative">
              <p className="text-textMain leading-relaxed">
                You usually skip breakfast, which might be why you're missing your protein goal by 25g. <br /><br />Try adding a quick protein shake or some eggs tomorrow morning! 🍳
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <p className="text-sm font-semibold text-textMuted uppercase tracking-wider mb-1">Suggested Actions</p>
              <button className="text-left px-4 py-2 bg-white/50 hover:bg-white/80 rounded-xl text-sm font-medium transition-colors border border-white/40 flex justify-between items-center">
                <span>➕ Add high-protein breakfast</span>
                <ChevronRight size={16} className="text-textMuted" />
              </button>
              <button className="text-left px-4 py-2 bg-white/50 hover:bg-white/80 rounded-xl text-sm font-medium transition-colors border border-white/40 flex justify-between items-center">
                <span>💧 Set hydration reminder</span>
                <ChevronRight size={16} className="text-textMuted" />
              </button>
              <button className="btn-primary w-full mt-2">
                <MessageSquareText size={18} /> Chat with AI Coach
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smart Recommendations */}
      <div>
        <h2 className="font-bold text-xl mb-4">Smart Meal Suggestions</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {mockMeals.map((meal) => (
            <motion.div key={meal.id} whileHover={{ y: -5 }} className="glass-card min-w-[200px] snap-start cursor-pointer hover:border-primary/30 transition-colors">
              <div className="text-4xl mb-3">{meal.img}</div>
              <h3 className="font-bold text-lg">{meal.name}</h3>
              <p className="text-primary font-medium">{meal.cals} kcal</p>
            </motion.div>
          ))}
          <motion.div whileHover={{ y: -5 }} className="glass-card min-w-[200px] snap-start flex flex-col items-center justify-center text-center cursor-pointer border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10">
            <div className="bg-white p-3 rounded-full mb-2 shadow-sm text-primary">➕</div>
            <p className="font-bold text-primary">Log Custom Meal</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
