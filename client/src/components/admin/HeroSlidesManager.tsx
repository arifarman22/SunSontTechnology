import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  ctaLink: string;
  theme: string;
}

export default function HeroSlidesManager() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<HeroSlide | null>(null);
  const [formData, setFormData] = useState({
    title: '', subtitle: '', description: '', image: '', cta: '', ctaLink: '', theme: 'dark'
  });

  const fetchSlides = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/hero-slides`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSlides(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching hero slides:', error);
      setSlides([]);
    }
  };

  useEffect(() => { fetchSlides(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const url = editing ? `${API_BASE_URL}/hero-slides/${editing.id}` : `${API_BASE_URL}/hero-slides`;
    const method = editing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const error = await res.json();
        alert(`Error: ${error.message || 'Failed to save'}`);
        return;
      }
      setOpen(false);
      setEditing(null);
      resetForm();
      fetchSlides();
    } catch (error) {
      alert('Failed to save hero slide');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this hero slide?')) return;
    const token = localStorage.getItem('token');
    await fetch(`${API_BASE_URL}/hero-slides/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    fetchSlides();
  };

  const resetForm = () => {
    setFormData({ title: '', subtitle: '', description: '', image: '', cta: '', ctaLink: '', theme: 'dark' });
  };

  const openEdit = (slide: HeroSlide) => {
    setEditing(slide);
    setFormData({
      title: slide.title, subtitle: slide.subtitle, description: slide.description,
      image: slide.image, cta: slide.cta, ctaLink: slide.ctaLink || '', theme: slide.theme
    });
    setOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Hero Slides</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); resetForm(); }}>Add Slide</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit' : 'Add'} Hero Slide</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              <Input placeholder="Subtitle" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} required />
              <Textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
              <Input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
              {formData.image && <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded" />}
              <Input placeholder="Button Text (e.g. Learn More)" value={formData.cta} onChange={(e) => setFormData({ ...formData, cta: e.target.value })} required />
              <Input placeholder="Button Link (e.g. /products/banking)" value={formData.ctaLink} onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })} required />
              <div>
                <label className="text-sm font-medium mb-1 block">Theme</label>
                <Select value={formData.theme} onValueChange={(val) => setFormData({ ...formData, theme: val })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark (for light images)</SelectItem>
                    <SelectItem value="light">Light (for dark images)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {slides.length === 0 && (
        <p className="text-gray-500 text-sm">No hero slides yet. Default slides will be shown on the homepage.</p>
      )}

      <div className="grid gap-4">
        {slides.map((slide) => (
          <Card key={slide.id}>
            <CardContent className="p-4 flex gap-4 items-start">
              <img src={slide.image} alt={slide.title} className="w-40 h-24 object-cover rounded flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900">{slide.title}</h3>
                <p className="text-sm text-gray-500">{slide.subtitle}</p>
                <p className="text-xs text-gray-400 mt-1 truncate">{slide.description}</p>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{slide.theme}</span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">{slide.cta}</span>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button size="sm" onClick={() => openEdit(slide)}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(slide.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
