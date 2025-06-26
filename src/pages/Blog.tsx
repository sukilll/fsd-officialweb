import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, Rss } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Navigation from "@/components/Navigation";
import { useState } from "react";

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
  const [activeFilter, setActiveFilter] = useState('All Posts');
  
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

  const filters = ['All Posts', 'News', 'Company', 'Craft', 'Resources'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-lg h-80"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-black mb-4">Loading Failed</h1>
              <p className="text-gray-600">Unable to load blog posts. Please try again later.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts?.[0];
  const regularPosts = blogPosts?.slice(1) || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Blog
            </h1>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Link to={`/blog/${featuredPost.slug}`}>
                <Card className="overflow-hidden border border-gray-300 shadow-none bg-white hover:bg-gray-50 transition-all duration-300 group">
                  <div className="p-12">
                    <div className="mb-4">
                      <Badge variant="secondary" className="text-xs mb-3 bg-black text-white">
                        {featuredPost.tags?.[0] || 'Featured'}
                      </Badge>
                      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{format(new Date(featuredPost.published_at), 'MMM dd, yyyy').toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.reading_time} min read</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-black text-white shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
              <Rss className="w-4 h-4" />
              <span className="text-sm">RSS</span>
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="h-full border border-gray-300 shadow-none bg-white hover:bg-gray-50 transition-all duration-300 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </div>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {post.author_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{post.author_name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{format(new Date(post.published_at), 'MMM dd, yyyy').toUpperCase()}</span>
                        <span>{post.reading_time} min</span>
                      </div>
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5 bg-gray-100 text-black border border-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {blogPosts && blogPosts.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">No blog posts yet</h2>
              <p className="text-gray-500">Check back later for the latest content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
