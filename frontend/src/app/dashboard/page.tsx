'use client'

import { useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'
import TrendChart from '@/components/TrendChart'
import ProductCard from '@/components/ProductCard'

export default function Dashboard() {
  const [products, setProducts] = useState([])
  const [trends, setTrends] = useState([])

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
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Trending Products</h2>
            <TrendChart data={trends} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
            <p className="text-gray-500">No recent searches</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: any, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
