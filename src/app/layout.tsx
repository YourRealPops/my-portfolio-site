import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fehinti Adekoya — Creative Developer',
  description: 'Portfolio of Fehinti Adekoya, creative web developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}