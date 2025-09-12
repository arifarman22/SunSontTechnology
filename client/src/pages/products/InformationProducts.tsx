import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const informationProducts = [
  {
    id: "information-kiosk",
    name: "Information Kiosk",
    model: "SKT-INFO-7001",
    description: "Interactive information terminal providing digital content, wayfinding, and customer service.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Interactive touch display",
      "Content management system",
      "Multi-media support",
      "Remote monitoring",
      "Customizable interface",
      "Accessibility features"
    ],
    specifications: {
      "Dimensions": "1800 x 600 x 400 mm",
      "Weight": "150 kg",
      "Power": "220V AC",
      "Display": "32'' 4K Touch Screen",
      "Connectivity": "WiFi, Ethernet, 4G"
    }
  },
  {
    id: "digital-signage",
    name: "Digital Signage",
    model: "SKT-DS-8001",
    description: "High-resolution digital display system for advertising, announcements, and information sharing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "4K Ultra HD display",
      "Content scheduling",
      "Remote content updates",
      "Multiple format support",
      "Brightness adjustment",
      "Portrait/landscape modes"
    ],
    specifications: {
      "Display Size": "43'' to 86''",
      "Resolution": "4K Ultra HD",
      "Brightness": "500-2500 nits",
      "Operating Hours": "24/7",
      "Mounting": "Wall, Floor, Ceiling"
    }
  },
  {
    id: "wayfinding",
    name: "Way Finding Solutions",
    model: "SKT-WF-9001",
    description: "Interactive wayfinding system with maps, directions, and point-of-interest information.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Interactive floor plans",
      "GPS integration",
      "Voice guidance",
      "Multi-language support",
      "Real-time updates",
      "Accessibility compliance"
    ],
    specifications: {
      "Dimensions": "1900 x 700 x 500 mm",
      "Weight": "200 kg",
      "Power": "220V AC",
      "Display": "27'' Multi-touch",
      "Features": "GPS, Audio, Maps"
    }
  },
  {
    id: "queuing-system",
    name: "Queuing System",
    model: "SKT-Q-1001",
    description: "Digital queue management system with ticket dispensing, status displays, and analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Ticket dispensing",
      "Digital queue displays",
      "SMS notifications", 
      "Analytics dashboard",
      "Multi-service support",
      "Appointment booking"
    ],
    specifications: {
      "Dispenser": "Thermal ticket printer",
      "Display": "LED queue displays",
      "Connectivity": "Ethernet, WiFi",
      "Integration": "API support",
      "Management": "Web-based admin"
    }
  }
];

export default function InformationProducts() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Information & AR Solutions</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Interactive information systems and augmented reality solutions that enhance 
              customer experience with intuitive interfaces and real-time information delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {informationProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {product.name}
                    <span className="text-sm bg-indigo-600/10 text-indigo-600 px-3 py-1 rounded-full">
                      {product.model}
                    </span>
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Specifications</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm border-b border-border pb-1">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    data-testid={`button-contact-${product.id}`}
                  >
                    Contact for Quote
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
