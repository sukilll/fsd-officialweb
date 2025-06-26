
-- 创建博客文章表
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  author_avatar TEXT,
  slug TEXT UNIQUE NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_published BOOLEAN DEFAULT true,
  tags TEXT[] DEFAULT '{}'::TEXT[],
  excerpt TEXT,
  reading_time INTEGER DEFAULT 0
);

-- 创建索引以提高查询性能
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published);

-- 启用行级安全性
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 创建策略允许所有人查看已发布的博客文章
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (is_published = true);

-- 插入一些示例博客文章
INSERT INTO public.blog_posts (title, content, author_name, author_email, slug, excerpt, reading_time) VALUES
(
  'FSD产品发布：设计到代码的智能转换',
  '# FSD产品正式发布

我们很高兴地宣布FSD产品的正式发布！FSD是一个革命性的工具，它将设计师和开发者之间的工作流程完全改变。

## 主要功能

### Figma到代码的智能转换
通过AI技术，FSD能够自动将Figma设计文件转换为高质量的代码，支持多种前端框架。

### Web UI到Web UI2的迁移
我们最新推出的迁移功能，帮助开发者轻松地将现有的Web UI代码迁移到新的UI框架。

### 生产级代码质量
生成的代码不仅功能完整，而且遵循最佳实践，可以直接用于生产环境。

## 技术优势

FSD采用了最先进的AI技术，能够理解设计意图，生成语义化的代码结构。同时，我们的迁移引擎能够智能分析现有代码结构，提供无缝的迁移方案。

欢迎体验FSD，让设计到代码的转换变得前所未有的简单！',
  'FSD团队',
  'team@fsd.com',
  'fsd-product-launch',
  '我们很高兴地宣布FSD产品的正式发布！FSD是一个革命性的工具，它将设计师和开发者之间的工作流程完全改变。',
  5
),
(
  '如何使用FSD进行Figma到React的转换',
  '# 从Figma到React：FSD实践指南

在现代前端开发中，将设计稿转换为代码是一个常见但繁琐的任务。FSD让这个过程变得简单而高效。

## 准备工作

首先，确保你的Figma设计文件结构清晰，组件命名规范。这将帮助FSD更好地理解设计意图。

### 设计文件要求
- 使用Auto Layout
- 合理的图层命名
- 组件化设计

## 转换步骤

1. **上传设计文件**：将Figma文件链接输入到FSD平台
2. **选择框架**：选择React作为目标框架
3. **配置选项**：设置样式系统（CSS Modules、Styled Components等）
4. **生成代码**：点击转换按钮，等待AI处理
5. **预览和调整**：在线预览生成的组件，进行必要的调整

## 最佳实践

为了获得最佳的转换效果，建议遵循以下最佳实践：

- 保持设计的一致性
- 使用标准的设计规范
- 适当使用Figma的组件功能

通过FSD，你可以将设计转换时间从几天缩短到几分钟！',
  '李小明',
  'xiaoming@fsd.com',
  'figma-to-react-guide',
  '在现代前端开发中，将设计稿转换为代码是一个常见但繁琐的任务。FSD让这个过程变得简单而高效。',
  8
),
(
  'Web UI迁移：从旧框架到新框架的无缝过渡',
  '# Web UI迁移指南

随着前端技术的快速发展，许多项目面临着UI框架升级的需求。FSD的迁移功能让这个过程变得轻松愉快。

## 支持的迁移路径

目前FSD支持以下迁移路径：
- Web UI → Web UI2
- Bootstrap → Tailwind CSS
- Material-UI → Ant Design

## 迁移流程

### 1. 代码分析
FSD首先会分析你的现有代码结构，识别组件、样式和依赖关系。

### 2. 智能转换
基于分析结果，AI引擎会生成对应的新框架代码，保持功能完整性。

### 3. 兼容性检查
自动检查转换后的代码是否存在兼容性问题，并提供修复建议。

### 4. 渐进式迁移
支持渐进式迁移，你可以逐步替换组件，降低风险。

## 注意事项

- 备份原始代码
- 充分测试迁移后的功能
- 关注性能变化

迁移不再是痛苦的过程，而是技术升级的机会！',
  '王大华',
  'dahua@fsd.com',
  'web-ui-migration-guide',
  '随着前端技术的快速发展，许多项目面临着UI框架升级的需求。FSD的迁移功能让这个过程变得轻松愉快。',
  6
);
