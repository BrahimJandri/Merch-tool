'use client'

import { useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'

export default function SavedProductsPage() {
  const [savedProducts, setSavedProducts] = useState<any[]>([])
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const filters = [
    { id: 'all', label: 'All Items', count: savedProducts.length },
    { id: 'tshirts', label: 'T-Shirts', count: 0 },
    { id: 'hoodies', label: 'Hoodies', count: 0 },
    { id: 'mugs', label: 'Mugs', count: 0 },
  ]

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Exporting saved products...')
  }

  const handleRemove = (productId: string) => {
    setSavedProducts(savedProducts.filter(p => p.id !== productId))
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Saved Products</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {savedProducts.length} products saved for later
                </p>
              </div>
              <button
                onClick={handleExport}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export List
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                  {filters.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        filter === f.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {f.label} ({f.count})
                    </button>
                  ))}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="date">Sort by Date</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {savedProducts.length === 0 ? (
              <div className="p-12 text-center">
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No saved products</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Start saving products to keep track of your favorites
                </p>
                <div className="mt-6">
                  <a
                    href="/products"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Browse Products
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedProducts.map((product, index) => (
                    <div key={index} className="relative">
                      <ProductCard product={product} />
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                      >
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
