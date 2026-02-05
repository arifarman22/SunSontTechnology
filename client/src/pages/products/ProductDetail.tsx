import { useRoute, Link } from "wouter";
import { useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Mail, Phone, MessageCircle } from "lucide-react";
import NotFound from "@/pages/not-found";

// Product data organized by category
const productData = {
  banking: [
    {
      id: "cdm",
      name: "Cash Deposit Machine CDM",
      model: "SKT-D1039",
      description: "Advanced cash deposit machine with secure authentication and real-time processing capabilities.",
      longDescription: "The SKT-D1039 Cash Deposit Machine is engineered for high-volume banking environments, offering unparalleled security and reliability. With advanced counterfeit detection algorithms and real-time transaction processing, this machine ensures seamless customer experiences while maintaining the highest security standards.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Multi-currency support with automatic detection",
        "Advanced counterfeit detection using UV/MG/IR sensors",
        "Real-time transaction processing and validation",
        "Secure encrypted communication protocols",
        "Intuitive touch screen interface with multilingual support",
        "Automatic cash counting and sorting",
        "Anti-jamming mechanism with self-recovery",
        "24/7 operational capability with remote monitoring"
      ],
      specifications: {
        "Dimensions (W×D×H)": "1800 × 800 × 600 mm",
        "Weight": "350 kg",
        "Power Consumption": "220V/110V AC, 300W",
        "Display": "19″ TFT LCD Touch Screen, 1280×1024",
        "Security Level": "PCI PTS Level 1 certified",
        "Connectivity": "Ethernet, WiFi, 4G/LTE",
        "Operating Temperature": "-10°C to +50°C",
        "Humidity": "20% to 80% non-condensing",
        "Cash Capacity": "Up to 10,000 notes",
        "Processing Speed": "8 notes per second",
        "Supported Currencies": "USD, EUR, GBP, JPY, CNY and more",
        "Compliance": "EMV, PCI-DSS, ISO 27001"
      },
      price: "Contact for pricing",
      warranty: "2 years comprehensive warranty"
    },
    {
      id: "atm",
      name: "Cash Dispenser ATM",
      model: "SKT-D1059A",
      description: "Banknote and Coin Dispenser ATM System specially designed for indoor or lobby scenarios.",
      longDescription: "The SKT-D1059A represents the pinnacle of ATM technology, combining robust cash dispensing capabilities with cutting-edge security features. Perfect for high-traffic banking environments, this system delivers reliable 24/7 service with minimal maintenance requirements.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Dual cash dispenser for notes and coins",
        "Indoor/outdoor deployment flexibility",
        "Multiple denomination support",
        "Anti-skimming technology with tamper detection",
        "24/7 operation capability with self-diagnostics",
        "Encrypted PIN entry with secure keypad",
        "Receipt printer with audit trail",
        "Remote monitoring and management"
      ],
      specifications: {
        "Dimensions (W×D×H)": "1650 × 750 × 550 mm",
        "Weight": "280 kg",
        "Power Consumption": "220V AC, 250W",
        "Display": "17″ TFT LCD Touch Screen, 1280×1024",
        "Connectivity": "Ethernet, WiFi, 4G/LTE",
        "Cash Capacity": "2,000 notes per cassette (4 cassettes)",
        "Coin Capacity": "3,000 coins per tube (6 tubes)",
        "Dispensing Speed": "5 notes per second",
        "Operating Temperature": "-10°C to +50°C",
        "Security": "Triple DES encryption, PCI compliance",
        "Card Reader": "EMV contact/contactless, magnetic stripe",
        "Audio": "Built-in speakers with voice guidance"
      },
      price: "Contact for pricing",
      warranty: "2 years parts and labor"
    },
    {
      id: "stm",
      name: "Smart Teller Machine STM",
      model: "SKT-S2001",
      description: "Intelligent teller machine combining ATM functionality with enhanced customer service capabilities.",
      longDescription: "The SKT-S2001 Smart Teller Machine revolutionizes banking services by combining traditional ATM functions with advanced video teller assistance and document processing capabilities. This all-in-one solution reduces branch workload while providing customers with comprehensive banking services in a self-service environment.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "HD video teller assistance with live agents",
        "Advanced document scanning and processing",
        "Check deposit with instant verification",
        "Instant card issuance and personalization",
        "Biometric authentication (fingerprint, facial recognition)",
        "Multi-function cash handling (deposit and withdrawal)",
        "Remote assistance and troubleshooting",
        "Integration with core banking systems"
      ],
      specifications: {
        "Dimensions (W×D×H)": "1900 × 850 × 650 mm",
        "Weight": "380 kg",
        "Power Consumption": "220V AC, 400W",
        "Display": "21″ TFT LCD Touch Screen, 1920×1080",
        "Camera": "HD video calling, 2MP resolution",
        "Connectivity": "Ethernet, WiFi, 4G LTE",
        "Card Reader": "EMV contact/contactless, magnetic stripe",
        "Document Scanner": "High-speed duplex scanner",
        "Cash Dispensing": "4 cassettes, 2,000 notes each",
        "Cash Deposit": "500-note capacity with counting",
        "Check Processing": "MICR reading, image capture",
        "Operating Temperature": "10°C to 40°C",
        "Security": "Triple DES, AES 256-bit, PCI compliance"
      },
      price: "Contact for pricing",
      warranty: "3 years comprehensive support"
    },
    {
      id: "exchange",
      name: "Currency Exchange Kiosk",
      model: "SKT-E3001",
      description: "Automated currency exchange solution with competitive rates and secure transactions.",
      longDescription: "The SKT-E3001 Currency Exchange Kiosk provides travelers and businesses with convenient, secure currency exchange services. Featuring real-time exchange rates, multi-currency support, and advanced security protocols, this kiosk delivers banking-grade currency exchange in a self-service format.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "50+ currency exchange support",
        "Real-time exchange rates from financial markets",
        "Secure identity verification and KYC compliance",
        "Counterfeit detection for all supported currencies",
        "Receipt printing with transaction details",
        "Anti-money laundering (AML) compliance",
        "Multi-language interface support",
        "Remote monitoring and rate management"
      ],
      specifications: {
        "Dimensions (W×D×H)": "1700 × 700 × 500 mm",
        "Weight": "250 kg",
        "Power Consumption": "220V AC, 300W",
        "Display": "19″ TFT LCD Touch Screen, 1280×1024",
        "Cash Handling": "Multi-currency bill acceptor/dispenser",
        "Currencies Supported": "50+ major global currencies",
        "Exchange Rate Updates": "Real-time via secure API",
        "Security": "Encrypted transactions, PCI compliance",
        "ID Scanner": "Passport, ID card, driver's license",
        "Receipt Printer": "High-speed thermal printer",
        "Connectivity": "Ethernet, WiFi, 4G LTE",
        "Operating Temperature": "15°C to 35°C"
      },
      price: "Contact for pricing",
      warranty: "2 years parts and service"
    }
  ],
  healthcare: [
    {
      id: "screening-kiosk",
      name: "Health Screening Kiosk",
      model: "SKT-D1007",
      description: "Advanced health screening kiosk with integrated vital signs monitoring and patient management system.",
      longDescription: "The SKT-D1007 Health Screening Kiosk revolutionizes patient intake and basic health monitoring in healthcare facilities. With integrated vital signs sensors and intelligent patient management software, this kiosk streamlines the screening process while maintaining clinical accuracy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Automated vital signs measurement",
        "Temperature screening with thermal camera",
        "Blood pressure and heart rate monitoring",
        "Patient check-in and registration",
        "Insurance card scanning and verification",
        "Symptom questionnaire with AI triage",
        "Multilingual interface support",
        "Integration with EMR systems"
      ],
      specifications: {
        "Dimensions (W×D×H)": "800 × 600 × 1800 mm",
        "Weight": "150 kg",
        "Power Consumption": "110V/220V AC, 200W",
        "Display": "21″ TFT LCD Touch Screen",
        "Temperature Range": "32°C to 42°C (±0.2°C)",
        "Blood Pressure": "60-280 mmHg (±3 mmHg)",
        "Heart Rate": "40-200 bpm",
        "Connectivity": "Ethernet, WiFi, Bluetooth",
        "Card Scanner": "Insurance cards, ID cards",
        "Printer": "Thermal receipt printer",
        "Operating Environment": "Indoor, 15°C to 35°C"
      },
      price: "Contact for pricing",
      warranty: "3 years including calibration services"
    }
  ],
  security: [
    {
      id: "epp-v6",
      name: "PCI Approved EPP V6",
      model: "SKT-EPP-V6",
      description: "PCI PTS approved encrypted PIN pad with advanced security features for payment applications.",
      longDescription: "The SKT-EPP-V6 represents the latest generation of encrypted PIN entry devices, certified to the highest PCI PTS security standards. Designed for demanding payment environments, this EPP delivers uncompromising security with exceptional user experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "PCI PTS 6.x certification",
        "Hardware-based encryption",
        "Tamper-evident design",
        "Multi-application support",
        "Contactless payment support",
        "EMV Level 1 and Level 2 certified",
        "Audio/visual feedback",
        "Remote key management"
      ],
      specifications: {
        "Dimensions (W×D×H)": "180 × 120 × 45 mm",
        "Weight": "0.8 kg",
        "Power": "USB powered or external 12V DC",
        "Display": "4-line backlit LCD",
        "Keypad": "16-key encrypted keypad",
        "Card Reader": "EMV contact, contactless (NFC)",
        "Connectivity": "USB 2.0, RS232, Ethernet",
        "Security": "Triple DES, AES 256-bit encryption",
        "Certifications": "PCI PTS 6.x, EMV L1/L2, CC EAL 4+",
        "Operating Temperature": "0°C to +50°C",
        "Humidity": "10% to 90% non-condensing"
      },
      price: "Contact for pricing",
      warranty: "2 years manufacturer warranty"
    }
  ],
  payment: [
    {
      id: "bitcoin-kiosk",
      name: "Bitcoin Payment Kiosk",
      model: "SKT-BTC-2024",
      description: "Advanced cryptocurrency kiosk supporting Bitcoin and major altcoins with secure wallet integration.",
      longDescription: "The SKT-BTC-2024 Bitcoin Payment Kiosk brings cryptocurrency transactions to the mainstream, offering secure and user-friendly access to digital currencies. With support for multiple cryptocurrencies and advanced security protocols, this kiosk makes crypto accessible to everyone.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      features: [
        "Multi-cryptocurrency support (BTC, ETH, LTC, etc.)",
        "Buy and sell functionality",
        "QR code wallet scanning",
        "Real-time exchange rates",
        "KYC/AML compliance integration",
        "Cash and card payment options",
        "Secure hardware wallet support",
        "24/7 operation with remote monitoring"
      ],
      specifications: {
        "Dimensions (W×D×H)": "700 × 600 × 1600 mm",
        "Weight": "200 kg",
        "Power": "220V AC, 400W",
        "Display": "21″ Touch Screen, Full HD",
        "Cash Acceptor": "Multi-denomination bill acceptor",
        "Card Reader": "EMV chip and PIN, contactless",
        "Scanner": "High-resolution QR/barcode scanner",
        "Printer": "Thermal receipt printer",
        "Security": "Biometric authentication, AES 256",
        "Connectivity": "Ethernet, WiFi, 4G LTE",
        "Operating Temperature": "10°C to 40°C"
      },
      price: "Contact for pricing",
      warranty: "2 years comprehensive support"
    }
  ]
};

