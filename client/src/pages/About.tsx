import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Company Overview</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Sunson Technology</h1>
            <p className="text-xl opacity-90 mb-8">
              Leading manufacturer of innovative self-service solutions for banking, healthcare, and security industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Our Story</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leading Technology Manufacturer</h2>
              <p className="text-gray-600 mb-6">
                Sunson Technology has been at the forefront of self-service technology solutions for over two decades. 
                We specialize in designing, manufacturing, and deploying comprehensive kiosk solutions that transform 
                how businesses interact with their customers.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner 
                for organizations worldwide. From banking institutions to healthcare facilities, our solutions 
                enhance operational efficiency while improving user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-[#049fd9] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Global Installations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-[#049fd9] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-[#049fd9] mb-2">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-4xl font-bold text-[#049fd9] mb-2">100+</div>
                  <div className="text-sm text-gray-600">Expert Engineers</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sunson Technology Office" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Our Values</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our innovation and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-[#049fd9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#049fd9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Continuously pushing the boundaries of technology to create cutting-edge solutions 
                that meet evolving market needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600 text-sm">
                Maintaining the highest standards in manufacturing, testing, and deployment 
                to ensure reliable and durable solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Putting our customers at the center of everything we do, providing exceptional 
                service and support throughout the entire journey.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Leveraging our global presence to deliver solutions worldwide while maintaining 
                local expertise and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Solutions</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple industries and sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Banking System Solutions" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Banking Solutions</h4>
                <p className="text-gray-600 text-sm mb-4">
                  CDM, ATM, and smart teller solutions that revolutionize banking operations 
                  with secure, efficient, and user-friendly interfaces.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cash Deposit Machines</li>
                  <li>• Automated Teller Machines</li>
                  <li>• Smart Teller Solutions</li>
                  <li>• Currency Exchange Kiosks</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare Solutions" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare Solutions</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced healthcare kiosks that improve patient experience and streamline 
                  healthcare delivery with biometric screening and check-in systems.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Health Screening Kiosks</li>
                  <li>• Hospital Check-in Systems</li>
                  <li>• Patient Self-Service</li>
                  <li>• Biometric Monitoring</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Security Solutions" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Security Solutions</h4>
                <p className="text-gray-600 text-sm mb-4">
                  PCI certified encrypting PIN pads and security modules that ensure the highest 
                  level of protection for sensitive financial transactions.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• PCI Certified EPPs</li>
                  <li>• Secure PIN Entry</li>
                  <li>• Tamper Detection</li>
                  <li>• Encryption Solutions</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Payment Solutions" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Payment Solutions</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive payment kiosks supporting traditional and modern payment methods 
                  including cryptocurrency and mobile payments.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cash Payment Kiosks</li>
                  <li>• Contactless Payments</li>
                  <li>• Cryptocurrency Support</li>
                  <li>• Mobile Payment Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Our Team</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Engineering Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse team of experts united by a shared vision of technological excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Our multidisciplinary team includes hardware engineers, software developers, 
                security specialists, and user experience designers who work collaboratively 
                to create innovative solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 bg-[#049fd9]/10 rounded-lg flex items-center justify-center">
                    <span className="text-[#049fd9] font-bold text-sm">R&D</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Research & Development</h4>
                    <p className="text-sm text-gray-600">Continuous innovation in self-service technology</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">QA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">Rigorous testing and quality control processes</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Support</h4>
                    <p className="text-sm text-gray-600">Round-the-clock customer support and service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sunson Technology Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#049fd9] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how Sunson Technology can help transform your business operations
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#049fd9] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors" data-testid="button-contact-us">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#049fd9] px-8 py-3 rounded font-semibold transition-colors" data-testid="button-view-solutions">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
