import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think技术博客",
  description: "基于Strapi和Next.js构建的个人博客系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="header-banner">
          <div className="container-width">
            <div className="logo-container">
              <div className="logo">
                <Image src="/logo.png" alt="Logo" width={200} height={120} />
              </div>
            </div>
            <nav className="menu">
              <div className="menu-item">
                <Link href="/news" className="text-white hover:text-gray-200">
                  科技资讯
                </Link>
              </div>
              <div className="menu-item">
                <Link href="/tutorials" className="text-white hover:text-gray-200">
                  技术教程
                </Link>
              </div>
              <div className="menu-item">
                <Link href="/maintenance" className="text-white hover:text-gray-200">
                  运行维护
                </Link>
              </div>
              <div className="menu-item">
                <Link href="/ai" className="text-white hover:text-gray-200">
                  人工智能
                </Link>
              </div>
              <div className="menu-item">
                <Link href="/database" className="text-white hover:text-gray-200">
                  数据库
                </Link>
              </div>
              <div className="menu-item">
                <Link href="/software" className="text-white hover:text-gray-200">
                  精品软件
                </Link>
              </div>
            </nav>
            <div className="clearfix"></div>
            <div className="lead-title">Actions speak louder than words</div>
            <div className="sub-lead-title">真正的成长，始于沉默的行动，而非喧嚣的言语。与其耗费精力解释梦想，不如用汗水浇筑它的地基；与其在空谈中自我感动，不如在实干中突破极限。</div>
            <div className="lead-btn">
              <Link href="/contact" className="text-white hover:text-gray-200">
                联系我
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-800 text-white py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">关于博客</h3>
                <p className="text-gray-300 text-sm">这是一个基于Strapi和Next.js构建的个人博客系统，专注于分享技术内容和个人见解。</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">快速链接</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
                  <li><Link href="/articles" className="hover:text-white transition-colors">文章</Link></li>
                  <li><Link href="/categories" className="hover:text-white transition-colors">分类</Link></li>
                  <li><Link href="/tags" className="hover:text-white transition-colors">标签</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">订阅更新</h3>
                <p className="text-gray-300 text-sm mb-4">订阅我们的通讯，获取最新文章和独家内容</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="您的邮箱" 
                    className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r transition-colors">
                    订阅
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} 个人博客系统. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
