"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Building2, TrendingUp, Users, Award, Target, BarChart3, Globe, Heart, CheckCircle, Handshake, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"

export default function CorporatesPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handlePartnershipClick = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
        <div className="container relative px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                🏢 For Corporates & CSR Teams
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Fulfill Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> CSR Goals</span>
                <br />Through Food Impact
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Partner with us to organize employee food drives, corporate donations, and community impact programs. Measurable CSR outcomes with comprehensive reporting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                  onClick={handlePartnershipClick}
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950/20">
                  Download CSR Report
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-[500px] h-[400px] bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900/20 dark:to-purple-800/20 rounded-2xl shadow-2xl flex items-center justify-center mx-auto">
                <div className="text-center p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <Building2 className="h-24 w-24 text-blue-600 dark:text-blue-400" />
                      <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">CSR Dashboard</h3>
                  <p className="text-blue-700 dark:text-blue-300">Track impact, employee engagement & ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              CSR Benefits & Outcomes
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable social impact that aligns with your corporate values and ESG goals.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">SDG Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Directly contribute to UN SDG 2 (Zero Hunger) and SDG 12 (Responsible Consumption). Perfect for ESG reporting.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Employee Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Organize team food drives and volunteer activities. Boost employee satisfaction and team building.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Impact Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Comprehensive analytics and reports for board presentations, annual reports, and stakeholder communications.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Brand Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Get featured in sustainability reports, media coverage, and industry awards for social responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Corporate tax deductions under CSR provisions. Optimize your tax strategy while creating social impact.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Direct impact on local communities. Build stronger relationships with stakeholders and customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Partnership Models
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible engagement options designed to fit your CSR budget and objectives.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">Quick Impact</CardTitle>
                <CardDescription>One-time Corporate Drives</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Organize employee food collection drives for festivals, special occasions, or team building events.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Event coordination support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Impact measurement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Employee certificates
                  </li>
                </ul>
                <Button variant="outline" className="group-hover:bg-green-50 dark:group-hover:bg-green-950/20">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                  <Handshake className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">Strategic Partnership</CardTitle>
                <CardDescription>Annual CSR Programs</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Comprehensive annual partnership with quarterly campaigns, employee engagement, and detailed reporting.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    Quarterly campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    Custom impact reports
                  </li>
                </ul>
                <Button variant="outline" className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-900/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10" />
                </div>
                <CardTitle className="text-2xl">Foundation Partnership</CardTitle>
                <CardDescription>Long-term Social Impact</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Multi-year partnership with co-branded initiatives, thought leadership, and community development programs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    Co-branded initiatives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    Thought leadership
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    Community programs
                  </li>
                </ul>
                <Button variant="outline" className="group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Create Measurable Impact?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join leading corporates already making a difference through strategic food donation partnerships.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={handlePartnershipClick}
              >
                <Building2 className="mr-2 h-5 w-5" />
                Schedule Partnership Call
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <BarChart3 className="mr-2 h-5 w-5" />
                Download CSR Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
