'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Disable enableColorScheme by default to avoid injecting style on <html>
  // which can cause hydration mismatches between server and client.
  // Allow callers to override via props if they explicitly want it.
  const enableColorScheme = (props as any).enableColorScheme ?? false
  return (
    <NextThemesProvider {...props} enableColorScheme={enableColorScheme}>
      {children}
    </NextThemesProvider>
  )
}
