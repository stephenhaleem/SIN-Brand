import { useEffect, useState } from "react";

const Loader = ({ onComplete, imagesLoaded }: { onComplete: () => void; imagesLoaded: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Wait for images to load before reaching 100
        const maxProgress = imagesLoaded ? 100 : 90;
        
        if (prev >= maxProgress) {
          if (imagesLoaded && prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 300);
            return 100;
          }
          return prev;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, imagesLoaded]);

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center ">
      <div className="relative">
        {/* Background text */}
        <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-muted/20">
          REVENGE
        </div>

        {/* Filled text */}
        <div
          className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground whitespace-nowrap">
            REVENGE
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-center mt-4 text-sm font-bold text-muted-foreground">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
