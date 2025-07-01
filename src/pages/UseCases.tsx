
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const UseCases = () => {
  const navigate = useNavigate();

  const useCases = [
    {
      id: "edge-ios-extension",
      title: "Edge iOS extension",
      image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/example.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL2V4YW1wbGUucG5nIiwiaWF0IjoxNzUxMzU3MTg0LCJleHAiOjE3ODI4OTMxODR9.LVGhimjv4VoAVWjxDQFqZVvurvvcLjhXExjtiFAsDF0",
      description: "FSD supported the development of an iOS extension for Edge browser, enabling seamless Figma-to-code conversion. We helped build the extension’s interface, including a clean and efficient list view to manage design exports."
    },
    {
      id: "edge-fre",
      title: "Edge FRE pages", 
      image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/usecase/FSD%20banner.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ1c2VjYXNlL0ZTRCBiYW5uZXIucG5nIiwiaWF0IjoxNzUxMzY0OTA1LCJleHAiOjE3ODI5MDA5MDV9.H2A-xTI_f7VIE4CfNEj0A_OayItVjsbvnL8l42ZiLyc",
      description: "Provided significant assistance with the onboarding page of EdgeMobile’s FSD, delivering an exceptional implementation that closely matched the design mockups to code with high fidelity and attention to detail."
    },
    {
      id: "frontend-acceleration",
      title: "Frontend Development Acceleration",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      description: "Speed up your development workflow by automatically generating component structure."
    },
    {
      id: "landing-pages",
      title: "Landing Page Creation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Quickly turn landing page designs into responsive, production-ready code."
    },
    {
      id: "mobile-first",
      title: "Mobile-First Development",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      description: "Generate responsive components that work seamlessly across all device sizes."
    },
    {
      id: "dashboard-panels",
      title: "Dashboard & Admin Panels",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
      description: "Convert complex dashboard designs into functional admin interfaces."
    }
  ];

  const handleCardClick = (useCaseId: string) => {
    navigate(`/use-cases/${useCaseId}`);
  };

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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card 
                key={useCase.id} 
                className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleCardClick(useCase.id)}
              >
                <CardContent className="p-0">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
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
