
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Brain, Shield, Sparkles, CheckCircle, Star, Github, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">CodeAgent</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Docs</a>
              <a href="#company" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Company</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-8 px-4 py-2 text-sm border-gray-200 text-gray-700">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Development Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Ship code faster with
            <span className="block text-black">intelligent assistance</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            CodeAgent is the AI development platform that understands your code, optimizes performance, 
            and generates documentation automatically. Build better software, faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium">
              Start Building
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
                  <span className="text-gray-400 text-sm ml-4">CodeAgent Terminal</span>
                </div>
                <pre className="text-green-400 text-sm font-mono">
{`> codeagent analyze --optimize

📊 Analyzing codebase...
🚀 Performance improvements found
📝 Auto-generating documentation
✅ Code optimized successfully

Performance boost: +34%
Bundle size reduced: -28%
Documentation coverage: 100%`}
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
              Everything you need to build better
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CodeAgent integrates seamlessly into your workflow with powerful AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Intelligent Code Analysis</CardTitle>
                <CardDescription className="text-gray-600">
                  AI understands your codebase and provides smart suggestions for optimization and refactoring
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Auto Code Generation</CardTitle>
                <CardDescription className="text-gray-600">
                  Generate high-quality, maintainable code from natural language descriptions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Security Scanning</CardTitle>
                <CardDescription className="text-gray-600">
                  Real-time security vulnerability detection with automated fix suggestions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your team size and development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Free</CardTitle>
                <CardDescription className="text-gray-600">Perfect for individual developers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">1,000 AI queries/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic code analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Community support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-black shadow-xl bg-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Pro</CardTitle>
                <CardDescription className="text-gray-600">For professional developers and teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited AI queries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced code analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Auto documentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Enterprise</CardTitle>
                <CardDescription className="text-gray-600">For large teams and organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">On-premise deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to accelerate your development?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of developers who ship code faster with CodeAgent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Start Building Now
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
                <span className="text-xl font-semibold text-gray-900">CodeAgent</span>
              </div>
              <p className="text-gray-600 max-w-sm">
                The AI development platform that makes coding faster, smarter, and more efficient.
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
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
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
            <p className="text-gray-500">&copy; 2024 CodeAgent. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
