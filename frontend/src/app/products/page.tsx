'use client'

import { useState, useEffect } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'

interface FilterState {
  platform: string[]
  priceMin: string
  priceMax: string
  category: string
  sortBy: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [showFilters, setShowFilters] = useState(false)
  
  const [filters, setFilters] = useState<FilterState>({
    platform: [],
    priceMin: '',
    priceMax: '',
    category: '',
    sortBy: 'relevance',
  })

  const platforms = ['Amazon', 'Etsy', 'Redbubble', 'Teespring', 'Merch by Amazon']
  const categories = [
    'T-Shirts',
    'Hoodies',
    'Mugs',
    'Phone Cases',
    'Posters',
    'Stickers',
    'Hats',
    'Bags',
  ]
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'sales', label: 'Best Selling' },
  ]

  useEffect(() => {
    fetchProducts()
  }, [currentPage, filters, searchQuery])

  const fetchProducts = async () => {
    setLoading(true)
    // TODO: Implement API call with filters
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchProducts()
  }

  const handlePlatformToggle = (platform: string) => {
    setFilters((prev) => ({
      ...prev,
      platform: prev.platform.includes(platform)
        ? prev.platform.filter((p) => p !== platform)
        : [...prev.platform, platform],
    }))
  }

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      platform: [],
      priceMin: '',
      priceMax: '',
      category: '',
      sortBy: 'relevance',
    })
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Product Search</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Search and analyze products across multiple platforms
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <form onSubmit={handleSearch} className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, keywords, designs..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-900 transition-colors font-medium flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Filters
              </button>
            </form>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Platform Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Platform
                  </label>
                  <div className="space-y-2">
                    {platforms.map((platform) => (
                      <label key={platform} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.platform.includes(platform)}
                          onChange={() => handlePlatformToggle(platform)}
                          className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(filters.platform.length > 0 || filters.category || filters.priceMin || filters.priceMax) && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
              <div className="flex flex-wrap gap-2">
                {filters.platform.map((platform) => (
                  <span
                    key={platform}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {platform}
                    <button
                      onClick={() => handlePlatformToggle(platform)}
                      className="ml-2 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {filters.category && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    {filters.category}
                    <button
                      onClick={() => handleFilterChange('category', '')}
                      className="ml-2 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                )}
                {(filters.priceMin || filters.priceMax) && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    ${filters.priceMin || '0'} - ${filters.priceMax || '∞'}
                    <button
                      onClick={() => {
                        handleFilterChange('priceMin', '')
                        handleFilterChange('priceMax', '')
                      }}
                      className="ml-2 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              {loading ? 'Searching...' : `Found ${products.length} products`}
            </p>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No products found</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {/* Pagination */}
          {products.length > 0 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = currentPage - 2 + i
                if (pageNum < 1 || pageNum > totalPages) return null
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
