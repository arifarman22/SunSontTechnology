import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Mail, 
  ChevronRight, 
  Sparkles, 
  Layers,
  PhoneCall,
  Download,
  Share2
} from 'lucide-react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getProducts, type Product } from '@/lib/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function ProductDetails() {
  const [, params] = useRoute('/products/:category/:id');
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!params?.id) return;

    setLoading(true);
    // Fetch product details
    getProducts()
      .then(allProducts => {
        const found = allProducts.find(p => p.id === params.id);
        setProduct(found || null);

        if (found) {
          // Find related products in the same category
          const related = allProducts
            .filter(p => p.id !== found.id && p.category?.toLowerCase() === found.category?.toLowerCase())
            .slice(0, 3);
          setRelatedProducts(related);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load product details:', err);
        setLoading(false);
      });
  }, [params?.id, params?.category]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center pt-24">
          <div className="animate-spin rounded-full h-12 w-12 border-3 border-slate-200 border-t-[#049fd9]" />
          <p className="mt-4 text-sm font-medium text-slate-500">Loading product hardware specifications...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-24 px-6">
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md w-full">
            <h1 className="text-2xl font-bold text-slate-900 mb-3">Product Not Found</h1>
            <p className="text-sm text-slate-500 mb-6">The hardware model you are looking for may have been moved or updated.</p>
            <Link href={`/products/${params?.category || 'banking'}`}>
              <Button className="bg-[#049fd9] hover:bg-[#00bceb] text-white rounded-xl text-xs font-semibold px-6">
                Back to {params?.category || 'Products'}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const categoryPath = params?.category || product.category.toLowerCase();
  const subcategory = (product.subcategory || product.category).trim();

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
      <Navbar />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href={`/products/${categoryPath}`} className="hover:text-slate-900 capitalize transition-colors">
                {product.category}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#049fd9] font-semibold truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
            </nav>

            <Link href={`/products/${categoryPath}`}>
              <button className="flex items-center text-xs font-semibold text-slate-600 hover:text-[#049fd9] transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                Back to {product.category}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Product Showcase */}
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Product Image Viewer */}
            <div className="lg:col-span-6 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-100 p-8 md:p-14 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-200/80">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80';
                  }}
                />
              </div>

              {/* Share & Badge Buttons */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#049fd9]" />
                  {subcategory}
                </span>
              </div>

              <div className="absolute top-6 right-6">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs text-xs font-medium flex items-center gap-1.5 transition-all"
                  title="Share Product"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* Industrial Grade Trust Tag */}
              <div className="mt-8 flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Industrial Grade Reliability
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#049fd9]" />
                  Custom OEM/ODM
                </span>
              </div>
            </div>

            {/* Right: Product Details & Specs */}
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-[#049fd9] border border-sky-100 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-xs text-slate-400">&bull;</span>
                  <span className="text-xs text-slate-500 font-medium">
                    Model: {product.title.split(' ')[0]}
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                  {product.title}
                </h1>

                <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#049fd9]" />
                      Core Capabilities & Highlights
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Specifications Table */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#049fd9]" />
                      Technical Specifications
                    </h3>
                    <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs">
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <div 
                          key={key} 
                          className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                          }`}
                        >
                          <span className="font-semibold text-slate-700 capitalize sm:w-1/3 mb-1 sm:mb-0">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-slate-600 sm:w-2/3 sm:text-right font-medium">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <Link 
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="flex-1"
                >
                  <Button className="w-full bg-[#049fd9] hover:bg-[#00bceb] text-white font-semibold text-xs h-11 rounded-xl flex items-center justify-center gap-2 shadow-sm shadow-[#049fd9]/25">
                    <Mail className="w-4 h-4" />
                    <span>Request Quotation & Spec Sheet</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-11 px-5 rounded-xl border-slate-200 text-slate-700 font-semibold text-xs hover:border-[#049fd9]/40 hover:text-[#049fd9]"
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Talk to Engineering
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#049fd9]">Hardware Family</span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
                  More {product.category} Models
                </h2>
              </div>
              <Link href={`/products/${categoryPath}`}>
                <Button variant="ghost" className="text-xs text-[#049fd9] hover:text-[#00bceb] font-semibold">
                  View All &rarr;
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <div 
                  key={rel.id}
                  className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#049fd9]/40 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] bg-slate-50 rounded-xl p-4 mb-4 flex items-center justify-center">
                      <img 
                        src={rel.image} 
                        alt={rel.title}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-2 inline-block">
                      {rel.subcategory || rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#049fd9] transition-colors mb-2 line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {rel.description}
                    </p>
                  </div>
                  <Link href={`/products/${categoryPath}/${rel.id}`}>
                    <Button variant="outline" className="w-full text-xs font-semibold h-8 rounded-xl border-slate-200 hover:border-[#049fd9]/40 hover:text-[#049fd9]">
                      View Model Specs
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
