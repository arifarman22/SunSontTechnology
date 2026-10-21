import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Building2, 
  Heart, 
  Shield, 
  ShoppingCart, 
  CreditCard, 
  Train, 
  Zap, 
  Users, 
  Newspaper, 
  Mail, 
  Phone, 
  ArrowRight,
  Layers
} from "lucide-react";
import MegaDropdown from "./MegaDropdown";
import SolutionsMegaDropdown from "./SolutionsMegaDropdown";
import CompanyMegaDropdown from "./CompanyMegaDropdown";
import logoImage from '@/images/logomain.png';

const mobileProductCategories = [
  { id: 'banking', name: 'Banking Solutions', path: '/products/banking', icon: Building2, desc: 'CDMs, ATMs & Teller Machines' },
  { id: 'healthcare', name: 'Healthcare Kiosks', path: '/products/healthcare', icon: Heart, desc: 'Intake, Screening & EHR Terminals' },
  { id: 'security', name: 'EPP Security Hardware', path: '/products/security', icon: Shield, desc: 'PCI Encrypted PIN Pads & Keyboards' },
  { id: 'retail', name: 'Retail & POS', path: '/products/retail', icon: ShoppingCart, desc: 'Self-checkout & Digital Signage' },
  { id: 'payments', name: 'Payment Terminals', path: '/products/payments', icon: CreditCard, desc: 'Crypto, Cash & Multi-Currency' },
  { id: 'transportation', name: 'Transit & Ticketing', path: '/products/transportation', icon: Train, desc: 'Ticket Vending & Metro Kiosks' },
];

const mobileSolutions = [
  { id: 'cdm', name: 'Smart Cash Deposit (CDM)', path: '/solutions/cdm', desc: 'High-speed automated cash processing' },
  { id: 'healthcare', name: 'Healthcare Kiosk Solution', path: '/solutions/healthcare', desc: 'Self-service patient registration' },
  { id: 'epp', name: 'EPP V4/V5/V6 Solution', path: '/solutions/epp', desc: 'PCI-compliant security encryption' },
  { id: 'payment', name: 'Payment Kiosk Solution', path: '/solutions/payment', desc: 'Multi-channel self-service billing' },
];

