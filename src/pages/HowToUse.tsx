
import React from 'react';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Settings, Zap, MessageCircle } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Setup Figma MCP",
      description: "Get started by downloading the extension and setting up your environment with our one-click setup process.",
      substeps: [
        "Download extension from https://github.com/ai-microsoft/fsd/releases/download/release-extension-v0.3.1/edge-fsd-agent-extension-0.3.1.vsix",
        "One click to Set up Environment",
        "One click to Figma MCP Setup"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Create New Project",
      description: "Use pnpm to scaffold a new project with our webui template, setting up all the necessary files and dependencies.",
      substeps: [
        "Run 'pnpm webui:create' to scaffold a new project"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Start Development",
      description: "Open your webui folder and start chatting with the webui_desktop to begin your development workflow.",
      substeps: [
        "Open webui folder",
        "Use '/' to chat with webui_desktop"
      ]
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
              Get started with FSD in three simple steps and transform your Figma designs into production-ready code
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
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {step.substeps.map((substep, substepIndex) => (
                      <li key={substepIndex} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{substep}</span>
                      </li>
                    ))}
                  </ul>
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
                <h3 className="font-semibold text-gray-900 mb-2">Figma Integration</h3>
                <p className="text-gray-600">Seamless connection between Figma designs and code generation</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interactive Development</h3>
                <p className="text-gray-600">Chat-based interface for real-time code generation and modifications</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Tooling</h3>
                <p className="text-gray-600">Built with latest development tools and best practices</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-gray-600">One-click environment setup and configuration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a 
              href="https://github.com/ai-microsoft/fsd/releases/download/release-extension-v0.3.1/edge-fsd-agent-extension-0.3.1.vsix"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Download Extension
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
