
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "FSD产品正式发布：AI驱动的设计到代码转换",
    description: "我们很兴奋地宣布FSD产品的正式发布，这是一个革命性的工具，能够将Figma设计快速转换为高质量的代码。",
    date: "2024-06-25",
    readTime: "5分钟",
    category: "产品发布",
    slug: "fsd-product-launch"
  },
  {
    id: 2,
    title: "Web UI到Web UI2迁移指南",
    description: "详细介绍如何使用FSD工具将现有的Web UI项目平滑迁移到最新的Web UI2框架。",
    date: "2024-06-20",
    readTime: "8分钟",
    category: "技术教程",
    slug: "web-ui-migration-guide"
  },
  {
    id: 3,
    title: "AI代码生成的未来趋势",
    description: "探讨人工智能在代码生成领域的发展趋势，以及它如何改变开发者的工作方式。",
    date: "2024-06-15",
    readTime: "6分钟",
    category: "行业洞察",
    slug: "ai-code-generation-trends"
  },
  {
    id: 4,
    title: "提高开发效率的10个最佳实践",
    description: "分享提高前端开发效率的实用技巧和最佳实践，帮助开发者更快地构建高质量应用。",
    date: "2024-06-10",
    readTime: "7分钟",
    category: "开发技巧",
    slug: "development-best-practices"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FSD 博客
          </h1>
          <p className="text-xl text-gray-600">
            了解最新的技术动态、产品更新和开发经验分享
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                  >
                    阅读更多
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
