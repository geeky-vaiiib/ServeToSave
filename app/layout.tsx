import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { Providers } from "./providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serve To Save India",
  description: "Smart food redistribution system powered by AI",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Set a default html class to match the client-side theme provider's initial class
    // This avoids a hydration mismatch where the client adds `class="light"` after mount.
    <html lang="en" className="light">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <Providers>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
              </div>
            </Providers>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}