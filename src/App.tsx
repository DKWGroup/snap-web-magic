
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
                <Route path="/o-nas" element={<About />} />
                <Route path="/uslugi" element={<Services />} />
                <Route path="/uslugi/produkcja-wideo" element={<VideoProduction />} />
                <Route path="/uslugi/social-media" element={<SocialMedia />} />
                <Route path="/uslugi/strony-internetowe" element={<WebDevelopment />} />
                <Route path="/uslugi/grafika" element={<GraphicDesign />} />
                <Route path="/uslugi/marketing-content" element={<MarketingContent />} />
                <Route path="/uslugi/live-streaming" element={<LiveStreaming />} />
                <Route path="/uslugi/podcasty" element={<Podcasts />} />
                <Route path="/uslugi/nagrania-dronem" element={<DroneServices />} />
                <Route path="/projekty" element={<Projects />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                
                {/* English routes */}
                <Route path="/en" element={<Index />} />
                <Route path="/en/about" element={<About />} />
                <Route path="/en/services" element={<Services />} />
                <Route path="/en/services/video-production" element={<VideoProduction />} />
                <Route path="/en/services/social-media" element={<SocialMedia />} />
                <Route path="/en/services/web-development" element={<WebDevelopment />} />
                <Route path="/en/services/graphic-design" element={<GraphicDesign />} />
                <Route path="/en/services/marketing-content" element={<MarketingContent />} />
                <Route path="/en/services/live-streaming" element={<LiveStreaming />} />
                <Route path="/en/services/podcasts" element={<Podcasts />} />
                <Route path="/en/services/drone-services" element={<DroneServices />} />
                <Route path="/en/projects" element={<Projects />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/blog" element={<Blog />} />
                <Route path="/en/blog/:slug" element={<BlogPost />} />
                <Route path="/en/case-studies" element={<CaseStudies />} />
                <Route path="/en/case-studies/:slug" element={<CaseStudyDetail />} />
                
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
