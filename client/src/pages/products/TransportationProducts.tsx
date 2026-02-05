import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const transportationProducts = [
  {
    id: "ticket-vending",
    name: "Ticket Vending Kiosk",
    model: "SKT-TV-3001",
    description: "Automated ticket vending machine for public transportation with multi-payment support.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Multi-route ticket sales",
      "Cash and card payment",
      "QR code generation",
      "Real-time schedule display",
      "Multi-language interface",
      "Wheelchair accessible"
    ],
    specifications: {
      "Dimensions": "1800 x 800 x 600 mm",
      "Weight": "300 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Payment": "Cash, Card, NFC, QR"
    }
  },
  {
    id: "card-dispenser",
    name: "Card Dispenser Kiosk",
    model: "SKT-CD-4001",
    description: "Smart card dispensing system for transit cards, access cards, and membership cards.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Card inventory management",
      "Personalization printing",
      "Secure card storage",
      "Real-time activation",
      "Bulk card dispensing",
      "Anti-theft protection"
    ],
    specifications: {
      "Dimensions": "1600 x 700 x 500 mm",
      "Weight": "250 kg",
      "Power": "220V AC",
      "Card Capacity": "2000 cards",
      "Printer": "Thermal transfer"
    }
  },
  {
    id: "card-topup",
    name: "Card Top-up Kiosk",
    model: "SKT-CT-5001",
    description: "Self-service card recharging station with balance inquiry and transaction history.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Balance inquiry",
      "Card recharging",
      "Transaction history",
      "Multiple payment methods",
      "Receipt printing",
      "Account management"
    ],
    specifications: {
      "Dimensions": "1500 x 600 x 400 mm",
      "Weight": "180 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Card Reader": "NFC, RFID, Magnetic"
    }
  },
  {
    id: "parking-payment",
    name: "Parking Payment Kiosk",
    model: "SKT-PP-6001",
    description: "Automated parking fee collection system with license plate recognition and payment processing.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "License plate recognition",
      "Hourly/daily rate calculation",
      "Multiple payment options",
      "Validation printing",
      "Lost ticket handling",
      "Weather resistant"
    ],
    specifications: {
      "Dimensions": "1700 x 650 x 450 mm",
      "Weight": "220 kg",
      "Power": "220V AC",
      "Protection": "IP54",
      "Camera": "HD license plate capture"
    }
  }
];

export default function TransportationProducts() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Transportation Solutions</h1>
            <p className="text-xl text-purple-100 mb-8">
              Smart ticketing and transportation kiosks designed to modernize public transit 
              systems with efficient self-service capabilities and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {transportationProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-3">
                  <CardTitle className="text-lg line-clamp-2 flex items-start justify-between gap-2">
                    <span>{product.name}</span>
                    <span className="text-xs bg-purple-600/10 text-purple-600 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                      {product.model}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-3 pt-0">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm"
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

