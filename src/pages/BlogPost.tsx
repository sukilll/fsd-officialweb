
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import Navigation from "@/components/Navigation";
import ReactMarkdown from 'react-markdown';

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
      if (!slug) throw new Error('Article slug is missing');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error('Article not found');
      
      return data as BlogPost;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="animate-pulse">
              <div className="h-4 bg-gray-100 rounded w-24 mb-8"></div>
              <div className="h-16 bg-gray-100 rounded w-full mb-8"></div>
              <div className="h-6 bg-gray-100 rounded w-32 mb-12"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 bg-gray-100 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-black mb-4">Article Not Found</h1>
              <p className="text-gray-600 text-lg">Sorry, the article you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Navigation */}
          <div className="mb-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white">
            <header className="text-center mb-16">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mb-8">
                  <Badge 
                    variant="secondary" 
                    className="bg-black text-white hover:bg-gray-800 px-4 py-1 text-sm font-medium rounded-full"
                  >
                    {post.tags[0]}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8 max-w-4xl mx-auto">
                {post.title}
              </h1>

              {/* Date */}
              <div className="text-gray-600 text-lg mb-12">
                {format(new Date(post.published_at), 'yyyy年M月d日')}
              </div>

              {/* CTA Button */}
              <div className="mb-16">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Read the paper
                </button>
              </div>
            </header>

            {/* Author Info */}
            <div className="flex items-center justify-center mb-16 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.author_avatar || undefined} />
                  <AvatarFallback className="bg-black text-white font-medium">
                    {post.author_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-medium text-black">{post.author_name}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(new Date(post.published_at), 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.reading_time} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content with ReactMarkdown */}
            <div className="prose prose-lg prose-gray max-w-none">
              <ReactMarkdown
                className="text-gray-800 leading-relaxed"
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-12 mb-6 text-black">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium mt-8 mb-3 text-black">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-6 text-gray-700 leading-relaxed text-lg">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 leading-relaxed">{children}</li>
                  ),
                  img: ({ src, alt }) => (
                    <img 
                      src={src} 
                      alt={alt} 
                      className="w-full h-auto rounded-lg shadow-sm my-8"
                    />
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-6 py-2 my-6 italic text-gray-600">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a 
                      href={href} 
                      className="text-black underline hover:text-gray-600 transition-colors"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Footer Navigation */}
          <div className="mt-20 pt-12 border-t border-gray-200 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-medium text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              View More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
