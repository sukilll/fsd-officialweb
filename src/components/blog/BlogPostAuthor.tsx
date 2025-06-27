
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import { BlogPost } from "@/types/blog";

interface BlogPostAuthorProps {
  post: BlogPost;
}

const BlogPostAuthor = ({ post }: BlogPostAuthorProps) => {
  return (
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
  );
};

export default BlogPostAuthor;
