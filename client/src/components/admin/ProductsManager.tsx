import { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Package, 
  Plus, 
  Search, 
  FilterX, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  LayoutGrid, 
  List, 
  X, 
  Tag, 
  ChevronDown, 
  ChevronUp,
  SlidersHorizontal,
  Building2,
  Heart,
  Shield,
  ShoppingCart,
  CreditCard,
  Train,
  CheckCircle2,
  Layers
} from 'lucide-react';
import type { Product } from '@/lib/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const subcategories: Record<string, string[]> = {
  Banking: ['Cash Deposit Machine', 'Cash Dispenser ATM', 'Smart Teller Machine', 'Currency Exchange Kiosk'],
  Healthcare: ['Health Screening Kiosk', 'Hospital Check-in Kiosk', 'Mobile Charging Station', 'Hotel Check-in Kiosk'],
  EPP: ['PCI Approved EPP', 'Full Metal Keyboard', 'NON PCI Pinpad'],
  Retail: ['Self-Service Kiosk', 'Information Kiosk', 'Digital Signage'],
  Payments: ['Bitcoin Payment Kiosk', 'Cash Payment Kiosk', 'Wall Mount Payment Kiosk', 'Cashless Payment Kiosk'],
  Transportation: ['Ticket Vending Kiosk', 'Card Dispenser Kiosk', 'Card Top-up Kiosk', 'Parking Payment Kiosk'],
  Information: ['Information Kiosk', 'Digital Signage', 'Way Finding Solutions', 'Queuing System'],
  Other: ['Custom Solution'],
};

export const categoryThemeMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  Banking: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-800' },
  Healthcare: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-800' },
  EPP: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-800' },
  Retail: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-800' },
  Payments: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-800' },
  Transportation: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-800' },
  Information: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-800' },
  Other: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', badge: 'bg-gray-100 text-gray-800' },
};

export interface ProductsManagerProps {
  filterCategory?: string | null;
  filterSubcategory?: string | null;
  onClearFilter?: () => void;
  onProductsChange?: (products: Product[]) => void;
}

