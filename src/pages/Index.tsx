import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Brain, Shield, Sparkles, CheckCircle, Star, Github, Play, Figma, FileCode, Layers, MonitorSpeaker, Mail, User, ExternalLink, Download, BookOpen, MessageCircle, RefreshCw, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
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
  
  const useCases = [
    {
      id: 1,
      title: "E-commerce Product Card",
      description: "Convert product cards from Figma to React components",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }, {
      id: 2,
      title: "Dashboard Layout",
      description: "Transform complex dashboard designs into responsive layouts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }, {
      id: 3,
      title: "Mobile App Interface",
      description: "Convert mobile designs to responsive web components",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    }, {
      id: 4,
      title: "Form Components",
      description: "Generate form components with validation and styling",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    }, {
      id: 5,
      title: "Navigation Menu",
      description: "Create responsive navigation from design mockups",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    }, {
      id: 6,
      title: "Hero Section",
      description: "Transform landing page heroes into pixel-perfect code",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }, {
      id: 7,
      title: "Card Grid Layout",
      description: "Generate responsive card grids from Figma designs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }, {
      id: 8,
      title: "Profile Components",
      description: "Convert user profile designs to interactive components",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      designImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
      codeImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    }
  ];
  
  const teamMembers = [{
    name: "Jingxia",
    role: "Founder&CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "jingxia@codeagent.com"
  }, {
    name: "He Zhang",
    role: "AI Engineer",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICgxKS5wbmciLCJpYXQiOjE3NDg0MjQxOTcsImV4cCI6MTc3OTk2MDE5N30.1qRKu2akF6fRfkho3rwlA1evoLzxav33-B_f7eQVxPs",
    email: "alex@codeagent.com"
  }, {
    name: "Chenjian",
    role: "AI Engineer",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(2).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICgyKS5wbmciLCJpYXQiOjE3NDg0MjQyNTIsImV4cCI6MTc3OTk2MDI1Mn0.-9B0j5Fci1Z0C9-XLfuJfJJDKXXaaJ2gAvQuRcojbcA",
    email: "sarah@codeagent.com"
  }, {
    name: "Suki",
    role: "Product Manager",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(5).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICg1KS5wbmciLCJpYXQiOjE3NDg0MjQ3NDcsImV4cCI6MTc3OTk2MDc0N30.S0wUJrfushiWuV4GCrJ3s6d3vLYDJqVW4Giso_tmaJA",
    email: "mike@codeagent.com"
  }, {
    name: "Tao Li",
    role: "AI Engineer",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(3).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICgzKS5wbmciLCJpYXQiOjE3NDg0MjQ4OTQsImV4cCI6MTc3OTk2MDg5NH0.sSKCvaQXVNHz8wG-wdZvuy9XNw62IkIwwY1ktDw4xTs",
    email: "emily@codeagent.com"
  }, {
    name: "Hailei",
    role: "AI Engineer",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(4).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICg0KS5wbmciLCJpYXQiOjE3NDg0MjQyODAsImV4cCI6MTc3OTk2MDI4MH0.ZeCUsJMSAv2sH-6oURrhkpmMkZhfUd8WL3kM9umyV7M",
    email: "david@codeagent.com"
  }, {
    name: "Linjun",
    role: "Lead Developer",
    image: "https://pczyevythzyvgtneuvmd.supabase.co/storage/v1/object/sign/teamavator/image%20(6).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzM2MmE0NTNmLTljMjItNDFiNS04OTJjLTllOWQxMzc0MzI2MiJ9.eyJ1cmwiOiJ0ZWFtYXZhdG9yL2ltYWdlICg2KS5wbmciLCJpYXQiOjE3NDg0MjUwMjksImV4cCI6MTc3OTk2MTAyOX0.oNHixoqzppvUQYkHJqT-h69qNhNY5rwDu5HA5rjttEU",
    email: "lisa@codeagent.com"
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
          
          <div className="space-y-16">
            {/* Feature 1: AI-Powered Figma to Code */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">AI-Powered Figma to Code</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Skip the manual slicing. Get pixel-perfect UI components from design to code automatically. 
                  Our advanced AI understands design patterns and generates clean, maintainable code that matches your design exactly.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop" alt="AI-powered code generation" className="w-full h-80 object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Feature 2: Web UI to Web UI2 Migration */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Web UI to Web UI2 Migration</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Seamlessly upgrade your existing Web UI components to Web UI2. Our intelligent migration tool 
                  analyzes your current codebase and automatically converts components while preserving functionality and improving performance.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" alt="Code migration process" className="w-full h-80 object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Feature 3: Production Quality Output */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Production Quality Output</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Clean, maintainable code you'll actually use. Push it straight to your repository. 
                  Every component follows best practices and is optimized for performance, accessibility, and maintainability.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" alt="Production quality code" className="w-full h-80 object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Feature 4: Intelligent Code Analysis */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Intelligent Code Analysis</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our AI understands your existing codebase structure and patterns. Whether converting designs or migrating code, 
                  it maintains consistency with your project's architecture and coding standards.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="Code analysis" className="w-full h-80 object-cover rounded-xl shadow-lg" />
              </div>
            </div>

            {/* Feature 5: Multi-Framework Support */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Multi-Framework Support</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Support for React, Web UI, and Web UI2 out of the box. Next.js support coming soon. 
                  Generate components that work seamlessly with your preferred framework and tooling setup.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" alt="Framework support" className="w-full h-80 object-cover rounded-xl shadow-lg" />
              </div>
            </div>
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
            {useCases.map(useCase => <Card key={useCase.id} className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-gray-900">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to get started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to start converting your Figma designs to code and migrating your components
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Install FSD CLI</h3>
                  <p className="text-gray-600 mb-4">
                    Download and install the FSD command-line tool to get started with design conversion and code migration.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 text-sm font-mono">
                    <div className="flex items-center space-x-2 mb-2">
                      <Download className="w-4 h-4" />
                      <span>Install FSD CLI</span>
                    </div>
                    <p>npm install -g fsd-cli</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Connect Your Figma Account</h3>
                  <p className="text-gray-600 mb-4">
                    Authenticate with Figma to access your design files for automatic code conversion.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 text-sm font-mono">
                    <div className="flex items-center space-x-2 mb-2">
                      <Figma className="w-4 h-4" />
                      <span>Figma Integration</span>
                    </div>
                    <p>fsd auth figma</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Convert & Migrate</h3>
                  <p className="text-gray-600 mb-4">
                    Convert Figma designs to code or migrate existing Web UI components to Web UI2 with simple commands.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 text-green-400 text-sm font-mono">
                    <div className="flex items-center space-x-2 mb-2">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>Convert & Migrate</span>
                    </div>
                    <p>fsd convert --design button.figma</p>
                    <p>fsd migrate --from webui --to webui2</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4">
                <Button className="bg-black hover:bg-gray-800 text-white">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Read Full Documentation
                </Button>
                <Button variant="outline">
                  <Play className="mr-2 w-4 h-4" />
                  Watch Tutorial
                </Button>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-16">
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
