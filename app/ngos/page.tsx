"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Heart, Users, Shield, Clock, CheckCircle, MapPin, BarChart3, Award, Zap, HandHeart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"

export default function NGOsPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleJoinClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-red-950/20">
        <div className="container relative px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                ❤️ For NGOs & Non-Profits
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Access Fresh Food
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> For Your Community</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Join 500+ verified NGOs already receiving fresh food donations. Simple request process, real-time matching, and reliable supply chain for your beneficiaries.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg"
                  onClick={handleJoinClick}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/20">
                  View Success Stories
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-[500px] h-[400px] bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900/20 dark:to-pink-800/20 rounded-2xl shadow-2xl flex items-center justify-center mx-auto">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <Heart className="h-24 w-24 text-purple-600 dark:text-purple-400" />
                      <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">NGO Dashboard</h3>
                  <p className="text-purple-700 dark:text-purple-300">Track requests, donations & community impact</p>
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
              Why NGOs Choose Our Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Reliable, verified, and efficient food distribution network designed for non-profit organizations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Verified Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  All food donations are verified for quality and safety. Only fresh, safe food reaches your beneficiaries.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Real-time Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Instant notifications when food donations match your requirements. No more waiting or uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Location-based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Get matched with nearby donors to ensure fresh food delivery and reduce transportation costs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white group-hover:scale-110 transition-transform">
                  <Clock className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Round-the-clock support for urgent food requests and emergency situations. We're always here to help.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Impact Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Track meals served, people fed, and community impact. Perfect for donor reports and grant applications.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Recognition Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Get featured in our impact reports and social media. Build your organization's visibility and credibility.
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
              How It Works for NGOs
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, efficient process designed to get food to your beneficiaries quickly and safely.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Register & Verify</h3>
              <p className="text-muted-foreground">
                Complete verification process with documents. One-time setup to join our trusted network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Submit Requests</h3>
              <p className="text-muted-foreground">
                Create food requests specifying quantity, type, and urgency. Our AI finds the best matches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Receive instant notifications when donations match your needs. Accept or decline based on capacity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Coordinate Pickup</h3>
              <p className="text-muted-foreground">
                Coordinate pickup with donors. Track delivery and confirm receipt to complete the donation cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real impact from NGOs using our platform to serve their communities.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Akshaya Patra Foundation</CardTitle>
                    <CardDescription>Mumbai, Maharashtra</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "We've served 50,000+ meals through the platform. The real-time matching helps us respond to emergency situations quickly."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-green-600" />
                    <span>50K+ meals</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span>15 locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Feeding India</CardTitle>
                    <CardDescription>Delhi NCR</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The platform's verification process ensures food safety. Our volunteers can focus on distribution rather than sourcing."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>75K+ meals</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span>25 locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-900/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Robin Hood Army</CardTitle>
                    <CardDescription>Bangalore, Karnataka</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Impact tracking helps us show donors exactly how their contributions are making a difference in the community."
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span>30K+ meals</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <span>10 locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Serve Your Community?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join 500+ verified NGOs already receiving fresh food donations through our platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-purple-50"
                onClick={handleJoinClick}
              >
                <Heart className="mr-2 h-5 w-5" />
                Register Your NGO
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-5 w-5" />
                View Impact Stories
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
