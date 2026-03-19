import { useState, useEffect } from "react";
import logoImage from "@/images/Logo.jpeg";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2200);
    const finish = setTimeout(onFinish, 2800);
    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-splash-logo">
        <img src={logoImage} alt="Sunson Technology" className="h-24 mb-6" />
      </div>

      <div className="animate-splash-text">
        <p className="text-sm text-gray-400 tracking-[0.3em] uppercase">
          Innovation · Security · Excellence
        </p>
      </div>

      <div className="mt-10 w-48 h-0.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#049fd9] rounded-full animate-splash-bar" />
      </div>
    </div>
  );
}
