
import type { Metadata } from 'next'
import Link from 'next/link'
import  '../styles/globals.css';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
          <li><Link href="/cari">Cari orang</Link></li>
          <li><Link href="/post">post</Link></li>
          <li><Link href="/example">example</Link></li>
        </ul>
        {children}
        </body>
    </html>
  )
}
