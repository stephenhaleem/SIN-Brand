
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import BrandStory from "./pages/BrandStory";
import Collections from "./pages/Collections";
import Lookbook from "./pages/Lookbook";
import BehindTheScenes from "./pages/BehindTheScenes";
import TShirts from "./pages/TShirts";
import Hoodies from "./pages/Hoodies";
import Jackets from "./pages/Jackets";
import Accessories from "./pages/Accessories";
import LatestDrop from "./pages/LatestDrop";
import LimitedEdition from "./pages/LimitedEdition";
import ClassicSeries from "./pages/ClassicSeries";
import Collaborations from "./pages/Collaborations";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import StreetStyle from "./pages/StreetStyle";
import StyleGuide from "./pages/StyleGuide";
import MixMatch from "./pages/MixMatch";
import SeasonalLooks from "./pages/SeasonalLooks";
import CareInstructions from "./pages/CareInstructions";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/Loader";

const queryClient = new QueryClient();

function isDesktop() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isDesktop()) return;

    const lenis = new Lenis({
      duration: 0.4,
      easing: (t: number) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          {loading && <Loader onComplete={() => setLoading(false)} />}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/brand" element={<BrandStory />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/lookbook" element={<Lookbook />} />
              <Route path="/behind" element={<BehindTheScenes />} />
              <Route path="/tshirts" element={<TShirts />} />
              <Route path="/hoodies" element={<Hoodies />} />
              <Route path="/jackets" element={<Jackets />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/latest" element={<LatestDrop />} />
              <Route path="/limited" element={<LimitedEdition />} />
              <Route path="/classic" element={<ClassicSeries />} />
              <Route path="/collabs" element={<Collaborations />} />
              <Route path="/events" element={<Events />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/street-style" element={<StreetStyle />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="/mix-match" element={<MixMatch />} />
              <Route path="/seasonal" element={<SeasonalLooks />} />
              <Route path="/care" element={<CareInstructions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
