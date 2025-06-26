import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">FSD</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              博客
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              功能
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI驱动的设计到代码转换
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              使用FSD产品，将您的Figma设计快速转换为高质量的代码。
            </p>
            <div className="flex space-x-4">
              <a
                href="#get-started"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                开始使用
              </a>
              <a
                href="#learn-more"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors"
              >
                了解更多
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="FSD Product"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            产品特性
          </h2>
          <p className="text-xl text-gray-600">
            FSD产品提供了一系列强大的特性，帮助您更快地构建高质量的应用。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              AI驱动的转换
            </h3>
            <p className="text-gray-600">
              使用先进的人工智能技术，自动将Figma设计转换为可用的代码。
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              多框架支持
            </h3>
            <p className="text-gray-600">
              支持React、Vue、Angular等主流前端框架。
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              生产级质量
            </h3>
            <p className="text-gray-600">
              生成的代码符合行业标准，可直接用于生产环境。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-600">
            有任何问题或建议，请随时与我们联系。
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                姓名
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="您的姓名"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                邮箱
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="您的邮箱"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                留言
              </label>
              <textarea
                id="message"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="您的留言"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                发送
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 FSD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
