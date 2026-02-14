import { useAuth } from '@/contexts/AuthContext';
import { Users, MessageSquare, Bell, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardHome() {
  const { user } = useAuth();

  const stats = user?.role === 'client'
    ? [
        { icon: Users, label: 'Influencers Found', value: '2,340', change: '+12%', color: 'from-[#8B5CF6] to-[#6366F1]' },
        { icon: MessageSquare, label: 'Active Chats', value: '8', change: '+3', color: 'from-[#3B82F6] to-[#2DD4BF]' },
        { icon: Bell, label: 'Pending Requests', value: '5', change: '+2', color: 'from-[#F59E0B] to-[#EF4444]' },
        { icon: TrendingUp, label: 'Campaign Reach', value: '1.2M', change: '+18%', color: 'from-[#EC4899] to-[#8B5CF6]' },
      ]
    : [
        { icon: Star, label: 'Rating', value: '4.8', change: '+0.2', color: 'from-[#8B5CF6] to-[#6366F1]' },
        { icon: MessageSquare, label: 'Messages', value: '12', change: '+4', color: 'from-[#3B82F6] to-[#2DD4BF]' },
        { icon: Bell, label: 'Collab Requests', value: '7', change: '+3', color: 'from-[#F59E0B] to-[#EF4444]' },
        { icon: TrendingUp, label: 'Profile Views', value: '3,450', change: '+25%', color: 'from-[#EC4899] to-[#8B5CF6]' },
      ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tight mb-2">
            Welcome back, <span className="gradient-text">{user?.name?.split(' ')[0]}</span>! 👋
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            A quick overview of your <span className="text-foreground font-semibold uppercase text-sm tracking-wider">{user?.role === 'client' ? 'campaign' : 'profile'}</span> analytics and activities.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Real-time Updates Active</span>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            className="glass-card glass-card-hover p-6 shimmer premium-glow cursor-default group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg shadow-gray-200/50 dark:shadow-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-primary dark:text-primary-foreground bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-lg uppercase tracking-wider mb-1">
                  {stat.change}
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Growth</span>
              </div>
            </div>
            <div>
              <p className="text-3xl font-display font-bold tracking-tight mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-7 glass-card p-8 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-display font-bold tracking-tight mb-1">Recent Activity</h2>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.1em]">Your platform interactions</p>
            </div>
            <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">View History</button>
          </div>
          
          <div className="space-y-6 flex-1">
            {[
              { title: 'Collaboration Request', text: 'New proposal from Priya Sharma', time: '2 min ago', dotClass: 'bg-primary' },
              { title: 'Direct Message', text: 'Inquiry received from Rohit Kumar', time: '15 min ago', dotClass: 'bg-secondary' },
              { title: 'Campaign Status', text: 'Summer Fashion 2026 is now live', time: '1 hour ago', dotClass: 'bg-accent' },
              { title: 'Review Received', text: 'You received a new 5-star rating', time: '3 hours ago', dotClass: 'bg-green-500' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-5 group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-gray-50/50 dark:hover:bg-sidebar-accent/30 transition-all"
              >
                <div className={`shrink-0 w-3 h-3 rounded-full ${item.dotClass} ring-4 ring-white dark:ring-card shadow-sm group-hover:scale-125 transition-transform duration-300`} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1.5">{item.title}</p>
                  <p className="text-[15px] font-semibold tracking-tight text-foreground truncate">{item.text}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-5 glass-card p-8"
        >
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold tracking-tight mb-1">Quick Actions</h2>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.1em]">Accelerate your workflow</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Users, label: 'Discover', desc: 'Find Influencers', color: 'text-primary' },
              { icon: MessageSquare, label: 'Inbox', desc: 'Check Messages', color: 'text-secondary' },
              { icon: Bell, label: 'Feed', desc: 'Recent Updates', color: 'text-accent' },
              { icon: TrendingUp, label: 'Growth', desc: 'View Analytics', color: 'text-green-500' },
            ].map((action, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col p-5 rounded-2xl border border-gray-100 dark:border-border/50 bg-white/50 dark:bg-card/30 hover:bg-white dark:hover:bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl bg-gray-50 dark:bg-muted mb-4 flex items-center justify-center ${action.color} group-hover:bg-primary/10 transition-colors`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{action.label}</p>
                <p className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">{action.desc}</p>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-primary to-secondary relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Pro Feature</p>
              <h3 className="text-white font-bold text-lg mb-4 leading-tight">Advanced AI-powered<br />matching is here!</h3>
              <button className="bg-white text-primary text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest hover:bg-opacity-90 transition-all">Upgrade Now</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
