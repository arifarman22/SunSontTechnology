import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const paymentProducts = [
  {
    id: "bitcoin-payment",
    name: "Bitcoin Payment Kiosk",
    model: "SKT-BTC-2001",
    description: "Cryptocurrency payment terminal supporting Bitcoin and major altcoins with secure wallet integration.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Bitcoin & altcoin support",
      "QR code scanning",
      "Real-time exchange rates",
      "Secure wallet integration",
      "KYC compliance",
      "Receipt printing"
    ],
    specifications: {
      "Dimensions": "1600 x 700 x 500 mm",
      "Weight": "200 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Cryptocurrency": "BTC, ETH, LTC, BCH"
    }
  },
  {
    id: "cash-payment",
    name: "Cash Payment Kiosk",
    model: "SKT-CP-3001",
    description: "Self-service cash payment terminal for bill payments, top-ups, and various services.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Bill payment processing",
      "Cash validation",
      "Change dispensing",
      "Service provider integration",
      "Receipt generation",
      "Multi-currency support"
    ],
    specifications: {
      "Dimensions": "1800 x 800 x 600 mm",
      "Weight": "350 kg",
      "Power": "220V AC",
      "Cash Validator": "Multi-denomination",
      "Change Dispenser": "Coin & note"
    }
  },
  {
    id: "wall-mount-payment",
    name: "Wall Mount Payment Kiosk",
    model: "SKT-WM-4001",
    description: "Compact wall-mounted payment terminal ideal for space-constrained environments.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Space-saving design",
      "Card payment processing",
      "Contactless payment",
      "Receipt printing",
      "Remote monitoring",
      "Vandal resistant"
    ],
    specifications: {
      "Dimensions": "800 x 400 x 200 mm",
      "Weight": "50 kg",
      "Power": "12V DC",
      "Display": "15'' TFT LCD Touch Screen",
      "Payment": "EMV, NFC, Contactless"
    }
  },
  {
    id: "cashless-payment",
    name: "Cashless Payment Kiosk",
    model: "SKT-CL-5001",
    description: "Modern cashless payment solution supporting cards, mobile payments, and digital wallets.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Card payment (EMV)",
      "NFC/Contactless",
      "Mobile wallet support",
      "QR code payments",
      "Digital receipts",
      "PCI DSS compliance"
    ],
    specifications: {
      "Dimensions": "1500 x 600 x 400 mm",
      "Weight": "120 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Security": "PCI DSS Level 1"
    }
  }
];

export default function PaymentProducts() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Payment Solutions</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Comprehensive payment processing solutions supporting traditional and modern payment methods 
              including cryptocurrency, contactless, and mobile payments for diverse business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {paymentProducts.map((product) => (
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
                    <span className="text-sm bg-yellow-600/10 text-yellow-600 px-3 py-1 rounded-full">
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
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
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
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
