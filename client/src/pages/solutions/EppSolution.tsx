import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Shield } from "lucide-react";

export default function EppSolution() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">EPP V4 V5 V6 Solution</h1>
            <p className="text-xl text-red-100 mb-8">
              PCI certified encrypting PIN pad solutions that provide the highest level of security 
              for financial transactions with advanced encryption and tamper detection capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Security Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Sunson offers a variety of EPPs solutions which are PCI certified and are adaptable 
                for your business. Our encrypting PIN pads provide military-grade security for 
                sensitive financial transactions while maintaining ease of use and integration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">PCI PTS Certified</h4>
                    <p className="text-sm text-muted-foreground">Meets the highest security standards for payment devices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Triple DES Encryption</h4>
                    <p className="text-sm text-muted-foreground">Advanced encryption algorithms for data protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Tamper Detection</h4>
                    <p className="text-sm text-muted-foreground">Immediate detection and response to security threats</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="EPP Security Solution" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EPP Versions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">EPP Version Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the right EPP version for your security requirements and compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">EPP V4</CardTitle>
                <CardDescription>Standard Security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">PCI PTS V4</div>
                  <p className="text-sm text-muted-foreground">Certified for basic security requirements</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Basic encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />PIN verification</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Tamper detection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />USB interface</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />LED indicators</li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors mt-6" data-testid="button-contact-v4">
                  Contact for V4
                </button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">EPP V5</CardTitle>
                <CardDescription>Enhanced Security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">PCI PTS V5</div>
                  <p className="text-sm text-muted-foreground">Enhanced security for modern requirements</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Advanced encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-authentication</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Enhanced tamper protection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multiple interfaces</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audio feedback</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />LCD display</li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors mt-6" data-testid="button-contact-v5">
                  Contact for V5
                </button>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-600">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">EPP V6</CardTitle>
                <CardDescription>Maximum Security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">PCI PTS V6</div>
                  <p className="text-sm text-muted-foreground">Latest security standards and features</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />AES encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Biometric authentication</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Advanced tamper response</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Wireless connectivity</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Color display</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Remote management</li>
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors mt-6" data-testid="button-contact-v6">
                  Contact for V6
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security measures designed to protect sensitive financial data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-red-600 mr-2" />
                  Encryption Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Triple DES encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />AES-256 encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />RSA key management</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />DUKPT key injection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-red-600 mr-2" />
                  Tamper Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Physical tamper detection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Voltage monitoring</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Temperature sensors</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Automatic key deletion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-red-600 mr-2" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />PIN verification</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Biometric scanning</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-factor authentication</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Secure boot process</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our EPP solutions meet the highest industry standards and certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">PCI PTS</h4>
              <p className="text-sm text-muted-foreground">Payment Card Industry PIN Transaction Security</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">FIPS 140-2</h4>
              <p className="text-sm text-muted-foreground">Federal Information Processing Standard</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Common Criteria</h4>
              <p className="text-sm text-muted-foreground">International security evaluation standard</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">EMV</h4>
              <p className="text-sm text-muted-foreground">Europay, Mastercard, and Visa standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Payment Transactions</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how our EPP solutions can enhance your payment security
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
