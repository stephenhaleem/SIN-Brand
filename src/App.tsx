import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";

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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const imagePaths = [
      "/images/logo.png",
      "/images/logo2.png",
      "/images/DSCF3448.jpg",
      "/images/DSCF3465.jpg",
      "/images/DSCF3486.jpg",
      "/images/DSCF3517.jpg",
      "/images/DSCF3528.jpg",
      "/images/DSCF3531.jpg",
      "/images/DSCF3553.jpg",
      "/images/DSCF3557-Recovered.jpg",
      "/images/DSCF3572-2.jpg",
      "/images/DSCF3594-2.jpg",
      "/images/DSCF3606-2.jpg",
      "/images/DSCF3630-2.jpg",
      "/images/DSCF3643.jpg",
      "/images/DSCF3653-2.jpg",
      "/images/DSCF3680-2.jpg",
      "/images/DSCF3689-2.jpg",
      "/images/DSCF3708-2.jpg",
      "/images/IMG_8607.JPG",
      "/images/IMG_8629.JPG",
      "/images/black jog.jpg",
      "/images/black jog2.jpg",
      "/images/fey 2.jpg",
      "/images/fey.jpg",
      "/images/grey jogs.jpg",
      "/images/pink skull.jpg",
      "/images/skull.jpg",
      "/images/skull1.jpg",
      "/images/tank p.jpg",
      "/images/tank1p.jpg",
      "/images/white skull.jpg",
    ];

    let loadedCount = 0;
    const totalImages = imagePaths.length;

    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    Promise.all(imagePaths.map(loadImage))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Image preload error:", err);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  useEffect(() => {
    if (!isDesktop()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      infinite: false,
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
          {(loading || !imagesLoaded) && <Loader onComplete={() => setLoading(false)} imagesLoaded={imagesLoaded} />}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
