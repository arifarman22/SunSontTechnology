import Header from "@/components/Header";
import Footer from "@/components/Footer";

const healthcareProducts = [
  {
    id: "health-screening",
    name: "Health Screening Kiosk",
    model: "SKT-D1007",
    description: "Comprehensive health screening kiosk with advanced biometric sensors and diagnostic capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Blood pressure measurement",
      "Heart rate monitoring",
      "BMI calculation",
      "Temperature screening",
      "Health report generation",
      "Multi-language support"
    ],
    specifications: {
      "Dimensions": "1800 x 600 x 500 mm",
      "Weight": "180 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Sensors": "Medical grade certified"
    }
  },
  {
    id: "hospital-checkin",
    name: "Hospital Check-in Kiosk",
    model: "SKT-H2001",
    description: "Streamlined patient check-in system with appointment scheduling and insurance verification.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Patient registration",
      "Appointment scheduling",
      "Insurance verification",
      "Queue management",
      "Document scanning",
      "Payment processing"
    ],
    specifications: {
      "Dimensions": "1600 x 600 x 400 mm",
      "Weight": "120 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Printer": "Thermal receipt printer"
    }
  },
  {
    id: "mobile-charging",
    name: "Mobile Charging Station",
    model: "SKT-C3001",
    description: "Secure mobile device charging station with multiple port support and payment integration.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-device charging",
      "Secure lockers",
      "Payment integration",
      "USB-C, Lightning, Micro-USB",
      "Digital advertising display",
      "Remote monitoring"
    ],
    specifications: {
      "Dimensions": "1200 x 400 x 300 mm",
      "Weight": "80 kg",
      "Power": "220V AC",
      "Ports": "12 charging ports",
      "Payment": "Card, mobile payment"
    }
  },
  {
    id: "hotel-checkin",
    name: "Hotel Check-in Kiosk",
    model: "SKT-HT4001",
    description: "Automated hotel guest check-in and check-out system with key card dispensing.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Guest registration",
      "Key card encoding",
      "Payment processing",
      "ID verification",
      "Room assignment",
      "Upselling capabilities"
    ],
    specifications: {
      "Dimensions": "1700 x 650 x 450 mm",
      "Weight": "150 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Card Encoder": "RFID key card system"
    }
  }
];

export default function HealthcareProducts() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Products</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Healthcare & Retail Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Innovative self-service healthcare solutions designed to improve patient experience 
              and streamline healthcare operations with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {healthcareProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <span className="text-sm bg-green-600/10 text-green-600 px-3 py-1 rounded-full font-semibold">
                      {product.model}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm border-b border-gray-200 pb-2">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition-colors"
                    data-testid={`button-contact-${product.id}`}
                  >
                    Contact for Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
