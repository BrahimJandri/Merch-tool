'use client'

import { useState, useEffect } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import TrendChart from '@/components/TrendChart'
import ProductCard from '@/components/ProductCard'

export default function Dashboard() {
  const [products, setProducts] = useState([])
  const [trends, setTrends] = useState([])
  const [stats, setStats] = useState({
    totalSearches: 1247,
    savedProducts: 89,
    activeKeywords: 34,
    trendingItems: 156,
  })

  useEffect(() => {
    // Fetch initial data
    fetchTrendingProducts()
  }, [])

  const fetchTrendingProducts = async () => {
    // TODO: Implement API call
    console.log('Fetching trending products...')
  }

  const handleSearch = async (query: string) => {
    // TODO: Implement search
    console.log('Searching for:', query)
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white dark:text-white">Dashboard</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-gray-400">Welcome back! Here&apos;s what&apos;s happening with your research.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="bg-white dark:bg-gray-800 dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Searches</dt>
                      <dd className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.totalSearches}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-green-600">+12%</span>
                  <span className="text-gray-500 dark:text-gray-400"> from last month</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Saved Products</dt>
                      <dd className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.savedProducts}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-green-600">+5</span>
                  <span className="text-gray-500 dark:text-gray-400"> this week</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Active Keywords</dt>
                      <dd className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.activeKeywords}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-green-600">+8</span>
                  <span className="text-gray-500 dark:text-gray-400"> this month</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Trending Items</dt>
                      <dd className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.trendingItems}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-green-600">+23</span>
                  <span className="text-gray-500 dark:text-gray-400"> today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Quick Search</h2>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Search Activity</h2>
              <TrendChart data={trends} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 pb-3 border-b">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Product Search</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Searched for &quot;vintage t-shirts&quot;</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pb-3 border-b">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Product Saved</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Added &quot;Retro Graphic Tee&quot; to favorites</p>
                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pb-3 border-b">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Keyword Analysis</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Analyzed &quot;summer apparel&quot;</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Trademark Check</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified &quot;Cool Design Co&quot;</p>
                    <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm font-medium">New Search</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-sm font-medium">Analyze Keywords</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm font-medium">View Trends</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm font-medium">Check Trademark</span>
              </button>
            </div>
          </div>

          {/* Trending Products */}
          {products.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Trending Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product: any, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
