
import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = {
  "fsd-product-launch": {
    title: "FSD产品正式发布：AI驱动的设计到代码转换",
    date: "2024-06-25",
    readTime: "5分钟",
    category: "产品发布",
    content: `
      <p>我们很兴奋地宣布FSD产品的正式发布！这是一个革命性的工具，能够将Figma设计快速转换为高质量的代码。</p>
      
      <h2>主要特性</h2>
      <p>FSD产品具备以下核心功能：</p>
      <ul>
        <li><strong>AI驱动的Figma到代码转换</strong>：使用先进的人工智能技术，自动将Figma设计转换为可用的代码</li>
        <li><strong>Web UI到Web UI2迁移</strong>：帮助开发者轻松将现有项目迁移到最新框架</li>
        <li><strong>生产级质量输出</strong>：生成的代码符合行业标准，可直接用于生产环境</li>
        <li><strong>多框架支持</strong>：支持React、Vue、Angular等主流前端框架</li>
      </ul>
      
      <h2>使用场景</h2>
      <p>FSD产品特别适合以下场景：</p>
      <ul>
        <li>快速原型开发</li>
        <li>设计系统实现</li>
        <li>遗留代码现代化</li>
        <li>跨平台应用开发</li>
      </ul>
      
      <h2>开始使用</h2>
      <p>现在就可以开始使用FSD产品，体验AI驱动的开发流程。我们提供详细的文档和示例，帮助您快速上手。</p>
    `
  },
  "web-ui-migration-guide": {
    title: "Web UI到Web UI2迁移指南",
    date: "2024-06-20",
    readTime: "8分钟",
    category: "技术教程",
    content: `
      <p>本指南将详细介绍如何使用FSD工具将现有的Web UI项目平滑迁移到最新的Web UI2框架。</p>
      
      <h2>迁移前准备</h2>
      <p>在开始迁移之前，请确保您已经：</p>
      <ul>
        <li>备份现有项目代码</li>
        <li>了解Web UI2的新特性</li>
        <li>准备测试环境</li>
      </ul>
      
      <h2>迁移步骤</h2>
      <h3>1. 项目分析</h3>
      <p>首先，FSD工具会分析您的现有项目结构，识别需要迁移的组件和依赖关系。</p>
      
      <h3>2. 自动转换</h3>
      <p>工具会自动将旧版本的组件转换为Web UI2兼容的格式，包括：</p>
      <ul>
        <li>组件API更新</li>
        <li>样式迁移</li>
        <li>依赖项升级</li>
      </ul>
      
      <h3>3. 手动调整</h3>
      <p>某些复杂的自定义组件可能需要手动调整，我们提供详细的迁移指南。</p>
      
      <h2>常见问题</h2>
      <p>在迁移过程中，您可能遇到以下问题：</p>
      <ul>
        <li>样式不兼容：检查CSS变量和主题配置</li>
        <li>组件行为差异：参考Web UI2文档进行调整</li>
        <li>性能问题：优化组件渲染和状态管理</li>
      </ul>
    `
  },
  "ai-code-generation-trends": {
    title: "AI代码生成的未来趋势",
    date: "2024-06-15",
    readTime: "6分钟",
    category: "行业洞察",
    content: `
      <p>人工智能在代码生成领域正在快速发展，让我们探讨一下这个领域的未来趋势。</p>
      
      <h2>当前发展状况</h2>
      <p>目前AI代码生成工具已经能够：</p>
      <ul>
        <li>根据自然语言描述生成代码</li>
        <li>自动完成代码片段</li>
        <li>进行代码重构和优化</li>
        <li>生成测试用例</li>
      </ul>
      
      <h2>未来趋势</h2>
      <h3>1. 更智能的上下文理解</h3>
      <p>未来的AI工具将能更好地理解项目上下文，生成更符合项目架构和编码标准的代码。</p>
      
      <h3>2. 多模态输入支持</h3>
      <p>除了文本描述，AI将能够处理设计图、流程图等多种输入形式。</p>
      
      <h3>3. 实时协作</h3>
      <p>AI将成为开发团队的智能助手，实时提供代码建议和优化方案。</p>
      
      <h2>对开发者的影响</h2>
      <p>这些趋势将带来以下变化：</p>
      <ul>
        <li>开发效率大幅提升</li>
        <li>代码质量更加一致</li>
        <li>开发者可专注于架构设计</li>
        <li>学习曲线降低</li>
      </ul>
    `
  },
  "development-best-practices": {
    title: "提高开发效率的10个最佳实践",
    date: "2024-06-10",
    readTime: "7分钟",
    category: "开发技巧",
    content: `
      <p>分享提高前端开发效率的实用技巧和最佳实践，帮助开发者更快地构建高质量应用。</p>
      
      <h2>1. 使用组件库</h2>
      <p>选择合适的组件库可以显著提高开发效率，减少重复开发工作。</p>
      
      <h2>2. 自动化测试</h2>
      <p>建立完善的自动化测试体系，包括单元测试、集成测试和端到端测试。</p>
      
      <h2>3. 代码复用</h2>
      <p>提取公共逻辑为可复用的hooks和工具函数。</p>
      
      <h2>4. 性能优化</h2>
      <p>使用代码分割、懒加载等技术优化应用性能。</p>
      
      <h2>5. 版本控制</h2>
      <p>使用Git进行版本控制，建立清晰的分支策略。</p>
      
      <h2>6. 文档维护</h2>
      <p>保持代码和API文档的及时更新。</p>
      
      <h2>7. 持续集成</h2>
      <p>建立CI/CD流水线，自动化构建和部署过程。</p>
      
      <h2>8. 代码审查</h2>
      <p>实施代码审查制度，确保代码质量。</p>
      
      <h2>9. 工具链优化</h2>
      <p>选择合适的开发工具和编辑器插件。</p>
      
      <h2>10. 持续学习</h2>
      <p>关注技术发展趋势，不断学习新技术和最佳实践。</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            返回博客首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回博客
        </Link>

        {/* Article Header */}
        <Card className="bg-white/80 backdrop-blur-sm mb-8">
          <CardContent className="p-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
