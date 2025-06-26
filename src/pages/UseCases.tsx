
import React from 'react';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap, Globe, Smartphone, Monitor } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Rapid Prototyping",
      description: "Transform your design mockups into functional React components in minutes, not hours. Perfect for quick iterations and proof of concepts."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Design System Implementation",
      description: "Convert your design system components into consistent, reusable code components that maintain design fidelity across your application."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Frontend Development Acceleration",
      description: "Speed up your development workflow by automatically generating the initial component structure and styling from your designs."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Landing Page Creation",
      description: "Quickly turn landing page designs into responsive, production-ready code with proper semantic HTML and optimized CSS."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      title: "Mobile-First Development",
      description: "Generate responsive components that work seamlessly across all device sizes, ensuring your designs look perfect everywhere."
    },
    {
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      title: "Dashboard & Admin Panels",
      description: "Convert complex dashboard designs into functional admin interfaces with proper component architecture and state management."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Use Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how FSD can transform your design-to-code workflow across different scenarios and industries
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              See how FSD can accelerate your development workflow today
            </p>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Try FSD Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
