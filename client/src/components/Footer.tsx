import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoImage from '@/images/Logo.jpeg';
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const footerReveal = useScrollReveal(0.1);

  return (
    <footer className="bg-[#1d1d1d] text-white">
      {/* Main Footer */}
      <div
        ref={footerReveal.ref}
        className={`container mx-auto px-6 py-12 reveal-up ${footerReveal.isVisible ? 'visible' : ''}`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/">
              <img src={logoImage} alt="Sunson Technology" className="h-12 cursor-pointer" />
            </Link>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/banking" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-banking">Banking Solutions</Link></li>
              <li><Link href="/products/healthcare" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-healthcare">Healthcare Kiosks</Link></li>
              <li><Link href="/products/security" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-security">Security Modules</Link></li>
              <li><Link href="/products/payment" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-payment">Payment Terminals</Link></li>
              <li><Link href="/products/information" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-information">Information Systems</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/cdm" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-cdm">CDM Solution</Link></li>
              <li><Link href="/solutions/healthcare" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-healthcare-solution">Healthcare Solution</Link></li>
              <li><Link href="/solutions/epp" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-epp">EPP Solution</Link></li>
              <li><Link href="/solutions/payment" className="text-gray-400 hover:text-[#00bceb] transition-colors" data-testid="link-footer-payment-solution">Payment Solution</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-[#00bceb] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#00bceb] transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00bceb] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00bceb] transition-colors">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00bceb] transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Sunson Technology. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00bceb] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00bceb] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00bceb] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
