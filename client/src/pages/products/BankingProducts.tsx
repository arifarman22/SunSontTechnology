import { useState, useEffect } from 'react';
import { Link } from "wouter";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProducts, type Product } from "@/lib/api";

export default function BankingProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(data => {
        const bankingProducts = data.filter(p => p.category === 'Banking');
        setProducts(bankingProducts);
      })
      .catch(err => console.error('Failed to fetch products:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-900 py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-600">Products</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Banking</h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive self-service banking solutions for modern financial institutions. 
              Our secure and reliable systems enhance customer experience while reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No banking products available at the moment.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{product.title}</h3>
                      <span className="text-xs bg-[#049fd9]/10 text-[#049fd9] px-2 py-0.5 rounded-full font-semibold inline-block mt-1">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    
                    {product.features && product.features.length > 0 && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-[#049fd9] rounded-full mr-2 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Link href={`/products/banking/${product.id}`} className="w-full">
                      <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] text-sm py-1 h-auto">
                        View Details
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