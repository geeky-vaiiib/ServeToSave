"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Download, FileText, Leaf, LineChart, PieChart, Users } from "lucide-react"
import { impactAPI, handleApiError } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Chart, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, BarChart, PieChart as RechartsBarChart } from "recharts"

// Sample data for charts
const monthlyData = [
  { month: "Jan", meals: 45000, donors: 800, ngos: 120 },
  { month: "Feb", meals: 52000, donors: 850, ngos: 125 },
  { month: "Mar", meals: 58000, donors: 900, ngos: 130 },
  { month: "Apr", meals: 63000, donors: 950, ngos: 135 },
  { month: "May", meals: 69000, donors: 1000, ngos: 140 },
  { month: "Jun", meals: 75000, donors: 1100, ngos: 145 },
  { month: "Jul", meals: 82000, donors: 1200, ngos: 150 },
  { month: "Aug", meals: 89000, donors: 1300, ngos: 155 },
  { month: "Sep", meals: 96000, donors: 1400, ngos: 160 },
  { month: "Oct", meals: 103000, donors: 1500, ngos: 165 },
  { month: "Nov", meals: 110000, donors: 1600, ngos: 170 },
  { month: "Dec", meals: 118000, donors: 1700, ngos: 175 },
]

const foodTypeData = [
  { name: "Cooked Food", value: 45 },
  { name: "Raw Ingredients", value: 20 },
  { name: "Packaged Food", value: 25 },
  { name: "Bakery Items", value: 10 },
]

const cityData = [
  { name: "Mumbai", meals: 250000 },
  { name: "Delhi", meals: 200000 },
  { name: "Bangalore", meals: 150000 },
  { name: "Chennai", meals: 120000 },
  { name: "Hyderabad", meals: 100000 },
  { name: "Kolkata", meals: 90000 },
  { name: "Pune", meals: 70000 },
  { name: "Ahmedabad", meals: 60000 },
]

const environmentalData = [
  { month: "Jan", co2: 1800, water: 450 },
  { month: "Feb", co2: 2100, water: 520 },
  { month: "Mar", co2: 2300, water: 580 },
  { month: "Apr", co2: 2500, water: 630 },
  { month: "May", co2: 2800, water: 690 },
  { month: "Jun", co2: 3000, water: 750 },
  { month: "Jul", co2: 3300, water: 820 },
  { month: "Aug", co2: 3600, water: 890 },
  { month: "Sep", co2: 3800, water: 960 },
  { month: "Oct", co2: 4100, water: 1030 },
  { month: "Nov", co2: 4400, water: 1100 },
  { month: "Dec", co2: 4700, water: 1180 },
]

