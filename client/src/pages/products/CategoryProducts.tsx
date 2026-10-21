import { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from "wouter";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProducts, type Product } from "@/lib/api";
import {
  Building2,
  Heart,
  ShieldCheck,
  ShoppingCart,
  CreditCard,
  Train,
  Tv,
  Search,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Grid3X3,
  List,
  FilterX,
  Layers,
  Sparkles,
  PhoneCall,
  Info
} from 'lucide-react';

interface CategoryConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Building2;
  gradient: string;
  glowColor: string;
  accentBadge: string;
  highlights: string[];
}

const categoryConfigs: Record<string, CategoryConfig> = {
  Banking: {
    title: "Banking Solutions",
    subtitle: "Financial Self-Service Hardware",
    description: "Enterprise-grade cash deposit machines, ATMs, and smart teller kiosks engineered for high reliability, security compliance, and frictionless consumer banking.",
    icon: Building2,
    gradient: "from-slate-950 via-blue-950 to-slate-900",
    glowColor: "rgba(4, 159, 217, 0.25)",
    accentBadge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    highlights: ["PCI & EMV Compliant", "Multi-Currency Recyclers", "24/7 Remote Monitoring"]
  },
  Healthcare: {
    title: "Healthcare Kiosks",
    subtitle: "Patient Intake & Clinical Systems",
    description: "Streamline patient check-in, vital health metrics screening, document scanning, and electronic queue management in hospitals and diagnostic centers.",
    icon: Heart,
    gradient: "from-slate-950 via-rose-950 to-slate-900",
    glowColor: "rgba(244, 63, 94, 0.25)",
    accentBadge: "bg-rose-500/20 text-rose-300 border-rose-400/30",
    highlights: ["HIPAA & Privacy Ready", "Antimicrobial Touchscreens", "Hospital EMR Integration"]
  },
  EPP: {
    title: "EPP Security Hardware",
    subtitle: "Encrypted Pin Pads & Metal Keyboards",
    description: "World-class PCI-certified encrypting pin pads (EPP) and rugged stainless-steel keyboards engineered for ATMs, fuel dispensers, and secure access systems.",
    icon: ShieldCheck,
    gradient: "from-slate-950 via-purple-950 to-slate-900",
    glowColor: "rgba(168, 85, 247, 0.25)",
    accentBadge: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    highlights: ["PCI V6 / V5 Certified", "IP65 Vandal-Resistant", "Hardware Anti-Tamper Mesh"]
  },
  Retail: {
    title: "Retail & Self-Checkout",
    subtitle: "Interactive POS & Digital Signage",
    description: "Versatile self-checkout terminals, price verification kiosks, and interactive digital advertising displays that boost sales and reduce customer wait times.",
    icon: ShoppingCart,
    gradient: "from-slate-950 via-amber-950 to-slate-900",
    glowColor: "rgba(245, 158, 11, 0.25)",
    accentBadge: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    highlights: ["Integrated Barcode / RFID", "Modular Peripheral Options", "Slim Space-Saving Footprint"]
  },
  Payments: {
    title: "Payment Terminals",
    subtitle: "Crypto, Cash & Card Kiosks",
    description: "Robust multi-modal payment terminals supporting cryptocurrency exchange, bill payment, utility recharging, and contactless payment processing.",
    icon: CreditCard,
    gradient: "from-slate-950 via-sky-950 to-slate-900",
    glowColor: "rgba(14, 165, 233, 0.25)",
    accentBadge: "bg-sky-500/20 text-sky-300 border-sky-400/30",
    highlights: ["Crypto & Fiat Capable", "Cash Acceptor & Dispenser", "Automated Thermal Receipt"]
  },
  Transportation: {
    title: "Transit & Ticketing",
    subtitle: "Automated Mobility Infrastructure",
    description: "Ruggedized ticketing machines, contactless smart card dispensing kiosks, and parking pay stations engineered for mass transit hubs and airport terminals.",
    icon: Train,
    gradient: "from-slate-950 via-indigo-950 to-slate-900",
    glowColor: "rgba(99, 102, 241, 0.25)",
    accentBadge: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
    highlights: ["All-Weather Weatherproof", "High-Volume Ticket Printers", "Transit Card Top-Up"]
  },
  Information: {
    title: "Digital Signage & Info",
    subtitle: "Wayfinding & Interactive Directory",
    description: "High-definition touchwayfinders, queue calling consoles, and commercial digital signage displays crafted for airports, shopping malls, and corporate campuses.",
    icon: Tv,
    gradient: "from-slate-950 via-cyan-950 to-slate-900",
    glowColor: "rgba(6, 182, 212, 0.25)",
    accentBadge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    highlights: ["4K Ultra-HD Panels", "Multi-Touch Capacitive", "Central CMS Cloud Managed"]
  },
  Other: {
    title: "Custom Solutions",
    subtitle: "Tailored Hardware Engineering",
    description: "Specialized turnkey kiosk systems tailored to custom industrial, defense, and IoT specifications.",
    icon: Layers,
    gradient: "from-slate-950 via-slate-900 to-slate-900",
    glowColor: "rgba(100, 116, 139, 0.25)",
    accentBadge: "bg-slate-500/20 text-slate-300 border-slate-400/30",
    highlights: ["OEM/ODM Customization", "Custom Enclosure Design", "Turnkey Prototyping"]
  }
};

