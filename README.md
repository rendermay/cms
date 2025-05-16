# Strapi + Next.js 博客系统

这是一个基于Strapi（无头CMS）和Next.js构建的现代化个人博客系统，具有高性能、SEO友好的特点。

## 项目结构

项目分为两个主要部分：

- `server/`: Strapi后端，负责内容管理和API提供
- `web/`: Next.js前端，负责内容展示和用户交互

## 环境要求

- Node.js >= 18.0.0
- npm >= 6.0.0

## 快速开始

### 启动Strapi后端

```bash
cd server
npm install
npm run develop
```

Strapi管理面板将在 http://localhost:1337/admin 上运行

### 启动Next.js前端

```bash
cd web
npm install
npm run dev
```

前端应用将在 http://localhost:3000 上运行

## 解决字体加载问题

项目中出现的字体加载错误（`Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'`）已通过以下方式解决：

1. 在`web/package.json`中移除了Turbopack，将开发脚本从`"dev": "next dev --turbopack"`修改为`"dev": "next dev"`
2. 确保使用兼容的Next.js版本

## 内容模型

### 文章 (Article)

- 标题 (title): 字符串，必填
- 摘要 (excerpt): 文本，必填
- 别名 (slug): 自动生成的URL友好标识符
- 内容 (content): 富文本编辑器 (CKEditor)
- 封面图 (cover): 媒体，图片
- 浏览量 (view_count): 整数
- 评论数 (comment_count): 整数
- 发布日期 (push_date): 日期
- 作者 (author): 与Author的多对一关系
- 分类 (category): 与Category的一对一关系
- 标签 (tag): 与Tag的一对一关系

### 作者 (Author)

- 姓名 (name)
- 头像 (avatar)
- 简介 (bio)
- 文章 (articles): 与Article的一对多关系

### 分类 (Category)

- 名称 (name)
- 别名 (slug)

### 标签 (Tag)

- 名称 (name)
- 别名 (slug)

## GraphQL API

Strapi已配置GraphQL插件，可以通过以下端点访问：

- GraphQL端点: http://localhost:1337/graphql
- GraphQL Playground (开发环境): http://localhost:1337/graphql

## 前端功能

- 文章列表页，支持分页和按分类/标签筛选
- 文章详情页，支持增量静态再生(ISR)
- 响应式设计，适配各种设备
- SEO优化，包括元数据和OpenGraph标签

## 部署建议

### Strapi后端

- 推荐使用云服务如Heroku、DigitalOcean或AWS
- 数据库可使用PostgreSQL（已配置）
- 媒体文件存储可使用AWS S3或其他云存储服务

### Next.js前端

- 推荐部署到Vercel平台
- 配置环境变量指向Strapi API
- 启用Vercel Edge缓存以提高性能

## 开发指南

### 添加新的内容类型

1. 在Strapi管理面板中创建新的内容类型
2. 配置字段和关系
3. 设置适当的权限
4. 在Next.js中创建对应的页面和组件

### 自定义前端样式

项目使用Tailwind CSS进行样式管理，可以通过修改`tailwind.config.ts`进行自定义。

## 注意事项

- 确保在生产环境中设置适当的环境变量
- 定期备份数据库
- 遵循Strapi和Next.js的最佳实践

## 许可证

MIT