'use client'

import { useState, useEffect } from 'react'
import TrendChart from '@/components/TrendChart'
import ProductCard from '@/components/ProductCard'

export default function Trends() {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [category, setCategory] = useState('all')
  const [days, setDays] = useState(7)

  useEffect(() => {
    fetchTrends()
  }, [category, days])

  const fetchTrends = async () => {
    // TODO: Implement API call to fetch trends
    console.log('Fetching trends for:', category, 'days:', days)
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Trending Products</h1>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex gap-4 items-center">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-2 border rounded"
              >
                <option value="all">All Categories</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="home">Home & Living</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Time Period</label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="px-4 py-2 border rounded"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Trend Overview</h2>
          <TrendChart data={[]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingProducts.length > 0 ? (
            trendingProducts.map((product: any, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 py-8">
              No trending products found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
