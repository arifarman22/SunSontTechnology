import { Link } from "wouter";
import { ArrowRight, Zap, Building2, Shield, CreditCard } from "lucide-react";

interface SolutionsMegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutions = [
  {
    id: "cdm",
    name: "CDM Solution",
    description: "Complete cash deposit machine solutions with real-time processing and multi-currency support",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    link: "/solutions/cdm",
    icon: Building2,
    badge: "Popular"
  },
  {
    id: "healthcare",
    name: "Healthcare Kiosk Solution",
    description: "End-to-end patient management and self-service check-in systems for modern healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    link: "/solutions/healthcare",
    icon: Zap
  },
  {
    id: "epp",
    name: "EPP V4 V5 V6 Solution",
    description: "PCI-certified encryption pin pad solutions with advanced security and compliance features",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
    link: "/solutions/epp",
    icon: Shield,
    badge: "Certified"
  },
  {
    id: "payment",
    name: "Payment Kiosk Solution",
    description: "Versatile payment terminals supporting multiple payment methods and cryptocurrencies",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    link: "/solutions/payment",
    icon: CreditCard
  }
];

export default function SolutionsMegaDropdown({ isOpen, onClose }: SolutionsMegaDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Solutions</h2>
            <p className="text-gray-600">Comprehensive technology solutions tailored to your industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link key={solution.id} href={solution.link} onClick={onClose}>
                  <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#049fd9] transition-all duration-300 h-full cursor-pointer">
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img
                        src={solution.image}
                        alt={solution.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {solution.badge && (
                        <span className="absolute top-3 right-3 bg-[#049fd9] text-white text-xs font-semibold px-2 py-1 rounded">
                          {solution.badge}
                        </span>
                      )}
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#049fd9]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {solution.description}
                      </p>
                      <div className="flex items-center text-[#049fd9] text-sm font-semibold">
                        <span>Learn more</span>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
