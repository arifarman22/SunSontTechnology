import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "banking",
    title: "Banking",
    description: "Sunson delivers CDM Solutions that can fulfill your business needs. The flexible/friendly software solution makes it easily connected.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
    linkColor: "text-primary hover:text-primary/80",
    link: "/solutions/cdm"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Sunson imagines a future in which healthcare systems provide consumers with high-quality care in various convenient forms.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
    linkColor: "text-green-600 hover:text-green-500",
    link: "/solutions/healthcare"
  },
  {
    id: "security",
    title: "Security Module",
    description: "Sunson offers a variety of EPPs solutions which is PCI certified and are adaptable for your business.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "bg-gradient-to-br from-red-50 to-red-100",
    linkColor: "text-red-600 hover:text-red-500",
    link: "/solutions/epp"
  },
  {
    id: "payments",
    title: "Retail and Payments",
    description: "Sunson payment kiosk is a self-service kiosk that can receive a bill payment for a service or good rendered.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    linkColor: "text-yellow-600 hover:text-yellow-500",
    link: "/solutions/payment"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-accent mb-2">WHO WE ARE</h2>
          <h3 className="text-4xl font-bold text-foreground mb-6">
            We are a manufacturer of banking system solutions, healthcare solutions and information security solutions.
          </h3>
          <Link href="/about">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors" data-testid="button-learn-more">
              Learn More
            </button>
          </Link>
        </div>

        {/* Team Image */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt="Sunson Technology Team" 
            className="w-full h-96 object-cover rounded-2xl shadow-lg" 
          />
        </div>

        {/* Solution Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div key={solution.id} className={`${solution.gradient} rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
              <img 
                src={solution.image} 
                alt={`${solution.title} Solutions`} 
                className="w-full h-48 object-cover rounded-xl mb-6" 
              />
              <h4 className="text-xl font-bold text-foreground mb-3">{solution.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">
                {solution.description}
              </p>
              <Link href={solution.link} className={`${solution.linkColor} font-semibold text-sm flex items-center`} data-testid={`link-${solution.id}-solution`}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
