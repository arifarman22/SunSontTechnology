import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Solution } from '@/lib/api';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

export default function SolutionsManager() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Solution | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', image: '', features: [] as string[], benefits: [] as string[] });
  const [newFeature, setNewFeature] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchSolutions = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/solutions`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSolutions(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching solutions:', error);
      setSolutions([]);
    }
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      setFormData(prev => ({ ...prev, image: `https://www.sunson-tech.com${data.url}` }));
    } catch (error) {
      alert('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editing ? `${API_BASE_URL}/solutions/${editing.id}` : `${API_BASE_URL}/solutions`;
    const method = editing ? 'PUT' : 'POST';

    const payload = formData;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    setOpen(false);
    setEditing(null);
    setFormData({ title: '', description: '', image: '', features: [], benefits: [] });
    fetchSolutions();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this solution?')) return;
    
    const token = localStorage.getItem('token');
    await fetch(`${API_BASE_URL}/solutions/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    fetchSolutions();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Solutions</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); setFormData({ title: '', description: '', image: '', features: [], benefits: [] }); }}>
              Add Solution
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit' : 'Add'} Solution</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              <Textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
              <div>
                <label className="block text-sm font-medium mb-2">Upload Image</label>
                <Input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                {uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
                {formData.image && <img src={formData.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />}
              </div>
              <Input placeholder="Or paste image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
              
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
                <label className="text-sm font-medium">Benefits</label>
                <div className="flex gap-2">
                  <Input placeholder="Add benefit" value={newBenefit} onChange={(e) => setNewBenefit(e.target.value)} />
                  <Button type="button" onClick={() => { if(newBenefit) { setFormData({...formData, benefits: [...formData.benefits, newBenefit]}); setNewBenefit(''); } }}>Add</Button>
                </div>
                <div className="space-y-1">
                  {formData.benefits.map((b, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
                      <span className="text-sm">{b}</span>
                      <Button type="button" size="sm" variant="ghost" onClick={() => setFormData({...formData, benefits: formData.benefits.filter((_, idx) => idx !== i)})}>×</Button>
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
        {solutions.map((solution) => (
          <Card key={solution.id}>
            <CardHeader>
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{solution.description}</p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => { setEditing(solution); setFormData({ title: solution.title, description: solution.description, image: solution.image, features: solution.features || [], benefits: solution.benefits || [] }); setOpen(true); }}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(solution.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
