import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, X } from 'lucide-react';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchSlides = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/hero-slides`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setSlides(Array.isArray(data) ? data : []);
    } catch (error) {
      setSlides([]);
    }
  };

  useEffect(() => { fetchSlides(); }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;
      const MAX = 1024;

      if (width > MAX || height > MAX) {
        const ratio = Math.min(MAX / width, MAX / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d')!.drawImage(img, 0, 0, width, height);

      let quality = 0.5;
      let result = canvas.toDataURL('image/jpeg', quality);

      while (result.length > 500 * 1024 && quality > 0.1) {
        quality -= 0.1;
        result = canvas.toDataURL('image/jpeg', quality);
      }

      if (result.length > 1 * 1024 * 1024) {
        alert('Image is too large even after compression. Please use a smaller image.');
        return;
      }

      setFormData(prev => ({ ...prev, image: result }));
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) {
      alert('Please upload an image');
      return;
    }
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
    } catch {
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
    if (fileInputRef.current) fileInputRef.current.value = '';
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

              <div>
                <label className="text-sm font-medium mb-2 block">Banner Image</label>
                {formData.image ? (
                  <div className="relative">
                    <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded border" />
                    <button
                      type="button"
                      onClick={() => { setFormData({ ...formData, image: '' }); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-[#049fd9] transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Click to upload image</span>
                    <span className="text-xs text-gray-400 mt-1">JPG, PNG, GIF (max 5MB)</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/gif"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>


              <div>
                <label className="text-sm font-medium mb-1 block">Button Link URL</label>
                <Input placeholder="https://example.com or /products/banking" value={formData.ctaLink} onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })} />
                <p className="text-xs text-gray-400 mt-1">The banner button will redirect to this link</p>
              </div>

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
                  {slide.ctaLink && (
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded truncate max-w-[200px]">{slide.ctaLink}</span>
                  )}
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