const categoryAliases: Record<string, string> = {
  banking: 'Banking',
  healthcare: 'Healthcare',
  epp: 'EPP',
  security: 'EPP',
  retail: 'Retail',
  payments: 'Payments',
  payment: 'Payments',
  transportation: 'Transportation',
  information: 'Information',
  other: 'Other'
};

const allCategoriesList = [
  { key: 'Banking', name: 'Banking', href: '/products/banking', icon: Building2 },
  { key: 'Healthcare', name: 'Healthcare', href: '/products/healthcare', icon: Heart },
  { key: 'EPP', name: 'EPP Security', href: '/products/epp', icon: ShieldCheck },
  { key: 'Retail', name: 'Retail', href: '/products/retail', icon: ShoppingCart },
  { key: 'Payments', name: 'Payments', href: '/products/payment', icon: CreditCard },
  { key: 'Transportation', name: 'Transportation', href: '/products/transportation', icon: Train }
];

export default function CategoryProducts() {
  const params = useParams();
  const category = params.category || 'Banking';
  const categoryParam = category.toLowerCase();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'default' | 'title-asc' | 'title-desc'>('default');

  const canonicalCategory = categoryAliases[categoryParam] || 
    (categoryParam === 'epp' ? 'EPP' : categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));

  const config = categoryConfigs[canonicalCategory] || {
    title: `${canonicalCategory} Solutions`,
    subtitle: "Industrial Self-Service Hardware",
    description: `High-reliability smart terminals and kiosks designed for ${canonicalCategory} applications.`,
    icon: Building2,
    gradient: "from-slate-950 via-slate-900 to-slate-900",
    glowColor: "rgba(4, 159, 217, 0.25)",
    accentBadge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    highlights: ["Industrial Grade", "Custom OEM/ODM", "Global Compliance"]
  };

  const IconComponent = config.icon;

  useEffect(() => {
    setLoading(true);
    setSelectedSubcategory('ALL');
    setSearchQuery('');
    
    getProducts()
      .then(data => {
        const filtered = data.filter(p => {
          if (!p.category) return false;
          const pCat = p.category.trim().toLowerCase();
          if (pCat === categoryParam || pCat === canonicalCategory.toLowerCase()) {
            return true;
          }
          if ((categoryParam === 'epp' || categoryParam === 'security') && (pCat === 'epp' || pCat === 'security')) {
            return true;
          }
          if ((categoryParam === 'payment' || categoryParam === 'payments') && (pCat === 'payment' || pCat === 'payments')) {
            return true;
          }
          if (categoryParam === 'transportation') {
            const isTicket = (p.title + ' ' + (p.subcategory || '')).toLowerCase().includes('ticket');
            if (isTicket) return true;
          }
          if (categoryParam === 'information') {
            const isInfo = (p.title + ' ' + (p.subcategory || '')).toLowerCase().includes('signage') ||
                           (p.title + ' ' + (p.subcategory || '')).toLowerCase().includes('information');
            if (isInfo) return true;
          }
          return false;
        });
        setProducts(filtered);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryParam, canonicalCategory]);

  // Extract distinct subcategories with item counts
  const subcategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach(p => {
      const sub = (p.subcategory || 'General').trim();
      counts[sub] = (counts[sub] || 0) + 1;
    });
    return counts;
  }, [products]);

  const subcategoryList = useMemo(() => {
    return Object.keys(subcategoryCounts).sort();
  }, [subcategoryCounts]);

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let result = products.filter(p => {
      // Subcategory filter
      if (selectedSubcategory !== 'ALL') {
        const pSub = (p.subcategory || 'General').trim();
        if (pSub !== selectedSubcategory) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = (p.title || '').toLowerCase().includes(q);
        const descMatch = (p.description || '').toLowerCase().includes(q);
        const subMatch = (p.subcategory || '').toLowerCase().includes(q);
        const featMatch = (p.features || []).some(f => f.toLowerCase().includes(q));
        if (!titleMatch && !descMatch && !subMatch && !featMatch) return false;
      }
      return true;
    });

    if (sortBy === 'title-asc') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'title-desc') {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [products, selectedSubcategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className={`relative pt-36 pb-20 bg-gradient-to-b ${config.gradient} text-white overflow-hidden`}>
        {/* Subtle Ambient Background Mesh */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 20%, ${config.glowColor} 0%, transparent 70%)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400">Products</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-sky-400 font-semibold">{canonicalCategory}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-md shadow-inner bg-white/5 border-white/10 text-sky-300">
              <IconComponent className="w-4 h-4 text-[#049fd9]" />
              <span>{config.subtitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {config.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-normal">
              {config.description}
            </p>

            {/* Highlights pills */}
            <div className="flex flex-wrap gap-3">
              {config.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 border border-white/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#049fd9]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Switcher Bar */}
        <div className="mt-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-2 shrink-0">
                Categories:
              </span>
              {allCategoriesList.map((cat) => {
                const CatIcon = cat.icon;
                const isSelected = cat.key === canonicalCategory;
                return (
                  <Link 
                    key={cat.key} 
                    href={cat.href}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                      isSelected
                        ? 'bg-[#049fd9] text-white shadow-lg shadow-[#049fd9]/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-6">
          
          {/* Controls Bar: Subcategories, Search, Sort & View Mode */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              
              {/* Subcategory Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                <button
                  onClick={() => setSelectedSubcategory('ALL')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedSubcategory === 'ALL'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All Products ({products.length})
                </button>

                {subcategoryList.map(sub => {
                  const count = subcategoryCounts[sub] || 0;
                  const active = selectedSubcategory === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        active
                          ? 'bg-[#049fd9] text-white shadow-sm shadow-[#049fd9]/25 font-semibold'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>{sub}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                        active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search, Sort and Layout switch */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search in this category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-8 text-xs h-9 bg-slate-50 border-slate-200 rounded-xl focus:bg-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <FilterX className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs h-9 px-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#049fd9]"
                >
                  <option value="default">Default Order</option>
                  <option value="title-asc">Name (A-Z)</option>
                  <option value="title-desc">Name (Z-A)</option>
                </select>

                {/* View toggle */}
                <div className="hidden sm:flex items-center border border-slate-200 rounded-xl p-0.5 bg-slate-50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Results Counter Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{displayedProducts.length}</span> of {products.length} {canonicalCategory} models
              {selectedSubcategory !== 'ALL' && (
                <span> in <span className="text-[#049fd9] font-semibold">{selectedSubcategory}</span></span>
              )}
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-24">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-3 border-slate-200 border-t-[#049fd9]" />
              <p className="mt-4 text-sm font-medium text-slate-500">Loading {canonicalCategory} hardware models...</p>
            </div>
          ) : displayedProducts.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 shadow-sm max-w-xl mx-auto my-8">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 text-[#049fd9] flex items-center justify-center mx-auto mb-4">
                <FilterX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No matching products found</h3>
              <p className="text-sm text-slate-500 mb-6">
                {searchQuery 
                  ? `No hardware found matching "${searchQuery}". Try a different keyword or reset filters.`
                  : "No products currently available under this specific subcategory."}
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSubcategory('ALL');
                }}
                className="bg-[#049fd9] hover:bg-[#00bceb] text-white rounded-xl text-xs font-semibold px-6"
              >
                Reset All Filters
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {displayedProducts.map((product) => {
                const sub = (product.subcategory || canonicalCategory).trim();
                const detailHref = `/products/${categoryParam}/${product.id}`;

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#049fd9]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Image Showcase */}
                    <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50 via-slate-100/70 to-slate-100 flex items-center justify-center p-6 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if broken image
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80';
                        }}
                      />

                      {/* Subcategory Pill */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200/80 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#049fd9]" />
                          {sub}
                        </span>
                      </div>

                      {/* Quick view indicator on hover */}
                      <Link 
                        href={detailHref}
                        className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-medium shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          View Specifications &rarr;
                        </span>
                      </Link>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#049fd9] transition-colors line-clamp-2">
                          <Link href={detailHref}>
                            {product.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Feature bullets */}
                        {product.features && product.features.length > 0 && (
                          <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                            {product.features.slice(0, 3).map((feat, idx) => (
                              <div key={idx} className="flex items-start text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                                <span className="line-clamp-1">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <Link href={detailHref} className="flex-1">
                          <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] text-white text-xs font-semibold h-9 rounded-xl flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-md transition-all">
                            <span>Product Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                        <Link href={`/contact?product=${encodeURIComponent(product.title)}`}>
                          <Button 
                            variant="outline" 
                            className="text-xs h-9 px-3 rounded-xl border-slate-200 text-slate-600 hover:text-[#049fd9] hover:border-[#049fd9]/40 hover:bg-sky-50"
                            title="Inquire About This Model"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {displayedProducts.map((product) => {
                const sub = (product.subcategory || canonicalCategory).trim();
                const detailHref = `/products/${categoryParam}/${product.id}`;

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#049fd9]/40 shadow-sm hover:shadow-lg transition-all p-4 flex flex-col md:flex-row items-center gap-5"
                  >
                    <div className="w-full md:w-48 h-36 bg-slate-50 rounded-xl p-3 shrink-0 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                          {sub}
                        </span>
                        <span className="text-xs text-slate-400">&bull;</span>
                        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#049fd9] transition-colors mb-2">
                        <Link href={detailHref}>{product.title}</Link>
                      </h3>

                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {product.features && product.features.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex md:flex-col gap-2">
                      <Link href={detailHref}>
                        <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] text-white text-xs font-semibold h-9 rounded-xl px-5">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/contact?product=${encodeURIComponent(product.title)}`}>
                        <Button variant="outline" className="w-full text-xs h-9 rounded-xl border-slate-200">
                          Inquire
                        </Button>
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Custom Engineering Inquiry Banner */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(4,159,217,0.2),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold text-[#049fd9] uppercase tracking-wider mb-3 inline-block">
                Custom Engineering & OEM/ODM
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                Need a Custom Hardware Enclosure or Bespoke Kiosk Solution?
              </h2>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Sunson Technology provides complete lifecycle design, sheet metal fabrication, hardware integration, and software SDK support for customized self-service kiosk projects worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-[#049fd9] hover:bg-[#00bceb] text-white font-semibold text-xs h-10 px-6 rounded-xl shadow-lg shadow-[#049fd9]/30">
                    Contact Engineering Team
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 font-semibold text-xs h-10 px-6 rounded-xl">
                    About Sunson
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
