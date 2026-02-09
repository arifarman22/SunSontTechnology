import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'wouter';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
}

export default function ProductDetails() {
  const [, params] = useRoute('/products/:category/:id');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetch(`${API_BASE_URL}/products`)
        .then(r => r.json())
        .then(data => {
          const found = Array.isArray(data) ? data.find(p => p.id === params.id) : null;
          setProduct(found || null);
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/"><a className="text-[#049fd9] hover:underline">Go back home</a></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href={`/products/${params?.category}`}>
          <button className="flex items-center text-[#049fd9] hover:text-[#00bceb] mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {params?.category} Products
          </button>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 md:h-full bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-[#049fd9]/10 text-[#049fd9] text-sm font-semibold rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>

              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                          <dt className="font-semibold text-gray-700">{key}</dt>
                          <dd className="text-gray-600">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link href="/contact">
                  <button className="w-full bg-[#049fd9] text-white px-8 py-4 rounded-lg hover:bg-[#00bceb] transition-colors font-semibold text-lg">
                    Request a Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
