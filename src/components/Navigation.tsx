
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">FSD</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Use Cases</a>
            <a href="#how-to-use" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">How to Use</a>
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
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
              Sign In
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
