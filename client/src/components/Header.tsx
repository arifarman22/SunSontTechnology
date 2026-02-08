import { Link } from "wouter";
import { ChevronDown, Menu, X, Globe, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-[#1d1d1d] text-white text-xs">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Support</span>
            <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Partners</span>
            <span className="hover:text-[#00bceb] cursor-pointer transition-colors">Investors</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
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
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="dropdown relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors" data-testid="button-products-dropdown">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-1 w-[600px] bg-white shadow-2xl border border-gray-100">
                <div className="grid grid-cols-3 gap-6 p-6">
                  <div>
                    <h4 className="font-bold text-xs text-[#049fd9] mb-3 uppercase tracking-wider">Banking</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/banking" className="text-sm text-gray-700 hover:text-[#049fd9] block" data-testid="link-banking-products">Cash Deposit Machine</Link></li>
                      <li><Link href="/products/banking" className="text-sm text-gray-700 hover:text-[#049fd9] block">Cash Dispenser ATM</Link></li>
                      <li><Link href="/products/banking" className="text-sm text-gray-700 hover:text-[#049fd9] block">Smart Teller Machine</Link></li>
                      <li><Link href="/products/banking" className="text-sm text-gray-700 hover:text-[#049fd9] block">Currency Exchange</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#049fd9] mb-3 uppercase tracking-wider">Healthcare</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/healthcare" className="text-sm text-gray-700 hover:text-[#049fd9] block" data-testid="link-healthcare-products">Hospital Check-in Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm text-gray-700 hover:text-[#049fd9] block">Healthcare Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm text-gray-700 hover:text-[#049fd9] block">Mobile Charging Station</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm text-gray-700 hover:text-[#049fd9] block">Hotel Check-in Kiosk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#049fd9] mb-3 uppercase tracking-wider">Security</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/security" className="text-sm text-gray-700 hover:text-[#049fd9] block" data-testid="link-security-products">PCI Approved EPP</Link></li>
                      <li><Link href="/products/security" className="text-sm text-gray-700 hover:text-[#049fd9] block">Full Metal Keyboard</Link></li>
                      <li><Link href="/products/security" className="text-sm text-gray-700 hover:text-[#049fd9] block">NON PCI Pinpad</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors" data-testid="button-solutions-dropdown">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl border border-gray-100">
                <ul className="p-4 space-y-2">
                  <li><Link href="/solutions/cdm" className="text-sm text-gray-700 hover:text-[#049fd9] block py-1" data-testid="link-cdm-solution">CDM Solution</Link></li>
                  <li><Link href="/solutions/healthcare" className="text-sm text-gray-700 hover:text-[#049fd9] block py-1" data-testid="link-healthcare-solution">Healthcare Kiosk Solution</Link></li>
                  <li><Link href="/solutions/epp" className="text-sm text-gray-700 hover:text-[#049fd9] block py-1" data-testid="link-epp-solution">EPP V4 V5 V6 Solution</Link></li>
                  <li><Link href="/solutions/payment" className="text-sm text-gray-700 hover:text-[#049fd9] block py-1" data-testid="link-payment-solution">Payment Kiosk Solution</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors" data-testid="link-about">
              About
            </Link>

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#049fd9] transition-colors" data-testid="link-contact">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="p-2 text-gray-700 hover:text-[#049fd9] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/contact">
              <button className="px-4 py-2 text-sm font-medium text-[#049fd9] hover:text-[#00bceb] transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-5 py-2 text-sm font-medium bg-[#049fd9] text-white rounded hover:bg-[#00bceb] transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-3">
              <button className="flex items-center space-x-2 py-2 text-sm text-gray-700 hover:text-[#049fd9] w-full">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              <Link href="/products/banking" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-banking">Banking Products</Link>
              <Link href="/products/healthcare" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-healthcare">Healthcare Products</Link>
              <Link href="/products/security" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-security">Security Products</Link>
              <Link href="/solutions/cdm" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-cdm">CDM Solution</Link>
              <Link href="/about" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-about">About</Link>
              <Link href="/contact" className="block py-2 text-sm text-gray-700 hover:text-[#049fd9]" data-testid="link-mobile-contact">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
