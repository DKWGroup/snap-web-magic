
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
import DroneServices from "./pages/services/DroneServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Polish routes */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/o-nas" element={<Layout><About /></Layout>} />
            <Route path="/uslugi" element={<Layout><Services /></Layout>} />
            <Route path="/uslugi/produkcja-wideo" element={<Layout><VideoProduction /></Layout>} />
            <Route path="/uslugi/nagrania-dronem" element={<Layout><DroneServices /></Layout>} />
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
            
            {/* English routes */}
            <Route path="/en" element={<Layout><Index /></Layout>} />
            <Route path="/en/about" element={<Layout><About /></Layout>} />
            <Route path="/en/services" element={<Layout><Services /></Layout>} />
            <Route path="/en/services/video-production" element={<Layout><VideoProduction /></Layout>} />
            <Route path="/en/services/drone-services" element={<Layout><DroneServices /></Layout>} />
            <Route path="/en/services/podcasts" element={<Layout><Podcasts /></Layout>} />
            <Route path="/en/services/live-streaming" element={<Layout><LiveStreaming /></Layout>} />
            <Route path="/en/services/marketing-content" element={<Layout><MarketingContent /></Layout>} />
            <Route path="/en/services/social-media" element={<Layout><SocialMedia /></Layout>} />
            <Route path="/en/services/graphic-design" element={<Layout><GraphicDesign /></Layout>} />
            <Route path="/en/services/web-development" element={<Layout><WebDevelopment /></Layout>} />
            <Route path="/en/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/en/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/en/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/en/case-studies" element={<Layout><CaseStudies /></Layout>} />
            <Route path="/en/case-studies/:caseId" element={<Layout><CaseStudyDetail /></Layout>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
