
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BlogPostNavigationProps {
  variant?: 'header' | 'footer';
}

const BlogPostNavigation = ({ variant = 'header' }: BlogPostNavigationProps) => {
  if (variant === 'footer') {
    return (
      <div className="mt-20 pt-12 border-t border-gray-200 text-center">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-medium text-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-3" />
          View More Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>
    </div>
  );
};

export default BlogPostNavigation;
