import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

const paymentProducts = [
  {
    id: "bitcoin-payment",
    name: "Bitcoin Payment Kiosk",
    model: "SKT-BTC-2001",
    description: "Cryptocurrency payment terminal supporting Bitcoin and major altcoins with secure wallet integration.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Products</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Payment Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive payment processing solutions supporting traditional and modern payment methods 
              including cryptocurrency, contactless, and mobile payments for diverse business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {paymentProducts.map((product) => (
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
                    <span className="text-sm bg-yellow-600/10 text-yellow-600 px-3 py-1 rounded-full font-semibold">
                      {product.model}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
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
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded font-semibold transition-colors"
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

