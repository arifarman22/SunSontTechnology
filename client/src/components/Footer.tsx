import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">SUNSON</span>
                  <span className="text-sm text-gray-400">TECHNOLOGY</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              Leading manufacturer of self-service solutions for banking, healthcare, and security industries worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="text-xl text-gray-400 hover:text-primary cursor-pointer">📧</div>
              <div className="text-xl text-gray-400 hover:text-primary cursor-pointer">🐦</div>
              <div className="text-xl text-gray-400 hover:text-primary cursor-pointer">📺</div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/products/banking" className="hover:text-white" data-testid="link-footer-banking">Banking Solutions</Link></li>
              <li><Link href="/products/healthcare" className="hover:text-white" data-testid="link-footer-healthcare">Healthcare Kiosks</Link></li>
              <li><Link href="/products/security" className="hover:text-white" data-testid="link-footer-security">Security Modules</Link></li>
              <li><Link href="/products/payment" className="hover:text-white" data-testid="link-footer-payment">Payment Terminals</Link></li>
              <li><Link href="/products/information" className="hover:text-white" data-testid="link-footer-information">Information Systems</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/solutions/cdm" className="hover:text-white" data-testid="link-footer-cdm">CDM Solution</Link></li>
              <li><Link href="/solutions/healthcare" className="hover:text-white" data-testid="link-footer-healthcare-solution">Healthcare Kiosk Solution</Link></li>
              <li><Link href="/solutions/epp" className="hover:text-white" data-testid="link-footer-epp">EPP V4 V5 V6 Solution</Link></li>
              <li><Link href="/solutions/payment" className="hover:text-white" data-testid="link-footer-payment-solution">Payment Kiosk Solution</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">📍 Technology Park, Innovation District</li>
              <li className="flex items-center">📞 +1 (555) 123-4567</li>
              <li className="flex items-center">✉️ info@sunson-tech.com</li>
              <li className="flex items-center">🌐 www.sunson-tech.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Sunson Technology. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
