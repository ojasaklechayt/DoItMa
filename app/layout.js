import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note taking app',
  description: 'Note taking app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Toaster position="bottom-center" />{children}</body>
    </html>
  )
}
