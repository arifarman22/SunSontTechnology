import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function HealthcareSolution() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Self-Service Healthcare Kiosk Solution</h1>
            <p className="text-xl text-green-100 mb-8">
              Comprehensive healthcare kiosk solutions that enhance patient experience, reduce wait times, 
              and improve operational efficiency with advanced biometric screening and diagnostic capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Future of Healthcare Delivery</h2>
              <p className="text-muted-foreground mb-8">
                Sunson imagines a future in which healthcare systems provide consumers with high-quality 
                care in various convenient forms. Our healthcare kiosk solutions bridge the gap between 
                traditional healthcare delivery and modern patient expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Advanced Biometric Screening</h4>
                    <p className="text-sm text-muted-foreground">Medical-grade sensors for accurate health measurements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Patient Self-Service</h4>
                    <p className="text-sm text-muted-foreground">Streamlined check-in and appointment management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Integration Ready</h4>
                    <p className="text-sm text-muted-foreground">Seamless integration with existing hospital systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare Kiosk Solution" 
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
              Comprehensive healthcare features designed to improve patient outcomes and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Health Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Comprehensive vital signs monitoring with medical-grade accuracy.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Blood pressure measurement</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Heart rate monitoring</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Temperature screening</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />BMI calculation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patient Check-in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Streamlined patient registration and appointment management.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Patient registration</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Appointment scheduling</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Insurance verification</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Queue management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Seamless integration with hospital information systems.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />EHR integration</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Real-time data sync</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />HIPAA compliance</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audit trails</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Secure payment processing for healthcare services.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Insurance billing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Co-pay collection</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multiple payment methods</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Receipt generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Designed for accessibility and ease of use for all patients.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />ADA compliance</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Multi-language support</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Audio assistance</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Large text options</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Comprehensive analytics for operational insights.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Usage analytics</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Performance metrics</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Health trends</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Custom reports</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Healthcare Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">60%</span>
              </div>
              <h4 className="font-semibold mb-2">Reduced Wait Times</h4>
              <p className="text-sm text-muted-foreground">Faster patient check-in and processing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">95%</span>
              </div>
              <h4 className="font-semibold mb-2">Patient Satisfaction</h4>
              <p className="text-sm text-muted-foreground">Improved patient experience scores</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">40%</span>
              </div>
              <h4 className="font-semibold mb-2">Cost Savings</h4>
              <p className="text-sm text-muted-foreground">Reduced administrative overhead</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">24/7</span>
              </div>
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">Round-the-clock patient services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Healthcare Delivery</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how our healthcare kiosk solution can improve patient outcomes
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center" data-testid="button-schedule-demo">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
