import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, CreditCard } from "lucide-react";

export default function PaymentSolution() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Cash Payment Kiosk Solution</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Comprehensive self-service payment solutions that modernize bill payment processes, 
              reduce operational costs, and provide customers with convenient 24/7 payment options.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Modern Payment Processing</h2>
              <p className="text-muted-foreground mb-8">
                Sunson payment kiosk is a self-service kiosk that can receive a bill payment for a 
                service or good rendered. Our solution supports multiple payment methods including 
                cash, cards, mobile payments, and cryptocurrency for maximum customer convenience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CreditCard className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Multiple Payment Methods</h4>
                    <p className="text-sm text-muted-foreground">Accept cash, cards, mobile payments, and cryptocurrency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CreditCard className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Availability</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock payment processing capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CreditCard className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Secure Transactions</h4>
                    <p className="text-sm text-muted-foreground">PCI DSS compliant payment processing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Payment Kiosk Solution" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Payment Kiosk Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse payment kiosk solutions designed for different environments and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">₿</span>
                </div>
                <CardTitle>Bitcoin Payment</CardTitle>
                <CardDescription>Cryptocurrency transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Bitcoin & altcoins</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />QR code scanning</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Real-time rates</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />KYC compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💵</span>
                </div>
                <CardTitle>Cash Payment</CardTitle>
                <CardDescription>Traditional cash processing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Bill validation</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Change dispensing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-currency</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Counterfeit detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <CardTitle>Wall Mount</CardTitle>
                <CardDescription>Space-saving design</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Compact design</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Card payments</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Contactless NFC</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Vandal resistant</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <CardTitle>Cashless Payment</CardTitle>
                <CardDescription>Digital payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />EMV cards</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Mobile wallets</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />QR payments</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Digital receipts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Solution Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive payment processing features designed for reliability and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Secure and reliable payment processing for all transaction types.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Real-time processing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multiple currencies</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Transaction validation</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Receipt generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bill Payment Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Support for various bill payment services and utilities.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Utility bills</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Mobile top-ups</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Insurance payments</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Government fees</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Bank-grade security measures and regulatory compliance.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />PCI DSS compliance</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />End-to-end encryption</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Fraud detection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audit trails</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Intuitive interface designed for ease of use and accessibility.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Touch screen interface</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-language support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audio guidance</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />ADA compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Remote Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Comprehensive remote monitoring and management capabilities.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Real-time monitoring</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Remote diagnostics</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Software updates</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Seamless integration with existing business systems.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />API integration</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Database connectivity</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Third-party services</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Custom reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Business Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements to your payment operations and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">70%</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Reduction</h4>
              <p className="text-sm text-muted-foreground">Lower operational costs through automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock payment services</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">90%</span>
              </div>
              <h4 className="font-semibold mb-2">Customer Satisfaction</h4>
              <p className="text-sm text-muted-foreground">Improved customer experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">5x</span>
              </div>
              <h4 className="font-semibold mb-2">Processing Speed</h4>
              <p className="text-sm text-muted-foreground">Faster transaction processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Modernize Your Payment Operations</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how our payment kiosk solutions can benefit your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
