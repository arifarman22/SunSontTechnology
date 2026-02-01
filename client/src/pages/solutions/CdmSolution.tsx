import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function CdmSolution() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Smart Cash Deposit Machine (CDM) Solution</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive CDM solutions that streamline cash handling operations, reduce costs, 
              and enhance customer experience with cutting-edge technology and robust security features.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete CDM Ecosystem</h2>
              <p className="text-gray-600 mb-8">
                Our CDM solution provides a complete ecosystem for cash deposit operations, 
                from hardware to software integration, ensuring seamless operation and maximum efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hardware Excellence</h4>
                    <p className="text-sm text-gray-600">Robust, reliable machines designed for 24/7 operation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Software Integration</h4>
                    <p className="text-sm text-gray-600">Seamless integration with existing banking systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Security First</h4>
                    <p className="text-sm text-gray-600">Advanced security features and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="CDM Solution" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Features</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solution Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced features designed to meet the demanding requirements of modern banking operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Currency Support</h3>
              <p className="text-gray-600 mb-4 text-sm">Handle multiple currencies with automatic detection and validation.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Currency recognition</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Counterfeit detection</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Real-time validation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Processing</h3>
              <p className="text-gray-600 mb-4 text-sm">Instant transaction processing with immediate account updates.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Immediate processing</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Account verification</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Transaction logging</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4 text-sm">Enhanced security measures meeting international standards.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Encrypted communication</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Audit trails</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Management</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive remote monitoring and management capabilities.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Remote diagnostics</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Status monitoring</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Predictive maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Experience</h3>
              <p className="text-gray-600 mb-4 text-sm">Intuitive interface designed for optimal user experience.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Touch screen interface</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multi-language support</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Accessibility features</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive analytics and reporting for business insights.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Transaction analytics</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Usage patterns</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Performance metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Benefits</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your cash handling operations with measurable business benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">50%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Reduce operational costs through automation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock service availability</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">99%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
              <p className="text-sm text-gray-600">High accuracy in cash handling</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">3x</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Efficiency</h4>
              <p className="text-sm text-gray-600">Triple the transaction processing speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#049fd9] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cash Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how our CDM solution can benefit your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#049fd9] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#049fd9] px-8 py-3 rounded font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
