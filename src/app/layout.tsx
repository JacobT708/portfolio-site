import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4">
          <div className="max-w-4xl mx-auto flex gap-4 text-purple-400 justify-center">
            <Link href="/" className="hover:text-purple-300">{'>'} Home</Link>
            <Link href="/projects" className="hover:text-purple-300">{'>'} Projects</Link>
            <Link href="/info" className="hover:text-purple-300">{'>'} Info</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}