import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import ProductsManager, { subcategories } from '@/components/admin/ProductsManager';
import SolutionsManager from '@/components/admin/SolutionsManager';
import NewsManager from '@/components/admin/NewsManager';
import HeroSlidesManager from '@/components/admin/HeroSlidesManager';
import { 
  Package, 
  Lightbulb, 
  Newspaper, 
  Image, 
  LogOut, 
  LayoutDashboard, 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  FolderTree,
  Plus,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Layers,
  Activity,
  Database,
  Server,
  Clock,
  ArrowUpRight,
  Eye,
  RefreshCw,
  Building2,
  Heart,
  Shield,
  ShoppingCart,
  CreditCard,
  Train,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import logoImage from '@/images/logomain.png';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState({ products: 0, solutions: 0, news: 0, heroSlides: 0 });
  
  // Categorized product sidebar state
  const [productsOpen, setProductsOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Banking: true,
    Healthcare: false,
    EPP: false,
    Retail: false,
    Payments: false,
    Transportation: false,
  });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [productsList, setProductsList] = useState<any[]>([]);
  const [solutionsList, setSolutionsList] = useState<any[]>([]);
  const [newsList, setNewsList] = useState<any[]>([]);
  const [heroList, setHeroList] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) { setLocation('/admin/login'); return; }
    setUser(JSON.parse(userData));
    fetchStats();
  }, [setLocation]);

  const fetchStats = async () => {
    try {
      setRefreshing(true);
      const [products, solutions, news, heroSlides] = await Promise.all([
        fetch(`${API_BASE_URL}/products`).then(r => r.json()).catch(() => []),
        fetch(`${API_BASE_URL}/solutions`).then(r => r.json()).catch(() => []),
        fetch(`${API_BASE_URL}/news`).then(r => r.json()).catch(() => []),
        fetch(`${API_BASE_URL}/hero-slides`).then(r => r.json()).catch(() => [])
      ]);
      const productList = Array.isArray(products) ? products : [];
      const solList = Array.isArray(solutions) ? solutions : [];
      const nList = Array.isArray(news) ? news : [];
      const hList = Array.isArray(heroSlides) ? heroSlides : [];

      setProductsList(productList);
      setSolutionsList(solList);
      setNewsList(nList);
      setHeroList(hList);

      setStats({
        products: productList.length,
        solutions: solList.length,
        news: nList.length,
        heroSlides: hList.length
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLocation('/admin/login');
  };

  const getCategoryCount = (category: string) => {
    return productsList.filter(p => {
      const pCat = (p.category || '').trim().toLowerCase();
      const target = category.trim().toLowerCase();
      if (pCat === target) return true;
      if ((target === 'epp' || target === 'security') && (pCat === 'epp' || pCat === 'security')) return true;
      return false;
    }).length;
  };

  const getSubcategoryCount = (category: string, subcategory: string) => {
    return productsList.filter(p => {
      const pCat = (p.category || '').trim().toLowerCase();
      const targetCat = category.trim().toLowerCase();
      const pSub = ((p.subcategory || '')).trim().toLowerCase();
      const targetSub = subcategory.trim().toLowerCase();
      
      const catMatch = (pCat === targetCat) || 
        ((targetCat === 'epp' || targetCat === 'security') && (pCat === 'epp' || pCat === 'security'));
      
      return catMatch && pSub === targetSub;
    }).length;
  };

  const handleSelectCategory = (category: string | null, subcategory: string | null = null) => {
    setActiveTab('products');
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSidebarOpen(false);
  };

  const toggleCategoryExpanded = (category: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  if (!user) return null;

  // Category metadata for overview breakdown
  const categoryOverviewList = [
    { name: 'Banking', count: getCategoryCount('Banking'), icon: Building2, color: 'emerald', barColor: 'bg-emerald-500', href: '/products/banking' },
    { name: 'Healthcare', count: getCategoryCount('Healthcare'), icon: Heart, color: 'rose', barColor: 'bg-rose-500', href: '/products/healthcare' },
    { name: 'EPP', count: getCategoryCount('EPP'), icon: Shield, color: 'purple', barColor: 'bg-purple-500', href: '/products/epp' },
    { name: 'Retail', count: getCategoryCount('Retail'), icon: ShoppingCart, color: 'amber', barColor: 'bg-amber-500', href: '/products/retail' },
    { name: 'Payments', count: getCategoryCount('Payments'), icon: CreditCard, color: 'sky', barColor: 'bg-sky-500', href: '/products/payment' },
    { name: 'Transportation', count: getCategoryCount('Transportation'), icon: Train, color: 'indigo', barColor: 'bg-indigo-500', href: '/products/transportation' },
  ];

  const statCards = [
    { 
      label: 'Products & Hardware', 
      value: stats.products, 
      icon: Package, 
      color: 'blue', 
      tab: 'products',
      desc: 'Active models in catalog',
      badge: '6 Categories'
    },
    { 
      label: 'Industry Solutions', 
      value: stats.solutions, 
      icon: Lightbulb, 
      color: 'purple', 
      tab: 'solutions',
      desc: 'End-to-end architectures',
      badge: 'Enterprise'
    },
    { 
      label: 'News & Releases', 
      value: stats.news, 
      icon: Newspaper, 
      color: 'green', 
      tab: 'news',
      desc: 'Articles & publications',
      badge: 'Published'
    },
    { 
      label: 'Hero Slides', 
      value: stats.heroSlides, 
      icon: Image, 
      color: 'orange', 
      tab: 'hero',
      desc: 'Live homepage banners',
      badge: 'Active'
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-[#049fd9]', light: 'bg-sky-50', border: 'border-sky-100' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-100' },
    green: { bg: 'bg-green-600', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100' },
    orange: { bg: 'bg-orange-500', text: 'text-amber-600', light: 'bg-amber-50', border: 'border-amber-100' },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#1e293b] text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="Sunson" className="h-9" />
            <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-white/40 mt-2 uppercase tracking-widest font-semibold">Admin Panel</p>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            if (item.id === 'products') {
              return (
                <div key={item.id} className="space-y-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        setActiveTab('products');
                        setProductsOpen(prev => !prev);
                      }}
                      className={`flex-1 flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white/60 hover:bg-white/5 hover:text-white/90'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5 text-blue-400" />
                      <span>{item.label}</span>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-semibold">
                        {stats.products}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Submenu of Categorized Products */}
                  {productsOpen && (
                    <div className="ml-3 pl-2.5 border-l-2 border-white/10 mt-1 space-y-1 py-1">
                      {/* All Products Item */}
                      <button
                        onClick={() => handleSelectCategory(null, null)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                          activeTab === 'products' && selectedCategory === null
                            ? 'bg-[#049fd9] text-white shadow-sm font-semibold'
                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <FolderTree className="w-3.5 h-3.5 opacity-70" />
                          All Products
                        </span>
                        <span className="text-[10px] opacity-75 font-mono">({stats.products})</span>
                      </button>

                      {/* Categories with Subcategories */}
                      {Object.entries(subcategories).map(([category, subs]) => {
                        const isCatExpanded = !!expandedCategories[category];
                        const isCatActive = activeTab === 'products' && selectedCategory === category && !selectedSubcategory;
                        const catCount = getCategoryCount(category);

                        return (
                          <div key={category} className="space-y-0.5 pt-0.5">
                            {/* Category Row */}
                            <div
                              className={`group w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                                isCatActive
                                  ? 'bg-[#049fd9] text-white font-semibold shadow-sm'
                                  : selectedCategory === category
                                    ? 'text-[#38bdf8] font-semibold bg-white/5'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                              }`}
                              onClick={() => handleSelectCategory(category, null)}
                            >
                              <span className="truncate">{category}</span>
                              <div className="flex items-center gap-1">
                                <span className="text-[10px] opacity-70 font-mono">({catCount})</span>
                                <button
                                  type="button"
                                  onClick={(e) => toggleCategoryExpanded(category, e)}
                                  className="p-0.5 hover:bg-white/10 rounded transition-colors"
                                  aria-label={`Toggle ${category} subcategories`}
                                >
                                  <ChevronDown className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-transform duration-200 ${isCatExpanded ? 'rotate-180' : ''}`} />
                                </button>
                              </div>
                            </div>

                            {/* Subcategories */}
                            {isCatExpanded && (
                              <div className="ml-2 pl-2 border-l border-white/10 space-y-0.5 py-0.5">
                                {subs.map(sub => {
                                  const isSubActive = activeTab === 'products' && selectedCategory === category && selectedSubcategory === sub;
                                  const subCount = getSubcategoryCount(category, sub);

                                  return (
                                    <button
                                      key={sub}
                                      onClick={() => handleSelectCategory(category, sub)}
                                      className={`w-full flex items-center justify-between px-2 py-1 rounded text-[11px] transition-all text-left ${
                                        isSubActive
                                          ? 'bg-[#049fd9]/25 text-[#38bdf8] font-semibold border-l-2 border-[#38bdf8]'
                                          : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                                      }`}
                                    >
                                      <span className="truncate mr-1">{sub}</span>
                                      {subCount > 0 && (
                                        <span className="text-[10px] text-white/40 font-mono">
                                          {subCount}
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white/90'
                }`}
              >
                <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-blue-400' : ''}`} />
                <span>{item.label}</span>
                {item.id === 'solutions' && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-semibold">
                    {stats.solutions}
                  </span>
                )}
                {item.id === 'news' && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-semibold">
                    {stats.news}
                  </span>
                )}
                {item.id === 'hero' && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-semibold">
                    {stats.heroSlides}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#049fd9] flex items-center justify-center text-sm font-bold shadow-md">
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
          <div className="flex items-center justify-between px-6 py-3.5">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-gray-600 hover:text-gray-900" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span>{navItems.find(n => n.id === activeTab)?.label || 'Dashboard'}</span>
                  {activeTab === 'overview' && (
                    <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full hidden sm:inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live System
                    </span>
                  )}
                </h1>
                <p className="text-xs text-gray-500">Sunson Technology Content Management System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={fetchStats}
                disabled={refreshing}
                className="text-xs h-8 border-gray-200 text-gray-600 hover:text-gray-900 rounded-lg hidden sm:flex items-center gap-1.5"
                title="Refresh statistics and inventory"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-[#049fd9]' : ''}`} />
                <span>{refreshing ? 'Syncing...' : 'Sync Data'}</span>
              </Button>
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-50 text-[#049fd9] hover:bg-sky-100 transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8 max-w-7xl mx-auto">
              
              {/* Executive Hero Banner */}
              <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white p-7 md:p-9 shadow-lg overflow-hidden border border-white/10">
                <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#049fd9]/20 blur-3xl pointer-events-none" />
                <div className="absolute right-1/3 -bottom-16 w-60 h-60 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-sky-300 border border-white/10 mb-3.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#049fd9]" />
                      <span>Enterprise Hardware Operations Hub</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                      Welcome back, {user.username}
                    </h2>
                    <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                      All systems operational. You have <strong className="text-white font-semibold">{stats.products} products</strong> across 6 industries, <strong className="text-white font-semibold">{stats.solutions} enterprise solutions</strong>, and <strong className="text-white font-semibold">{stats.news} news releases</strong> currently published.
                    </p>
                  </div>

                  {/* Header Quick Buttons */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Button 
                      onClick={() => handleSelectCategory(null, null)}
                      className="bg-[#049fd9] hover:bg-[#00bceb] text-white text-xs font-semibold h-10 px-5 rounded-xl shadow-md shadow-[#049fd9]/30 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add / Manage Products</span>
                    </Button>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        className="border-white/20 text-white hover:bg-white/10 text-xs font-semibold h-10 px-4 rounded-xl flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Public Site</span>
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Sub-bar stats within hero */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <p className="text-slate-400">Database Engine</p>
                    <p className="font-semibold text-white mt-0.5 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-sky-400" />
                      Neon PostgreSQL
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">API Gateway</p>
                    <p className="font-semibold text-white mt-0.5 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      REST v1.0 (Port 5000)
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Security Standard</p>
                    <p className="font-semibold text-white mt-0.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                      PCI DSS Ready
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">System Uptime</p>
                    <p className="font-semibold text-white mt-0.5 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      99.98% Operational
                    </p>
                  </div>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {statCards.map(card => {
                  const Icon = card.icon;
                  const c = colorMap[card.color];
                  return (
                    <div
                      key={card.label}
                      onClick={() => setActiveTab(card.tab)}
                      className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#049fd9]/40 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2.5 rounded-xl ${c.light} ${c.text} border ${c.border}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#049fd9]/10 group-hover:text-[#049fd9] transition-colors">
                            {card.badge}
                          </span>
                        </div>
                        <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{card.value}</p>
                        <p className="text-sm font-bold text-slate-800 mt-1">{card.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{card.desc}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#049fd9]">
                        <span>Manage section</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Middle Section: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                
                {/* Left Column (7/12): Product Inventory & Category Breakdown */}
                <div className="lg:col-span-7 space-y-7">
                  
                  {/* Category Breakdown Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Hardware Catalog by Industry</h3>
                        <p className="text-xs text-slate-500">Live distribution of models across certified sectors</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleSelectCategory(null, null)}
                        className="text-xs text-[#049fd9] hover:text-[#00bceb] font-semibold"
                      >
                        All Categories &rarr;
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {categoryOverviewList.map(cat => {
                        const Icon = cat.icon;
                        const pct = stats.products > 0 ? Math.round((cat.count / stats.products) * 100) : 0;
                        return (
                          <div 
                            key={cat.name}
                            onClick={() => handleSelectCategory(cat.name, null)}
                            className="group p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                          >
                            <div className="flex items-center justify-between text-xs mb-1.5">
                              <div className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-slate-600 group-hover:text-[#049fd9] transition-colors" />
                                <span className="font-bold text-slate-800">{cat.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500 font-mono">{cat.count} models</span>
                                <span className="font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                                  {pct}%
                                </span>
                              </div>
                            </div>
                            {/* Visual Progress Bar */}
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${cat.barColor} transition-all duration-700`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recently Added / Highlighted Hardware */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Recent Hardware Additions</h3>
                        <p className="text-xs text-slate-500">Latest active items in catalog</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveTab('products')}
                        className="text-xs text-[#049fd9] hover:text-[#00bceb] font-semibold"
                      >
                        View All ({stats.products}) &rarr;
                      </Button>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {productsList.slice(0, 4).map(prod => (
                        <div 
                          key={prod.id}
                          className="py-3 flex items-center justify-between gap-4 group hover:bg-slate-50/70 p-2 rounded-xl transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200/80 p-1 shrink-0 flex items-center justify-center">
                              <img 
                                src={prod.image} 
                                alt={prod.title} 
                                className="w-full h-full object-contain mix-blend-multiply"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100';
                                }}
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-slate-900 group-hover:text-[#049fd9] transition-colors truncate">
                                {prod.title}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                                  {prod.category}
                                </span>
                                {prod.subcategory && (
                                  <span className="text-[10px] text-slate-400 truncate">
                                    &bull; {prod.subcategory}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleSelectCategory(prod.category, prod.subcategory || null)}
                            className="text-xs h-8 px-2.5 text-slate-500 hover:text-[#049fd9] shrink-0"
                          >
                            <span>Inspect</span>
                            <ChevronRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column (5/12): Quick Actions & System Health */}
                <div className="lg:col-span-5 space-y-7">
                  
                  {/* Quick Action Hub */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">Administrative Shortcuts</h3>
                    <p className="text-xs text-slate-500 mb-4">Fast actions to publish and maintain website content</p>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => setActiveTab('products')}
                        className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-[#049fd9] hover:bg-sky-50/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-sky-50 text-[#049fd9] group-hover:bg-[#049fd9] group-hover:text-white transition-colors">
                            <Plus className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Add New Product</p>
                            <p className="text-[11px] text-slate-500">Publish a kiosk or terminal model</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#049fd9] transition-colors" />
                      </button>

                      <button
                        onClick={() => setActiveTab('news')}
                        className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Newspaper className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Post Company News</p>
                            <p className="text-[11px] text-slate-500">Publish press releases & updates</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                      </button>

                      <button
                        onClick={() => setActiveTab('hero')}
                        className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-amber-500 hover:bg-amber-50/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Image className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Update Hero Carousel</p>
                            <p className="text-[11px] text-slate-500">Adjust homepage banners & CTAs</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                      </button>

                      <button
                        onClick={() => setActiveTab('solutions')}
                        className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-purple-500 hover:bg-purple-50/50 transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <Lightbulb className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">Manage Industry Solutions</p>
                            <p className="text-[11px] text-slate-500">Configure turnkey enterprise flows</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
                      </button>
                    </div>
                  </div>

                  {/* System Environment & Status Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 mb-1">Infrastructure Health</h3>
                    <p className="text-xs text-slate-500 mb-4">Environment telemetry & connected services</p>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                        <span className="text-slate-600 font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Postgres Server
                        </span>
                        <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          Connected
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                        <span className="text-slate-600 font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          API Endpoint
                        </span>
                        <span className="font-mono text-slate-700 text-[11px]">
                          http://localhost:5000
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                        <span className="text-slate-600 font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Vite Frontend
                        </span>
                        <span className="font-mono text-slate-700 text-[11px]">
                          http://localhost:5173
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                        <span className="text-slate-600 font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-sky-500" />
                          Telemetry Interval
                        </span>
                        <span className="text-slate-500">
                          Real-time
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {activeTab === 'products' && (
            <ProductsManager 
              filterCategory={selectedCategory}
              filterSubcategory={selectedSubcategory}
              onClearFilter={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
              onProductsChange={(products) => {
                setProductsList(products);
                setStats(prev => ({ ...prev, products: products.length }));
              }}
            />
          )}
          {activeTab === 'solutions' && <SolutionsManager />}
          {activeTab === 'news' && <NewsManager />}
          {activeTab === 'hero' && <HeroSlidesManager />}
        </main>
      </div>
    </div>
  );
}
