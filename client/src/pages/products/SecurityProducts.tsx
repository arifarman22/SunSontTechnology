import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const securityProducts = [
  {
    id: "pci-epp",
    name: "PCI Approved EPP",
    model: "SKT-EPP-V6",
    description: "PCI PTS certified encrypting PIN pad with advanced security features for secure transactions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "PCI PTS V6 certified",
      "Triple DES encryption",
      "Tamper detection",
      "Multi-language support",
      "Backlit keypad",
      "Audio feedback"
    ],
    specifications: {
      "Certification": "PCI PTS V6",
      "Encryption": "Triple DES, AES",
      "Interface": "USB, Serial, Ethernet",
      "Display": "2x16 LCD",
      "Operating Temp": "-10°C to 60°C"
    }
  },
  {
    id: "metal-keyboard",
    name: "Full Metal Keyboard",
    model: "SKT-MK-2001",
    description: "Industrial-grade full metal keyboard designed for harsh environments and high-security applications.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Stainless steel construction",
      "Vandal resistant",
      "IP65 protection",
      "Backlit keys",
      "Numeric keypad",
      "Function keys"
    ],
    specifications: {
      "Material": "304 Stainless Steel",
      "Protection": "IP65",
      "Interface": "USB, PS/2",
      "Key Travel": "3.5mm",
      "Operating Force": "2.5N"
    }
  },
  {
    id: "non-pci-pinpad",
    name: "NON PCI Pinpad",
    model: "SKT-NP-1001",
    description: "Basic PIN entry device for low-security applications and development purposes.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Basic PIN entry",
      "Numeric keypad",
      "LED indicators",
      "Buzzer feedback",
      "Compact design",
      "Cost-effective"
    ],
    specifications: {
      "Interface": "USB, Serial",
      "Display": "LED indicators",
      "Power": "5V DC via USB",
      "Dimensions": "120 x 80 x 25 mm",
      "Weight": "200g"
    }
  }
];

export default function SecurityProducts() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-red-100 mb-8">
              PCI certified security modules and encrypting PIN pads designed to protect 
              sensitive financial transactions with the highest level of security standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {securityProducts.map((product) => (
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
                    <span className="text-sm bg-red-600/10 text-red-600 px-3 py-1 rounded-full">
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
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
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
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
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
