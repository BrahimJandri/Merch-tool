/**
 * API client for communicating with FastAPI backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export interface SearchParams {
  query: string
  platform?: string
  limit?: number
}

export interface KeywordParams {
  keyword: string
  depth?: number
}

export interface TrendParams {
  category?: string
  days?: number
}

/**
 * Fetch wrapper with error handling
 */
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

/**
 * Product API
 */
export const productAPI = {
  search: (params: SearchParams) => {
    const queryParams = new URLSearchParams({
      query: params.query,
      ...(params.platform && { platform: params.platform }),
      ...(params.limit && { limit: params.limit.toString() }),
    })
    return fetchAPI(`/products/search?${queryParams}`)
  },

  getTrending: (params: TrendParams) => {
    const queryParams = new URLSearchParams({
      ...(params.category && { category: params.category }),
      ...(params.days && { days: params.days.toString() }),
    })
    return fetchAPI(`/products/trend?${queryParams}`)
  },

  getById: (id: string) => {
    return fetchAPI(`/products/${id}`)
  },
}

/**
 * Keyword API
 */
export const keywordAPI = {
  analyze: (params: KeywordParams) => {
    const queryParams = new URLSearchParams({
      keyword: params.keyword,
      ...(params.depth && { depth: params.depth.toString() }),
    })
    return fetchAPI(`/keywords/analyze?${queryParams}`)
  },

  getSuggestions: (seed: string, limit: number = 10) => {
    const queryParams = new URLSearchParams({
      seed,
      limit: limit.toString(),
    })
    return fetchAPI(`/keywords/suggestions?${queryParams}`)
  },
}

/**
 * Trademark API
 */
export const trademarkAPI = {
  check: (phrase: string, region: string = 'US') => {
    const queryParams = new URLSearchParams({ phrase, region })
    return fetchAPI(`/trademarks/check?${queryParams}`)
  },

  batchCheck: (phrases: string[], region: string = 'US') => {
    return fetchAPI('/trademarks/batch-check', {
      method: 'POST',
      body: JSON.stringify({ phrases, region }),
    })
  },
}

/**
 * Auth API
 */
export const authAPI = {
  register: (username: string, email: string, password: string) => {
    return fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    })
  },

  login: (username: string, password: string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    return fetch(`${API_BASE_URL}/auth/token`, {
      method: 'POST',
      body: formData,
    }).then(async res => {
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.detail || 'Login failed')
      }
      return res.json()
    })
  },

  getCurrentUser: (token: string) => {
    return fetchAPI('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
