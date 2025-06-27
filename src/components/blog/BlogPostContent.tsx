
import ReactMarkdown from 'react-markdown';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <div className="text-gray-800 leading-relaxed">
        <ReactMarkdown
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
            code: ({ node, inline, ...props }: any) => {
              if (inline) {
                return (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 break-words">
                    {props.children}
                  </code>
                );
              }
              return (
                <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed whitespace-pre">
                  {props.children}
                </code>
              );
            },
            pre: ({ children }) => (
              <div className="my-6 rounded-lg overflow-hidden bg-gray-900">
                {children}
              </div>
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
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPostContent;
