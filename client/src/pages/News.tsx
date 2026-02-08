import { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { getNewsPosts, type NewsPost } from "@/lib/api";
import { Calendar, User } from "lucide-react";

export default function News() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsPosts()
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNews(data);
        } else {
          setNews([]);
        }
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setNews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#049fd9] text-white py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Latest Updates</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl opacity-90 mb-8">
              Stay updated with the latest news, product launches, and industry insights from Sunson Technology
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
              <p className="mt-4 text-gray-600">Loading news...</p>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No news articles available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#049fd9] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <button className="text-[#049fd9] font-semibold text-sm hover:text-[#00bceb] transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
