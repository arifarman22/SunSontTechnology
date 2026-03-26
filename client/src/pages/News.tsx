import { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { getNewsPosts, type NewsPost } from "@/lib/api";
import { User, Clock, ArrowRight } from "lucide-react";

function openArticle(post: NewsPost) {
  const w = window.open('', '_blank');
  if (w) {
    w.document.write(`<!DOCTYPE html><html><head><title>${post.title}</title><style>body{font-family:Georgia,'Times New Roman',serif;max-width:780px;margin:0 auto;padding:40px 20px;color:#1a1a1a;line-height:1.8}h1{font-size:2.4rem;line-height:1.3;margin-bottom:8px}img{width:100%;border-radius:4px;margin-bottom:28px}.meta{color:#666;font-size:14px;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid #e5e5e5;font-family:system-ui,sans-serif}.content{font-size:18px;white-space:pre-line}</style></head><body><img src="${post.image}" alt="${post.title}"/><h1>${post.title}</h1><p class="meta">By ${post.author} · ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p><div class="content">${post.content}</div></body></html>`);
    w.document.close();
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function News() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsPosts()
      .then(data => setNews(Array.isArray(data) && data.length > 0 ? data : []))
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

  const featured = news[0];
  const rest = news.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-900 py-24 mt-[104px]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-600">Latest Updates</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl text-gray-700">
              Stay updated with the latest news, product launches, and industry insights from Sunson Technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
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
            <>
              {/* Featured Article */}
              {featured && (
                <article
                  className="mb-16 cursor-pointer group"
                  onClick={() => openArticle(featured)}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="inline-block bg-[#049fd9] text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                        Featured
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#049fd9] transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6 line-clamp-4 leading-relaxed">
                        {featured.content}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4" />
                          <span>{featured.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{timeAgo(featured.date)}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[#049fd9] font-semibold group-hover:gap-3 transition-all">
                        Read Full Article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* Divider */}
              {rest.length > 0 && (
                <div className="border-t border-gray-200 mb-12 pt-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">More Articles</h3>
                </div>
              )}

              {/* Articles List */}
              <div className="space-y-0 divide-y divide-gray-200">
                {rest.map((post) => (
                  <article
                    key={post.id}
                    className="py-8 flex gap-6 cursor-pointer group"
                    onClick={() => openArticle(post)}
                  >
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-48 h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {timeAgo(post.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {post.content}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#049fd9] text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
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
