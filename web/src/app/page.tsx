"use client"; // This is a client-side component

// Import React hooks and components
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define Article interface
export interface Article {
  id: string;
  title: string;
  content: string;
  cover: any;
  publishedAt: Date;
}

// Define Strapi URL
const STRAPI_URL = "http://localhost:1337";

export default function Home() {
  // Define articles state
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch articles
  const getArticles = async () => {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    setArticles(data.data);
  };

  // Format date
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Fetch articles on component mount
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="p-6">     
      <div className="container-width">
        <div className="cards">
          {articles.map((article) => (
            <div className="card" key={article.id} onClick={() => window.location.href = `/articles/${article.id}`}>
              <div className="card-header" style={{ 
                backgroundImage: article.cover ? `url(${STRAPI_URL + article.cover.url})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px'
              }}></div>
              <div className="card-body">
                <div className="card-title">{article.title}</div>
                <div className="card-desc">
                  {article.content.length > 100 
                    ? `${article.content.substring(0, 100)}...` 
                    : article.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
