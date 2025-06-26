
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar, Mail } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  author_name: string;
  author_email: string;
  author_avatar: string;
  published_at: string;
  updated_at: string;
  reading_time: number;
  tags: string[];
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: blogPost, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (error) throw error;
      return data as BlogPostData;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mb-8"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
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

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">文章未找到</h1>
          <p className="text-gray-600 mb-8">抱歉，请求的文章不存在或已被删除。</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回博客列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // 简单的 Markdown 渲染函数
  const renderMarkdown = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // 标题处理
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mb-6 mt-8 text-gray-900">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mb-4 mt-6 text-gray-800">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mb-3 mt-5 text-gray-800">{line.slice(4)}</h3>;
        }
        
        // 列表处理
        if (line.startsWith('- ')) {
          return <li key={index} className="mb-2 text-gray-700">{line.slice(2)}</li>;
        }
        
        // 空行处理
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // 普通段落
        if (line.trim()) {
          return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{line}</p>;
        }
        
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* 返回按钮 */}
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          返回博客列表
        </Link>

        {/* 文章标题 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          {blogPost.title}
        </h1>

        {/* 文章元信息 */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700 font-medium">{blogPost.author_name}</span>
            {blogPost.author_email && (
              <a href={`mailto:${blogPost.author_email}`} className="text-blue-600 hover:text-blue-800">
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">
              {format(new Date(blogPost.published_at), 'yyyy年MM月dd日', { locale: zhCN })}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">{blogPost.reading_time} 分钟阅读</span>
          </div>
        </div>

        {/* 标签 */}
        {blogPost.tags && blogPost.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* 文章内容 */}
        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed">
            {renderMarkdown(blogPost.content)}
          </div>
        </div>

        {/* 更新时间 */}
        {blogPost.updated_at !== blogPost.published_at && (
          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
            最后更新：{format(new Date(blogPost.updated_at), 'yyyy年MM月dd日 HH:mm', { locale: zhCN })}
          </div>
        )}

        {/* 返回按钮 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              返回博客列表
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
