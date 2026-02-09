import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaDropdown from "./MegaDropdown";
import SolutionsMegaDropdown from "./SolutionsMegaDropdown";
import CompanyMegaDropdown from "./CompanyMegaDropdown";
import logoImage from '@/images/Logo.jpeg';

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
            <div className="flex items-center cursor-pointer">
              <img src={logoImage} alt="Sunson Technology" className="h-12" />
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

      {/* Mega Dropdowns */}
      <MegaDropdown isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
      <SolutionsMegaDropdown isOpen={isSolutionsOpen} onClose={closeAllMenus} />
      <CompanyMegaDropdown isOpen={isCompanyOpen} onClose={closeAllMenus} />
    </header>
  );
}
