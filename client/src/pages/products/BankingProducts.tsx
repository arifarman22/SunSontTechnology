import { Link } from "wouter";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const bankingProducts = [
  {
    id: "cdm",
    name: "Cash Deposit Machine CDM",
    model: "SKT-D1039",
    description: "Advanced cash deposit machine with secure authentication and real-time processing capabilities.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-currency support",
      "Counterfeit detection",
      "Real-time transaction processing",
      "Secure encrypted communication",
      "Touch screen interface"
    ],
    specifications: {
      "Dimensions": "1800 x 800 x 600 mm",
      "Weight": "350 kg",
      "Power": "220V/110V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Security": "PCI compliance"
    }
  },
  {
    id: "atm",
    name: "Cash Dispenser ATM",
    model: "SKT-D1059A",
    description: "Banknote and Coin Dispenser ATM System specially designed for indoor or lobby scenarios.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Banknote and coin dispensing",
      "Indoor/outdoor deployment",
      "Multiple denomination support",
      "Anti-skimming technology",
      "24/7 operation capability"
    ],
    specifications: {
      "Dimensions": "1650 x 750 x 550 mm",
      "Weight": "280 kg",
      "Power": "220V AC",
      "Display": "17'' TFT LCD Touch Screen",
      "Connectivity": "Ethernet, WiFi, 4G"
    }
  },
  {
    id: "stm",
    name: "Smart Teller Machine STM",
    model: "SKT-S2001",
    description: "Intelligent teller machine combining ATM functionality with enhanced customer service capabilities.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Video teller assistance",
      "Document scanning",
      "Check deposit",
      "Card issuance",
      "Biometric authentication"
    ],
    specifications: {
      "Dimensions": "1900 x 850 x 650 mm",
      "Weight": "380 kg",
      "Power": "220V AC",
      "Display": "21'' TFT LCD Touch Screen",
      "Camera": "HD video calling"
    }
  },
  {
    id: "exchange",
    name: "Currency Exchange Kiosk",
    model: "SKT-E3001",
    description: "Automated currency exchange solution with competitive rates and secure transactions.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Multi-currency exchange",
      "Real-time exchange rates",
      "Identity verification",
      "Receipt printing",
      "Anti-money laundering compliance"
    ],
    specifications: {
      "Dimensions": "1700 x 700 x 500 mm",
      "Weight": "250 kg",
      "Power": "220V AC",
      "Display": "19'' TFT LCD Touch Screen",
      "Currencies": "50+ supported"
    }
  }
];

export default function BankingProducts() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Products</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Banking Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive self-service banking solutions for modern financial institutions. 
              Our secure and reliable systems enhance customer experience while reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {bankingProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{product.name}</h3>
                    <span className="text-xs bg-[#049fd9]/10 text-[#049fd9] px-2 py-0.5 rounded-full font-semibold inline-block mt-1">
                      {product.model}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#049fd9] rounded-full mr-2 flex-shrink-0"></div>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/products/banking/${product.id}`} className="w-full">
                    <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] text-sm py-1 h-auto" data-testid={`button-view-details-${product.id}`}>
                      View Details
                    </Button>
                  </Link>
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

