
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/Silver%20Logo%20on%20Black%20Gradient.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvU2lsdmVyIExvZ28gb24gQmxhY2sgR3JhZGllbnQucG5nIiwiaWF0IjoxNzUxMzQ1NjQ0LCJleHAiOjE3ODI4ODE2NDR9.y26V7gNJ72EJUxNPXjfVlK-geTpsvMNngmw2SpTp-fU" 
              alt="FSD Logo" 
              className="h-8 w-auto rounded-md"
            />
            <span className="text-xl font-semibold text-gray-900">FSD</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/use-cases" 
              className={`transition-colors font-medium ${
                location.pathname === '/use-cases'
                  ? 'text-blue-600 border-b-2 border-blue-500 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Use Cases
            </Link>
            <Link 
              to="/how-to-use" 
              className={`transition-colors font-medium ${
                location.pathname === '/how-to-use'
                  ? 'text-blue-600 border-b-2 border-blue-500 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              How to Use
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors font-medium ${
                location.pathname.startsWith('/blog') 
                  ? 'text-blue-600 border-b-2 border-blue-500 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blog
            </Link>
            <Button className="bg-black hover:bg-gray-800 text-white">
              Start now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
