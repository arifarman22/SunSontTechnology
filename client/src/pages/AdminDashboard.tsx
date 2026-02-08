import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductsManager from '@/components/admin/ProductsManager';
import SolutionsManager from '@/components/admin/SolutionsManager';
import NewsManager from '@/components/admin/NewsManager';
import { Package, Lightbulb, Newspaper, TrendingUp } from 'lucide-react';

const API_BASE_URL = 'https://www.sunson-tech.com/api';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState({ products: 0, solutions: 0, news: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      setLocation('/admin/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchStats();
  }, [setLocation]);

  const fetchStats = async () => {
    try {
      const [products, solutions, news] = await Promise.all([
        fetch(`${API_BASE_URL}/products`).then(r => r.json()),
        fetch(`${API_BASE_URL}/solutions`).then(r => r.json()),
        fetch(`${API_BASE_URL}/news`).then(r => r.json())
      ]);
      setStats({
        products: Array.isArray(products) ? products.length : 0,
        solutions: Array.isArray(solutions) ? solutions.length : 0,
        news: Array.isArray(news) ? news.length : 0
      });
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLocation('/admin/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sunson Technology</h1>
            <p className="text-sm text-gray-500 mt-1">Content Management System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user.username}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="border-gray-300 hover:bg-gray-100">Logout</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Products</p>
                  <p className="text-4xl font-bold mt-2">{stats.products}</p>
                </div>
                <Package className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Solutions</p>
                  <p className="text-4xl font-bold mt-2">{stats.solutions}</p>
                </div>
                <Lightbulb className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">News Articles</p>
                  <p className="text-4xl font-bold mt-2">{stats.news}</p>
                </div>
                <Newspaper className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg border-0">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger value="products" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">📦 Products</TabsTrigger>
              <TabsTrigger value="solutions" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">💡 Solutions</TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">📰 News</TabsTrigger>
            </TabsList>

            <div className="p-6">
              <TabsContent value="products" className="mt-0">
                <ProductsManager />
              </TabsContent>

              <TabsContent value="solutions" className="mt-0">
                <SolutionsManager />
              </TabsContent>

              <TabsContent value="news" className="mt-0">
                <NewsManager />
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </main>
    </div>
  );
}
