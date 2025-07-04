
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Brain, Shield, Sparkles, CheckCircle, Star, Github, Play, Figma, FileCode, Layers, MonitorSpeaker, Mail, User, ExternalLink, Download, BookOpen, MessageCircle, RefreshCw, ArrowUpRight, BarChart3, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const navigate = useNavigate();
  const [useCases, setUseCases] = useState<any[]>([]);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    fetchUseCases();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    }
  };
  
  // Evaluation scores data
  const evaluationData = [
    { version: 'V1', testCase1: 6.15, testCase2: 6.85, average: 6.5 },
    { version: 'V2', testCase1: 8.4, testCase2: 7.4, average: 7.9 },
    { version: 'V3', testCase1: 9.4, testCase2: 9.3, average: 9.35 },
    { version: 'V3-reasoning', testCase1: 9.5, testCase2: 9.7, average: 9.6 }
  ];

  const teamMembers = [ {
    name: "Chenjian",
    role: "AI Engineer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UgKDIpLnBuZyIsImlhdCI6MTc1MTM1MjcyMywiZXhwIjoxNzgyODg4NzIzfQ.ggqfpV2jh4ei3On_sJov-N5YZF7hXBHZMBh_YB3BMgA",
  }, {
    name: "Suki",
    role: "Product Manager & Designer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image%20(5).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UgKDUpLnBuZyIsImlhdCI6MTc1MTM1Mjc0NywiZXhwIjoxNzgyODg4NzQ3fQ.Py7Hu_05MYaDBWEumzMoBa52l3JS_ivTCcpY3L3zS7c",
  }, {
    name: "Tao Li",
    role: "AI Engineer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UgKDMpLnBuZyIsImlhdCI6MTc1MTM1Mjc4NiwiZXhwIjoxNzgyODg4Nzg2fQ.igmwpm3x-3DMKL0_atkZPAzkHn1TELY1D5IUUxGrbmI",
  }, {
    name: "Hailei",
    role: "AI Engineer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image%20(4).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UgKDQpLnBuZyIsImlhdCI6MTc1MTM1MjgzNiwiZXhwIjoxNzgyODg4ODM2fQ.MRrjGetYS0RVvweyRR94YsTupPzvkGKGfuMZ1qEdqJw",
  }, {
    name: "Linjun",
    role: "Lead Developer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UucG5nIiwiaWF0IjoxNzUxMzUyODYyLCJleHAiOjE3ODI4ODg4NjJ9.gUxuzaAeQ3oelTtBbaCb6FZBjPXf0JBCW_zZE2MB-6c",
  },{
    name: "He Zhang",
    role: "Ex-AI Engineer",
    image: "https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/sign/web/image%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMGE0YTk1My0wMmMxLTRmYTMtOGM2OS1lNmNlMzQwZDA1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2UgKDEpLnBuZyIsImlhdCI6MTc1MTM1MjY4NCwiZXhwIjoxNzgyODg4Njg0fQ.hG6FlF7Ryr8poFkChH30RpiCVE6Jg-k54Lv4ejp87f0",
  }];
  
  const faqs = [
    {
      question: "How accurate is the Figma to code conversion?",
      answer: "Our AI generates pixel-perfect code with 95%+ accuracy. Complex layouts and responsive designs are handled automatically."
    }, {
      question: "Which frameworks are supported?",
      answer: "Currently we support React and WebUI components. Next.js support is coming soon, with Vue and Angular planned for the future."
    }, {
      question: "Can I customize the generated code?",
      answer: "Yes! The generated code is clean, readable, and fully customizable. You can modify it just like any other code in your project."
    }, {
      question: "How does the VS Code integration work?",
      answer: "Install our extension, connect your Figma account, and convert designs directly in your editor without context switching."
    }, {
      question: "Is there a free trial?",
      answer: "Yes! The Pro plan includes a 14-day free trial with unlimited conversions and full feature access."
    }, {
      question: "What about responsive design?",
      answer: "Our AI automatically generates responsive code using modern CSS techniques like Grid and Flexbox, with mobile-first breakpoints."
    }
  ];
  
  return <div className="min-h-screen bg-white relative">
      {/* Mouse follow glow effect */}
      <div className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-30 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-3xl transition-all duration-300 ease-out" style={{
      left: mousePosition.x - 192,
      top: mousePosition.y - 192,
      background: `radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, rgba(236, 72, 153, 0.1) 70%, transparent 100%)`
    }} />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm border-gray-200 text-gray-700">
            <Figma className="w-4 h-4 mr-2" />
            Design to Code & Migration Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Design to Code.
            <span className="block text-black">Migration Made Easy.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Convert Figma designs to code instantly and migrate Web UI to Web UI2 seamlessly. 
            AI-powered conversion that works with your existing codebase—no toy demos, just real code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium">
              Start Converting
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-medium border-gray-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Code Preview */}
          <div className="relative max-w-5xl mx-auto mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="bg-gray-900 rounded-xl p-6 text-left shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">FSD CLI</span>
                </div>
                <pre className="text-green-400 text-sm font-mono">
                {`> fsd convert --design button.figma

🎨 Converting Figma design...
🔄 Generating React component
📝 Optimizing for production
✅ Component ready for integration

> fsd migrate --from webui --to webui2

🔄 Analyzing Web UI components...
🚀 Migrating to Web UI2
✅ Migration completed successfully

Generated: Button.tsx, Form.tsx
Framework: React/Next.js
Quality: Production-ready`}
                </pre>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-500 mb-6">Trusted by developers at</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-gray-400">GitHub</div>
              <div className="text-2xl font-bold text-gray-400">Vercel</div>
              <div className="text-2xl font-bold text-gray-400">Stripe</div>
              <div className="text-2xl font-bold text-gray-400">Linear</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Built for modern development workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design conversion to code migration, get production-quality results that integrate seamlessly with your projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: AI-Powered Figma to Code */}
            <Card className="border-gray-200 bg-white p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Figma to Code</h3>
              <p className="text-gray-600 leading-relaxed">
                Skip the manual slicing. Get pixel-perfect UI components from design to code automatically. 
                Our advanced AI understands design patterns and generates clean, maintainable code that matches your design exactly.
              </p>
            </Card>

            {/* Feature 2: Web UI to Web UI2 Migration */}
            <Card className="border-gray-200 bg-white p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Web UI to Web UI2 Migration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly upgrade your existing Web UI components to Web UI2. Our intelligent migration tool 
                analyzes your current codebase and automatically converts components while preserving functionality and improving performance.
              </p>
            </Card>

            {/* Feature 3: Production Quality Output */}
            <Card className="border-gray-200 bg-white p-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Production Quality Output</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean, maintainable code you'll actually use. Push it straight to your repository. 
                Every component follows best practices and is optimized for performance, accessibility, and maintainability.
              </p>
            </Card>

            {/* Feature 4: Intelligent Code Analysis */}
            <Card className="border-gray-200 bg-white p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Intelligent Code Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI understands your existing codebase structure and patterns. Whether converting designs or migrating code, 
                it maintains consistency with your project's architecture and coding standards.
              </p>
            </Card>


            {/* Feature 6: Developer Experience */}
            <Card className="border-gray-200 bg-white p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Streamlined Developer Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrate seamlessly with your existing workflow. Command-line tools, VS Code extensions, 
                and API access make it easy to incorporate FSD into your development process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Real-world use cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how developers are using FSD to convert their Figma designs and migrate their codebase to production-ready solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.slice(0, 8).map(useCase => <Card key={useCase.id} className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer group overflow-hidden" onClick={() => navigate(`/use-cases/${useCase.id}`)}>
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base text-gray-900 line-clamp-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm line-clamp-3">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>


      {/* Performance Metrics Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Continuously improving performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evaluation scores show consistent improvement across versions, demonstrating our commitment to delivering better results
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">FSD Evaluation Metrics</h3>
                  <p className="text-gray-600 text-sm">Performance scores across algorithm versions</p>
                </div>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={evaluationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="version" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis 
                      domain={[0, 10]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="testCase1" 
                      fill="#3b82f6" 
                      name="Test Case 1"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar 
                      dataKey="testCase2" 
                      fill="#8b5cf6" 
                      name="Test Case 2"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Metrics Summary */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Performance Highlights</h3>
                  <p className="text-gray-600">Key improvements across algorithm versions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {evaluationData.map((data, index) => (
                  <Card key={data.version} className="border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{data.version}</h4>
                      <Badge variant="outline" className="text-xs">
                        Avg: {data.average.toFixed(1)}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Test Case 1:</span>
                        <span className="font-medium text-blue-600">{data.testCase1}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Test Case 2:</span>
                        <span className="font-medium text-purple-600">{data.testCase2}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Latest Achievement</h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our V3-reasoning loop algorithm achieved the highest scores yet, with 9.5/9.7 across test cases, 
                  representing a <span className="font-semibold text-blue-600">43% improvement</span> since V1.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet our team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate developers and designers behind FSD
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            {teamMembers.map(member => <Card key={member.name} className="border-gray-200 bg-white text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-3">
                    {member.role}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="mx-auto">
                    <Mail className="mr-2 w-4 h-4" />
                    Contact
                  </Button>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center">
            <Card className="inline-block border-gray-200 bg-gray-50">
              <CardHeader>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Need Support?</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Get in touch with our customer success team
                </CardDescription>
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <Mail className="mr-2 w-4 h-4" />
                  support@fsd.dev
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about FSD
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => <Card key={index} className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 text-left">{faq.question}</CardTitle>
                  <CardDescription className="text-gray-600 text-left">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your development workflow?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of developers shipping faster with AI-powered design conversion and code migration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Start Converting Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 text-lg font-medium">
              <Github className="mr-2 w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-900">FSD</span>
              </div>
              <p className="text-gray-600 max-w-sm">
                The AI-powered platform that converts Figma designs to code and migrates components seamlessly.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">&copy; 2024 FSD. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
