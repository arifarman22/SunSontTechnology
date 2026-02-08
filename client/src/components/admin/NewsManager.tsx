import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { NewsPost } from '@/lib/api';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

export default function NewsManager() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<NewsPost | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '', image: '', author: '' });

  const fetchNews = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/news`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setNews(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const url = editing ? `${API_BASE_URL}/news/${editing.id}` : `${API_BASE_URL}/news`;
    const method = editing ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData, date: new Date().toISOString() }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(`Error: ${error.message || 'Failed to save news'}`);
        return;
      }

      setOpen(false);
      setEditing(null);
      setFormData({ title: '', content: '', image: '', author: '' });
      fetchNews();
    } catch (error) {
      console.error('Submit error:', error);
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">News</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { setEditing(null); setFormData({ title: '', content: '', image: '', author: '' }); }}>
              Add News
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit' : 'Add'} News</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
              <Textarea placeholder="Content" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} required />
              <Input placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
              {formData.image && <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded" />}
              <Input placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required />
              <Button type="submit" className="w-full">Save</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {news.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{post.content.substring(0, 100)}...</p>
              <p className="text-xs text-gray-500 mb-4">By {post.author}</p>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => { setEditing(post); setFormData({ title: post.title, content: post.content, image: post.image, author: post.author }); setOpen(true); }}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
