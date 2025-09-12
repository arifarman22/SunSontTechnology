import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function CdmSolution() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Smart Cash Deposit Machine (CDM) Solution</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive CDM solutions that streamline cash handling operations, reduce costs, 
              and enhance customer experience with cutting-edge technology and robust security features.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete CDM Ecosystem</h2>
              <p className="text-muted-foreground mb-8">
                Our CDM solution provides a complete ecosystem for cash deposit operations, 
                from hardware to software integration, ensuring seamless operation and maximum efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hardware Excellence</h4>
                    <p className="text-sm text-muted-foreground">Robust, reliable machines designed for 24/7 operation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Software Integration</h4>
                    <p className="text-sm text-muted-foreground">Seamless integration with existing banking systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Security First</h4>
                    <p className="text-sm text-muted-foreground">Advanced security features and compliance standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="CDM Solution" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Solution Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed to meet the demanding requirements of modern banking operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Multi-Currency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Handle multiple currencies with automatic detection and validation.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Currency recognition</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Counterfeit detection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Real-time validation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-Time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Instant transaction processing with immediate account updates.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Immediate processing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Account verification</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Transaction logging</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Enhanced security measures meeting international standards.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Encrypted communication</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audit trails</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Compliance reporting</li>
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
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Remote diagnostics</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Status monitoring</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Predictive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Intuitive interface designed for optimal user experience.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Touch screen interface</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-language support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Accessibility features</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Comprehensive analytics and reporting for business insights.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Transaction analytics</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Usage patterns</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Performance metrics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Business Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your cash handling operations with measurable business benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">50%</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Reduction</h4>
              <p className="text-sm text-muted-foreground">Reduce operational costs through automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock service availability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">99%</span>
              </div>
              <h4 className="font-semibold mb-2">Accuracy</h4>
              <p className="text-sm text-muted-foreground">High accuracy in cash handling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3x</span>
              </div>
              <h4 className="font-semibold mb-2">Efficiency</h4>
              <p className="text-sm text-muted-foreground">Triple the transaction processing speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Cash Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how our CDM solution can benefit your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
