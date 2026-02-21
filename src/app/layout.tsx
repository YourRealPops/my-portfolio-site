import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fehinti Adekoya — Creative Developer',
  description: 'Portfolio of Fehinti Adekoya, creative web developer and coding mentor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body className="bg-bg text-fg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}