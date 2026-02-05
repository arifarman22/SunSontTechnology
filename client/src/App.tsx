import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import BankingProducts from "@/pages/products/BankingProducts";
import HealthcareProducts from "@/pages/products/HealthcareProducts";
import SecurityProducts from "@/pages/products/SecurityProducts";
import TransportationProducts from "@/pages/products/TransportationProducts";
import InformationProducts from "@/pages/products/InformationProducts";
import PaymentProducts from "@/pages/products/PaymentProducts";
import CdmSolution from "@/pages/solutions/CdmSolution";
import HealthcareSolution from "@/pages/solutions/HealthcareSolution";
import EppSolution from "@/pages/solutions/EppSolution";
import PaymentSolution from "@/pages/solutions/PaymentSolution";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import ProductDetail from "@/pages/products/ProductDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products/:category/:productId" component={ProductDetail} />
      <Route path="/products/banking" component={BankingProducts} />
      <Route path="/products/healthcare" component={HealthcareProducts} />
      <Route path="/products/security" component={SecurityProducts} />
      <Route path="/products/transportation" component={TransportationProducts} />
      <Route path="/products/information" component={InformationProducts} />
      <Route path="/products/payment" component={PaymentProducts} />
      <Route path="/solutions/cdm" component={CdmSolution} />
      <Route path="/solutions/healthcare" component={HealthcareSolution} />
      <Route path="/solutions/epp" component={EppSolution} />
      <Route path="/solutions/payment" component={PaymentSolution} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />
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
