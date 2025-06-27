
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg prose-gray max-w-none">
      <div className="text-gray-800 leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // 标题样式
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-12 mb-6 text-black border-b border-gray-200 pb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium mt-8 mb-3 text-black">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-medium mt-6 mb-2 text-black">
                {children}
              </h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-base font-medium mt-4 mb-2 text-black">
                {children}
              </h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-sm font-medium mt-4 mb-2 text-black">
                {children}
              </h6>
            ),
            
            // 段落样式
            p: ({ children }) => (
              <p className="mb-6 text-gray-700 leading-relaxed text-lg">
                {children}
              </p>
            ),
            
            // 列表样式
            ul: ({ children }) => (
              <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-700">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-gray-700 leading-relaxed">
                {children}
              </li>
            ),
            
            // 强调样式
            strong: ({ children }) => (
              <strong className="font-semibold text-black">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-600">{children}</em>
            ),
            
            // 链接样式
            a: ({ href, children }) => (
              <a 
                href={href} 
                className="text-blue-600 underline hover:text-blue-800 transition-colors font-medium"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            
            // 图片样式
            img: ({ src, alt }) => (
              <div className="my-8">
                <img 
                  src={src} 
                  alt={alt || ''} 
                  className="w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                {alt && (
                  <p className="text-sm text-gray-500 text-center mt-2 italic">
                    {alt}
                  </p>
                )}
              </div>
            ),
            
            // 引用样式
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg">
                {children}
              </blockquote>
            ),
            
            // 水平分割线
            hr: () => (
              <hr className="my-12 border-t border-gray-300" />
            ),
            
            // 行内代码
            code: ({ children, className }) => {
              // 检查是否为代码块
              const isCodeBlock = className && className.startsWith('language-');
              
              if (isCodeBlock) {
                // 代码块处理
                const language = className?.replace('language-', '') || '';
                return (
                  <div className="my-6 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
                    {language && (
                      <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-mono border-b border-gray-700">
                        {language}
                      </div>
                    )}
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">
                        {children}
                      </code>
                    </pre>
                  </div>
                );
              } else {
                // 行内代码处理
                return (
                  <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border border-gray-200">
                    {children}
                  </code>
                );
              }
            },
            
            // 预格式化文本
            pre: ({ children }) => (
              <div className="my-6">
                {children}
              </div>
            ),
            
            // 表格样式
            table: ({ children }) => (
              <div className="my-8 overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-gray-200">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-gray-50">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 text-sm text-gray-700">
                {children}
              </td>
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
