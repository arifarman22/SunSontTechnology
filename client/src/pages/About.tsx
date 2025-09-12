import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Sunson Technology</h1>
            <p className="text-xl text-blue-100 mb-8">
              We are a manufacturer of banking system solutions, healthcare solutions and information 
              security solutions, dedicated to innovation for a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Leading Technology Manufacturer</h2>
              <p className="text-muted-foreground mb-6">
                Sunson Technology has been at the forefront of self-service technology solutions for over a decade. 
                We specialize in designing, manufacturing, and deploying comprehensive kiosk solutions that transform 
                how businesses interact with their customers.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner 
                for organizations worldwide. From banking institutions to healthcare facilities, our solutions 
                enhance operational efficiency while improving user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Global Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Expert Engineers</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Sunson Technology Team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our innovation and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Continuously pushing the boundaries of technology to create cutting-edge solutions 
                  that meet evolving market needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Maintaining the highest standards in manufacturing, testing, and deployment 
                  to ensure reliable and durable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Putting our customers at the center of everything we do, providing exceptional 
                  service and support throughout the entire journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Leveraging our global presence to deliver solutions worldwide while maintaining 
                  local expertise and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Business Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across multiple industries and sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Banking System Solutions" 
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Banking Solutions</h4>
              <p className="text-muted-foreground text-sm mb-4">
                CDM, ATM, and smart teller solutions that revolutionize banking operations 
                with secure, efficient, and user-friendly interfaces.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cash Deposit Machines</li>
                <li>• Automated Teller Machines</li>
                <li>• Smart Teller Solutions</li>
                <li>• Currency Exchange Kiosks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Healthcare Solutions" 
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Healthcare Solutions</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Advanced healthcare kiosks that improve patient experience and streamline 
                healthcare delivery with biometric screening and check-in systems.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Health Screening Kiosks</li>
                <li>• Hospital Check-in Systems</li>
                <li>• Patient Self-Service</li>
                <li>• Biometric Monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Security Solutions" 
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Security Solutions</h4>
              <p className="text-muted-foreground text-sm mb-4">
                PCI certified encrypting PIN pads and security modules that ensure the highest 
                level of protection for sensitive financial transactions.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• PCI Certified EPPs</li>
                <li>• Secure PIN Entry</li>
                <li>• Tamper Detection</li>
                <li>• Encryption Solutions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" 
                alt="Payment Solutions" 
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-foreground mb-3">Payment Solutions</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive payment kiosks supporting traditional and modern payment methods 
                including cryptocurrency and mobile payments.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Cash Payment Kiosks</li>
                <li>• Contactless Payments</li>
                <li>• Cryptocurrency Support</li>
                <li>• Mobile Payment Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team & Culture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of experts united by a shared vision of technological excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Expert Engineering Team</h3>
              <p className="text-muted-foreground mb-6">
                Our multidisciplinary team includes hardware engineers, software developers, 
                security specialists, and user experience designers who work collaboratively 
                to create innovative solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">R&D</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Research & Development</h4>
                    <p className="text-sm text-muted-foreground">Continuous innovation in self-service technology</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">QA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">Rigorous testing and quality control processes</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Support</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock customer support and service</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Sunson Technology Team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how Sunson Technology can help transform your business operations
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-contact-us">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors" data-testid="button-view-solutions">
              View Solutions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
