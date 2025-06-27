
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import BlogPostNavigation from "@/components/blog/BlogPostNavigation";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostAuthor from "@/components/blog/BlogPostAuthor";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { BlogPost as BlogPostType } from "@/types/blog";

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
      
      return data as BlogPostType;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <BlogPostNavigation />
            
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
            <BlogPostNavigation />
            
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
          <BlogPostNavigation />

          <article className="bg-white">
            <BlogPostHeader post={post} />
            <BlogPostAuthor post={post} />
            <BlogPostContent content={post.content} />
          </article>

          <BlogPostNavigation variant="footer" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
