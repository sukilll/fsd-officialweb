
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Brain, Shield, Sparkles, CheckCircle, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CodeAgent</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">功能特性</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">定价</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">关于我们</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                登录
              </Button>
              <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white">
                开始使用
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm gradient-border">
            <Sparkles className="w-4 h-4 mr-2" />
            AI 驱动的编程助手
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            下一代
            <span className="gradient-text block">智能编程助手</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            CodeAgent 是一个革命性的 AI 编程助手，能够理解你的代码、优化性能、自动生成文档，让编程变得更加高效和智能。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8 py-4 text-lg animate-glow">
              免费开始使用
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              观看演示
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-violet-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-green-400 text-sm">
{`// CodeAgent 自动生成的优化代码
function optimizedSort(arr) {
  // AI 分析: 使用快速排序算法
  // 时间复杂度: O(n log n)
  return arr.sort((a, b) => a - b);
}

// 自动生成的文档注释
/**
 * 高效排序函数
 * @param {Array} arr - 待排序数组
 * @returns {Array} 排序后的数组
 */`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              强大的功能特性
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CodeAgent 集成了最先进的 AI 技术，为开发者提供全方位的编程支持
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 group animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">智能代码分析</CardTitle>
                <CardDescription>
                  AI 深度理解你的代码结构，提供智能建议和优化方案
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 group animate-slide-up [animation-delay:200ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">自动代码生成</CardTitle>
                <CardDescription>
                  根据自然语言描述自动生成高质量、可维护的代码
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 group animate-slide-up [animation-delay:400ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">安全性检测</CardTitle>
                <CardDescription>
                  实时检测代码安全漏洞，提供修复建议和最佳实践
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              选择适合你的方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从个人开发者到企业团队，我们都有合适的方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">免费版</CardTitle>
                <CardDescription>适合个人学习和小项目</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">¥0</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>每月 1000 次 AI 查询</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>基础代码分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>社区支持</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  开始使用
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative border-2 border-violet-200 shadow-xl">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
                <Star className="w-4 h-4 mr-1" />
                推荐
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">专业版</CardTitle>
                <CardDescription>适合专业开发者和团队</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold gradient-text">¥99</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>无限次 AI 查询</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>高级代码分析</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>自动文档生成</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>优先客户支持</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white">
                  立即订阅
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">企业版</CardTitle>
                <CardDescription>适合大型团队和企业</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">¥299</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>专业版所有功能</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>团队协作工具</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>私有部署选项</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>7x24 专属支持</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  联系销售
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            准备好提升你的编程效率了吗？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            加入数万名开发者，体验 AI 编程的魅力
          </p>
          <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg">
            免费开始使用
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CodeAgent</span>
              </div>
              <p className="text-gray-400">
                智能编程助手，让编程变得更简单
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#" className="hover:text-white transition-colors">定价</a></li>
                <li><a href="#" className="hover:text-white transition-colors">文档</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">博客</a></li>
                <li><a href="#" className="hover:text-white transition-colors">招聘</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">帮助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition-colors">状态页</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeAgent. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
