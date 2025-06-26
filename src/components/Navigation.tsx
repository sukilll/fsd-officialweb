
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
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