const mobileCompanyLinks = [
  { name: 'About Sunson', path: '/about', desc: 'Pioneering intelligent kiosk solutions' },
  { name: 'Leadership', path: '/about#leadership', desc: 'Flat structure & efficient decision making' },
  { name: 'History & Heritage', path: '/about#history', desc: '20+ years of high-tech innovation' },
  { name: 'Corporate Culture', path: '/about#culture', desc: 'New Sunson Chinese Dream & innovation' },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mobile accordion state
  const [mobileSection, setMobileSection] = useState<'products' | 'solutions' | 'company' | null>(null);

  const headerRef = useRef<HTMLElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    closeAllMenus();
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Scroll detection for sticky header shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click & escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAllMenus();
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllMenus();
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsMegaMenuOpen(false);
    setIsCompanyOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsMegaMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMegaMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      if (!prev) {
        closeAllMenus();
        setIsSearchOpen(false);
      }
      return !prev;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSection = (section: 'products' | 'solutions' | 'company') => {
    setMobileSection(prev => prev === section ? null : section);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#1d1d1d] text-white text-xs">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/contact">
              <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Support</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Partners</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Investors</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-6 relative" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <div className="flex items-center cursor-pointer">
              <img src={logoImage} alt="Sunson Technology" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Products with Mega Menu */}
            <div className="relative">
              <button 
                onClick={toggleMegaMenu}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                  isMegaMenuOpen ? 'text-[#049fd9]' : 'text-gray-700 hover:text-[#049fd9]'
                }`}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
              >
                Products 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isMegaMenuOpen ? 'rotate-180' : ''
                }`} />
              </button>
            </div>

            {/* Solutions */}
            <div className="relative">
              <button 
                onClick={toggleSolutions}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                  isSolutionsOpen ? 'text-[#049fd9]' : 'text-gray-700 hover:text-[#049fd9]'
                }`}
                aria-expanded={isSolutionsOpen}
              >
                Solutions 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isSolutionsOpen ? 'rotate-180' : ''
                }`} />
              </button>
            </div>

            {/* Company */}
            <div className="relative">
              <button 
                onClick={toggleCompany}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                  isCompanyOpen ? 'text-[#049fd9]' : 'text-gray-700 hover:text-[#049fd9]'
                }`}
                aria-expanded={isCompanyOpen}
              >
                Company 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isCompanyOpen ? 'rotate-180' : ''
                }`} />
              </button>
            </div>

            {/* News */}
            <Link href="/news" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors">
              News
            </Link>

            {/* Contact */}
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors">
              Contact
            </Link>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="px-3 py-2 text-gray-700 hover:text-[#049fd9] transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Right Header Actions */}
          <div className="flex items-center space-x-1 lg:hidden">
            <button 
              type="button"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              className="p-2 text-gray-700 hover:text-[#049fd9] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search site"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              type="button"
              className="p-2 text-gray-700 hover:text-[#049fd9] hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain flex flex-col animate-in slide-in-from-top-2 duration-200">
            {/* Mobile Search Form */}
            <div className="p-4 border-b border-gray-100 bg-gray-50/70">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:border-[#049fd9] focus:ring-1 focus:ring-[#049fd9] focus:outline-none transition-all placeholder:text-gray-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </form>
            </div>

            {/* Mobile Navigation List */}
            <div className="py-2 px-3 divide-y divide-gray-100">
              {/* Products Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('products')}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#049fd9] hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={mobileSection === 'products'}
                >
                  <div className="flex items-center gap-3">
                    <Layers className="h-4 w-4 text-[#049fd9]" />
                    <span>Products</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    mobileSection === 'products' ? 'rotate-180 text-[#049fd9]' : ''
                  }`} />
                </button>

                {mobileSection === 'products' && (
                  <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-100 space-y-1 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {mobileProductCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={cat.id}
                          href={cat.path}
                          onClick={closeMobileMenu}
                          data-testid={`link-mobile-${cat.id}`}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:text-[#049fd9] hover:bg-gray-50 transition-colors group"
                        >
                          <Icon className="h-4 w-4 mt-0.5 text-gray-400 group-hover:text-[#049fd9] shrink-0" />
                          <div>
                            <div className="text-sm font-medium">{cat.name}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">{cat.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                    <Link
                      href="/products/banking"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#049fd9] hover:underline"
                    >
                      <span>Explore All Products</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('solutions')}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#049fd9] hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={mobileSection === 'solutions'}
                >
                  <div className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-[#049fd9]" />
                    <span>Solutions</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    mobileSection === 'solutions' ? 'rotate-180 text-[#049fd9]' : ''
                  }`} />
                </button>

                {mobileSection === 'solutions' && (
                  <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-100 space-y-1 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {mobileSolutions.map((sol) => (
                      <Link
                        key={sol.id}
                        href={sol.path}
                        onClick={closeMobileMenu}
                        data-testid={`link-mobile-${sol.id}`}
                        className="block px-3 py-2.5 rounded-lg text-gray-700 hover:text-[#049fd9] hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium">{sol.name}</div>
                        <div className="text-xs text-gray-500">{sol.desc}</div>
                      </Link>
                    ))}
                    <Link
                      href="/solutions"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#049fd9] hover:underline"
                    >
                      <span>View All Solutions Overview</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Company Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('company')}
                  className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#049fd9] hover:bg-gray-50 rounded-lg transition-colors"
                  aria-expanded={mobileSection === 'company'}
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#049fd9]" />
                    <span>Company</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                    mobileSection === 'company' ? 'rotate-180 text-[#049fd9]' : ''
                  }`} />
                </button>

                {mobileSection === 'company' && (
                  <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-100 space-y-1 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {mobileCompanyLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path}
                        onClick={closeMobileMenu}
                        data-testid={item.path === '/about' ? 'link-mobile-about' : undefined}
                        className="block px-3 py-2.5 rounded-lg text-gray-700 hover:text-[#049fd9] hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <div className="py-1">
                <Link
                  href="/news"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#049fd9] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Newspaper className="h-4 w-4 text-[#049fd9]" />
                  <span>News & Insights</span>
                </Link>
              </div>

              <div className="py-1">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  data-testid="link-mobile-contact"
                  className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#049fd9] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#049fd9]" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Mobile Footer & Quick Support */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto space-y-3">
              <div className="flex items-center justify-around text-xs text-gray-600 pb-2 border-b border-gray-200/60">
                <Link href="/contact" onClick={closeMobileMenu} className="hover:text-[#049fd9] transition-colors py-1">Support</Link>
                <span className="text-gray-300">•</span>
                <Link href="/about" onClick={closeMobileMenu} className="hover:text-[#049fd9] transition-colors py-1">Partners</Link>
                <span className="text-gray-300">•</span>
                <Link href="/about" onClick={closeMobileMenu} className="hover:text-[#049fd9] transition-colors py-1">Investors</Link>
              </div>

              <Link href="/contact" onClick={closeMobileMenu} className="block">
                <button className="w-full py-2.5 px-4 bg-[#049fd9] hover:bg-[#00bceb] text-white font-medium text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Get in Touch with Sunson</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[96px] bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mega Dropdowns */}
      <MegaDropdown isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
      <SolutionsMegaDropdown isOpen={isSolutionsOpen} onClose={closeAllMenus} />
      <CompanyMegaDropdown isOpen={isCompanyOpen} onClose={closeAllMenus} />

      {/* Search Overlay */}
      {isSearchOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsSearchOpen(false)} />
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-6 py-8">
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, solutions, or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#049fd9] focus:outline-none"
                    autoFocus
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Press Enter to search or ESC to close</p>
              </form>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
