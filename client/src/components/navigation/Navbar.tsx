import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaDropdown from "./MegaDropdown";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    setIsMegaMenuOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsMegaMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsMegaMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsCompanyOpen(false);
  };

  return (
    <header 
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

      {/* Main Navigation */}
      <nav className="container mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-10 h-10 bg-[#049fd9] rounded flex items-center justify-center group-hover:bg-[#00bceb] transition-colors">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1d1d1d] tracking-tight">SUNSON</span>
                <span className="text-[10px] text-gray-600 -mt-1">TECHNOLOGY</span>
              </div>
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
              {isSolutionsOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={closeAllMenus} />
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="p-4 space-y-2">
                      <li><Link href="/solutions/cdm" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">CDM Solution</Link></li>
                      <li><Link href="/solutions/healthcare" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">Healthcare Kiosk Solution</Link></li>
                      <li><Link href="/solutions/epp" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">EPP V4 V5 V6 Solution</Link></li>
                      <li><Link href="/solutions/payment" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">Payment Kiosk Solution</Link></li>
                    </ul>
                  </div>
                </>
              )}
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
              {isCompanyOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={closeAllMenus} />
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="p-4 space-y-2">
                      <li><Link href="/about" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">About Us</Link></li>
                      <li><Link href="/about" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">Our Team</Link></li>
                      <li><Link href="/about" onClick={closeAllMenus} className="text-sm text-gray-700 hover:text-[#049fd9] block py-2 px-3 rounded hover:bg-gray-50 transition-colors">Careers</Link></li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* News */}
            <Link href="/news" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors">
              News
            </Link>

            {/* Contact */}
            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-[#049fd9] hover:text-[#00bceb] transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-5 py-2 text-sm font-medium bg-[#049fd9] text-white rounded hover:bg-[#00bceb] transition-colors shadow-sm">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-in slide-in-from-top duration-200">
            <nav className="space-y-3">
              <Link href="/products/banking" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Banking Products</Link>
              <Link href="/products/healthcare" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Healthcare Products</Link>
              <Link href="/products/security" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Security Products</Link>
              <Link href="/solutions/cdm" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Solutions</Link>
              <Link href="/about" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Company</Link>
              <Link href="/news" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">News</Link>
              <Link href="/contact" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]">Contact</Link>
            </nav>
          </div>
        )}
      </nav>

      {/* Mega Dropdown */}
      <MegaDropdown isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
    </header>
  );
}
