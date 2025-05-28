
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

// Service pages
import VideoProduction from "./pages/services/VideoProduction";
import SocialMedia from "./pages/services/SocialMedia";
import WebDevelopment from "./pages/services/WebDevelopment";
import GraphicDesign from "./pages/services/GraphicDesign";
import MarketingContent from "./pages/services/MarketingContent";
import LiveStreaming from "./pages/services/LiveStreaming";
import Podcasts from "./pages/services/Podcasts";
import DroneServices from "./pages/services/DroneServices";

import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/video-production" element={<VideoProduction />} />
                <Route path="/services/social-media" element={<SocialMedia />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/graphic-design" element={<GraphicDesign />} />
                <Route path="/services/marketing-content" element={<MarketingContent />} />
                <Route path="/services/live-streaming" element={<LiveStreaming />} />
                <Route path="/services/podcasts" element={<Podcasts />} />
                <Route path="/services/drone-services" element={<DroneServices />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
