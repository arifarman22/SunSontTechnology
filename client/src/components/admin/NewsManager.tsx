import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Upload, X } from 'lucide-react';
import type { NewsPost } from '@/lib/api';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
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
      while (result.length > 400 * 1024 && quality > 0.1) {
        quality -= 0.1;
        result = canvas.toDataURL('image/jpeg', quality);
      }
      URL.revokeObjectURL(img.src);
      resolve(result);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export default function NewsManager() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<NewsPost | null>(null);
  const [formData, setFormData] = useState({
    title: '', content: '', image: '', images: [] as string[], author: '', date: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/news`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setNews(Array.isArray(data) ? data : []);
    } catch (error) {
      setNews([]);
    }
  };

  useEffect(() => { fetchNews(); }, []);

  const handleImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: string[] = [];
    for (const file of Array.from(files)) {
      try {
        const compressed = await compressImage(file);
        newImages.push(compressed);
      } catch {
        alert(`Failed to process ${file.name}`);
      }
    }
    const allImages = [...formData.images, ...newImages];
    setFormData(prev => ({
      ...prev,
      images: allImages,
      image: allImages[0] || prev.image
    }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    const updated = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: updated, image: updated[0] || '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.images.length === 0) {
      alert('Please upload at least one image');
      return;
    }
    const token = localStorage.getItem('token');
    const url = editing ? `${API_BASE_URL}/news/${editing.id}` : `${API_BASE_URL}/news`;
    const method = editing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          ...formData,
          image: formData.images[0] || formData.image,
          date: formData.date || new Date().toISOString().split('T')[0]
        }),
      });
      if (!res.ok) {
        const error = await res.json();
        alert(`Error: ${error.message || 'Failed to save news'}`);
        return;
      }
      setOpen(false);
      setEditing(null);
      resetForm();
      fetchNews();
    } catch {
      alert('Failed to save news');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this news post?')) return;
    const token = localStorage.getItem('token');
    await fetch(`${API_BASE_URL}/news/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    fetchNews();
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', image: '', images: [], author: '', date: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const openEdit = (post: NewsPost) => {
    setEditing(post);
    const imgs = (post as any).images || (post.image ? [post.image] : []);
    setFormData({
      title: post.title, content: post.content, image: post.image,
      images: Array.isArray(imgs) ? imgs : [],
      author: post.author, date: post.date?.split('T')[0] || ''
    });
    setOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">News</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); resetForm(); }}>Add News</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit' : 'Add'} News</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              <Textarea placeholder="Content (use paragraphs for sections)" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required rows={6} />
              <Input placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required />
              <div>
                <label className="text-sm font-medium mb-1 block">Date</label>
                <Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Photos ({formData.images.length} uploaded)</label>
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {formData.images.map((img, i) => (
                      <div key={i} className="relative group">
                        <img src={img} alt={`Photo ${i + 1}`} className="w-full h-24 object-cover rounded border" />
                        {i === 0 && <span className="absolute top-1 left-1 bg-[#049fd9] text-white text-[10px] px-1.5 py-0.5 rounded">Cover</span>}
                        <button
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-[#049fd9] transition-colors">
                  <Upload className="w-6 h-6 text-gray-400 mb-1" />
                  <span className="text-sm text-gray-500">Click to upload photos</span>
                  <span className="text-xs text-gray-400">Multiple images allowed (JPG, PNG)</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/gif"
                    multiple
                    onChange={handleImagesUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <Button type="submit" className="w-full">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {news.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4 flex gap-4 items-start">
              <img src={post.image} alt={post.title} className="w-32 h-20 object-cover rounded flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900">{post.title}</h3>
                <p className="text-xs text-gray-500 mt-1">By {post.author} · {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                <p className="text-xs text-gray-400 mt-1 truncate">{post.content.substring(0, 80)}...</p>
                {(post as any).images && (post as any).images.length > 1 && (
                  <span className="text-xs text-blue-600 mt-1 inline-block">{(post as any).images.length} photos</span>
                )}
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button size="sm" onClick={() => openEdit(post)}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
