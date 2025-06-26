
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author_name: string;
  published_at: string;
  reading_time: number;
  slug: string;
  tags: string[];
}

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, author_name, published_at, reading_time, slug, tags')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>
          
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mb-12"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 border">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">加载失败</h1>
            <p className="text-gray-600">无法加载博客文章，请稍后重试。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            返回首页
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            FSD 博客
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索设计到代码转换的最新技术、最佳实践和产品更新
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts?.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 bg-white cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author_name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{format(new Date(post.published_at), 'yyyy年MM月dd日', { locale: zhCN })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.reading_time} 分钟阅读</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {blogPosts && blogPosts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">暂无博客文章</h2>
            <p className="text-gray-500">请稍后回来查看最新内容</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