export default function ImpactPage() {
  const [timeframe, setTimeframe] = useState("yearly")
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedMetric, setSelectedMetric] = useState("meals")
  const [impactData, setImpactData] = useState<any>(null)
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchImpactData()
  }, [])

  useEffect(() => {
    if (selectedPeriod || selectedMetric) {
      fetchChartData()
    }
  }, [selectedPeriod, selectedMetric])

  const fetchImpactData = async () => {
    try {
      const data = await impactAPI.getSummary()
      setImpactData(data)
    } catch (error) {
      setError(handleApiError(error))
    } finally {
      setLoading(false)
    }
  }

  const fetchChartData = async () => {
    try {
      const data = await impactAPI.getChartData(selectedPeriod, selectedMetric)
      setChartData(data.chartData)
    } catch (error) {
      console.error('Error fetching chart data:', error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Impact Report</div>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          {loading ? (
            <div className="text-center py-8">Loading impact data...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">Error loading data: {error}</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-green-600">
                    {impactData?.totalMealsRedistributed?.toLocaleString() || '0'}
                  </CardTitle>
                  <CardDescription>Meals Redistributed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Nutritious meals that would have gone to waste have reached those in need.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-green-600">
                    {impactData?.activeDonors?.toLocaleString() || '0'}
                  </CardTitle>
                  <CardDescription>Active Donors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Restaurants, hotels, event venues, and individuals regularly contributing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-green-600">
                    {impactData?.verifiedNGOs?.toLocaleString() || '0'}
                  </CardTitle>
                  <CardDescription>NGO Partners</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Verified organizations distributing food to communities in need.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-green-600">
                    {Math.round((impactData?.co2SavedKg || 0) / 1000)}T
                  </CardTitle>
                  <CardDescription>CO₂ Saved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Carbon emissions prevented through food waste reduction.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Impact */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Detailed Metrics
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impact Dashboard</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Explore our impact data through interactive visualizations.
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
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Monthly Meals Distributed</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Growth in meals distributed over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="line">
                        <AreaChart
                          data={monthlyData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <defs>
                            <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend />
                          <AreaChart.XAxis dataKey="month" />
                          <AreaChart.YAxis />
                          <AreaChart.CartesianGrid strokeDasharray="3 3" />
                          <AreaChart.Area
                            type="monotone"
                            dataKey="meals"
                            stroke="#16a34a"
                            fillOpacity={1}
                            fill="url(#colorMeals)"
                          />
                        </AreaChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Network Growth</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Donors and NGO partners over time</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="bar">
                        <BarChart
                          data={monthlyData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend />
                          <BarChart.XAxis dataKey="month" />
                          <BarChart.YAxis />
                          <BarChart.CartesianGrid strokeDasharray="3 3" />
                          <BarChart.Bar dataKey="donors" fill="#16a34a" />
                          <BarChart.Bar dataKey="ngos" fill="#86efac" />
                        </BarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>City-wise Distribution</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Meals distributed across major cities</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="bar">
                        <BarChart
                          data={cityData}
                          layout="vertical"
                          margin={{
                            top: 20,
                            right: 30,
                            left: 60,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <BarChart.XAxis type="number" />
                          <BarChart.YAxis dataKey="name" type="category" />
                          <BarChart.CartesianGrid strokeDasharray="3 3" />
                          <BarChart.Bar dataKey="meals" fill="#16a34a" />
                        </BarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="food" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Food Type Distribution</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Breakdown of food types redistributed</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="pie">
                        <RechartsBarChart
                          data={foodTypeData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <RechartsBarChart.Pie
                            data={foodTypeData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#16a34a"
                            dataKey="value"
                            label
                          >
                            {foodTypeData.map((entry, index) => (
                              <RechartsBarChart.Cell
                                key={`cell-${index}`}
                                fill={
                                  index === 0
                                    ? "#16a34a"
                                    : index === 1
                                      ? "#22c55e"
                                      : index === 2
                                        ? "#4ade80"
                                        : "#86efac"
                                }
                              />
                            ))}
                          </RechartsBarChart.Pie>
                          <ChartLegend />
                        </RechartsBarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Donor Categories</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Sources of food donations</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="pie">
                        <RechartsBarChart
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <RechartsBarChart.Pie
                            data={[
                              { name: "Restaurants", value: 35 },
                              { name: "Hotels", value: 25 },
                              { name: "Corporate Cafeterias", value: 15 },
                              { name: "Event Venues", value: 15 },
                              { name: "Individuals", value: 10 },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#16a34a"
                            dataKey="value"
                            label
                          >
                            <RechartsBarChart.Cell fill="#16a34a" />
                            <RechartsBarChart.Cell fill="#22c55e" />
                            <RechartsBarChart.Cell fill="#4ade80" />
                            <RechartsBarChart.Cell fill="#86efac" />
                            <RechartsBarChart.Cell fill="#bbf7d0" />
                          </RechartsBarChart.Pie>
                          <ChartLegend />
                        </RechartsBarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recipient Categories</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Types of organizations receiving food</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="bar">
                        <BarChart
                          data={[
                            { name: "Homeless Shelters", value: 30 },
                            { name: "Children's Homes", value: 25 },
                            { name: "Community Kitchens", value: 20 },
                            { name: "Elder Care Facilities", value: 15 },
                            { name: "Schools & Education Centers", value: 10 },
                          ]}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <BarChart.XAxis dataKey="name" />
                          <BarChart.YAxis />
                          <BarChart.CartesianGrid strokeDasharray="3 3" />
                          <BarChart.Bar dataKey="value" fill="#16a34a" />
                        </BarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="environmental" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>CO₂ Emissions Saved</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Reduction in carbon footprint (kg)</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="line">
                        <AreaChart
                          data={environmentalData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <defs>
                            <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend />
                          <AreaChart.XAxis dataKey="month" />
                          <AreaChart.YAxis />
                          <AreaChart.CartesianGrid strokeDasharray="3 3" />
                          <AreaChart.Area
                            type="monotone"
                            dataKey="co2"
                            stroke="#16a34a"
                            fillOpacity={1}
                            fill="url(#colorCO2)"
                          />
                        </AreaChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Water Saved</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Water conservation (thousand liters)</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="line">
                        <AreaChart
                          data={environmentalData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <defs>
                            <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend />
                          <AreaChart.XAxis dataKey="month" />
                          <AreaChart.YAxis />
                          <AreaChart.CartesianGrid strokeDasharray="3 3" />
                          <AreaChart.Area
                            type="monotone"
                            dataKey="water"
                            stroke="#0ea5e9"
                            fillOpacity={1}
                            fill="url(#colorWater)"
                          />
                        </AreaChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Environmental Impact Summary</CardTitle>
                      <Leaf className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Total environmental benefits from food redistribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">4,700+</div>
                        <div className="text-sm font-medium">Tonnes of CO₂ Saved</div>
                        <div className="text-xs text-muted-foreground">
                          Equivalent to taking 1,000 cars off the road
                        </div>
                      </div>
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">1.2M+</div>
                        <div className="text-sm font-medium">Liters of Water Conserved</div>
                        <div className="text-xs text-muted-foreground">Equivalent to 480 Olympic swimming pools</div>
                      </div>
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">300+</div>
                        <div className="text-sm font-medium">Hectares of Land Saved</div>
                        <div className="text-xs text-muted-foreground">
                          Land that would have been used to grow wasted food
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community" className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>People Impacted</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Number of individuals receiving food support</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="line">
                        <AreaChart
                          data={[
                            { month: "Jan", people: 15000 },
                            { month: "Feb", people: 17500 },
                            { month: "Mar", people: 19000 },
                            { month: "Apr", people: 21000 },
                            { month: "May", people: 23000 },
                            { month: "Jun", people: 25000 },
                            { month: "Jul", people: 27500 },
                            { month: "Aug", people: 30000 },
                            { month: "Sep", people: 32000 },
                            { month: "Oct", people: 34500 },
                            { month: "Nov", people: 37000 },
                            { month: "Dec", people: 40000 },
                          ]}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <defs>
                            <linearGradient id="colorPeople" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <ChartLegend />
                          <AreaChart.XAxis dataKey="month" />
                          <AreaChart.YAxis />
                          <AreaChart.CartesianGrid strokeDasharray="3 3" />
                          <AreaChart.Area
                            type="monotone"
                            dataKey="people"
                            stroke="#16a34a"
                            fillOpacity={1}
                            fill="url(#colorPeople)"
                          />
                        </AreaChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Demographic Breakdown</CardTitle>
                      <PieChart className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Communities served by our program</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ChartContainer className="h-full">
                      <Chart type="pie">
                        <RechartsBarChart
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <RechartsBarChart.Pie
                            data={[
                              { name: "Children", value: 35 },
                              { name: "Elderly", value: 20 },
                              { name: "Homeless", value: 25 },
                              { name: "Low-income Families", value: 15 },
                              { name: "Others", value: 5 },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#16a34a"
                            dataKey="value"
                            label
                          >
                            <RechartsBarChart.Cell fill="#16a34a" />
                            <RechartsBarChart.Cell fill="#22c55e" />
                            <RechartsBarChart.Cell fill="#4ade80" />
                            <RechartsBarChart.Cell fill="#86efac" />
                            <RechartsBarChart.Cell fill="#bbf7d0" />
                          </RechartsBarChart.Pie>
                          <ChartLegend />
                        </RechartsBarChart>
                      </Chart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Social Impact Metrics</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription>Beyond food: Additional community benefits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">250+</div>
                        <div className="text-sm font-medium">Jobs Created</div>
                        <div className="text-xs text-muted-foreground">
                          Through our logistics and operations network
                        </div>
                      </div>
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">5,000+</div>
                        <div className="text-sm font-medium">Volunteer Hours</div>
                        <div className="text-xs text-muted-foreground">
                          Community members engaged in food redistribution
                        </div>
                      </div>
                      <div className="space-y-2 text-center">
                        <div className="text-4xl font-bold text-green-600">₹15Cr+</div>
                        <div className="text-sm font-medium">Economic Value</div>
                        <div className="text-xs text-muted-foreground">
                          Total value of food and services redistributed
                        </div>
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
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
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
                <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
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
                <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
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
                <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Need custom reports for your organization or CSR initiatives? Our Pro and Enterprise plans include
              customized impact reporting tailored to your specific needs.
            </p>
            <Link href="/contact" passHref>
              <Button className="bg-green-600 hover:bg-green-700">
                Request Custom Report <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Reports */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                Premium Reports
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Advanced Impact Analytics for Partners
              </h2>
              <p className="text-muted-foreground">
                Our premium reporting services provide detailed insights for corporate partners, NGOs, and government
                agencies. Upgrade to access:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Custom Dashboards</span>
                    <p className="text-sm text-muted-foreground">
                      Tailored analytics dashboards specific to your organization's contributions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Branded Reports</span>
                    <p className="text-sm text-muted-foreground">
                      White-labeled impact reports for your stakeholders and CSR reporting
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <LineChart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Real-time Analytics</span>
                    <p className="text-sm text-muted-foreground">Live data on your contributions and their impact</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-green-100 p-1 mt-0.5">
                    <Download className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium">Data Export</span>
                    <p className="text-sm text-muted-foreground">
                      Export raw data for integration with your own systems
                    </p>
                  </div>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/pricing" passHref>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Upgrade for Premium Reports <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                width={600}
                height={500}
                alt="Premium analytics dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
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
