import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agences from "./pages/Agences";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PermisConstruire from "./pages/PermisConstruire";
import DevisPermis from "./pages/DevisPermis";
import AgenceSud from "./pages/AgenceSud";
import AgenceOuest from "./pages/AgenceOuest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Agences />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/permis-de-construire" element={<PermisConstruire />} />
          <Route path="/devis-permis" element={<DevisPermis />} />
          <Route path="/agence-sud" element={<AgenceSud />} />
          <Route path="/agence-ouest" element={<AgenceOuest />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
