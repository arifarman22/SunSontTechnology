import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Product } from '@/lib/api';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

export default function ProductsManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', category: '', image: '', features: [] as string[], specifications: {} as Record<string, string> });
  const [newFeature, setNewFeature] = useState('');
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editingProduct 
      ? `${API_BASE_URL}/products/${editingProduct.id}`
      : `${API_BASE_URL}/products`;
    
    const method = editingProduct ? 'PUT' : 'POST';

    const payload = formData;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error('API Error:', error);
        alert(`Error: ${error.message || 'Failed to save product'}`);
        return;
      }

      setOpen(false);
      setEditingProduct(null);
      setFormData({ title: '', description: '', category: '', image: '', features: [], specifications: {} });
      fetchProducts();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save product. Check console for details.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    
    const token = localStorage.getItem('token');
    await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      image: product.image,
      features: product.features || [],
      specifications: product.specifications || {},
    });
    setOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditingProduct(null); setFormData({ title: '', description: '', category: '', image: '', features: [], specifications: {} }); }}>
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{editingProduct ? 'Edit' : 'Add New'} Product</DialogTitle>
              <p className="text-sm text-gray-500">Fill in the product details below. All fields marked with * are required.</p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-3">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Title *</label>
                    <Input 
                      placeholder="e.g., ATM Cash Deposit Machine" 
                      value={formData.title} 
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                      required 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                    <Textarea 
                      placeholder="Provide a detailed description of the product, its purpose, and main capabilities..." 
                      value={formData.description} 
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                      required 
                      rows={4}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">This will be displayed on the product listing and details page</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
                      value={formData.category} 
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                      required
                    >
                      <option value="">-- Select a Category --</option>
                      <option value="Banking">Banking Solutions</option>
                      <option value="Healthcare">Healthcare Kiosks</option>
                      <option value="EPP">EPP Security</option>
                      <option value="Retail">Retail Solutions</option>
                      <option value="Payments">Payment Systems</option>
                      <option value="Other">Other Products</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Products will be grouped by category on the website</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-3">Product Image</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                  <Input 
                    placeholder="https://example.com/product-image.jpg" 
                    value={formData.image} 
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
                    required 
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">Use a high-quality image (recommended: 800x800px or larger)</p>
                  {formData.image && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-700 mb-2">Preview:</p>
                      <img src={formData.image} alt="Preview" className="w-40 h-40 object-cover rounded-lg border-2 border-gray-200" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Key Features</h3>
                <p className="text-xs text-gray-600 mb-3">Add the main features and capabilities of this product (e.g., "Real-time processing", "Multi-currency support")</p>
                <div className="flex gap-2 mb-3">
                  <Input 
                    placeholder="Enter a feature" 
                    value={newFeature} 
                    onChange={(e) => setNewFeature(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if(newFeature) { 
                          setFormData({...formData, features: [...formData.features, newFeature]}); 
                          setNewFeature(''); 
                        }
                      }
                    }}
                    className="flex-1"
                  />
                  <Button type="button" onClick={() => { if(newFeature) { setFormData({...formData, features: [...formData.features, newFeature]}); setNewFeature(''); } }}>Add</Button>
                </div>
                <div className="space-y-2">
                  {formData.features.length === 0 ? (
                    <p className="text-sm text-gray-500 italic">No features added yet</p>
                  ) : (
                    formData.features.map((f, i) => (
                      <div key={i} className="flex justify-between items-center bg-white px-3 py-2 rounded border border-green-200">
                        <span className="text-sm">{f}</span>
                        <Button type="button" size="sm" variant="ghost" onClick={() => setFormData({...formData, features: formData.features.filter((_, idx) => idx !== i)})}>×</Button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">Technical Specifications</h3>
                <p className="text-xs text-gray-600 mb-3">Add technical details as key-value pairs (e.g., "Platform" → "Web & Mobile", "Connectivity" → "WiFi, Ethernet")</p>
                <div className="flex gap-2 mb-3">
                  <Input 
                    placeholder="Specification name" 
                    value={newSpecKey} 
                    onChange={(e) => setNewSpecKey(e.target.value)}
                    className="flex-1"
                  />
                  <Input 
                    placeholder="Value" 
                    value={newSpecValue} 
                    onChange={(e) => setNewSpecValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if(newSpecKey && newSpecValue) { 
                          setFormData({...formData, specifications: {...formData.specifications, [newSpecKey]: newSpecValue}}); 
                          setNewSpecKey(''); 
                          setNewSpecValue(''); 
                        }
                      }
                    }}
                    className="flex-1"
                  />
                  <Button type="button" onClick={() => { if(newSpecKey && newSpecValue) { setFormData({...formData, specifications: {...formData.specifications, [newSpecKey]: newSpecValue}}); setNewSpecKey(''); setNewSpecValue(''); } }}>Add</Button>
                </div>
                <div className="space-y-2">
                  {Object.keys(formData.specifications).length === 0 ? (
                    <p className="text-sm text-gray-500 italic">No specifications added yet</p>
                  ) : (
                    Object.entries(formData.specifications).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center bg-white px-3 py-2 rounded border border-orange-200">
                        <span className="text-sm"><strong>{k}:</strong> {v}</span>
                        <Button type="button" size="sm" variant="ghost" onClick={() => { const {[k]: _, ...rest} = formData.specifications; setFormData({...formData, specifications: rest}); }}>×</Button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">Cancel</Button>
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">Save Product</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-xs text-gray-500 mb-4">Category: <span className="font-semibold">{product.category}</span></p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => handleEdit(product)}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
