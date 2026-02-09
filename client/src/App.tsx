import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CategoryProducts from "@/pages/products/CategoryProducts";
import ProductDetails from "@/pages/ProductDetails";
import SolutionsPage from "@/pages/SolutionsPage";
import SolutionDetails from "@/pages/SolutionDetails";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/:category/:id" component={ProductDetails} />
      <Route path="/products/:category" component={CategoryProducts} />
      <Route path="/solutions/:id" component={SolutionDetails} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
