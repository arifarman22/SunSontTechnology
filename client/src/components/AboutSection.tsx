import { Link } from "wouter";
import { ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: TrendingUp, value: "99.9%", label: "Uptime Guarantee" }
];

const solutions = [
  {
    id: "banking",
    title: "Banking Solutions",
    description: "Comprehensive CDM and ATM solutions with flexible software integration for seamless banking operations.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/cdm"
  },
  {
    id: "healthcare",
    title: "Healthcare Innovation",
    description: "Advanced self-service kiosks transforming patient experiences with efficient check-in and management systems.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/healthcare"
  },
  {
    id: "security",
    title: "Security Excellence",
    description: "PCI-certified encryption pin pads and security modules designed for maximum transaction protection.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/epp"
  },
  {
    id: "payments",
    title: "Payment Systems",
    description: "Versatile payment kiosks supporting multiple payment methods including cryptocurrency and traditional cash.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/solutions/payment"
  }
];

export default function AboutSection() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-16 bg-[#049fd9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <IconComponent className="h-10 w-10 mx-auto mb-3 opacity-90" />
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Who We Are</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of Self-Service Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sunson Technology is a global manufacturer specializing in innovative self-service solutions for banking, healthcare, and security industries. With over two decades of experience, we deliver cutting-edge technology that transforms customer experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to quality, security, and innovation has made us a trusted partner for organizations worldwide, serving clients across 50+ countries with industry-leading products and solutions.
              </p>
              <Link href="/about">
                <button className="flex items-center space-x-2 bg-[#049fd9] hover:bg-[#00bceb] text-white px-6 py-3 rounded font-semibold transition-colors" data-testid="button-learn-more">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sunson Technology Team" 
                className="w-full h-[500px] object-cover rounded-lg shadow-xl" 
              />
            </div>
          </div>

          {/* Solution Pillars */}
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-[#049fd9] mb-3 uppercase tracking-wider">Our Solutions</div>
            <h3 className="text-3xl font-bold text-gray-900">Industry-Specific Technology</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <Link key={solution.id} href={solution.link}>
                <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">{solution.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-[#049fd9] font-semibold text-sm" data-testid={`link-${solution.id}-solution`}>
                      <span>Explore Solution</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
