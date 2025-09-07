"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Download, FileText, Leaf, Users, TrendingUp, Globe, Heart, PieChart } from "lucide-react"
import { impactAPI, handleApiError } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ImpactPage() {
  const [timeframe, setTimeframe] = useState("yearly")
  const [impactData, setImpactData] = useState<any>({
    totalMealsRedistributed: 1250000,
    activeDonors: 1750,
    verifiedNGOs: 175,
    co2SavedKg: 4700000,
    waterSavedLiters: 1200000
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchImpactData()
  }, [])

  const fetchImpactData = async () => {
    try {
      setLoading(true)
      const data = await impactAPI.getSummary()
      setImpactData(data)
    } catch (error) {
      console.log('Using sample data for impact metrics')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">Impact Report</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Measuring Our Collective Impact
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Transparent data on how we're reducing food waste and fighting hunger across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-12 md:py-16 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          {loading ? (
            <div className="text-center py-8">Loading impact data...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">Error loading data: {error}</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-3xl font-bold text-green-600">
                      {impactData?.totalMealsRedistributed?.toLocaleString() || '1.25M'}
                    </CardTitle>
                  </div>
                  <CardDescription>Meals Redistributed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nutritious meals that would have gone to waste have reached those in need.
                  </p>
                  <div className="mt-2 flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +15% this month
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-3xl font-bold text-blue-600">
                      {impactData?.activeDonors?.toLocaleString() || '1,750'}
                    </CardTitle>
                  </div>
                  <CardDescription>Active Donors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Restaurants, hotels, event venues, and individuals regularly contributing.
                  </p>
                  <div className="mt-2 flex items-center text-blue-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +8% this month
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-purple-600" />
                    <CardTitle className="text-3xl font-bold text-purple-600">
                      {impactData?.verifiedNGOs?.toLocaleString() || '175'}
                    </CardTitle>
                  </div>
                  <CardDescription>NGO Partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verified organizations distributing food to communities in need.
                  </p>
                  <div className="mt-2 flex items-center text-purple-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12% this month
                  </div>
                </CardContent>
              </Card>
              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-orange-600" />
                    <CardTitle className="text-3xl font-bold text-orange-600">
                      {Math.round((impactData?.co2SavedKg || 4700000) / 1000)}T
                    </CardTitle>
                  </div>
                  <CardDescription>CO₂ Saved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Carbon emissions prevented through food waste reduction.
                  </p>
                  <div className="mt-2 flex items-center text-orange-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +20% this month
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Impact */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                Detailed Metrics
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impact Dashboard</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore our impact data through comprehensive metrics and insights.
              </p>
            </div>
          </div>

          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Timeframe:</span>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Last 30 Days</SelectItem>
                    <SelectItem value="quarterly">Last Quarter</SelectItem>
                    <SelectItem value="yearly">Last Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Export Data
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="food">Food Distribution</TabsTrigger>
              <TabsTrigger value="environmental">Environmental Impact</TabsTrigger>
              <TabsTrigger value="community">Community Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Monthly Growth</CardTitle>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <CardDescription>Meals distributed this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">118,000</div>
                    <div className="text-sm text-muted-foreground mb-4">+15% from last month</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Target: 120,000</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Network Expansion</CardTitle>
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardDescription>New partners this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Donors</span>
                          <span className="text-sm text-blue-600">+125</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">NGOs</span>
                          <span className="text-sm text-purple-600">+15</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Geographic Reach</CardTitle>
                      <Globe className="h-4 w-4 text-orange-600" />
                    </div>
                    <CardDescription>Cities covered</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600 mb-2">25</div>
                    <div className="text-sm text-muted-foreground mb-4">Across 8 states</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Mumbai</span>
                        <span className="text-green-600">250K meals</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delhi</span>
                        <span className="text-green-600">200K meals</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bangalore</span>
                        <span className="text-green-600">150K meals</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="food" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Food Type Distribution</CardTitle>
                      <PieChart className="h-4 w-4 text-green-600" />
                    </div>
                    <CardDescription>Breakdown of food types redistributed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cooked Food</span>
                        <span className="text-sm font-medium text-green-600">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Packaged Food</span>
                        <span className="text-sm font-medium text-blue-600">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Raw Ingredients</span>
                        <span className="text-sm font-medium text-purple-600">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm">Bakery Items</span>
                        <span className="text-sm font-medium text-orange-600">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Donor Categories</CardTitle>
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardDescription>Sources of food donations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Restaurants</span>
                        <span className="text-sm font-medium text-green-600">35%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Hotels</span>
                        <span className="text-sm font-medium text-blue-600">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Corporate Cafeterias</span>
                        <span className="text-sm font-medium text-purple-600">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Event Venues</span>
                        <span className="text-sm font-medium text-orange-600">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Individuals</span>
                        <span className="text-sm font-medium text-gray-600">10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recipient Categories</CardTitle>
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <CardDescription>Organizations receiving food</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Homeless Shelters</span>
                        <span className="text-sm font-medium text-green-600">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Children's Homes</span>
                        <span className="text-sm font-medium text-blue-600">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Community Kitchens</span>
                        <span className="text-sm font-medium text-purple-600">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Elder Care</span>
                        <span className="text-sm font-medium text-orange-600">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Schools</span>
                        <span className="text-sm font-medium text-gray-600">10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="environmental" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>CO₂ Emissions Saved</CardTitle>
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <CardDescription>Environmental impact metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">4,700T</div>
                    <div className="text-sm text-muted-foreground mb-4">Equivalent to taking 1,000 cars off the road</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>This Year Target</span>
                        <span>94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Water Conserved</CardTitle>
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardDescription>Water conservation through food rescue</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">1.2M L</div>
                    <div className="text-sm text-muted-foreground mb-4">Equivalent to 480 Olympic swimming pools</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Monthly Growth</span>
                        <span className="text-blue-600">+18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Land Saved</CardTitle>
                      <Globe className="h-4 w-4 text-orange-600" />
                    </div>
                    <CardDescription>Agricultural land conservation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600 mb-2">300 Ha</div>
                    <div className="text-sm text-muted-foreground mb-4">Land that would have been used to grow wasted food</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Impact Score</span>
                        <span className="text-orange-600">Excellent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>People Impacted</CardTitle>
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <CardDescription>Individuals receiving food support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">40,000</div>
                    <div className="text-sm text-muted-foreground mb-4">Monthly beneficiaries</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Children (0-18)</span>
                        <span className="text-green-600">35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Adults (19-60)</span>
                        <span className="text-blue-600">40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Elderly (60+)</span>
                        <span className="text-purple-600">25%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Jobs Created</CardTitle>
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                    <CardDescription>Employment through our operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                    <div className="text-sm text-muted-foreground mb-4">Through logistics and operations network</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Logistics</span>
                        <span className="text-green-600">120</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Operations</span>
                        <span className="text-blue-600">80</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Support</span>
                        <span className="text-purple-600">50</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Economic Value</CardTitle>
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                    </div>
                    <CardDescription>Total value redistributed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600 mb-2">₹15Cr+</div>
                    <div className="text-sm text-muted-foreground mb-4">Food and services redistributed</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Food Value</span>
                        <span className="text-green-600">₹12Cr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Logistics</span>
                        <span className="text-blue-600">₹2Cr</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Operations</span>
                        <span className="text-purple-600">₹1Cr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-12 md:py-24 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-800 dark:text-green-200">
                Detailed Reports
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impact Reports & Case Studies</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Download our detailed reports and read success stories from the field.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Annual Impact Report 2023</CardTitle>
                <CardDescription>Comprehensive overview of our yearly impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                  <FileText className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Our annual report details the full scope of our operations, impact metrics, and future plans.
                </p>
                <Button className="w-full flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Download PDF (4.2 MB)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact Assessment</CardTitle>
                <CardDescription>How food redistribution helps the planet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  This report quantifies the environmental benefits of our food waste reduction efforts.
                </p>
                <Button className="w-full flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Download PDF (3.8 MB)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Impact Stories</CardTitle>
                <CardDescription>Real stories from communities we serve</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Read firsthand accounts of how our food redistribution efforts are changing lives.
                </p>
                <Button className="w-full flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Download PDF (5.1 MB)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Join Us in Making an Impact</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Whether you're donating food, requesting support, or funding our mission - every action counts.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate" passHref>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Donate Food
                </Button>
              </Link>
              <Link href="/request" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Request Food
                </Button>
              </Link>
              <Link href="/partnerships" passHref>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
