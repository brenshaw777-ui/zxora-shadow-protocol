import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import zxoraLogoFull from "@/assets/zxora-logo-full.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-shadow-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl" />
      
      <div className="text-center relative z-10 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={zxoraLogoFull} 
            alt="Zxora" 
            className="w-32 h-32 opacity-90"
          />
        </div>
        
        {/* Error Message */}
        <h1 className="mb-4 text-7xl font-monument font-bold text-titanium tracking-wider">404</h1>
        <p className="mb-2 text-xl font-machina text-steel">Page Not Found</p>
        <p className="mb-8 text-sm font-body text-dim-steel max-w-md mx-auto">
          This corridor has been burned. The page you're looking for doesn't exist in the shadow layer.
        </p>
        
        {/* CTA Button */}
        <Button
          size="lg"
          onClick={() => window.location.href = "/"}
          className="font-display tracking-wide"
        >
          Return to Shadow Layer
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
