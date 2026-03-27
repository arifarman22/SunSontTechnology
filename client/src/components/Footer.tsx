import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoImage from '@/images/logofooter.png';
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
              <a href="https://www.facebook.com/sunsontechcom" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/sunsontechcom" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com/company/sunsontechofficial" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@sunsontech" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://x.com/sunsontechcoltd" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.pinterest.com/sunsontech/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#049fd9] transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
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
