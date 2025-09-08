"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Heart, Leaf, MapPin, TrendingUp, Users, Utensils, Building2, HandHeart, Globe, Award, Shield, Clock, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ImpactCounter from "@/components/impact-counter"
import { useAuth } from "@/lib/auth-context"

export default function Home() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleDonateClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }

  const handleRequestClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-blue-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              🇮🇳 Serving India, Saving Food
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Serve To Save
              </span>
              <br />
              <span className="text-foreground">India</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Connect surplus food with communities in need. Our intelligent platform bridges restaurants, corporates, and NGOs to eliminate food waste and fight hunger across India.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                onClick={handleDonateClick}
              >
                <Utensils className="mr-2 h-5 w-5" />
                Donate Food
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-950/20"
                onClick={handleRequestClick}
              >
                <HandHeart className="mr-2 h-5 w-5" />
                Request Food
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <ImpactCounter />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How We're Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform connects the dots between surplus food and hungry communities through intelligent matching and seamless logistics.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <Utensils className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Smart Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  AI-powered matching system connects food donors with nearby NGOs based on quantity, location, and urgency.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">NGO Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Verified network of 500+ NGOs across India ready to distribute food to communities in need.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Live map showing donation requests and available food with intelligent logistics coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Impact Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Comprehensive dashboards showing meals served, CO₂ saved, and community impact metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Connecting every stakeholder in the food ecosystem to create maximum impact.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <Utensils className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">Restaurants</CardTitle>
                <CardDescription>Hotels, Restaurants & Food Businesses</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Turn surplus food into social impact. Easy donation process with pickup coordination and tax benefits.
                </p>
                <Button variant="outline" className="group-hover:bg-green-50 dark:group-hover:bg-green-950/20" asChild>
                  <Link href="/restaurants">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Building2 className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">Corporates</CardTitle>
                <CardDescription>Companies & CSR Initiatives</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Fulfill CSR goals through food donation drives. Organize employee engagement and community impact programs.
                </p>
                <Button variant="outline" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20" asChild>
                  <Link href="/corporates">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">NGOs</CardTitle>
                <CardDescription>Non-Profit Organizations</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Access verified food donations for your beneficiaries. Streamlined request process with real-time matching.
                </p>
                <Button variant="outline" className="group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20" asChild>
                  <Link href="/ngos">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 text-white">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of restaurants, corporates, and NGOs already making an impact through our platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                <Users className="mr-2 h-5 w-5" />
                Join as NGO
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Building2 className="mr-2 h-5 w-5" />
                Corporate Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
