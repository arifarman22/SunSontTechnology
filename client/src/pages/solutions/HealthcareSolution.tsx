import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function HealthcareSolution() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Self-Service Healthcare Kiosk Solution</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive healthcare kiosk solutions that enhance patient experience, reduce wait times, 
              and improve operational efficiency with advanced biometric screening and diagnostic capabilities.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Future of Healthcare Delivery</h2>
              <p className="text-gray-600 mb-8">
                Sunson imagines a future in which healthcare systems provide consumers with high-quality 
                care in various convenient forms. Our healthcare kiosk solutions bridge the gap between 
                traditional healthcare delivery and modern patient expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Biometric Screening</h4>
                    <p className="text-sm text-gray-600">Medical-grade sensors for accurate health measurements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient Self-Service</h4>
                    <p className="text-sm text-gray-600">Streamlined check-in and appointment management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Integration Ready</h4>
                    <p className="text-sm text-gray-600">Seamless integration with existing hospital systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Healthcare Kiosk Solution" 
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
              Comprehensive healthcare features designed to improve patient outcomes and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health Screening</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive vital signs monitoring with medical-grade accuracy.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Blood pressure measurement</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Heart rate monitoring</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Temperature screening</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />BMI calculation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Check-in</h3>
              <p className="text-gray-600 mb-4 text-sm">Streamlined patient registration and appointment management.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Patient registration</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Appointment scheduling</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Insurance verification</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Queue management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Integration</h3>
              <p className="text-gray-600 mb-4 text-sm">Seamless integration with hospital information systems.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />EHR integration</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Real-time data sync</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />HIPAA compliance</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Audit trails</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Processing</h3>
              <p className="text-gray-600 mb-4 text-sm">Secure payment processing for healthcare services.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Insurance billing</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Co-pay collection</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multiple payment methods</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Receipt generation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600 mb-4 text-sm">Designed for accessibility and ease of use for all patients.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />ADA compliance</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Multi-language support</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Audio assistance</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Large text options</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive analytics for operational insights.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Usage analytics</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Performance metrics</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Health trends</li>
                <li className="flex items-center text-gray-600"><Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />Custom reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Benefits</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable improvements in patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-green-600">60%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reduced Wait Times</h4>
              <p className="text-sm text-gray-600">Faster patient check-in and processing</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">95%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Patient Satisfaction</h4>
              <p className="text-sm text-gray-600">Improved patient experience scores</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600">40%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Savings</h4>
              <p className="text-sm text-gray-600">Reduced administrative overhead</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock patient services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Healthcare Delivery</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how our healthcare kiosk solution can improve patient outcomes
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

