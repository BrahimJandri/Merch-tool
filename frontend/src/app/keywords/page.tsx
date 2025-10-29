'use client'

import { useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'

interface KeywordData {
  keyword: string
  searchVolume: number
  competition: string
  cpc: number
  trend: number
}

export default function Keywords() {
  const [keyword, setKeyword] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<KeywordData | null>(null)
  const [relatedKeywords, setRelatedKeywords] = useState<KeywordData[]>([])
  const [savedKeywords, setSavedKeywords] = useState<string[]>([])

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!keyword.trim()) return

    setAnalyzing(true)
    // TODO: Implement actual API call
    setTimeout(() => {
      setResults({
        keyword: keyword,
        searchVolume: 12500,
        competition: 'Medium',
        cpc: 1.25,
        trend: 15,
      })
      setRelatedKeywords([
        { keyword: 'vintage t-shirt design', searchVolume: 8900, competition: 'Low', cpc: 0.95, trend: 22 },
        { keyword: 'retro shirt graphics', searchVolume: 6700, competition: 'Medium', cpc: 1.15, trend: -5 },
        { keyword: 'classic tee prints', searchVolume: 5400, competition: 'High', cpc: 1.80, trend: 8 },
      ])
      setAnalyzing(false)
    }, 1500)
  }

  const saveKeyword = (kw: string) => {
    if (!savedKeywords.includes(kw)) {
      setSavedKeywords([...savedKeywords, kw])
    }
  }

  const getCompetitionColor = (competition: string) => {
    switch (competition.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'high': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-100'
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Keyword Analysis</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Discover high-performing keywords for your merch designs
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <form onSubmit={handleAnalyze} className="flex gap-4">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter a keyword to analyze (e.g., 'vintage t-shirts')"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={analyzing}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {analyzing ? 'Analyzing...' : 'Analyze'}
              </button>
            </form>
          </div>

          {/* Results */}
          {results && (
            <>
              {/* Main Keyword Stats */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{results.keyword}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Keyword Performance Metrics</p>
                  </div>
                  <button
                    onClick={() => saveKeyword(results.keyword)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-900 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    Save Keyword
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">{results.searchVolume.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Monthly Searches</div>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCompetitionColor(results.competition)}`}>
                      {results.competition}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Competition</div>
                  </div>

                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">${results.cpc.toFixed(2)}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg. CPC</div>
                  </div>

                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className={`text-3xl font-bold ${results.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {results.trend >= 0 ? '+' : ''}{results.trend}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Trend</div>
                  </div>
                </div>
              </div>

              {/* Related Keywords */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
                <h2 className="text-xl font-semibold mb-4">Related Keywords</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Keyword
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Search Volume
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Competition
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          CPC
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Trend
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                      {relatedKeywords.map((kw, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{kw.keyword}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">{kw.searchVolume.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCompetitionColor(kw.competition)}`}>
                              {kw.competition}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">${kw.cpc.toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm font-medium ${kw.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {kw.trend >= 0 ? '+' : ''}{kw.trend}%
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => saveKeyword(kw.keyword)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Save
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">💡 Keyword Insights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        This keyword has a {results.competition.toLowerCase()} competition level, making it {results.competition === 'Low' ? 'easier' : 'challenging'} to rank for
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Search volume of {results.searchVolume.toLocaleString()} indicates {results.searchVolume > 10000 ? 'high' : 'moderate'} demand
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Trend is {results.trend >= 0 ? 'increasing' : 'decreasing'} by {Math.abs(results.trend)}%, showing {results.trend >= 10 ? 'strong' : 'stable'} momentum
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">📊 Recommendations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Consider targeting related keywords with lower competition
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Create designs that incorporate multiple related keywords
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">→</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Monitor trending keywords to catch emerging opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Empty State */}
          {!results && !analyzing && (
            <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No keyword analyzed yet</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Enter a keyword above to get detailed analysis and insights
              </p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
