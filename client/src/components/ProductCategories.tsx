import { Link } from "wouter";
import { 
  Building2, 
  Heart, 
  Shield, 
  Train, 
  Info, 
  CreditCard,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    id: "banking",
    title: "Banking Solutions",
    description: "Secure ATM and CDM systems for modern financial institutions",
    icon: Building2,
    link: "/products/banking",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "healthcare",
    title: "Healthcare Kiosks",
    description: "Self-service check-in and patient management systems",
    icon: Heart,
    link: "/products/healthcare",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "security",
    title: "Security Hardware",
    description: "PCI-certified encryption pin pads and secure keyboards",
    icon: Shield,
    link: "/products/security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "transportation",
    title: "Transportation",
    description: "Smart ticketing and payment kiosks for public transit",
    icon: Train,
    link: "/products/transportation",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "information",
    title: "Information Systems",
    description: "Interactive wayfinding and digital signage solutions",
    icon: Info,
    link: "/products/information",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "payment",
    title: "Payment Terminals",
    description: "Versatile payment kiosks for cryptocurrency and cash",
    icon: CreditCard,
    link: "/products/payment",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Our Solutions</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Products Built for Innovation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive self-service technology solutions designed to transform customer experiences across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={category.link}>
                <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[#049fd9]" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center text-[#049fd9] font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
