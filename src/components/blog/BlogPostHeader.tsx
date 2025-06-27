
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
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
  );
};

export default BlogPostHeader;
