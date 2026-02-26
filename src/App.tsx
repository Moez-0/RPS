import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/src/pages/HomePage';
import NewsPage from '@/src/pages/NewsPage';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
        <img src="/logo.png" alt="RPS Solar Energy" className="h-16 w-auto" />
        <div className="mt-4 h-1 w-16 overflow-hidden bg-slate-200">
          <div className="h-full w-1/2 bg-ips-yellow loading-bar" />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
