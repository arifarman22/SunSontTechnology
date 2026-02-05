import { useState } from "react";
import { Link } from "wouter";
import { Building2, Heart, Shield, ShoppingCart, CreditCard, Grid3x3, ArrowRight } from "lucide-react";
import { productCategories, type Category, type ProductItem } from "@/data/megaMenuData";

const iconMap: Record<string, any> = {
  Building2,
  Heart,
  Shield,
  ShoppingCart,
  CreditCard,
  Grid3x3
};

interface MegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaDropdown({ isOpen, onClose }: MegaDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<Category>(productCategories[0]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Dropdown */}
      <div 
        className="absolute top-full left-0 right-0 bg-white shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        role="dialog"
        aria-label="Products menu"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Categories */}
            <aside className="w-64 flex-shrink-0" role="navigation" aria-label="Product categories">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Categories
              </h3>
              <nav className="space-y-1">
                {productCategories.map((category) => {
                  const Icon = iconMap[category.icon];
                  const isActive = activeCategory.id === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-[#049fd9] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#049fd9]'
                      }`}
                      aria-current={isActive ? 'true' : 'false'}
                      aria-label={`View ${category.name} products`}
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Right Content - Products */}
            <div className="flex-1 min-h-[400px] max-h-[500px] overflow-y-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeCategory.name} Solutions
                </h2>
                <p className="text-gray-600">
                  Explore our {activeCategory.name.toLowerCase()} products and solutions
                </p>
              </div>

              {/* Products Grid */}
              <div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300"
                key={activeCategory.id}
              >
                {activeCategory.products.map((product) => (
                  <Link 
                    key={product.id} 
                    href={product.link}
                    onClick={onClose}
                  >
                    <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#049fd9] transition-all duration-300 h-full cursor-pointer">
                      {/* Product Image */}
                      <div className="relative h-40 overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        {product.badge && (
                          <span className="absolute top-3 right-3 bg-[#049fd9] text-white text-xs font-semibold px-2 py-1 rounded">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#049fd9] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
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

              {/* View All Link */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href={`/products/${activeCategory.id}`} onClick={onClose}>
                  <button className="flex items-center gap-2 text-[#049fd9] font-semibold hover:gap-3 transition-all">
                    <span>View all {activeCategory.name} products</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
