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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingProduct ? 'Edit' : 'Add'} Product</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              <Textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                value={formData.category} 
                onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                required
              >
                <option value="">Select Category</option>
                <option value="Banking">Banking</option>
                <option value="Healthcare">Healthcare</option>
                <option value="EPP">EPP</option>
                <option value="Retail">Retail</option>
                <option value="Payments">Payments</option>
                <option value="Other">Other</option>
              </select>
              <Input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
              {formData.image && <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded" />}
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Features</label>
                <div className="flex gap-2">
                  <Input placeholder="Add feature" value={newFeature} onChange={(e) => setNewFeature(e.target.value)} />
                  <Button type="button" onClick={() => { if(newFeature) { setFormData({...formData, features: [...formData.features, newFeature]}); setNewFeature(''); } }}>Add</Button>
                </div>
                <div className="space-y-1">
                  {formData.features.map((f, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
                      <span className="text-sm">{f}</span>
                      <Button type="button" size="sm" variant="ghost" onClick={() => setFormData({...formData, features: formData.features.filter((_, idx) => idx !== i)})}>×</Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Specifications</label>
                <div className="flex gap-2">
                  <Input placeholder="Key" value={newSpecKey} onChange={(e) => setNewSpecKey(e.target.value)} />
                  <Input placeholder="Value" value={newSpecValue} onChange={(e) => setNewSpecValue(e.target.value)} />
                  <Button type="button" onClick={() => { if(newSpecKey && newSpecValue) { setFormData({...formData, specifications: {...formData.specifications, [newSpecKey]: newSpecValue}}); setNewSpecKey(''); setNewSpecValue(''); } }}>Add</Button>
                </div>
                <div className="space-y-1">
                  {Object.entries(formData.specifications).map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
                      <span className="text-sm"><strong>{k}:</strong> {v}</span>
                      <Button type="button" size="sm" variant="ghost" onClick={() => { const {[k]: _, ...rest} = formData.specifications; setFormData({...formData, specifications: rest}); }}>×</Button>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full">Save</Button>
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
