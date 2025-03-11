import type { Metadata } from 'next'
import './globals.css'
import { dm_sans, montserrat, poppins, nunito } from '@/font'
import { cn } from '@/utils'
import { Providers } from './provider'

export const metadata: Metadata = {
  title: 'AI-Powered Customer Success Tool',
  description:
    'Enhance customer engagement and retention with AI-driven insights',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative bg-[#F5FEFD] antialiased transition-all dark:bg-gray-900',
          dm_sans.variable,
          montserrat.variable,
          poppins.variable,
          nunito.variable
        )}
      >
        <div className="font-nunito relative mx-auto min-h-dvh w-full max-w-[1500px]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
