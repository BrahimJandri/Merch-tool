'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'
import { authAPI } from '@/lib/api'

interface User {
  id: number
  username: string
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = auth.getToken()
      if (token) {
        const userData = await authAPI.getCurrentUser(token)
        setUser(userData)
      }
    } catch (error) {
      auth.removeToken()
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (username: string, password: string) => {
    try {
      const response = await authAPI.login(username, password)
      if (response.access_token) {
        auth.setToken(response.access_token)
        const userData = await authAPI.getCurrentUser(response.access_token)
        setUser(userData)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    }
  }

  const signOut = () => {
    auth.removeToken()
    setUser(null)
    router.push('/auth/signin')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
