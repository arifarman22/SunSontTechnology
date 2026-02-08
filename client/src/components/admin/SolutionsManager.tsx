import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Solution } from '@/lib/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://sunsontechnology-backend.onrender.com/api';

export default function SolutionsManager() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Solution | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });

  const fetchSolutions = async () => {
    const res = await fetch(`${API_BASE_URL}/solutions`);
    const data = await res.json();
    setSolutions(data);
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editing ? `${API_BASE_URL}/solutions/${editing.id}` : `${API_BASE_URL}/solutions`;
    const method = editing ? 'PUT' : 'POST';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    setOpen(false);
    setEditing(null);
    setFormData({ title: '', description: '', image: '' });
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
            <Button onClick={() => { setEditing(null); setFormData({ title: '', description: '', image: '' }); }}>
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
                <Button size="sm" onClick={() => { setEditing(solution); setFormData({ title: solution.title, description: solution.description, image: solution.image }); setOpen(true); }}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(solution.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
