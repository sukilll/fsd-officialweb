
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { supabase } from "@/integrations/supabase/client";

const UseCases = () => {
  const navigate = useNavigate();
  const [useCases, setUseCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUseCases();
  }, []);

  const fetchUseCases = async () => {
    try {
      const { data, error } = await supabase
        .from('use_cases')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setUseCases(data || []);
    } catch (error) {
      console.error('Error fetching use cases:', error);
    } finally {
      setLoading(false);
    }
  };

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
