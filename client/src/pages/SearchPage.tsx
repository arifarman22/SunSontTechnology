import { useEffect, useState } from 'react';
import { useLocation, Link } from 'wouter';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/Footer';
import { Search } from 'lucide-react';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'solution';
  category?: string;
  image: string;
}

export default function SearchPage() {
  const [location] = useLocation();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const q = params.get('q') || '';
    setQuery(q);

    if (q) {
      searchContent(q);
    } else {
      setLoading(false);
    }
  }, [location]);

  const searchContent = async (searchQuery: string) => {
    setLoading(true);
    try {
      const [products, solutions] = await Promise.all([
        fetch(`${API_BASE_URL}/products`).then(r => r.json()),
        fetch(`${API_BASE_URL}/solutions`).then(r => r.json())
      ]);

      const lowerQuery = searchQuery.toLowerCase();
      const searchResults: SearchResult[] = [];

      if (Array.isArray(products)) {
        products.forEach(p => {
          if (
            p.title.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              id: p.id,
              title: p.title,
              description: p.description,
              type: 'product',
              category: p.category,
              image: p.image
            });
          }
        });
      }

      if (Array.isArray(solutions)) {
        solutions.forEach(s => {
          if (
            s.title.toLowerCase().includes(lowerQuery) ||
            s.description.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              id: s.id,
              title: s.title,
              description: s.description,
              type: 'solution',
              image: s.image
            });
          }
        });
      }

      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-[#049fd9] text-white py-16 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h1 className="text-4xl font-bold mb-4">Search Results</h1>
            {query && (
              <p className="text-xl opacity-90">
                Showing results for: <span className="font-semibold">"{query}"</span>
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-4">No results found for "{query}"</p>
              <p className="text-gray-500">Try different keywords or browse our products and solutions.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">Found {results.length} result{results.length !== 1 ? 's' : ''}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.type === 'product' ? `/products/${result.category}/${result.id}` : `/solutions/${result.id}`}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200 h-full cursor-pointer">
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            result.type === 'product' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-purple-100 text-purple-700'
                          }`}>
                            {result.type === 'product' ? result.category : 'Solution'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{result.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
