
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Palette, Zap, Globe, Smartphone, Monitor } from "lucide-react";

const UseCaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const useCaseDetails = {
    "rapid-prototyping": {
      title: "Rapid Prototyping",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      icon: <Code className="w-12 h-12 text-blue-600" />,
      description: "Transform your design mockups into functional React components in minutes, not hours. Perfect for quick iterations and proof of concepts.",
      features: [
        "Visual design to code conversion",
        "Component-based architecture",
        "Instant preview and iteration",
        "Export clean, maintainable code"
      ],
      benefits: [
        "Reduce development time by 70%",
        "Maintain design consistency",
        "Speed up client feedback cycles",
        "Focus on logic instead of styling"
      ]
    },
    "design-system": {
      title: "Design System Implementation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      description: "Convert your design system components into consistent, reusable code components that maintain design fidelity across your application.",
      features: [
        "Design token integration",
        "Component library generation",
        "Style guide enforcement",
        "Cross-platform consistency"
      ],
      benefits: [
        "Ensure brand consistency",
        "Accelerate team productivity",
        "Reduce design debt",
        "Streamline handoff process"
      ]
    },
    "frontend-acceleration": {
      title: "Frontend Development Acceleration",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      description: "Speed up your development workflow by automatically generating the initial component structure and styling from your designs.",
      features: [
        "Automated code generation",
        "Modern React patterns",
        "TypeScript support",
        "Optimized performance"
      ],
      benefits: [
        "3x faster development cycles",
        "Reduced manual coding errors",
        "Better code quality",
        "More time for business logic"
      ]
    },
    "landing-pages": {
      title: "Landing Page Creation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      icon: <Globe className="w-12 h-12 text-green-600" />,
      description: "Quickly turn landing page designs into responsive, production-ready code with proper semantic HTML and optimized CSS.",
      features: [
        "Responsive design conversion",
        "SEO-optimized markup",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      benefits: [
        "Launch campaigns faster",
        "Improve conversion rates",
        "Better search rankings",
        "Reduced bounce rates"
      ]
    },
    "mobile-first": {
      title: "Mobile-First Development",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
      icon: <Smartphone className="w-12 h-12 text-red-600" />,
      description: "Generate responsive components that work seamlessly across all device sizes, ensuring your designs look perfect everywhere.",
      features: [
        "Mobile-first approach",
        "Responsive breakpoints",
        "Touch-friendly interfaces",
        "Performance optimization"
      ],
      benefits: [
        "Better mobile experience",
        "Improved user engagement",
        "Higher mobile conversions",
        "Future-proof designs"
      ]
    },
    "dashboard-panels": {
      title: "Dashboard & Admin Panels",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=400&fit=crop",
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      description: "Convert complex dashboard designs into functional admin interfaces with proper component architecture and state management.",
      features: [
        "Data visualization components",
        "Interactive elements",
        "State management integration",
        "Real-time updates"
      ],
      benefits: [
        "Faster admin development",
        "Better data insights",
        "Improved user workflows",
        "Scalable architecture"
      ]
    }
  };

  const currentUseCase = useCaseDetails[id as keyof typeof useCaseDetails];

  if (!currentUseCase) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Use Case Not Found</h1>
            <p className="text-gray-600 mb-8">The use case you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/use-cases')} className="bg-black hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Use Cases
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/use-cases')}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Use Cases
          </Button>

          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <img 
              src={currentUseCase.image} 
              alt={currentUseCase.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-4">
                {currentUseCase.icon}
                <h1 className="text-3xl font-bold text-gray-900 ml-4">
                  {currentUseCase.title}
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {currentUseCase.description}
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {currentUseCase.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <ul className="space-y-3">
                {currentUseCase.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black text-white rounded-lg p-8 mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Transform your design workflow with FSD today
            </p>
            <Button className="bg-white text-black hover:bg-gray-100">
              Try FSD Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetail;
