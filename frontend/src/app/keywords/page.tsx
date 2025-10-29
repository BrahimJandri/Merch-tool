'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'

export default function Keywords() {
  const [keyword, setKeyword] = useState('')
  const [analysis, setAnalysis] = useState<any>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleAnalyze = async (kw: string) => {
    setKeyword(kw)
    // TODO: Implement API call to analyze keyword
    console.log('Analyzing keyword:', kw)
  }

  const handleGetSuggestions = async () => {
    // TODO: Implement API call to get suggestions
    console.log('Getting suggestions for:', keyword)
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Keyword Analysis</h1>
        
        <div className="mb-8">
          <SearchBar 
            onSearch={handleAnalyze} 
            placeholder="Enter keyword to analyze..."
          />
        </div>

        {analysis && (
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Search Volume</p>
                <p className="text-2xl font-bold">{analysis.searchVolume || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-600">Competition</p>
                <p className="text-2xl font-bold">{analysis.competition || 'N/A'}</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Keyword Suggestions</h2>
            <button
              onClick={handleGetSuggestions}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={!keyword}
            >
              Get Suggestions
            </button>
          </div>
          
          {suggestions.length > 0 ? (
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index}
                  className="p-3 border rounded hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleAnalyze(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No suggestions yet. Enter a keyword and click "Get Suggestions".</p>
          )}
        </div>
      </div>
    </div>
  )
}
