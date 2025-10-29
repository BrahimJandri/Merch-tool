import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Merch-tool</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/dashboard" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
            <p className="text-gray-600">View your analytics and insights</p>
          </Link>
          
          <Link 
            href="/keywords" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Keywords</h2>
            <p className="text-gray-600">Analyze and discover keywords</p>
          </Link>
          
          <Link 
            href="/trends" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Trends</h2>
            <p className="text-gray-600">Track trending products</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
