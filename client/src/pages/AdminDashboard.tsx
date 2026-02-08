import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import ProductsManager from '@/components/admin/ProductsManager';
import SolutionsManager from '@/components/admin/SolutionsManager';
import NewsManager from '@/components/admin/NewsManager';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      setLocation('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLocation('/admin/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user.username}</span>
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <ProductsManager />
          </TabsContent>

          <TabsContent value="solutions">
            <SolutionsManager />
          </TabsContent>

          <TabsContent value="news">
            <NewsManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
