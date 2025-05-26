
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import VideoProduction from "./pages/services/VideoProduction";
import Podcasts from "./pages/services/Podcasts";
import LiveStreaming from "./pages/services/LiveStreaming";
import MarketingContent from "./pages/services/MarketingContent";
import SocialMedia from "./pages/services/SocialMedia";
import GraphicDesign from "./pages/services/GraphicDesign";
import WebDevelopment from "./pages/services/WebDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/o-nas" element={<Layout><About /></Layout>} />
          <Route path="/uslugi" element={<Layout><Services /></Layout>} />
          <Route path="/uslugi/produkcja-wideo" element={<Layout><VideoProduction /></Layout>} />
          <Route path="/uslugi/podcasty" element={<Layout><Podcasts /></Layout>} />
          <Route path="/uslugi/live-streaming" element={<Layout><LiveStreaming /></Layout>} />
          <Route path="/uslugi/marketing-content" element={<Layout><MarketingContent /></Layout>} />
          <Route path="/uslugi/social-media" element={<Layout><SocialMedia /></Layout>} />
          <Route path="/uslugi/grafika" element={<Layout><GraphicDesign /></Layout>} />
          <Route path="/uslugi/strony-internetowe" element={<Layout><WebDevelopment /></Layout>} />
          <Route path="/projekty" element={<Layout><Projects /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/kontakt" element={<Layout><Contact /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/case-studies/:caseId" element={<Layout><CaseStudyDetail /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
