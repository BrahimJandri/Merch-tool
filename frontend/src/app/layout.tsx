import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Merch-tool',
  description: 'Product research and trend analysis tool for merchandise sellers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
