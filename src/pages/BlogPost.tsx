
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_email: string | null;
  author_avatar: string | null;
  published_at: string;
  updated_at: string;
  reading_time: number;
  slug: string;
  tags: string[];
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) throw new Error('文章标识符缺失');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error('文章未找到');
      
      return data as BlogPost;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回博客列表
            </Link>
          </div>
          
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回博客列表
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">文章未找到</h1>
            <p className="text-gray-600">抱歉，您访问的文章不存在或已被删除。</p>
          </div>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering function
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-800">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-medium mt-4 mb-2 text-gray-700">{line.slice(4)}</h3>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1 text-gray-700">{line.slice(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回博客列表
          </Link>
        </div>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-8">
            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.author_avatar || undefined} />
                  <AvatarFallback>
                    {post.author_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900">{post.author_name}</p>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
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
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed">
              {renderContent(post.content)}
            </div>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            查看更多文章
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
