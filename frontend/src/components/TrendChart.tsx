'use client'

interface TrendChartProps {
  data: any[]
}

export default function TrendChart({ data }: TrendChartProps) {
  // TODO: Implement chart using a library like recharts or chart.js
  
  return (
    <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-500 mb-2">Trend Chart</p>
        <p className="text-sm text-gray-400">
          {data.length > 0 ? `${data.length} data points` : 'No data available'}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Install a chart library (recharts, chart.js, etc.) to visualize data
        </p>
      </div>
    </div>
  )
}