export default function ProductDetail() {
  const [, params] = useRoute("/products/:category/:productId");
  
  if (!params) {
    return <NotFound />;
  }

  const { category, productId } = params;
  const categoryProducts = productData[category as keyof typeof productData];
  
  if (!categoryProducts) {
    return <NotFound />;
  }

  const product = categoryProducts.find(p => p.id === productId);
  
  if (!product) {
    return <NotFound />;
  }

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = `${product.name} ${product.model} - Sunson Technology`;
    
    const head = document.getElementsByTagName('head')[0];
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `${product.description} Model ${product.model}. Professional ${category} solutions from Sunson Technology.`);
    
    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: `${product.name} ${product.model} - Sunson Technology` },
      { property: 'og:description', content: `${product.description} Professional ${category} solutions.` },
      { property: 'og:image', content: product.image },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${product.name} ${product.model}` },
      { name: 'twitter:description', content: product.description },
      { name: 'twitter:image', content: product.image }
    ];
    
    ogTags.forEach(tag => {
      const identifier = tag.property || tag.name;
      let metaTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${identifier}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (tag.property) {
          metaTag.setAttribute('property', tag.property);
        } else if (tag.name) {
          metaTag.setAttribute('name', tag.name);
        }
        head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Cleanup function to restore original title
    return () => {
      document.title = 'Sunson Technology';
    };
  }, [product, category]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4" data-testid="badge-product-category">
                  {category.charAt(0).toUpperCase() + category.slice(1)} Solutions
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-product-name">
                  {product.name}
                </h1>
                <div className="text-xl text-primary font-semibold mb-4" data-testid="text-product-model">
                  Model: {product.model}
                </div>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-product-description">
                  {product.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/contact?product=${productId}&category=${category}&action=quote`}>
                    <Button size="lg" data-testid="button-request-quote">
                      <Mail className="mr-2 h-5 w-5" />
                      Request Quote
                    </Button>
                  </Link>
                  <Link href={`/contact?product=${productId}&category=${category}&action=sales`}>
                    <Button variant="outline" size="lg" data-testid="button-contact-sales">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Sales
                    </Button>
                  </Link>
                  <Link href={`/contact?product=${productId}&category=${category}&action=chat`}>
                    <Button variant="ghost" size="lg" data-testid="button-live-chat">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Live Chat
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full rounded-2xl shadow-2xl" 
                  data-testid="img-product-hero"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary" data-testid="text-warranty">
                      {product.warranty.split(' ')[0]} {product.warranty.split(' ')[1]}
                    </div>
                    <div className="text-sm text-muted-foreground">Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Advanced capabilities designed for professional environments
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <p className="text-foreground" data-testid={`text-feature-${index}`}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Detailed technical information for {product.name}
            </p>
            
            <Card>
              <CardHeader>
                <CardTitle>Specifications for {product.model}</CardTitle>
                <CardDescription>Complete technical details and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-medium text-foreground" data-testid={`spec-label-${index}`}>
                          {key}
                        </span>
                        <span className="text-muted-foreground text-right ml-4" data-testid={`spec-value-${index}`}>
                          {value}
                        </span>
                      </div>
                      {index < Object.entries(product.specifications).length - 1 && (
                        <Separator />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact our sales team for pricing, customization options, and implementation support
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`/contact?product=${productId}&category=${category}&action=quote`}>
                <Button size="lg" variant="secondary" data-testid="button-get-quote">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote Now
                </Button>
              </Link>
              <Link href={`/contact?product=${productId}&category=${category}&action=demo`}>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-schedule-demo">
                  Schedule Demo
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-primary-foreground/60">
              <p>Pricing: {product.price} | Warranty: {product.warranty}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
