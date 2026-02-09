import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export default function SolutionDetails() {
  const [, params] = useRoute('/solutions/:id');
  const [solution, setSolution] = useState<Solution | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetch(`${API_BASE_URL}/solutions`)
        .then(r => r.json())
        .then(data => {
          const found = Array.isArray(data) ? data.find(s => s.id === params.id) : null;
          setSolution(found || null);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Solution Not Found</h1>
          <Link href="/solutions"><a className="text-[#049fd9] hover:underline">View all solutions</a></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/solutions">
          <button className="flex items-center text-[#049fd9] hover:text-[#00bceb] mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Solutions
          </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96 bg-gray-100">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h1 className="text-5xl font-bold text-white mb-2">{solution.title}</h1>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-xl text-gray-600 mb-12">{solution.description}</p>

            <div className="grid md:grid-cols-2 gap-12">
              {solution.features && solution.features.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Check className="h-8 w-8 text-[#049fd9] mr-3" />
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#049fd9] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {solution.benefits && solution.benefits.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <Sparkles className="h-8 w-8 text-[#049fd9] mr-3" />
                    Benefits
                  </h2>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#049fd9] to-[#00bceb] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-white/90">Get in touch with our team to learn how this solution can benefit your organization.</p>
              <Link href="/contact">
                <button className="bg-white text-[#049fd9] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
