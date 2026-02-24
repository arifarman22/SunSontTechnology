import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProductsManager from '@/components/admin/ProductsManager';
import SolutionsManager from '@/components/admin/SolutionsManager';
import NewsManager from '@/components/admin/NewsManager';
import { Package, Lightbulb, Newspaper, LogOut } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sunson Technology</h1>
              <p className="text-sm text-gray-500">Admin Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.username}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Products</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.products}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Solutions</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.solutions}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">News</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stats.news}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Newspaper className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">
                  <Package className="w-4 h-4 mr-2" />
                  Products
                </TabsTrigger>
                <TabsTrigger value="solutions">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Solutions
                </TabsTrigger>
                <TabsTrigger value="news">
                  <Newspaper className="w-4 h-4 mr-2" />
                  News
                </TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="mt-6">
                <ProductsManager />
              </TabsContent>

              <TabsContent value="solutions" className="mt-6">
                <SolutionsManager />
              </TabsContent>

              <TabsContent value="news" className="mt-6">
                <NewsManager />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
