'use client'

import { useState, useEffect } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'
import TrendChart from '@/components/TrendChart'

interface TrendItem {
  name: string
  category: string
  growth: number
  searches: number
  platforms: string[]
}

export default function Trends() {
  const [timeframe, setTimeframe] = useState('week')
  const [category, setCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  
  const [trendingItems, setTrendingItems] = useState<TrendItem[]>([
    { name: 'Retro Gaming', category: 'T-Shirts', growth: 145, searches: 28500, platforms: ['Amazon', 'Etsy'] },
    { name: 'Minimalist Art', category: 'Posters', growth: 98, searches: 18200, platforms: ['Redbubble', 'Etsy'] },
    { name: 'Cat Lover Quotes', category: 'Mugs', growth: 76, searches: 15800, platforms: ['Amazon', 'Teespring'] },
    { name: 'Vintage Travel', category: 'Hoodies', growth: 62, searches: 12400, platforms: ['Etsy'] },
    { name: 'Motivational Fitness', category: 'T-Shirts', growth: 54, searches: 9800, platforms: ['Amazon'] },
  ])

  const [chartData, setChartData] = useState([
    { date: '2024-01-01', value: 1200 },
    { date: '2024-01-08', value: 1800 },
    { date: '2024-01-15', value: 2400 },
    { date: '2024-01-22', value: 3200 },
    { date: '2024-01-29', value: 4100 },
  ])

  useEffect(() => {
    fetchTrends()
  }, [timeframe, category])

  const fetchTrends = async () => {
    setLoading(true)
    // TODO: Implement API call
    setTimeout(() => setLoading(false), 1000)
  }

  const categories = ['All', 'T-Shirts', 'Hoodies', 'Mugs', 'Posters', 'Phone Cases', 'Stickers']

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Trend Analysis</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover what&apos;s trending in the merch world
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Timeframe
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="day">Last 24 Hours</option>
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat.toLowerCase())}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        category === cat.toLowerCase()
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trend Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Search Volume Trends</h2>
            <TrendChart data={chartData} />
          </div>

          {/* Trending Items */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold">🔥 Trending Now</h2>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Trend
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Growth
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Searches
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Platforms
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                    {trendingItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`text-2xl font-bold ${
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-gray-400' :
                              index === 2 ? 'text-orange-400' :
                              'text-gray-600 dark:text-gray-400'
                            }`}>
                              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span className="text-sm font-medium text-green-600">+{item.growth}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">{item.searches.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-1">
                            {item.platforms.map((platform) => (
                              <span
                                key={platform}
                                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
              <div className="space-y-3">
                {['T-Shirts', 'Hoodies', 'Mugs', 'Posters'].map((cat, index) => (
                  <div key={cat} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cat}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${100 - index * 20}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{100 - index * 20}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Emerging Trends</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">↗</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">AI-generated art designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">↗</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Sustainable materials messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">↗</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Nostalgic 90s themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">↗</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Mental health awareness</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Quick Insights</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-900">
                    <strong>Hot Tip:</strong> Retro gaming designs are up 145% this week
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-green-900">
                    <strong>Opportunity:</strong> Low competition in minimalist poster category
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm text-purple-900">
                    <strong>Alert:</strong> Valentine&apos;s Day trends starting to emerge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
