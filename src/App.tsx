import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import OurHistory from "./pages/OurHistory";
import MissionValues from "./pages/MissionValues";
import WorkWithUs from "./pages/WorkWithUs";
import Partners from "./pages/Partners";
import Plans from "./pages/Plans";
import AccreditedNetwork from "./pages/AccreditedNetwork";
import Contact from "./pages/Contact";
import SecondWayBill from "./pages/SecondWayBill";
import SimulatePlan from "./pages/SimulatePlan";
import Reimbursement from "./pages/Reimbursement";
import Cancellation from "./pages/Cancellation";
import Ombudsman from "./pages/Ombudsman";
import IncomeTax from "./pages/IncomeTax";
import Compliance from "./pages/Compliance";
import AnsQuestionnaire from "./pages/AnsQuestionnaire";
import ReplacedProviders from "./pages/ReplacedProviders";
import TissGuide from "./pages/TissGuide";
import Publications from "./pages/Publications";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/noticias/:id" element={<NewsDetail />} />
          <Route path="/nossa-historia" element={<OurHistory />} />
          <Route path="/missao-valores" element={<MissionValues />} />
          <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/rede-credenciada" element={<AccreditedNetwork />} />
          <Route path="/fale-conosco" element={<Contact />} />
          <Route path="/segunda-via" element={<SecondWayBill />} />
          <Route path="/simular-plano" element={<SimulatePlan />} />
          <Route path="/reembolso" element={<Reimbursement />} />
          <Route path="/cancelamento" element={<Cancellation />} />
          <Route path="/ouvidoria" element={<Ombudsman />} />
          <Route path="/imposto-de-renda" element={<IncomeTax />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/questionario-ans" element={<AnsQuestionnaire />} />
          <Route path="/prestadores-substituidos" element={<ReplacedProviders />} />
          <Route path="/guia-tiss" element={<TissGuide />} />
          <Route path="/publicacoes" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;