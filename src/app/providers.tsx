'use client'

import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
