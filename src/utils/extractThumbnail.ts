
export const extractFirstImageFromMarkdown = (content: string): string | null => {
  // 匹配 Markdown 图片语法: ![alt](url)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = content.match(imageRegex);
  
  if (match && match[1]) {
    const imageUrl = match[1].trim();
    // 如果是相对路径，需要转换为完整的 Supabase URL
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    } else {
      // 假设图片已经上传到 Supabase Storage
      return `https://xgforkvofgdxvngaqalj.supabase.co/storage/v1/object/public/article/${imageUrl}`;
    }
  }
  
  return null;
};
