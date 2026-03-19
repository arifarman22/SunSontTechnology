import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function PageTransition() {
  const [location] = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(30);

    const t1 = setTimeout(() => setProgress(70), 100);
    const t2 = setTimeout(() => setProgress(100), 300);
    const t3 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
      <div
        className="h-full bg-[#049fd9] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
