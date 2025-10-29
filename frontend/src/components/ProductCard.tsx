'use client'

interface ProductCardProps {
  product: {
    id?: string
    title?: string
    description?: string
    price?: number
    imageUrl?: string
    platform?: string
    rating?: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-square bg-gray-200 flex items-center justify-center">
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">No image</span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-2">
            {product.title || 'Product Title'}
          </h3>
          {product.platform && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.platform}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description || 'No description available'}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            ${product.price?.toFixed(2) || '0.00'}
          </span>
          {product.rating && (
            <span className="text-sm text-yellow-600">
              ★ {product.rating.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
