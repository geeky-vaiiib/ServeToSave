"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Utensils, TrendingUp, Shield, Clock, Award, CheckCircle, Users, Leaf, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"

export default function RestaurantsPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleDonateClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-pink-950/20">
        <div className="container relative px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                🍽️ For Restaurants & Food Businesses
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Turn Your Surplus Food Into
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Social Impact</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Join 1000+ restaurants already making a difference. Donate surplus food, reduce waste, and feed communities while earning tax benefits and CSR recognition.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg"
                  onClick={handleDonateClick}
                >
                  <Utensils className="mr-2 h-5 w-5" />
                  Start Donating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-950/20">
                  View Success Stories
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-[500px] h-[400px] bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900/20 dark:to-red-800/20 rounded-2xl shadow-2xl flex items-center justify-center mx-auto">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <Utensils className="h-24 w-24 text-orange-600 dark:text-orange-400" />
                      <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-2">Restaurant Dashboard</h3>
                  <p className="text-orange-700 dark:text-orange-300">Track donations, impact, and community reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Restaurants Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just food donation - it's about building a sustainable business with social impact.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Get tax deductions under Section 80G for food donations. Reduce your tax liability while doing good.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Legal Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Full legal protection under Good Samaritan Food Donation Act. Donate with confidence and peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Brand Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Enhance your brand image as a socially responsible business. Get featured in our impact reports.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Easy Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Simple 3-step process: List food, get matched with NGOs, coordinate pickup. Takes less than 5 minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white group-hover:scale-110 transition-transform">
                  <Leaf className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Reduce carbon footprint by preventing food waste. Track your environmental impact with detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Impact Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Detailed dashboard showing meals served, people fed, and CO₂ saved through your donations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, fast, and secure food donation process designed for busy restaurants.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">List Your Food</h3>
              <p className="text-muted-foreground">
                Quick form to list surplus food with quantity, expiry time, and pickup location. Takes under 2 minutes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our AI instantly matches your donation with nearby verified NGOs based on their current needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Coordinate Pickup</h3>
              <p className="text-muted-foreground">
                NGO coordinates pickup time. You get instant confirmation and impact tracking for your donation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join 1000+ restaurants already reducing waste and feeding communities through our platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-orange-50"
                onClick={handleDonateClick}
              >
                <Utensils className="mr-2 h-5 w-5" />
                Start Donating Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
