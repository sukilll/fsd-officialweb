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
          title: "提交失败",
          description: "抱歉，提交过程中出现错误，请稍后重试。",
          variant: "destructive",
        });
      } else {
        setIsSubmitted(true);
        toast({
          title: "提交成功",
          description: "感谢您的申请，我们推出后会尽快通知！",
        });
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "提交失败",
        description: "抱歉，提交过程中出现错误，请稍后重试。",
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
              申请已提交！
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              感谢您的申请，我们推出后会尽快通知！
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-black hover:bg-gray-800 text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回首页
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
              正在开发中
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Web UI2 迁移工具
            </h1>
            <p className="text-xl text-gray-600">
              加入候补名单，获得抢先体验机会
            </p>
          </div>

          <Card className="border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                申请抢先体验
              </CardTitle>
              <CardDescription className="text-gray-600">
                请填写以下信息，我们将在Web UI2迁移工具准备就绪时第一时间通知您。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectDescription" className="text-gray-900 font-medium">
                    项目介绍 *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="请简要介绍您的项目情况，包括当前使用的技术栈、项目规模等..."
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" className="text-gray-900 font-medium">
                    部门 *
                  </Label>
                  <Input
                    id="department"
                    placeholder="例如：前端开发部、产品技术部等"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-medium">
                    联系邮箱 *
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
                    返回
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-black hover:bg-gray-800 text-white"
                  >
                    {isSubmitting ? "提交中..." : "加入候补名单"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              我们重视您的隐私，您的信息仅用于产品通知，不会用于其他用途。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebUI2Waitlist;