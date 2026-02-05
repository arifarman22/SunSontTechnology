// Navigation data structure for mega menu
export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  products: ProductItem[];
}

export const productCategories: Category[] = [
  {
    id: "banking",
    name: "Banking",
    icon: "Building2",
    products: [
      {
        id: "cdm",
        name: "Cash Deposit Machine",
        description: "Advanced CDM solutions with real-time processing and multi-currency support",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop",
        link: "/products/banking",
        badge: "Popular"
      },
      {
        id: "atm",
        name: "Cash Dispenser ATM",
        description: "Secure ATM systems with advanced fraud detection and 24/7 monitoring",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        link: "/products/banking"
      },
      {
        id: "smart-teller",
        name: "Smart Teller Machine",
        description: "Next-gen teller automation with video banking and remote assistance",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
        link: "/products/banking"
      },
      {
        id: "currency-exchange",
        name: "Currency Exchange Kiosk",
        description: "Multi-currency exchange with competitive rates and instant processing",
        image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=400&h=300&fit=crop",
        link: "/products/banking"
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "Heart",
    products: [
      {
        id: "check-in",
        name: "Hospital Check-in Kiosk",
        description: "Streamline patient registration with touchless check-in and insurance verification",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
        link: "/products/healthcare",
        badge: "New"
      },
      {
        id: "pharmacy",
        name: "Pharmacy Kiosk",
        description: "Automated prescription pickup and medication dispensing systems",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
        link: "/products/healthcare"
      },
      {
        id: "wayfinding",
        name: "Healthcare Wayfinding",
        description: "Interactive hospital navigation with real-time directions and accessibility features",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
        link: "/products/healthcare"
      }
    ]
  },
  {
    id: "epp",
    name: "EPP",
    icon: "Shield",
    products: [
      {
        id: "pci-epp",
        name: "PCI Approved EPP",
        description: "PCI PTS certified encryption pin pads with advanced security features",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        link: "/products/security",
        badge: "Certified"
      },
      {
        id: "metal-keyboard",
        name: "Full Metal Keyboard",
        description: "Vandal-resistant metal keyboards for high-security environments",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop",
        link: "/products/security"
      },
      {
        id: "non-pci",
        name: "NON PCI Pinpad",
        description: "Cost-effective pin entry devices for low-risk applications",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
        link: "/products/security"
      }
    ]
  },
  {
    id: "retail",
    name: "Retail",
    icon: "ShoppingCart",
    products: [
      {
        id: "self-checkout",
        name: "Self-Checkout Kiosk",
        description: "Fast, intuitive self-service checkout with multiple payment options",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop",
        link: "/products/payment"
      },
      {
        id: "price-checker",
        name: "Price Checker",
        description: "In-store price verification and product information terminals",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        link: "/products/payment"
      },
      {
        id: "queue-management",
        name: "Queue Management",
        description: "Digital queue systems to optimize customer flow and reduce wait times",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=300&fit=crop",
        link: "/products/payment"
      }
    ]
  },
  {
    id: "payments",
    name: "Payments",
    icon: "CreditCard",
    products: [
      {
        id: "crypto-atm",
        name: "Cryptocurrency ATM",
        description: "Buy and sell crypto with cash at secure, compliant kiosks",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
        link: "/products/payment",
        badge: "Trending"
      },
      {
        id: "bill-payment",
        name: "Bill Payment Kiosk",
        description: "Multi-utility bill payment terminals with instant receipt printing",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
        link: "/products/payment"
      },
      {
        id: "mobile-top-up",
        name: "Mobile Top-Up Station",
        description: "Instant mobile recharge for all major carriers and prepaid services",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        link: "/products/payment"
      }
    ]
  },
  {
    id: "other",
    name: "Other Modules",
    icon: "Grid3x3",
    products: [
      {
        id: "ticketing",
        name: "Ticketing Kiosk",
        description: "Event and transportation ticketing with QR code generation",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
        link: "/products/payment"
      },
      {
        id: "information",
        name: "Information Terminal",
        description: "Interactive wayfinding and digital directory solutions",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        link: "/products/payment"
      },
      {
        id: "charging",
        name: "Mobile Charging Station",
        description: "Secure phone charging lockers with multiple connector types",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
        link: "/products/healthcare"
      }
    ]
  }
];
