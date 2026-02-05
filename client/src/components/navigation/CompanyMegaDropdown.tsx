import { Link } from "wouter";
import { ArrowRight, Users, Target, Briefcase, Award, Globe, TrendingUp } from "lucide-react";

interface CompanyMegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const companyLinks = [
  {
    id: "about",
    name: "About Us",
    description: "The company enhances comprehensive competitiveness through continuous technological innovation and new product R&D. Our encryption keyboard based on cryptography has been widely used worldwide.",
    icon: Users,
    link: "/about",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
  },
  {
    id: "leadership",
    name: "Leadership",
    description: "Flat management solves disadvantages of hierarchical structures, accelerates information flow, and improves decision-making efficiency.",
    icon: Target,
    link: "/about",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    id: "history",
    name: "History",
    description: "From 2003 to 2008, established in High-tech Software Park, Shenzhen. Starting from financial encryption, we entered banking self-service and became a strategic partner of ICBC.",
    icon: Award,
    link: "/about",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
  },
  {
    id: "culture",
    name: "Culture",
    description: "Corporate Culture: New Sunson Chinese Dream. Our growth is as prosperous as the sun—enthusiasm like a flame, and independent innovation like the sun, producing light and heat by itself.",
    icon: Briefcase,
    link: "/about",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  }
];

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime" }
];

export default function CompanyMegaDropdown({ isOpen, onClose }: CompanyMegaDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Company</h2>
            <p className="text-gray-600">Discover who we are and what drives us forward</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.id} href={item.link} onClick={onClose}>
                  <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#049fd9] transition-all duration-300 h-full cursor-pointer">
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#049fd9]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
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
