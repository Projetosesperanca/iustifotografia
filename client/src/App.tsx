import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import CasamentoDetalhes from "@/pages/CasamentoDetalhes";
import Seguranca from "@/pages/Seguranca";
import Gestante from "@/pages/Gestante";
import Formaturas from "@/pages/Formaturas";
import NotFound from "@/pages/not-found";

import { useEffect } from "react";
import { useLocation } from "wouter";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/servicos" component={Services} />
      <Route path="/contato" component={Contact} />
      <Route path="/casamento/:id" component={CasamentoDetalhes} />
      <Route path="/formaturas" component={Formaturas} />
      <Route path="/seguranca" component={Seguranca} />
      <Route path="/gestante" component={Gestante} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Navigation />
        <main>
          <Router />
        </main>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
