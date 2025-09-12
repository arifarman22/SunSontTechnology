import { Link } from "wouter";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">SUNSON</span>
                <span className="text-sm text-muted-foreground">TECHNOLOGY</span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="dropdown relative">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium" data-testid="button-products-dropdown">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">BANKING</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/banking" className="text-sm hover:text-primary" data-testid="link-banking-products">Cash Deposit Machine CDM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary">Cash Dispenser ATM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary">Smart Teller Machine STM</Link></li>
                      <li><Link href="/products/banking" className="text-sm hover:text-primary">Currency Exchange Kiosk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">HEALTHCARE</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary" data-testid="link-healthcare-products">Hospital Check-in Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary">Healthcare Kiosk</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary">Mobile Charging Station</Link></li>
                      <li><Link href="/products/healthcare" className="text-sm hover:text-primary">Hotel Check-in Kiosk</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">SECURITY</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/security" className="text-sm hover:text-primary" data-testid="link-security-products">PCI Approved EPP</Link></li>
                      <li><Link href="/products/security" className="text-sm hover:text-primary">Full Metal Keyboard</Link></li>
                      <li><Link href="/products/security" className="text-sm hover:text-primary">NON PCI Pinpad</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">PAYMENT</h4>
                    <ul className="space-y-2">
                      <li><Link href="/products/payment" className="text-sm hover:text-primary" data-testid="link-payment-products">Bitcoin Payment Kiosk</Link></li>
                      <li><Link href="/products/payment" className="text-sm hover:text-primary">Cash Payment Kiosk</Link></li>
                      <li><Link href="/products/payment" className="text-sm hover:text-primary">Wall Mount Payment</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown relative">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium" data-testid="button-solutions-dropdown">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border p-4">
                <ul className="space-y-3">
                  <li><Link href="/solutions/cdm" className="flex items-center text-sm hover:text-primary" data-testid="link-cdm-solution">CDM Solution</Link></li>
                  <li><Link href="/solutions/healthcare" className="flex items-center text-sm hover:text-primary" data-testid="link-healthcare-solution">Healthcare Kiosk Solution</Link></li>
                  <li><Link href="/solutions/epp" className="flex items-center text-sm hover:text-primary" data-testid="link-epp-solution">EPP V4 V5 V6 Solution</Link></li>
                  <li><Link href="/solutions/payment" className="flex items-center text-sm hover:text-primary" data-testid="link-payment-solution">Payment Kiosk Solution</Link></li>
                </ul>
              </div>
            </div>

            <div className="dropdown relative">
              <button className="flex items-center text-foreground hover:text-primary transition-colors font-medium" data-testid="button-about-dropdown">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border p-4">
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-sm hover:text-primary" data-testid="link-about">Company</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary">Team</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary">Careers</Link></li>
                  <li><Link href="/about" className="text-sm hover:text-primary">News</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-contact">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-4">
              <Link href="/products/banking" className="block text-foreground hover:text-primary" data-testid="link-mobile-banking">Banking Products</Link>
              <Link href="/products/healthcare" className="block text-foreground hover:text-primary" data-testid="link-mobile-healthcare">Healthcare Products</Link>
              <Link href="/products/security" className="block text-foreground hover:text-primary" data-testid="link-mobile-security">Security Products</Link>
              <Link href="/solutions/cdm" className="block text-foreground hover:text-primary" data-testid="link-mobile-cdm">CDM Solution</Link>
              <Link href="/about" className="block text-foreground hover:text-primary" data-testid="link-mobile-about">About</Link>
              <Link href="/contact" className="block text-foreground hover:text-primary" data-testid="link-mobile-contact">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
