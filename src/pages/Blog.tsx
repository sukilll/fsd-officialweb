
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
              <h1 className="text-2xl font-bold text-red-600 mb-4">Loading Failed</h1>
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Blog
            </h1>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <Link to={`/blog/${featuredPost.slug}`}>
                <Card className="overflow-hidden border-0 shadow-none bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 min-h-[300px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-sm font-medium">Featured</span>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <div className="mb-4">
                        <Badge variant="secondary" className="text-xs mb-3">
                          {featuredPost.tags?.[0] || 'Featured'}
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
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
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Rss className="w-4 h-4" />
              <span className="text-sm">RSS</span>
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="h-full border-0 shadow-none bg-gray-50 hover:bg-gray-100 transition-all duration-300 group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
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
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
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
                          <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
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
