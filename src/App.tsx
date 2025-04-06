
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import NewsAndGallery from "./pages/NewsAndGallery";
import FinalistPage from "./pages/FinalistPage";
import JuryPage from "./pages/JuryPage";
import FaqPage from "./pages/FaqPage";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";

// Create a new QueryClient instance outside of any component
const queryClient = new QueryClient();

// Separate component that uses useLocation, wrapped inside BrowserRouter
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery-news" element={<NewsAndGallery />} />
          <Route path="finalists" element={<FinalistPage />} />
          <Route path="jury" element={<JuryPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

// Main App component that sets up providers and router
// Important: Use function declaration rather than arrow function
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
