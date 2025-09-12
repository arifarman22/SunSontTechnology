import { Link } from "wouter";
import { 
  Building2, 
  Heart, 
  Shield, 
  Train, 
  Info, 
  CreditCard,
  Check
} from "lucide-react";

const categories = [
  {
    id: "banking",
    title: "Bank and Identity",
    description: "Secure banking solutions for modern financial institutions",
    icon: Building2,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    buttonColor: "bg-primary hover:bg-primary/90 text-primary-foreground",
    link: "/products/banking",
    products: [
      "Cash Deposit Machine CDM",
      "Cash Dispenser ATM", 
      "Smart Teller Machine STM",
      "Currency Exchange Kiosk"
    ]
  },
  {
    id: "healthcare",
    title: "Retail and Healthcare",
    description: "Advanced healthcare kiosks for patient self-service",
    icon: Heart,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    buttonColor: "bg-green-600 hover:bg-green-700 text-white",
    link: "/products/healthcare",
    products: [
      "Hospital Check-in Kiosk",
      "Self-service Healthcare Kiosk",
      "Mobile Charging Station",
      "Hotel Check-in Kiosk"
    ]
  },
  {
    id: "security",
    title: "Encrypting PIN PAD",
    description: "PCI certified security modules for secure transactions",
    icon: Shield,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    buttonColor: "bg-red-600 hover:bg-red-700 text-white",
    link: "/products/security",
    products: [
      "PCI Approved EPP",
      "Full Metal Keyboard",
      "NON PCI Pinpad"
    ]
  },
  {
    id: "transportation",
    title: "Public & Transportation",
    description: "Smart ticketing and transportation solutions",
    icon: Train,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
    link: "/products/transportation",
    products: [
      "Ticket Vending Kiosk",
      "Card Dispenser Kiosk",
      "Card Top-up Kiosk",
      "Parking Payment Kiosk"
    ]
  },
  {
    id: "information",
    title: "Information & AR",
    description: "Interactive information and wayfinding solutions",
    icon: Info,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
    link: "/products/information",
    products: [
      "Information Kiosk",
      "Digital Signage",
      "Way Finding Solutions",
      "Queuing System"
    ]
  },
  {
    id: "payment",
    title: "Payment Terminals",
    description: "Modern payment processing for all transactions",
    icon: CreditCard,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-100",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
    link: "/products/payment",
    products: [
      "Bitcoin Payment Kiosk",
      "Cash Payment Kiosk",
      "Wall Mount Payment Kiosk",
      "Cashless Payment Kiosk"
    ]
  }
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">OUR PRODUCTS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive self-service solutions for banking, healthcare, security, and payment industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="mb-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {category.products.map((product, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
                <Link href={category.link}>
                  <button 
                    className={`w-full ${category.buttonColor} py-3 rounded-lg font-semibold transition-colors`}
                    data-testid={`button-explore-${category.id}`}
                  >
                    Explore {category.title === "Bank and Identity" ? "Banking" : category.title} Solutions
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
