import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Globe, Factory } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-900 py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-600">Get In Touch</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch with our experts to discuss your self-service technology needs.
              We're here to help you find the perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#049fd9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#049fd9]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Headquarters</h3>
              <p className="text-gray-600 text-sm">
                <strong>Shenzhen Sunson Tech Co., Ltd.</strong><br />
                23rd Floor, Venture Investment Building<br />
                Yuehai Street, Shenzhen Bay<br />
                Nanshan District, Shenzhen, China
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Factory</h3>
              <p className="text-gray-600 text-sm">
                <strong>Shenzhen Sunson Tech Co., Ltd.</strong><br />
                5th Floor, Building 3, Phase II of Yangbei Industrial Park<br />
                Hangcheng Subdistrict, Baoan Dist.<br />
                Shenzhen, China
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email & Phone</h3>
              <p className="text-gray-600 text-sm">
                Sales: sales@sunson-tech.com<br />
                Support: support@sunson-tech.com<br />
                Phone: +86 (755) 2647-0670<br />
                Fax: +86 (755) 2647-0674
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <Clock className="h-12 w-12 text-[#049fd9] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">We're available to help when you need us most</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Sales Team</h4>
                <p className="text-sm text-gray-600">Monday - Friday<br />8:30 AM - 6:00 PM CST</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                <p className="text-sm text-gray-600">Monday - Friday<br />8:30 AM - 6:00 PM CST</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                <p className="text-sm text-gray-600">24/7<br />Critical Issues Only</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">General Inquiry</h4>
                <p className="text-sm text-gray-600">Monday - Friday<br />8:30 AM - 6:00 PM CST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Send Message</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" data-testid="input-first-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" data-testid="input-last-name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" data-testid="input-phone" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" data-testid="input-company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger data-testid="select-country">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select>
                    <SelectTrigger data-testid="select-interest">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banking">Banking Solutions</SelectItem>
                      <SelectItem value="healthcare">Healthcare Solutions</SelectItem>
                      <SelectItem value="security">Security Solutions</SelectItem>
                      <SelectItem value="payment">Payment Solutions</SelectItem>
                      <SelectItem value="transportation">Transportation Solutions</SelectItem>
                      <SelectItem value="information">Information Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your requirements, questions, or how we can help you..."
                    className="min-h-32"
                    data-testid="textarea-message"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="newsletter" className="mt-1" data-testid="checkbox-newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      I would like to receive updates about Sunson Technology products and services
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" data-testid="checkbox-privacy" />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to the Privacy Policy and Terms of Service *
                    </Label>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button size="lg" className="px-12 bg-[#049fd9] hover:bg-[#00bceb]" data-testid="button-submit-form">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

