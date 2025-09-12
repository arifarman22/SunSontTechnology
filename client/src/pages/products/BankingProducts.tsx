import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bankingProducts = [
  {
    id: "cdm",
    name: "Cash Deposit Machine CDM",
    model: "SKT-D1039",
    description: "Advanced cash deposit machine with secure authentication and real-time processing capabilities.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Banking Solutions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive self-service banking solutions for modern financial institutions. 
              Our secure and reliable systems enhance customer experience while reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {bankingProducts.map((product) => (
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
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
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
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
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
                  
                  <div className="flex gap-3">
                    <Link href={`/products/banking/${product.id}`} className="flex-1">
                      <Button className="w-full" data-testid={`button-view-details-${product.id}`}>
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1" data-testid={`button-contact-${product.id}`}>
                      Contact for Quote
                    </Button>
                  </div>
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
