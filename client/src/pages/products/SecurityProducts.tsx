import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";

const securityProducts = [
  {
    id: "pci-epp",
    name: "PCI Approved EPP",
    model: "SKT-EPP-V6",
    description: "PCI PTS certified encrypting PIN pad with advanced security features for secure transactions.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Products</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              PCI certified security modules and encrypting PIN pads designed to protect 
              sensitive financial transactions with the highest level of security standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {securityProducts.map((product) => (
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
                    <span className="text-sm bg-red-600/10 text-red-600 px-3 py-1 rounded-full font-semibold">
                      {product.model}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
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
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition-colors"
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

