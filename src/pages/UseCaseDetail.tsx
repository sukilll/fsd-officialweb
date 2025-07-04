
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Palette, Zap, Globe, Smartphone, Monitor } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { supabase } from "@/integrations/supabase/client";

const UseCaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [useCase, setUseCase] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchUseCase(id);
    }
  }, [id]);

  const fetchUseCase = async (useCaseId: string) => {
    try {
      const { data, error } = await supabase
        .from('use_cases')
        .select('*')
        .eq('id', useCaseId)
        .single();

      if (error) throw error;
      setUseCase(data);
    } catch (error) {
      console.error('Error fetching use case:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Code': <Code className="w-12 h-12 text-blue-600" />,
      'Palette': <Palette className="w-12 h-12 text-purple-600" />,
      'Zap': <Zap className="w-12 h-12 text-yellow-600" />,
      'Globe': <Globe className="w-12 h-12 text-green-600" />,
      'Smartphone': <Smartphone className="w-12 h-12 text-red-600" />,
      'Monitor': <Monitor className="w-12 h-12 text-indigo-600" />
    };
    return iconMap[iconName] || <Code className="w-12 h-12 text-blue-600" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!useCase) {
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
              src={useCase.image} 
              alt={useCase.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center mb-4">
                {getIcon(useCase.icon_name)}
                <h1 className="text-3xl font-bold text-gray-900 ml-4">
                  {useCase.title}
                </h1>
              </div>
              <div className="text-xl text-gray-600 leading-relaxed prose prose-xl max-w-none">
                <ReactMarkdown>
                  {useCase.description}
                </ReactMarkdown>
              </div>
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
