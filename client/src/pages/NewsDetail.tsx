import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, User, Calendar } from "lucide-react";

const API_BASE_URL = 'https://www.sunson-tech.com/api';

interface NewsPost {
  id: string;
  title: string;
  content: string;
  image: string;
  images?: string[];
  date: string;
  author: string;
}

export default function NewsDetail() {
  const [, params] = useRoute('/news/:id');
  const [post, setPost] = useState<NewsPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetch(`${API_BASE_URL}/news`)
        .then(r => r.json())
        .then(data => {
          const found = Array.isArray(data) ? data.find((p: NewsPost) => p.id === params.id) : null;
          setPost(found || null);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#049fd9]"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center pt-40">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <Link href="/news"><a className="text-[#049fd9] hover:underline">Back to News</a></Link>
          </div>
        </div>
      </div>
    );
  }

  const images: string[] = (post.images && Array.isArray(post.images) && post.images.length > 0)
    ? post.images
    : (post.image ? [post.image] : []);

  const paragraphs = post.content.split('\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[500px] mt-[104px]">
        <img src={images[0]} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link href="/news">
              <button className="flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to News
              </button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 mt-4 text-white/80 text-sm">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {para}
                </p>
              ))}
            </div>

            {/* Photo Gallery */}
            {images.length > 1 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {images.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`${post.title} - Photo ${i + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Share / Back */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
              <Link href="/news">
                <button className="flex items-center gap-2 text-[#049fd9] font-semibold hover:gap-3 transition-all">
                  <ArrowLeft className="h-4 w-4" /> Back to All News
                </button>
              </Link>
              <div className="text-sm text-gray-500">
                Published by {post.author}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
