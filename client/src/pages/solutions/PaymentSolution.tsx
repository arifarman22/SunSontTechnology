import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function PaymentSolution() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cash Payment Kiosk Solution</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive self-service payment solutions that modernize bill payment processes, 
              reduce operational costs, and provide customers with convenient 24/7 payment options.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Payment Processing</h2>
              <p className="text-gray-600 mb-8">
                Sunson payment kiosk is a self-service kiosk that can receive a bill payment for a 
                service or good rendered. Our solution supports multiple payment methods including 
                cash, cards, mobile payments, and cryptocurrency for maximum customer convenience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiple Payment Methods</h4>
                    <p className="text-sm text-gray-600">Accept cash, cards, mobile payments, and cryptocurrency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                    <p className="text-sm text-gray-600">Round-the-clock payment processing capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Transactions</h4>
                    <p className="text-sm text-gray-600">PCI DSS compliant payment processing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Payment Kiosk Solution" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Types</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment Kiosk Types</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diverse payment kiosk solutions designed for different environments and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">₿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Bitcoin Payment</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Cryptocurrency transactions</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Bitcoin & altcoins</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />QR code scanning</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Real-time rates</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />KYC compliance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Cash Payment</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Traditional cash processing</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Bill validation</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Change dispensing</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multi-currency</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Counterfeit detection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Wall Mount</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Space-saving design</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Compact design</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Card payments</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Contactless NFC</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Vandal resistant</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Cashless Payment</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">Digital payment methods</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />EMV cards</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Mobile wallets</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />QR payments</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Digital receipts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Benefits</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable improvements to your payment operations and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-yellow-600">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Lower operational costs through automation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock payment services</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">90%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
              <p className="text-sm text-gray-600">Improved customer experience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">5x</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing Speed</h4>
              <p className="text-sm text-gray-600">Faster transaction processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Modernize Your Payment Operations</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how our payment kiosk solutions can benefit your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

