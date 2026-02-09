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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editing ? `${API_BASE_URL}/solutions/${editing.id}` : `${API_BASE_URL}/solutions`;
    const method = editing ? 'PUT' : 'POST';

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
        alert(`Error: ${error.message || 'Failed to save solution'}`);
        return;
      }

      setOpen(false);
      setEditing(null);
      setFormData({ title: '', description: '', image: '', features: [], benefits: [] });
      fetchSolutions();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to save solution');
    }
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

      <div className="grid gap-6">
        {solutions.map((solution) => (
          <Card key={solution.id} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-500">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Solution
                  </span>
                </div>
                {solution.image && (
                  <img src={solution.image} alt={solution.title} className="w-20 h-20 object-cover rounded-lg ml-4" />
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{solution.description}</p>
              
              {solution.features && solution.features.length > 0 && (
                <div className="mb-4 pb-4 border-b">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 3 && (
                      <span className="text-xs text-purple-600 font-medium">+{solution.features.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}
              
              {solution.benefits && solution.benefits.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                    {solution.benefits.length > 3 && (
                      <span className="text-xs text-purple-600 font-medium">+{solution.benefits.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" onClick={() => { setEditing(solution); setFormData({ title: solution.title, description: solution.description, image: solution.image, features: solution.features || [], benefits: solution.benefits || [] }); setOpen(true); }} className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Edit Solution
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(solution.id)} className="border-red-300 text-red-600 hover:bg-red-50">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
