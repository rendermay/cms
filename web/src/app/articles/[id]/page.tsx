"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

// 定义文章接口
export interface Article {
  id: string;
  title: string;
  content: string;
  cover: any;
  publishedAt: Date;
}

// 定义Strapi URL
const STRAPI_URL = "http://localhost:1337";

export default function ArticleDetail() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // 获取文章详情
  const getArticle = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${STRAPI_URL}/api/articles/${params.id}?populate=*`);
      const data = await response.json();
      setArticle(data.data);
    } catch (error) {
      console.error("获取文章详情失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 格式化日期
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("zh-CN", options);
  };

  // 组件挂载时获取文章
  useEffect(() => {
    if (params.id) {
      getArticle();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center min-h-[60vh]">
        <p className="text-xl">加载中...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto p-6 flex flex-col justify-center items-center min-h-[60vh]">
        <p className="text-xl mb-4">文章不存在或已被删除</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Link href="/" className="text-blue-500 hover:text-blue-700 mb-6 inline-block">
        &larr; 返回文章列表
      </Link>
      
      <article className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        {article.cover && (
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              className="object-cover"
              src={STRAPI_URL + article.cover.url}
              alt={article.title}
              fill
              priority
            />
          </div>
        )}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            发布时间: {formatDate(article.publishedAt)}
          </p>
          
          <div className="prose max-w-none">
            {article.content}
          </div>
        </div>
      </article>
    </div>
  );
}