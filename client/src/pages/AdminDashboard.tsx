import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import ProductsManager from '@/components/admin/ProductsManager';
import SolutionsManager from '@/components/admin/SolutionsManager';
import NewsManager from '@/components/admin/NewsManager';
import HeroSlidesManager from '@/components/admin/HeroSlidesManager';
import { Package, Lightbulb, Newspaper, Image, LogOut, LayoutDashboard, ChevronRight, Menu, X } from 'lucide-react';
import logoImage from '@/images/logomain.png';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'solutions', label: 'Solutions', icon: Lightbulb },
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'hero', label: 'Hero Slides', icon: Image },
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ products: 0, solutions: 0, news: 0, heroSlides: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) { setLocation('/admin/login'); return; }
    setUser(JSON.parse(userData));
    fetchStats();
  }, [setLocation]);

  const fetchStats = async () => {
    try {
      const [products, solutions, news, heroSlides] = await Promise.all([
        fetch(`${API_BASE_URL}/products`).then(r => r.json()),
        fetch(`${API_BASE_URL}/solutions`).then(r => r.json()),
        fetch(`${API_BASE_URL}/news`).then(r => r.json()),
        fetch(`${API_BASE_URL}/hero-slides`).then(r => r.json())
      ]);
      setStats({
        products: Array.isArray(products) ? products.length : 0,
        solutions: Array.isArray(solutions) ? solutions.length : 0,
        news: Array.isArray(news) ? news.length : 0,
        heroSlides: Array.isArray(heroSlides) ? heroSlides.length : 0
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLocation('/admin/login');
  };

  if (!user) return null;

  const statCards = [
    { label: 'Products', value: stats.products, icon: Package, color: 'blue', tab: 'products' },
    { label: 'Solutions', value: stats.solutions, icon: Lightbulb, color: 'purple', tab: 'solutions' },
    { label: 'News Articles', value: stats.news, icon: Newspaper, color: 'green', tab: 'news' },
    { label: 'Hero Slides', value: stats.heroSlides, icon: Image, color: 'orange', tab: 'hero' },
  ];

  const colorMap: Record<string, { bg: string; text: string; light: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50' },
    green: { bg: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', light: 'bg-orange-50' },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1e293b] text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="Sunson" className="h-9" />
            <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-white/40 mt-2 uppercase tracking-widest">Admin Panel</p>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white/90'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                {item.label}
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#049fd9] flex items-center justify-center text-sm font-bold">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user.username}</p>
              <p className="text-xs text-white/40 capitalize">{user.role}</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="ghost" size="sm" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-600 hover:text-gray-900" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}
                </h1>
                <p className="text-xs text-gray-500">Manage your website content</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#049fd9] hover:underline hidden sm:block">
                View Website →
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Welcome */}
              <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">Welcome back, {user.username}</h2>
                <p className="text-white/70 text-sm">Here's an overview of your website content.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {statCards.map(card => {
                  const Icon = card.icon;
                  const c = colorMap[card.color];
                  return (
                    <button
                      key={card.label}
                      onClick={() => setActiveTab(card.tab)}
                      className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2.5 rounded-lg ${c.light}`}>
                          <Icon className={`w-5 h-5 ${c.text}`} />
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{card.label}</p>
                    </button>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Quick Actions</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {navItems.filter(n => n.id !== 'overview').map(item => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#049fd9] hover:bg-[#049fd9]/5 transition-all text-left"
                      >
                        <Icon className="w-5 h-5 text-[#049fd9]" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Manage {item.label}</p>
                          <p className="text-xs text-gray-500">Add, edit or remove</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && <ProductsManager />}
          {activeTab === 'solutions' && <SolutionsManager />}
          {activeTab === 'news' && <NewsManager />}
          {activeTab === 'hero' && <HeroSlidesManager />}
        </main>
      </div>
    </div>
  );
}
