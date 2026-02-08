import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Zap, Building2, Shield, CreditCard } from "lucide-react";
import type { Solution } from '@/lib/api';

interface SolutionsMegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_BASE_URL = 'https://www.sunson-tech.com/api';

export default function SolutionsMegaDropdown({ isOpen, onClose }: SolutionsMegaDropdownProps) {
  const [solutions, setSolutions] = useState<Solution[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetch(`${API_BASE_URL}/solutions`)
        .then(r => r.json())
        .then(data => setSolutions(Array.isArray(data) ? data.slice(0, 4) : []))
        .catch(() => setSolutions([]));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Solutions</h2>
              <p className="text-gray-600">Comprehensive technology solutions tailored to your industry</p>
            </div>
            <Link href="/solutions" onClick={onClose}>
              <button className="px-6 py-2 bg-[#049fd9] text-white rounded-lg hover:bg-[#00bceb] transition-colors font-semibold flex items-center gap-2">
                View All Solutions
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <Link key={solution.id} href={`/solutions/${solution.id}`} onClick={onClose}>
                <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#049fd9] transition-all duration-300 h-full cursor-pointer">
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-[#049fd9]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">
                      {solution.title}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
