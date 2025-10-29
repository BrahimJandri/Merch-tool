import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
                Find Winning Products
                <span className="block text-blue-600">Before Your Competition</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Discover trending products, analyze keywords, and check trademarks
                with our powerful merchandise research tool
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Link
                  href="/auth/signup"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/auth/signin"
                  className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:bg-gray-900 md:py-4 md:text-lg md:px-10"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Everything you need to succeed
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                Powerful tools to help you find and validate profitable products
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Product Search</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Search across multiple platforms including Amazon, Etsy, and Redbubble to find trending products
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Trend Analysis</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Identify emerging trends and seasonal patterns to stay ahead of the market
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Keyword Research</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Find high-volume, low-competition keywords to optimize your product listings
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Trademark Checker</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Verify trademark status to avoid legal issues before launching your products
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Analytics Dashboard</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Track your research history and saved products with comprehensive analytics
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Fast & Reliable</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Lightning-fast searches with real-time data from multiple sources
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-blue-200">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white dark:bg-gray-800 hover:bg-blue-50"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
