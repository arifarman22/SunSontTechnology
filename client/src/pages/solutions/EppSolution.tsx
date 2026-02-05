import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Shield } from "lucide-react";

export default function EppSolution() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">EPP V4 V5 V6 Solution</h1>
            <p className="text-xl opacity-90 mb-8">
              PCI certified encrypting PIN pad solutions that provide the highest level of security 
              for financial transactions with advanced encryption and tamper detection capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Overview</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Security Solutions</h2>
              <p className="text-gray-600 mb-8">
                Sunson offers a variety of EPPs solutions which are PCI certified and are adaptable 
                for your business. Our encrypting PIN pads provide military-grade security for 
                sensitive financial transactions while maintaining ease of use and integration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">PCI PTS Certified</h4>
                    <p className="text-sm text-gray-600">Meets the highest security standards for payment devices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Triple DES Encryption</h4>
                    <p className="text-sm text-gray-600">Advanced encryption algorithms for data protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tamper Detection</h4>
                    <p className="text-sm text-gray-600">Immediate detection and response to security threats</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="EPP Security Solution" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EPP Versions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Versions</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EPP Version Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right EPP version for your security requirements and compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">EPP V4</h3>
                <p className="text-sm text-gray-600">Standard Security</p>
                <div className="text-3xl font-bold text-red-600 my-4">PCI PTS V4</div>
                <p className="text-xs text-gray-600">Certified for basic security requirements</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Basic encryption</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />PIN verification</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Tamper detection</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />USB interface</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />LED indicators</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors" data-testid="button-contact-v4">
                Contact for V4
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-red-400 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold">POPULAR</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">EPP V5</h3>
                <p className="text-sm text-gray-600">Enhanced Security</p>
                <div className="text-3xl font-bold text-red-600 my-4">PCI PTS V5</div>
                <p className="text-xs text-gray-600">Enhanced security for modern requirements</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Advanced encryption</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multi-authentication</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Enhanced tamper protection</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multiple interfaces</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Audio feedback</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />LCD display</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors" data-testid="button-contact-v5">
                Contact for V5
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-red-600 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">EPP V6</h3>
                <p className="text-sm text-gray-600">Maximum Security</p>
                <div className="text-3xl font-bold text-red-600 my-4">PCI PTS V6</div>
                <p className="text-xs text-gray-600">Latest security standards and features</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />AES encryption</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Biometric authentication</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Advanced tamper response</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Wireless connectivity</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Color display</li>
                <li className="flex items-center text-sm text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Remote management</li>
              </ul>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors" data-testid="button-contact-v6">
                Contact for V6
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Compliance</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our EPP solutions meet the highest industry standards and certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">PCI PTS</h4>
              <p className="text-sm text-gray-600">Payment Card Industry PIN Transaction Security</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">FIPS 140-2</h4>
              <p className="text-sm text-gray-600">Federal Information Processing Standard</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Common Criteria</h4>
              <p className="text-sm text-gray-600">International security evaluation standard</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">EMV</h4>
              <p className="text-sm text-gray-600">Europay, Mastercard, and Visa standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Secure Your Payment Transactions</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how our EPP solutions can enhance your payment security
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

