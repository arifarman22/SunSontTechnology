import { useState, useEffect } from 'react';
import { Link } from "wouter";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getSolutions, type Solution } from "@/lib/api";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSolutions()
      .then(data => setSolutions(data))
      .catch(err => console.error('Failed to fetch solutions:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Solutions</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive technology solutions designed to transform your business operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
              <p className="mt-4 text-gray-600">Loading solutions...</p>
            </div>
          ) : solutions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No solutions available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{solution.description}</p>
                    
                    {solution.features && solution.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                        <ul className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#049fd9] rounded-full mr-2 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Link href={`/solutions/${solution.id}`}>
                      <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] flex items-center justify-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
