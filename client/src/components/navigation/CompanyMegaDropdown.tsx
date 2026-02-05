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
    link: "/about"
  },
  {
    id: "leadership",
    name: "Leadership",
    description: "Flat management solves disadvantages of hierarchical structures, accelerates information flow, and improves decision-making efficiency.",
    icon: Target,
    link: "/about"
  },
  {
    id: "history",
    name: "History",
    description: "From 2003 to 2008, established in High-tech Software Park, Shenzhen. Starting from financial encryption, we entered banking self-service and became a strategic partner of ICBC.",
    icon: Award,
    link: "/about"
  },
  {
    id: "culture",
    name: "Culture",
    description: "Corporate Culture: New Sunson Chinese Dream. Our growth is as prosperous as the sun—enthusiasm like a flame, and independent innovation like the sun, producing light and heat by itself.",
    icon: Briefcase,
    link: "/about"
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
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Company Links */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Company</h2>
                <p className="text-gray-600">Discover who we are and what drives us forward</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {companyLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.id} href={item.link} onClick={onClose}>
                      <div className="group p-5 border border-gray-200 rounded-lg hover:border-[#049fd9] hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#049fd9]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#049fd9] transition-colors">
                            <Icon className="h-6 w-6 text-[#049fd9] group-hover:text-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900 group-hover:text-[#049fd9] transition-colors">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="text-xs bg-[#049fd9] text-white px-2 py-0.5 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center text-[#049fd9] text-sm font-semibold">
                              <span>Learn more</span>
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="bg-gradient-to-br from-[#049fd9] to-[#00bceb] rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-6">Our Impact</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm opacity-90">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link href="/contact" onClick={onClose}>
                  <button className="w-full bg-white text-[#049fd9] px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
