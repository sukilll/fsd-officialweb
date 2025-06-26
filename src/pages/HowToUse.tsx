
import React from 'react';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Zap, Download, CheckCircle } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "Upload Your Design",
      description: "Upload your design files (Figma, Sketch, or image files) to our platform. We support various formats including PNG, JPG, and design tool exports."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "AI Processing",
      description: "Our AI analyzes your design, identifying components, layouts, styling, and interactive elements to generate clean, semantic code."
    },
    {
      icon: <Download className="w-8 h-8 text-green-600" />,
      title: "Download Code",
      description: "Get your generated React components with Tailwind CSS styling, ready to integrate into your project or customize further."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Integrate & Deploy",
      description: "Copy the code into your project, make any necessary adjustments, and deploy your application with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Use FSD
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your designs into production-ready code in just four simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600">Semantic HTML, modern CSS with Tailwind, and optimized React components</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-600">Mobile-first approach ensuring your components work on all devices</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
                <p className="text-gray-600">Code follows industry standards and accessibility guidelines</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Integration</h3>
                <p className="text-gray-600">Ready-to-use components that integrate seamlessly with your existing codebase</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Converting Your Designs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
