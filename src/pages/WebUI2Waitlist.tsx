import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle, Hammer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WebUI2Waitlist = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectDescription: '',
    department: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            project_description: formData.projectDescription,
            department: formData.department,
            email: formData.email
          }
        ]);

      if (error) {
        console.error('Error submitting to waitlist:', error);
        toast({
          title: "Submission Failed",
          description: "Sorry, an error occurred during submission. Please try again later.",
          variant: "destructive",
        });
      } else {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted",
          description: "Thank you for your application. We'll notify you as soon as we launch!",
        });
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Submission Failed",
        description: "Sorry, an error occurred during submission. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your application. We'll notify you as soon as we launch!
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-black hover:bg-gray-800 text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Hammer className="w-10 h-10 text-purple-600" />
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Hammer className="w-4 h-4" />
              Under Development
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Web UI2 Migration Tool
            </h1>
            <p className="text-xl text-gray-600">
              Join the waitlist for early access
            </p>
          </div>

          <Card className="border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Apply for Early Access
              </CardTitle>
              <CardDescription className="text-gray-600">
                Please fill out the information below and we'll notify you first when the Web UI2 migration tool is ready.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectDescription" className="text-gray-900 font-medium">
                    Project Description *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Please briefly describe your project, including current tech stack, project scale, etc..."
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-gray-900 font-medium">
                    Department *
                  </Label>
                  <Input
                    id="department"
                    placeholder="e.g., Frontend Development, Product Engineering, etc."
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    Contact Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-black hover:bg-gray-800 text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              We respect your privacy. Your information will only be used for product notifications and won't be used for other purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebUI2Waitlist;