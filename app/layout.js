import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import './globals.css'
import { CustomMDXProvider } from '@/components/MDXProvider';

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensures text remains visible during font loading
  variable: '--font-inter',
})

export const metadata = {
  title: 'Jeffers Baxter',
  description: 'The personal website of Jeffers Baxter, a software engineer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="max-w-4xl mx-auto px-4 py-8">
        <header>
            <h1>
                <Image src="/android-chrome-192x192.png" width={75} height={75} alt="Logo of the author's initials" />
                Jeffers Baxter
            </h1>
          </header>
         <nav>
           <Link href="/resume">Resume</Link>
           <Link href="/contact">Contact</Link>
         </nav>
        <CustomMDXProvider>
          <main>{children}</main>
        </CustomMDXProvider>
        <footer>
           <p>
             &copy; {new Date().getFullYear()} Jeffers Baxter
           </p>
         </footer>
      </body>
    </html>
  )
}