export default function ProductsManager({
  filterCategory,
  filterSubcategory,
  onClearFilter,
  onProductsChange,
}: ProductsManagerProps = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeDialogTab, setActiveDialogTab] = useState<'info' | 'media' | 'features' | 'specs'>('info');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'title-asc' | 'title-desc' | 'category'>('title-asc');

  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    category: '', 
    subcategory: '', 
    image: '', 
    features: [] as string[], 
    specifications: {} as Record<string, string> 
  });
  
  const [newFeature, setNewFeature] = useState('');
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/products`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      const list = Array.isArray(data) ? data : [];
      setProducts(list);
      onProductsChange?.(list);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filtered & Sorted Products calculation
  const displayedProducts = useMemo(() => {
    let result = products.filter((product) => {
      // 1. Sidebar Category Filter
      if (filterCategory && filterCategory !== 'all') {
        const pCat = product.category?.trim().toLowerCase();
        const fCat = filterCategory.trim().toLowerCase();
        if (pCat !== fCat) {
          if (!((fCat === 'epp' || fCat === 'security') && (pCat === 'epp' || pCat === 'security'))) {
            return false;
          }
        }
      }

      // 2. Sidebar Subcategory Filter
      if (filterSubcategory && filterSubcategory !== 'all') {
        const pSub = ((product as any).subcategory || '').trim().toLowerCase();
        const fSub = filterSubcategory.trim().toLowerCase();
        if (pSub !== fSub) return false;
      }

      // 3. Search Bar Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = product.title?.toLowerCase().includes(q);
        const inDesc = product.description?.toLowerCase().includes(q);
        const inCat = product.category?.toLowerCase().includes(q);
        const inSub = ((product as any).subcategory || '').toLowerCase().includes(q);
        const inFeatures = (product.features || []).some(f => f.toLowerCase().includes(q));
        if (!inTitle && !inDesc && !inCat && !inSub && !inFeatures) return false;
      }

      return true;
    });

    // Sort products
    result.sort((a, b) => {
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      if (sortBy === 'category') return (a.category || '').localeCompare(b.category || '');
      return 0;
    });

    return result;
  }, [products, filterCategory, filterSubcategory, searchQuery, sortBy]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editingProduct 
      ? `${API_BASE_URL}/products/${editingProduct.id}`
      : `${API_BASE_URL}/products`;
    
    const method = editingProduct ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(`Error: ${error.message || 'Failed to save product'}`);
        return;
      }

      setOpen(false);
      setEditingProduct(null);
      setFormData({ title: '', description: '', category: '', subcategory: '', image: '', features: [], specifications: {} });
      fetchProducts();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save product. Please check console for details.');
    }
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      setDeleteConfirmId(null);
      fetchProducts();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete product.');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setActiveDialogTab('info');
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      subcategory: (product as any).subcategory || '',
      image: product.image,
      features: product.features || [],
      specifications: product.specifications || {},
    });
    setOpen(true);
  };

  const openAddDialog = () => {
    setEditingProduct(null);
    setActiveDialogTab('info');
    setFormData({
      title: '',
      description: '',
      category: filterCategory || 'Banking',
      subcategory: filterSubcategory || (filterCategory && subcategories[filterCategory]?.[0]) || 'Cash Deposit Machine',
      image: '',
      features: [],
      specifications: {}
    });
    setOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Stats Header */}
      <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0369a1] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-10">
          <Package className="w-64 h-64" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#049fd9]/30 text-[#38bdf8] border border-[#049fd9]/40">
                Catalog Manager
              </span>
              {(filterCategory || filterSubcategory) && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Filtered View
                </span>
              )}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              {filterSubcategory 
                ? filterSubcategory 
                : filterCategory 
                  ? `${filterCategory} Solutions` 
                  : 'Products & Equipment'}
            </h1>
            <p className="text-white/70 text-sm mt-1 max-w-xl">
              Manage equipment listings, upload specifications, assign subcategories, and customize hardware features.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={openAddDialog}
              className="bg-[#049fd9] hover:bg-[#00bceb] text-white shadow-md font-semibold px-5 py-2.5 rounded-xl gap-2 transition-all transform hover:scale-[1.02]"
            >
              <Plus className="w-4 h-4" />
              Add New Product
            </Button>
          </div>
        </div>

        {/* Dynamic Category Quick Badges */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-white/80">
          <span className="font-semibold text-white/50 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" /> Fast Jump:
          </span>
          <button
            onClick={onClearFilter}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              !filterCategory 
                ? 'bg-white text-gray-900 font-bold shadow' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            All ({products.length})
          </button>
          {Object.keys(subcategories).map((cat) => {
            const count = products.filter(p => p.category?.toLowerCase() === cat.toLowerCase()).length;
            const isSelected = filterCategory?.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => {
                  if (isSelected && onClearFilter) onClearFilter();
                  else if (filterCategory !== cat && onClearFilter) {
                    onClearFilter();
                  }
                }}
                className={`px-3 py-1 rounded-full font-medium transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#049fd9] text-white font-bold shadow'
                    : 'bg-white/10 hover:bg-white/20 text-white/90'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter / Search Control Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Field */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input 
            type="text"
            placeholder="Search by title, specs, subcategory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-9 bg-gray-50/80 border-gray-200 focus:bg-white rounded-xl text-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View & Sort Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          {/* Active Filter Pills */}
          {(filterCategory || filterSubcategory) && (
            <div className="flex items-center gap-1.5 bg-blue-50 text-[#049fd9] px-3 py-1.5 rounded-xl border border-blue-100 text-xs font-medium">
              <span className="font-semibold">{filterCategory}</span>
              {filterSubcategory && <span>&gt; {filterSubcategory}</span>}
              {onClearFilter && (
                <button onClick={onClearFilter} className="ml-1 hover:text-blue-900">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-700 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="title-asc">Name (A-Z)</option>
              <option value="title-desc">Name (Z-A)</option>
              <option value="category">Category</option>
            </select>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center border border-gray-200 rounded-xl p-0.5 bg-gray-50">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white shadow text-[#049fd9]' 
                  : 'text-gray-400 hover:text-gray-700'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'table' 
                  ? 'bg-white shadow text-[#049fd9]' 
                  : 'text-gray-400 hover:text-gray-700'
              }`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center shadow-sm">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-[#049fd9] mb-3"></div>
          <p className="text-gray-500 text-sm">Loading product catalog...</p>
        </div>
      ) : displayedProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center shadow-sm">
          <div className="w-16 h-16 bg-blue-50 text-[#049fd9] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No products found</h3>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            {searchQuery 
              ? `No products matched your search "${searchQuery}".`
              : filterSubcategory 
                ? `No products currently listed under "${filterCategory} > ${filterSubcategory}".`
                : 'No products are currently found in this section.'}
          </p>
          <div className="flex gap-3 justify-center">
            {onClearFilter && (
              <Button variant="outline" onClick={onClearFilter} className="rounded-xl">
                Reset All Filters
              </Button>
            )}
            <Button onClick={openAddDialog} className="bg-[#049fd9] hover:bg-[#00bceb] text-white rounded-xl gap-2 font-semibold">
              <Plus className="w-4 h-4" />
              Add Product Here
            </Button>
          </div>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedProducts.map((product) => {
            const theme = categoryThemeMap[product.category] || categoryThemeMap.Other;
            const isExpanded = expandedCardId === product.id;
            const hasSpecs = product.specifications && Object.keys(product.specifications).length > 0;
            const hasFeatures = product.features && product.features.length > 0;

            return (
              <Card 
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-200/80 hover:border-[#049fd9]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image & Header Overlay */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Category Pills on Top */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${theme.badge}`}>
                      {product.category}
                    </span>
                    {(product as any).subcategory && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 shadow-sm backdrop-blur-sm">
                        {(product as any).subcategory}
                      </span>
                    )}
                  </div>

                  {/* Quick Preview Link Icon */}
                  <a
                    href={`/products/${product.category?.toLowerCase() || 'banking'}/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-sm backdrop-blur-sm transition-all"
                    title="View live product page"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Product Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md line-clamp-1">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Features Chips */}
                    {hasFeatures && (
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1.5">
                          Key Capabilities
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.features?.slice(0, 3).map((feat, i) => (
                            <span 
                              key={i} 
                              className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 font-medium truncate max-w-[200px]"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                          {(product.features?.length || 0) > 3 && (
                            <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-blue-50 text-[#049fd9] font-medium">
                              +{((product.features?.length || 0) - 3)}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Expandable Technical Specs Drawer */}
                    {hasSpecs && (
                      <div className="mb-4">
                        <button
                          onClick={() => setExpandedCardId(isExpanded ? null : product.id)}
                          className="w-full flex items-center justify-between text-xs font-semibold text-gray-500 hover:text-gray-800 py-1 border-t border-gray-100 transition-colors"
                        >
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3 text-[#049fd9]" />
                            {isExpanded ? 'Hide Specifications' : `View Specifications (${Object.keys(product.specifications || {}).length})`}
                          </span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <div className="mt-2 bg-gray-50 rounded-xl p-3 space-y-1.5 text-xs animate-in fade-in duration-200 border border-gray-100">
                            {Object.entries(product.specifications || {}).map(([key, val]) => (
                              <div key={key} className="flex justify-between items-start gap-2 border-b border-gray-200/50 pb-1 last:border-0 last:pb-0">
                                <span className="font-semibold text-gray-600 truncate">{key}</span>
                                <span className="text-gray-800 text-right truncate font-medium">{val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-2 mt-auto">
                    <Button 
                      size="sm" 
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-gray-100 hover:bg-[#049fd9] text-gray-700 hover:text-white rounded-xl text-xs font-semibold h-8 transition-colors gap-1.5"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Edit Details
                    </Button>

                    {deleteConfirmId === product.id ? (
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(product.id)}
                          className="h-8 text-xs px-2.5 rounded-xl font-semibold"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setDeleteConfirmId(null)}
                          className="h-8 text-xs px-2 rounded-xl"
                        >
                          ✕
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setDeleteConfirmId(product.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2.5 rounded-xl transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        /* TABLE VIEW */
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Subcategory</th>
                  <th className="py-3 px-4">Features</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {displayedProducts.map((product) => {
                  const theme = categoryThemeMap[product.category] || categoryThemeMap.Other;
                  return (
                    <tr key={product.id} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-11 h-11 rounded-lg object-cover border border-gray-200 flex-shrink-0" 
                          />
                          <div>
                            <p className="font-bold text-gray-900 text-sm line-clamp-1">{product.title}</p>
                            <p className="text-gray-400 font-mono text-[10px]">{product.id.slice(0, 13)}...</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] ${theme.badge}`}>
                          {product.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700 font-medium">
                        {(product as any).subcategory || '—'}
                      </td>
                      <td className="py-3 px-4 text-gray-500">
                        {product.features?.length || 0} features
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`/products/${product.category?.toLowerCase() || 'banking'}/${product.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                            title="Preview live"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(product)}
                            className="h-8 px-2 text-blue-600 hover:bg-blue-50"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDelete(product.id)}
                            className="h-8 px-2 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modernized Add / Edit Product Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 gap-0 border-0 shadow-2xl">
          {/* Modal Header with Gradient */}
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-6 text-white rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#38bdf8]">
                  Product Catalog Form
                </span>
                <DialogTitle className="text-2xl font-black text-white mt-0.5">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </DialogTitle>
                <p className="text-white/60 text-xs mt-1">
                  Configure titles, categories, images, and technical specifications.
                </p>
              </div>
            </div>

            {/* Modal Tabs Bar */}
            <div className="flex items-center gap-2 mt-5 border-t border-white/10 pt-3">
              {[
                { id: 'info', label: '1. Basic Info' },
                { id: 'media', label: '2. Product Image' },
                { id: 'features', label: '3. Features' },
                { id: 'specs', label: '4. Technical Specs' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDialogTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeDialogTab === tab.id
                      ? 'bg-[#049fd9] text-white shadow'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Body Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-[#f8f9fb]">
            {/* TAB 1: BASIC INFO */}
            {activeDialogTab === 'info' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Product Title *
                    </label>
                    <Input 
                      placeholder="e.g. SFT20 D10 – Smart Cash Deposit Machine" 
                      value={formData.title} 
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                      required 
                      className="rounded-xl border-gray-300 focus:border-blue-500 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Category *
                      </label>
                      <select 
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                        value={formData.category} 
                        onChange={(e) => {
                          const newCat = e.target.value;
                          setFormData({ 
                            ...formData, 
                            category: newCat, 
                            subcategory: subcategories[newCat]?.[0] || '' 
                          });
                        }} 
                        required
                      >
                        <option value="">-- Choose Category --</option>
                        {Object.keys(subcategories).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Subcategory *
                      </label>
                      <select
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white"
                        value={formData.subcategory}
                        onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                        required
                      >
                        <option value="">-- Choose Subcategory --</option>
                        {formData.category && subcategories[formData.category] && (
                          subcategories[formData.category].map((sub) => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Product Overview / Description *
                    </label>
                    <Textarea 
                      placeholder="Provide a detailed hardware description, target application, and deployment environments..." 
                      value={formData.description} 
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                      required 
                      rows={4}
                      className="rounded-xl border-gray-300 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: MEDIA & IMAGE */}
            {activeDialogTab === 'media' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Direct Image URL *
                    </label>
                    <Input 
                      placeholder="https://images.unsplash.com/... or cloud image url" 
                      value={formData.image} 
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
                      required 
                      className="rounded-xl border-gray-300 font-mono text-xs"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Recommended: High resolution 800x800px or 1200x800px with white or transparent background.
                    </p>
                  </div>

                  {formData.image && (
                    <div className="pt-2">
                      <p className="text-xs font-bold text-gray-700 uppercase mb-2">Live Rendering Preview:</p>
                      <div className="w-56 aspect-square rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 p-2">
                        <img 
                          src={formData.image} 
                          alt="Preview" 
                          className="w-full h-full object-contain rounded-xl"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800';
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: FEATURES */}
            {activeDialogTab === 'features' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add key feature (e.g. 'High security cash vault', 'PCI 5.x certified')" 
                      value={newFeature} 
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          if (newFeature.trim()) { 
                            setFormData({ ...formData, features: [...formData.features, newFeature.trim()] }); 
                            setNewFeature(''); 
                          }
                        }
                      }}
                      className="rounded-xl"
                    />
                    <Button 
                      type="button" 
                      onClick={() => { 
                        if (newFeature.trim()) { 
                          setFormData({ ...formData, features: [...formData.features, newFeature.trim()] }); 
                          setNewFeature(''); 
                        } 
                      }}
                      className="bg-[#049fd9] hover:bg-[#00bceb] text-white rounded-xl px-4"
                    >
                      Add
                    </Button>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Features List:</p>
                    {formData.features.length === 0 ? (
                      <p className="text-xs text-gray-400 italic">No features added yet. Type a feature above and press Enter or Add.</p>
                    ) : (
                      formData.features.map((f, i) => (
                        <div key={i} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 text-xs">
                          <span className="font-medium text-gray-800 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {f}
                          </span>
                          <button 
                            type="button" 
                            onClick={() => setFormData({ ...formData, features: formData.features.filter((_, idx) => idx !== i) })}
                            className="text-gray-400 hover:text-red-500 font-bold p-1"
                          >
                            ✕
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: TECHNICAL SPECS */}
            {activeDialogTab === 'specs' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input 
                      placeholder="Spec Name (e.g. Dimensions)" 
                      value={newSpecKey} 
                      onChange={(e) => setNewSpecKey(e.target.value)}
                      className="rounded-xl text-xs"
                    />
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Value (e.g. 450 x 500 x 1650 mm)" 
                        value={newSpecValue} 
                        onChange={(e) => setNewSpecValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (newSpecKey.trim() && newSpecValue.trim()) { 
                              setFormData({
                                ...formData, 
                                specifications: { ...formData.specifications, [newSpecKey.trim()]: newSpecValue.trim() }
                              }); 
                              setNewSpecKey(''); 
                              setNewSpecValue(''); 
                            }
                          }
                        }}
                        className="rounded-xl text-xs flex-1"
                      />
                      <Button 
                        type="button" 
                        onClick={() => { 
                          if (newSpecKey.trim() && newSpecValue.trim()) { 
                            setFormData({
                              ...formData, 
                              specifications: { ...formData.specifications, [newSpecKey.trim()]: newSpecValue.trim() }
                            }); 
                            setNewSpecKey(''); 
                            setNewSpecValue(''); 
                          } 
                        }}
                        className="bg-[#049fd9] hover:bg-[#00bceb] text-white rounded-xl px-3"
                      >
                        Add
                      </Button>
                    </div>
                  </div>

                  {/* Preset common specs pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-gray-400 uppercase font-bold mr-1">Quick Fields:</span>
                    {['Display', 'Touchscreen', 'Dimensions', 'Power Supply', 'Operating System', 'Security Certification'].map(preset => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setNewSpecKey(preset)}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-blue-50 text-[#049fd9] hover:bg-blue-100 font-medium transition-colors"
                      >
                        + {preset}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-1.5 pt-3">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Specifications Table:</p>
                    {Object.keys(formData.specifications).length === 0 ? (
                      <p className="text-xs text-gray-400 italic">No specifications added yet.</p>
                    ) : (
                      Object.entries(formData.specifications).map(([k, v]) => (
                        <div key={k} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 text-xs">
                          <span className="font-bold text-gray-700">{k}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-900 font-medium">{v}</span>
                            <button 
                              type="button" 
                              onClick={() => { 
                                const { [k]: _, ...rest } = formData.specifications; 
                                setFormData({ ...formData, specifications: rest }); 
                              }}
                              className="text-gray-400 hover:text-red-500 font-bold p-1"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)}
                className="rounded-xl px-5"
              >
                Cancel
              </Button>
              <div className="flex items-center gap-2">
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 font-bold shadow-md"
                >
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
